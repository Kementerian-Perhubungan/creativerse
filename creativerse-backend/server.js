const express = require('express');
const cors = require('cors');
require('dotenv').config();

const { testConnection } = require('./config/database');
const User = require('./models/Users');
const Product = require('./models/Product');
const Cart = require('./models/Cart');
const Order = require('./models/Order');

// Import routes
const authRoutes = require('./routes/auth');
const productRoutes = require('./routes/products');
const cartRoutes = require('./routes/cart');
const paymentRoutes = require('./routes/payments');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/payments', paymentRoutes);

// Health check route
app.get('/api/health', (req, res) => {
  res.json({ 
    message: 'CreatiVerse API is running', 
    timestamp: new Date().toISOString() 
  });
});

// Initialize database and start server
const initializeApp = async () => {
  try {
    await testConnection();
    
    // Create tables
    await User.createTable();
    await Product.createTable();
    await Cart.createTable();
    await Order.createTable();
    
    console.log('Database tables created successfully');
    
    // Start server
    app.listen(PORT, () => {
      console.log(`CreatiVerse server running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Failed to initialize application:', error);
    process.exit(1);
  }
};

initializeApp();