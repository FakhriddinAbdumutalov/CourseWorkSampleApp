// Import required modules
const express = require('express'); // Express.js framework
const { validationResult } = require('express-validator'); // Express-validator for input validation
const { addTicketValidation, updateTicketValidation, deleteTicketValidation } = require('../../../validators/ticket'); // Custom validation middleware
const ticketController = require('../../../controllers/api/ticket'); // Ticket controller module

// Create a new router instance
const router = express.Router();

// Define API routes for handling CRUD operations on tickets
// GET route to retrieve all tickets
router.get('/', (req, res) => {
    ticketController.getAll(req, res); // Call getAll method from ticket controller
});

// POST route to create a new ticket
router.post('/', addTicketValidation(), (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    ticketController.create(req, res); // Call create method from ticket controller
});

// PUT route to update an existing ticket
router.put('/:id', updateTicketValidation(), (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    ticketController.update(req, res); // Call update method from ticket controller
});

// DELETE route to delete an existing ticket
router.delete('/:id', deleteTicketValidation(), (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    ticketController.delete(req, res); // Call delete method from ticket controller
});

// Export the router to be used in other parts of the application
module.exports = router;
