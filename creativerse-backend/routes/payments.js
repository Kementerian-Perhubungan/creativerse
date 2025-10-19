const express = require('express');
const router = express.Router();
const paymentController = require('../controllers/paymentController');
const { authenticateToken } = require('../middleware/auth');

router.post('/create-order', authenticateToken, paymentController.createOrder);
router.post('/process-payment', authenticateToken, paymentController.processPayment);
router.get('/orders', authenticateToken, paymentController.getOrderHistory);
router.get('/orders/:orderId', authenticateToken, paymentController.getOrderDetails);

module.exports = router;