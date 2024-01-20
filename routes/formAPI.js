const express = require('express');
const router = express.Router();

router.get('/api-form', (req, res) => {
  res.render('api-form');
});

module.exports = router;
