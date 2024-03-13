// import specific service class
const ticket_service = require('../../../services/ticket')

// mention the service's needed actions (methods)
const ticket_controller = {
    getAll(req, res) {
        res.json(ticket_service.getAll())
    },
    create(req, res) {
        res.status(201).json(
            ticket_service.create(req, res)
        )
    }
}

module.exports = ticket_controller

