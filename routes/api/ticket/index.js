const express = require('express');

const router = express.Router();
const ticket_controller = require('../../../controllers/api/ticket');

// Define API routes
router.get('/', (req, res)=>{
    ticket_controller.getAll(req, res);
});

module.exports = router;

