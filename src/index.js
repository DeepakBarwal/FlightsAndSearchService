const express = require("express");

const { PORT } = require("./config/serverConfig");
const apiRoutes = require("./routes/index");

const db = require("./models/index");
const { City, Airport } = require("./models/index");

const setupAndStartServer = async () => {

    // create the express object
    const app = express();

    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    app.use('/api', apiRoutes);

    app.listen(PORT, async () => {
        console.log(`Server started at port ${PORT}`);

        // const airports = await Airport.findAll({
        //     include: [
        //         {
        //             model: City
        //         }
        //     ]
        // });
        // console.log(airports);

        // const airports = await City.findAll({
        //     where: {
        //         id: 15
        //     },
        //     include: [
        //         {
        //             model: Airport
        //         }
        //     ]
        // });
        // console.log(airports);

        if (process.env.SYNC_DB) {
            db.sequelize.sync({ alter: true });
        }
        // const city = await City.findOne({
        //     where: {
        //         id: 15
        //     }
        // });
        // const airports = await city.getAirports();
        // await city.addAirport({
        //     name: 'Jindal Vijaynagar Airport',
        //     cityId: 12
        // });
        // console.log(airports);
    });

}

setupAndStartServer();