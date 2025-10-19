const { body } = require('express-validator');

const registerValidation = [
  body('username')
    .isLength({ min: 3 }).withMessage('Username must be at least 3 characters')
    .isAlphanumeric().withMessage('Username must be alphanumeric'),
  body('email')
    .isEmail().withMessage('Must be a valid email'),
  body('password')
    .isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
  body('confirmPassword')
    .custom((value, { req }) => value === req.body.password)
    .withMessage('Passwords do not match')
];

const loginValidation = [
  body('email')
    .isEmail().withMessage('Must be a valid email'),
  body('password')
    .notEmpty().withMessage('Password is required')
];

const productValidation = [
  body('name')
    .notEmpty().withMessage('Product name is required'),
  body('brand')
    .notEmpty().withMessage('Brand is required'),
  body('price')
    .isFloat({ min: 0 }).withMessage('Price must be a positive number'),
  body('stock')
    .isInt({ min: 0 }).withMessage('Stock must be a non-negative integer')
];

module.exports = {
  registerValidation,
  loginValidation,
  productValidation
};