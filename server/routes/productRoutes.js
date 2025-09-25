// server/routes/productRoutes.js
const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// @route   GET /api/products
// @desc    Get all products
router.get('/', productController.getProducts);

// @route   POST /api/products
// @desc    Add a new product
router.post('/', productController.addProduct);

// @route   PUT /api/products/:id
// @desc    Update a product by ID
router.put('/:id', productController.updateProduct);

// @route   DELETE /api/products/:id
// @desc    Delete a product by ID
router.delete('/:id', productController.deleteProduct);

module.exports = router;
