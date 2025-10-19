const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');
const { authenticateToken } = require('../middleware/auth');

router.get('/', authenticateToken, cartController.getCart);
router.post('/add', authenticateToken, cartController.addToCart);
router.put('/update/:productId', authenticateToken, cartController.updateCartItem);
router.delete('/remove/:productId', authenticateToken, cartController.removeFromCart);
router.delete('/clear', authenticateToken, cartController.clearCart);

module.exports = router;