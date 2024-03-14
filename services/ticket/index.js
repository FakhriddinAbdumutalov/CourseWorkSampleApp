// Import the 'fs' module for file system operations
const fs = require('fs');

// Access the global mock database file
const tickets = require(global.mock_db);

// Define the ticket service object with methods for CRUD operations
const ticketService = {
    // Method to retrieve all tickets
    getAll() {
        return tickets;
    },

    // Method to retrieve a ticket by its ID
    getById(id) {
        return tickets.find(t => t.id == id);
    },    

    // Method to create a new ticket
    create(req, res) {
        // Generate a new random ID
        let new_id = genRandId(4);
                
        const ticket = req.body;

        // Create a new ticket object
        const new_ticket = {
            id: new_id,
            ticket: ticket
        };

        // Add the new ticket to the database
        tickets.push(new_ticket);
        
        // Write the updated database content to the file
        writeToFile(tickets);
        
        return new_ticket;
    },

    // Method to update an existing ticket
    update(id, updateData){
        // Find the index of the ticket with the given ID
        const ticketIndex = tickets.findIndex(t => t.id == id);

        // If the ticket with the given ID doesn't exist, return null
        if (ticketIndex === -1) {
            return null;
        }

        // Update the ticket data with the new update data
        tickets[ticketIndex].ticket = { ...tickets[ticketIndex].ticket, ...updateData };

        // Write the updated database content to the file
        writeToFile(tickets);

        // Return the updated ticket
        return tickets[ticketIndex];
    },

    // Method to delete a ticket by its ID
    delete(id) {
        // Find the index of the ticket with the given ID
        const index = tickets.findIndex(u => u.id == id);

        // Remove the ticket from the database
        tickets.splice(index, 1);

        // Write the updated database content to the file
        writeToFile(tickets);
    }
};

// Function to write the updated database content to the file
let writeToFile = async (users) => {
    await fs.writeFileSync(
        global.mock_db,
        JSON.stringify(
            users, null, 4
        ),
        'utf8'
    );
};

// Function to generate a random ID
let genRandId = (count) => {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < count; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
};

// Export the ticket service object to be used in other parts of the application
module.exports = ticketService;
