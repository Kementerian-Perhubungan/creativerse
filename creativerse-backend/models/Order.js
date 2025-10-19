const { pool } = require('../config/database');

class Order {
  static async createTable() {
    const query = `
      CREATE TABLE IF NOT EXISTS orders (
        id INT AUTO_INCREMENT PRIMARY KEY,
        user_id INT NOT NULL,
        order_number VARCHAR(50) UNIQUE NOT NULL,
        total_amount DECIMAL(10, 2) NOT NULL,
        status ENUM('pending', 'processing', 'shipped', 'delivered', 'cancelled') DEFAULT 'pending',
        shipping_address TEXT NOT NULL,
        payment_method VARCHAR(50) NOT NULL,
        payment_status ENUM('pending', 'paid', 'failed') DEFAULT 'pending',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
      )
    `;
    
    const orderItemsQuery = `
      CREATE TABLE IF NOT EXISTS order_items (
        id INT AUTO_INCREMENT PRIMARY KEY,
        order_id INT NOT NULL,
        product_id INT NOT NULL,
        quantity INT NOT NULL,
        price DECIMAL(10, 2) NOT NULL,
        subtotal DECIMAL(10, 2) NOT NULL,
        FOREIGN KEY (order_id) REFERENCES orders(id) ON DELETE CASCADE,
        FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE
      )
    `;
    
    await pool.execute(query);
    await pool.execute(orderItemsQuery);
  }

  static async create(orderData) {
    const { userId, orderNumber, totalAmount, shippingAddress, paymentMethod } = orderData;
    
    const query = `
      INSERT INTO orders (user_id, order_number, total_amount, shipping_address, payment_method)
      VALUES (?, ?, ?, ?, ?)
    `;
    
    const [result] = await pool.execute(query, [
      userId, orderNumber, totalAmount, shippingAddress, paymentMethod
    ]);
    
    return result.insertId;
  }

  static async addOrderItem(orderId, productId, quantity, price) {
    const subtotal = quantity * price;
    
    const query = `
      INSERT INTO order_items (order_id, product_id, quantity, price, subtotal)
      VALUES (?, ?, ?, ?, ?)
    `;
    
    await pool.execute(query, [orderId, productId, quantity, price, subtotal]);
  }

  static async findByUserId(userId) {
    const query = `
      SELECT o.*, 
             COUNT(oi.id) as item_count
      FROM orders o
      LEFT JOIN order_items oi ON o.id = oi.order_id
      WHERE o.user_id = ?
      GROUP BY o.id
      ORDER BY o.created_at DESC
    `;
    
    const [rows] = await pool.execute(query, [userId]);
    return rows;
  }

  static async findById(orderId) {
    const query = 'SELECT * FROM orders WHERE id = ?';
    const [rows] = await pool.execute(query, [orderId]);
    return rows[0];
  }

  static async getOrderItems(orderId) {
    const query = `
      SELECT oi.*, p.name, p.brand, p.image_url
      FROM order_items oi
      JOIN products p ON oi.product_id = p.id
      WHERE oi.order_id = ?
    `;
    
    const [rows] = await pool.execute(query, [orderId]);
    return rows;
  }

  static async updatePaymentStatus(orderId, status) {
    const query = 'UPDATE orders SET payment_status = ? WHERE id = ?';
    await pool.execute(query, [status, orderId]);
  }

  static async updateStatus(orderId, status) {
    const query = 'UPDATE orders SET status = ? WHERE id = ?';
    await pool.execute(query, [status, orderId]);
  }
}

module.exports = Order;