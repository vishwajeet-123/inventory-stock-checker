// server/routes/chatbotRoutes.js
const express = require('express');
const router = express.Router();
const chatbotController = require('../controllers/chatbotController');

// @route   POST /api/chatbot/query
// @desc    Get a chatbot response
router.post('/query', chatbotController.getChatbotResponse);

module.exports = router;
