// hairstyles.js
const express = require('express');
const router = express.Router();
const { filterHairstyles } = require('../data/hairData');

//GET route for hairstyles
router.get('/hairstyles', (req, res) => {
  const filteredHairstyles = filterHairstyles(req.query);
  res.json(filteredHairstyles);
});

// POST route for hairstyles
router.post('/hairstyles', (req, res) => {
    const newHairstyle = req.body;
    hairstyles.push(newHairstyle);
    res.json(newHairstyle);
});

// PATCH route for hairstyles
router.patch('/hairstyles/:id', (req, res) => {
    const id = req.params.id;
    Object.assign(hairstyles[id - 1], req.body);
    res.json(hairstyles[id - 1]);
});

// DELETE route for hairstyles
router.delete('/hairstyles/:id', (req, res) => {
    const id = req.params.id;
    const deletedHairstyle = hairstyles.splice(id - 1, 1);
    res.json(deletedHairstyle[0]);
});

module.exports = router;