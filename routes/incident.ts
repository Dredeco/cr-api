const router = require('express').Router()
const incidentController = require('../controllers/incidentsController')

router
    .route("/user")
    .post((req, res) => incidentController.create(req, res))

router
    .route("/user")
    .get((req, res) => incidentController.getAll(req, res))

router
    .route("/user/:id")
    .get((req, res) => incidentController.get(req, res))

router
    .route("/user/:id")
    .delete((req, res) => incidentController.delete(req, res))

router
    .route("/user/:id")
    .put((req, res) => incidentController.update(req, res))

module.exports = router;