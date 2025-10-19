const Cart = require('../models/Cart');
const Product = require('../models/Product');

exports.getCart = async (req, res) => {
  try {
    const cartItems = await Cart.getUserCart(req.userId);
    const total = await Cart.getCartTotal(req.userId);

    res.json({
      cartItems,
      total: parseFloat(total)
    });
  } catch (error) {
    console.error('Get cart error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.addToCart = async (req, res) => {
  try {
    const { productId, quantity = 1 } = req.body;

    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    if (product.stock < quantity) {
      return res.status(400).json({ message: 'Insufficient stock' });
    }

    await Cart.addItem(req.userId, productId, quantity);
    
    const cartItems = await Cart.getUserCart(req.userId);
    const total = await Cart.getCartTotal(req.userId);

    res.json({
      message: 'Item added to cart',
      cartItems,
      total: parseFloat(total)
    });
  } catch (error) {
    console.error('Add to cart error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.updateCartItem = async (req, res) => {
  try {
    const { productId } = req.params;
    const { quantity } = req.body;

    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    if (product.stock < quantity) {
      return res.status(400).json({ message: 'Insufficient stock' });
    }

    await Cart.updateQuantity(req.userId, productId, quantity);
    
    const cartItems = await Cart.getUserCart(req.userId);
    const total = await Cart.getCartTotal(req.userId);

    res.json({
      message: 'Cart updated',
      cartItems,
      total: parseFloat(total)
    });
  } catch (error) {
    console.error('Update cart error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.removeFromCart = async (req, res) => {
  try {
    const { productId } = req.params;

    await Cart.removeItem(req.userId, productId);
    
    const cartItems = await Cart.getUserCart(req.userId);
    const total = await Cart.getCartTotal(req.userId);

    res.json({
      message: 'Item removed from cart',
      cartItems,
      total: parseFloat(total)
    });
  } catch (error) {
    console.error('Remove from cart error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.clearCart = async (req, res) => {
  try {
    await Cart.clearCart(req.userId);
    res.json({ message: 'Cart cleared successfully' });
  } catch (error) {
    console.error('Clear cart error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};