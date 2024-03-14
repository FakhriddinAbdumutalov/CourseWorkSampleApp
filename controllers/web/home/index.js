// Import the ticket service module for handling ticket-related operations
const ticketService = require('../../../services/ticket');

// Define the home controller object with methods for rendering views
const homeController = {
    // Render the index view
    index: async (req, res) => {
        res.render('home'); // Render the 'home' view
    },

    // Render the add view
    add: async (req, res) => {
        res.render('home/add_update', { mode: 'Add' }); // Render the 'home/add_update' view with mode 'Add'
    },

    // Render the update view with data for a specific event
    update: async (req, res) => {
        // Retrieve event data by ID from the ticket service
        const eventData = await ticketService.getById(req.params.id);
        // Render the 'home/add_update' view with mode 'Update' and event data
        res.render('home/add_update', { mode: 'Update', eventData: eventData });
    }
};

// Export the home controller object to be used in other parts of the application
module.exports = homeController;
