const express = require('express');
const router = express.Router();
const Item = require('../models/Item'); // Assuming you have an Item model

// Get all items
router.get('/items', async (req, res) => {
  try {
    const items = await Item.find(); // Fetch all items from MongoDB
    res.json(items); // Send them as a response
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});

// Create a new item
router.post('/items', async (req, res) => {
  try {
    const newItem = new Item(req.body); // Create a new item from the request body
    await newItem.save(); // Save it to the database
    res.json(newItem); // Return the newly created item
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
