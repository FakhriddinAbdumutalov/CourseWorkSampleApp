const fs = require('fs') 
// Access global mock db file
const tickets = require(global.mock_db);

// Write service method implementations
const ticket_service = {
    getAll() {
        return tickets;
    }
};

module.exports = ticket_service;