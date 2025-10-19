const { pool } = require('../config/database');
const bcrypt = require('bcryptjs');

class User {
  static async createTable() {
    const query = `
      CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        username VARCHAR(50) UNIQUE NOT NULL,
        email VARCHAR(100) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        full_name VARCHAR(100),
        address TEXT,
        city VARCHAR(50),
        country VARCHAR(50),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
      )
    `;
    await pool.execute(query);
  }

  static async create(userData) {
    const { username, email, password, full_name, address, city, country } = userData;
    const hashedPassword = await bcrypt.hash(password, 10);
    
    const query = `
      INSERT INTO users (username, email, password, full_name, address, city, country)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `;
    
    const [result] = await pool.execute(query, [
      username, email, hashedPassword, full_name, address, city, country
    ]);
    
    return result.insertId;
  }

  static async findByEmail(email) {
    const query = 'SELECT * FROM users WHERE email = ?';
    const [rows] = await pool.execute(query, [email]);
    return rows[0];
  }

  static async findById(id) {
    const query = 'SELECT id, username, email, full_name, address, city, country FROM users WHERE id = ?';
    const [rows] = await pool.execute(query, [id]);
    return rows[0];
  }

  static async validatePassword(plainPassword, hashedPassword) {
    return await bcrypt.compare(plainPassword, hashedPassword);
  }
}

module.exports = User;