// /routes/views.js
const express = require('express');
const router = express.Router();
const { hairstyles, hairColors, hairCuts } = require('../data/hairData');

// Route to render the view for hairstyles
router.get('/hairstyle-view', (req, res) => {
  res.render('hairstyle-view', { data: hairstyles, category: 'Hairstyles' });
});

// Route to render the view for haircolor-view
router.get('/haircolor-view', (req, res) => {
    res.render('haircolor-view', { data: hairColors, category: 'Hair Colors' });
  });

// Route to render the view for haircut-view
router.get('/haircut-view', (req, res) => {
    res.render('haircut-view', { data: hairCuts, category: 'Hair Cuts' });
  });

module.exports = router;



