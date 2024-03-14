// Import necessary modules
const { body, param } = require('express-validator');
const ticketService = require('../../services/ticket'); // Import ticket service module

// Validation middleware for adding a ticket
const addTicketValidation = () => {
  return [
    // Validate event name field
    body('eventName')
      .notEmpty().withMessage('Event name must not be empty')
      .isLength({ min: 8, max: 255 }).withMessage('Event name must be between 8 and 255 characters long'),

    // Validate event date time field
    body('eventDateTime')
      .notEmpty().withMessage('Event date time must not be empty')
      .matches(/^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[012])\/(19|20)\d\d\s([01][0-9]|2[0-3]):([0-5][0-9])$/, 'g')
      .withMessage('Invalid date and time format. Please use "DD/MM/YYYY HH:mm" format.'),

    // Validate event venue field
    body('venue')
      .notEmpty().withMessage('Event venue must not be empty'),

    // Validate contact phone field
    body('contactPhone')
      .notEmpty().withMessage('Contact phone must not be empty')
      .matches(/^\+998\d{9}$/).withMessage('Invalid phone number format, it must be +998xxxxxxxxx'),

    // Validate seat field
    body('seat')
      .notEmpty().withMessage('Seat must not be empty'),      
  ];
};

// Validation middleware for deleting a ticket
const deleteTicketValidation = () => {
  return [
    // Validate ticket ID parameter
    param('id').custom(async (id) => {
      const exists = await ticketService.getById(id);
      if (!exists) {
        throw new Error('Ticket not found');
      }
    })
  ];
};

// Validation middleware for updating a ticket
const updateTicketValidation = () => {
  return [
    // Validate ticket ID parameter
    param('id').custom(async (id) => {
      const exists = await ticketService.getById(id);
      if (!exists) {
        throw new Error('Ticket not found');
      }
    }),

    // Validate event name field
    body('eventName')
      .notEmpty().withMessage('Event name must not be empty')
      .isLength({ min: 8, max: 255 }).withMessage('Event name must be between 8 and 255 characters long'),

    // Validate event date time field
    body('eventDateTime')
      .notEmpty().withMessage('Event date time must not be empty')
      .matches(/^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[012])\/(19|20)\d\d\s([01][0-9]|2[0-3]):([0-5][0-9])$/, 'g')
      .withMessage('Invalid date and time format. Please use "DD/MM/YYYY HH:mm" format.'),

    // Validate event venue field
    body('venue')
      .notEmpty().withMessage('Event venue must not be empty'),

    // Validate contact phone field
    body('contactPhone')
      .notEmpty().withMessage('Contact phone must not be empty')
      .matches(/^\+998\d{9}$/).withMessage('Invalid phone number format, it must be +998xxxxxxxxx'),

    // Validate seat field
    body('seat')
      .notEmpty().withMessage('Seat must not be empty'),      
  ];
};

// Export validation middleware functions
module.exports = {
    addTicketValidation,
    updateTicketValidation,
    deleteTicketValidation
};
