// server/controllers/chatbotController.js
const Product = require('../models/Product');

exports.getChatbotResponse = async (req, res) => {
  const { query } = req.body;

  try {
    const lowerCaseQuery = query.toLowerCase();

    // Simple rule-based logic
    if (lowerCaseQuery.includes('reorder') || lowerCaseQuery.includes('suggest')) {
      const productNameMatch = lowerCaseQuery.match(/"([^"]*)"/); // Matches text inside quotes
      const productName = productNameMatch ? productNameMatch[1] : null;

      if (productName) {
        const product = await Product.findOne({ name: { $regex: new RegExp(productName, 'i') } });

        if (product) {
          if (product.stockLevel <= product.reorderPoint) {
            const reorderQuantity = product.reorderPoint + 10;
            const response = `✅ **Reorder Suggestion:** "${product.name}" is currently at ${product.stockLevel} units. It is below the reorder point of ${product.reorderPoint}. I recommend reordering ${reorderQuantity} units to get back in stock.`;
            return res.json({ response });
          } else {
            const response = `👍 **Good to go!** "${product.name}" is currently at a healthy stock level of ${product.stockLevel} units. No reorder is needed at this time.`;
            return res.json({ response });
          }
        } else {
          return res.json({ response: `🤔 I couldn't find a product named "${productName}". Please try a different name.` });
        }
      } else {
        return res.json({ response: 'Please specify the product you want to reorder, like: "reorder for \\"Product Name\\""' });
      }
    }

    return res.json({ response: 'I am a reorder bot. I can help you with reorder suggestions. Try asking "reorder for \'Product Name\'"' });

  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};