const { Flight } = require("../models/index");

class FlightRepository {

    async createFlight(data) {
        try {
            const flight = await Flight.create(data);
            return flight;
        } catch (error) {
            console.log("Something went wrong int the flight repository layer");
            throw {error};
        }
    }

}

module.exports = FlightRepository