// Import specific service class for handling ticket-related operations
const ticketService = require('../../../services/ticket');

// Define ticket controller with methods for handling different actions related to tickets
const ticketController = {
    // Get all tickets
    getAll(req, res) {
        // Return all tickets as JSON response
        res.json(ticketService.getAll());
    },

    // Create a new ticket
    create(req, res) {
        // Create a new ticket using data from the request body
        // Return the newly created ticket as JSON response with status code 201 (Created)
        res.status(201).json(ticketService.create(req, res));
    },

    // Update an existing ticket
    update(req, res) {
        // Update the ticket with the specified ID using data from the request body
        const ticket = ticketService.update(req.params.id, req.body);
        
        // If the ticket was found and updated successfully, return the updated ticket as JSON response
        // Otherwise, return 404 (Not Found) status code with an error message
        if (ticket) {
            res.json(ticket);
        } else {
            res.status(404).send('Ticket not found');
        }
    },

    // Delete an existing ticket
    delete(req, res) {
        // Retrieve the ticket with the specified ID
        const ticket = ticketService.getById(req.params.id);
        
        // If the ticket exists, delete it from the database and return 204 (No Content) status code
        // Otherwise, return 404 (Not Found) status code with an error message
        if (ticket) {
            ticketService.delete(req.params.id);
            res.status(204).send('Ticket deleted successfully');
        } else {
            res.status(404).send('Ticket not found');
        }
    }
};

// Export the ticket controller to be used in other parts of the application
module.exports = ticketController;
