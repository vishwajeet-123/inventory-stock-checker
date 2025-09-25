// server/models/Product.js
const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  sku: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  stockLevel: {
    type: Number,
    required: true,
    default: 0,
    min: 0,
  },
  reorderPoint: {
    type: Number,
    required: true,
    default: 10,
    min: 0,
  },
  dateAdded: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Product', ProductSchema);