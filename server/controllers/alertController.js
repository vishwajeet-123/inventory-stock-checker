// server/controllers/alertController.js
const Product = require('../models/Product');

// Get all products with low stock
exports.getLowStockAlerts = async (req, res) => {
  try {
    const lowStockProducts = await Product.find({
      $expr: { $lte: ['$stockLevel', '$reorderPoint'] }
    }).sort({ stockLevel: 1 });
    res.json(lowStockProducts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};
