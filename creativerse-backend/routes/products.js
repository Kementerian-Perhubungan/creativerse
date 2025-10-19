const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const { authenticateToken } = require('../middleware/auth');
const { productValidation } = require('../middleware/validation');

router.get('/', productController.getAllProducts);
router.get('/:id', productController.getProductById);
router.post('/', authenticateToken, productValidation, productController.createProduct);

module.exports = router;