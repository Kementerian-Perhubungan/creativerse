const { pool } = require('../config/database');

class Cart {
  static async createTable() {
    const query = `
      CREATE TABLE IF NOT EXISTS cart_items (
        id INT AUTO_INCREMENT PRIMARY KEY,
        user_id INT NOT NULL,
        product_id INT NOT NULL,
        quantity INT NOT NULL DEFAULT 1,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
        FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE,
        UNIQUE KEY unique_user_product (user_id, product_id)
      )
    `;
    await pool.execute(query);
  }

  static async addItem(userId, productId, quantity = 1) {
    const query = `
      INSERT INTO cart_items (user_id, product_id, quantity) 
      VALUES (?, ?, ?) 
      ON DUPLICATE KEY UPDATE quantity = quantity + ?
    `;
    
    await pool.execute(query, [userId, productId, quantity, quantity]);
  }

  static async getUserCart(userId) {
    const query = `
      SELECT 
        ci.id,
        ci.quantity,
        p.id as product_id,
        p.name,
        p.brand,
        p.price,
        p.image_url,
        (ci.quantity * p.price) as subtotal
      FROM cart_items ci
      JOIN products p ON ci.product_id = p.id
      WHERE ci.user_id = ?
    `;
    
    const [rows] = await pool.execute(query, [userId]);
    return rows;
  }

  static async updateQuantity(userId, productId, quantity) {
    if (quantity <= 0) {
      await this.removeItem(userId, productId);
      return;
    }
    
    const query = 'UPDATE cart_items SET quantity = ? WHERE user_id = ? AND product_id = ?';
    await pool.execute(query, [quantity, userId, productId]);
  }

  static async removeItem(userId, productId) {
    const query = 'DELETE FROM cart_items WHERE user_id = ? AND product_id = ?';
    await pool.execute(query, [userId, productId]);
  }

  static async clearCart(userId) {
    const query = 'DELETE FROM cart_items WHERE user_id = ?';
    await pool.execute(query, [userId]);
  }

  static async getCartTotal(userId) {
    const query = `
      SELECT SUM(ci.quantity * p.price) as total
      FROM cart_items ci
      JOIN products p ON ci.product_id = p.id
      WHERE ci.user_id = ?
    `;
    
    const [rows] = await pool.execute(query, [userId]);
    return rows[0]?.total || 0;
  }
}

module.exports = Cart;