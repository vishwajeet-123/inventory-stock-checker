// server/routes/alertRoutes.js
const express = require('express');
const router = express.Router();
const alertController = require('../controllers/alertController');

// @route   GET /api/alerts/low-stock
// @desc    Get all products that are below reorder point
router.get('/low-stock', alertController.getLowStockAlerts);

module.exports = router;