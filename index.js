const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3001;

// Connect to MongoDB (replace 'your-database-uri' with your actual MongoDB URI)
mongoose.connect('your-database-uri', { useNewUrlParser: true, useUnifiedTopology: true });

// Define a simple Food model (food.model.js)
const Food = mongoose.model('Food', { name: String, location: String });

// Define an API endpoint to fetch all foods
app.get('/api/foods', async (req, res) => {
  try {
    const foods = await Food.find();
    res.json(foods);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
