const express = require("express");

const { FlightMiddlewares } = require("../../middlewares/index");

const cityController = require("../../controllers/city-controller");
const flightController = require("../../controllers/flight-controller");
const airportController = require("../../controllers/airport-controller");

const router = express.Router();

router.post('/city', cityController.create);
router.delete('/city/:id', cityController.destroy);
router.get('/city/:id', cityController.get);
router.get('/city', cityController.getAll);
router.patch('/city/:id', cityController.update);

router.post(
    '/flight', 
    FlightMiddlewares.validateCreateFlight, 
    flightController.create
);
router.get('/flight', flightController.getAll);
router.get('/flight/:id', flightController.get);

router.post('/airport', airportController.create);

module.exports = router;