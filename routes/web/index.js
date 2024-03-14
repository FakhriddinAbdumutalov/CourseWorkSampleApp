// Importing required modules
const express = require('express'); // Import Express.js framework
const homeRouter = require('./home'); // Import the home router module

// Creating a new router instance
const router = express.Router();

// Registering child routers
router.use('/', homeRouter); // Mount the home router at the root URL

// Exporting the router to be used in other parts of the application
module.exports = router;