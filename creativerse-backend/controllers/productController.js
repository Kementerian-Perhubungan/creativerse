const Product = require('../models/Product');

exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.findAll();
    res.json({ products });
  } catch (error) {
    console.error('Get products error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.json({ product });
  } catch (error) {
    console.error('Get product error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.createProduct = async (req, res) => {
  try {
    const productId = await Product.create(req.body);
    const product = await Product.findById(productId);

    res.status(201).json({
      message: 'Product created successfully',
      product
    });
  } catch (error) {
    console.error('Create product error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};