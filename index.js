const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;

// Import data and filter function
const { filterHairstyles, hairColors, hairCuts } = require('./helpers/dataHelpers');

const hairstyleRoutes = require('./routes/hairstyles');
const viewRoutes = require('./routes/views');
const formApiRoutes = require('./routes/formAPI');

app.use(bodyParser.json());

// Serve static files
app.use(express.static('public'));

// Template engine setup 
app.set('view engine', 'ejs');

// Middleware 1: Request Logger
app.use((req, res, next) => {
    console.log(`[${new Date().toLocaleString()}] ${req.method} ${req.url}`);
    next();
});

// Middleware 2: Header Setter
app.use((req, res, next) => {
    res.setHeader('X-Custom-Middleware', 'Middleware Applied');
    next();
});

// Use middleware to parse JSON
app.use(bodyParser.json());

// Use routes
app.use(hairstyleRoutes);
app.use(viewRoutes);
app.use(formApiRoutes);

// Error-handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

app.listen(PORT, () => {
    console.log(`Hello Welcome to Hair Express-${PORT}!`);
});