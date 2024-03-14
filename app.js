// Import the Express module
const express = require('express');

// Import the body-parser module for parsing request bodies
const bodyParser = require('body-parser');

// Import the path module for working with file paths
const path = require('path');

// Set the path to the mock database file globally
global.mock_db = path.join(__dirname, './data/mock_db.json');

// Import the web routes and API routes
const webRoutes = require('./routes/web/home');
const apiRoutes = require('./routes/api');

// Create an Express application instance
const app = express();

// Set the view engine for rendering web pages
app.set('view engine', 'pug');

// Serve static files from the 'public' directory for CSS and JS
app.use('/css', express.static('public/css'));
app.use('/js', express.static('public/js'));

// Parse JSON bodies and URL-encoded bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Mount API routes under the '/api' prefix
app.use('/api', apiRoutes);

// Mount web routes under the root URL
app.use('/', webRoutes);

// Redirect to the home page if unknown requests are requested
app.use((req, res) => {
    res.redirect('/');
});

// Start the server and listen on port 3000
const port = 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));
