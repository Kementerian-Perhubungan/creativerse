const Order = require('../models/Order');
const Cart = require('../models/Cart');
const Product = require('../models/Product');

const generateOrderNumber = () => {
  return 'ORD' + Date.now() + Math.random().toString(36).substr(2, 5).toUpperCase();
};

exports.createOrder = async (req, res) => {
  try {
    const { shippingAddress, paymentMethod } = req.body;
    const userId = req.userId;

    // Get cart items
    const cartItems = await Cart.getUserCart(userId);
    if (cartItems.length === 0) {
      return res.status(400).json({ message: 'Cart is empty' });
    }

    // Calculate total
    const total = cartItems.reduce((sum, item) => sum + item.subtotal, 0);

    // Create order
    const orderId = await Order.create({
      userId,
      orderNumber: generateOrderNumber(),
      totalAmount: total,
      shippingAddress,
      paymentMethod
    });

    // Add order items and update product stock
    for (const item of cartItems) {
      await Order.addOrderItem(orderId, item.product_id, item.quantity, item.price);
      
      // Update product stock
      const product = await Product.findById(item.product_id);
      const newStock = product.stock - item.quantity;
      await Product.updateStock(item.product_id, newStock);
    }

    // Clear cart
    await Cart.clearCart(userId);

    const order = await Order.findById(orderId);
    const orderItems = await Order.getOrderItems(orderId);

    res.status(201).json({
      message: 'Order created successfully',
      order: {
        ...order,
        items: orderItems
      }
    });
  } catch (error) {
    console.error('Create order error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.processPayment = async (req, res) => {
  try {
    const { orderId } = req.body;

    const order = await Order.findById(orderId);
    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }

    if (order.user_id !== req.userId) {
      return res.status(403).json({ message: 'Access denied' });
    }

    // Simulate payment processing
    // In real application, integrate with payment gateway like Midtrans, Xendit, etc.
    const paymentSuccess = Math.random() > 0.1; // 90% success rate for simulation

    if (paymentSuccess) {
      await Order.updatePaymentStatus(orderId, 'paid');
      await Order.updateStatus(orderId, 'processing');
      
      res.json({
        message: 'Payment successful',
        paymentStatus: 'paid',
        orderStatus: 'processing'
      });
    } else {
      await Order.updatePaymentStatus(orderId, 'failed');
      
      res.status(400).json({
        message: 'Payment failed',
        paymentStatus: 'failed'
      });
    }
  } catch (error) {
    console.error('Payment processing error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.getOrderHistory = async (req, res) => {
  try {
    const orders = await Order.findByUserId(req.userId);
    
    // Get order items for each order
    const ordersWithItems = await Promise.all(
      orders.map(async (order) => {
        const items = await Order.getOrderItems(order.id);
        return { ...order, items };
      })
    );

    res.json({ orders: ordersWithItems });
  } catch (error) {
    console.error('Get order history error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.getOrderDetails = async (req, res) => {
  try {
    const { orderId } = req.params;

    const order = await Order.findById(orderId);
    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }

    if (order.user_id !== req.userId) {
      return res.status(403).json({ message: 'Access denied' });
    }

    const items = await Order.getOrderItems(orderId);

    res.json({
      order: {
        ...order,
        items
      }
    });
  } catch (error) {
    console.error('Get order details error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};