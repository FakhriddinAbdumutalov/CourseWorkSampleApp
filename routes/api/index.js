// Import the Express module
const express = require('express');

// Import the ticket router module
const ticketRouter = require('./ticket');

// Create a new router instance
const router = express.Router();

// Registering child routers
router.use('/ticket', ticketRouter); // Mount the ticket router at the '/ticket' endpoint

// Export the router to be used in other parts of the application
module.exports = router;
