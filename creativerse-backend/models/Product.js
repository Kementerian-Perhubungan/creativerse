const { pool } = require('../config/database');

class Product {
  static async createTable() {
    const query = `
      CREATE TABLE IF NOT EXISTS products (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        brand VARCHAR(100) NOT NULL,
        price DECIMAL(10, 2) NOT NULL,
        stock INT DEFAULT 0,
        description TEXT,
        image_url VARCHAR(500),
        category VARCHAR(100),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
      )
    `;
    await pool.execute(query);
  }

  static async create(productData) {
    const { name, brand, price, stock, description, image_url, category } = productData;
    
    const query = `
      INSERT INTO products (name, brand, price, stock, description, image_url, category)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `;
    
    const [result] = await pool.execute(query, [
      name, brand, price, stock, description, image_url, category
    ]);
    
    return result.insertId;
  }

  static async findAll() {
    const query = 'SELECT * FROM products WHERE stock > 0';
    const [rows] = await pool.execute(query);
    return rows;
  }

  static async findById(id) {
    const query = 'SELECT * FROM products WHERE id = ?';
    const [rows] = await pool.execute(query, [id]);
    return rows[0];
  }

  static async updateStock(id, newStock) {
    const query = 'UPDATE products SET stock = ? WHERE id = ?';
    await pool.execute(query, [newStock, id]);
  }
}

module.exports = Product;