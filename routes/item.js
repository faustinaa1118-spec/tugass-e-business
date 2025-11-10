const express = require('express');
const router = express.Router();
const Item = require('../models/item'); // pastikan huruf besar/kecil sesuai nama file model

// ========================
// GET all items
// ========================
router.get('/', async (req, res, next) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to fetch items' });
  }
});

// ========================
// GET single item by ID
// ========================
router.get('/:id', async (req, res, next) => {
  try {
    const item = await Item.findById(req.params.id);
    if (!item) return res.status(404).json({ message: 'Item not found' });
    res.json(item);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error fetching item' });
  }
});

// ========================
// CREATE new item (POST)
// ========================
router.post('/', async (req, res, next) => {
  try {
    const newItem = new Item(req.body);
    const savedItem = await newItem.save();
    res.status(201).json(savedItem);
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: 'Failed to create item', error: err.message });
  }
});

// ========================
// UPDATE item (PUT)
// ========================
router.put('/:id', async (req, res, next) => {
  try {
    const updatedItem = await Item.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedItem) return res.status(404).json({ message: 'Item not found' });
    res.json(updatedItem);
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: 'Failed to update item', error: err.message });
  }
});

// ========================
// DELETE item
// ========================
router.delete('/:id', async (req, res, next) => {
  try {
    const deletedItem = await Item.findByIdAndDelete(req.params.id);
    if (!deletedItem) return res.status(404).json({ message: 'Item not found' });
    res.json({ message: 'Deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to delete item' });
  }
});

module.exports = router;
