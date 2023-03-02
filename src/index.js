const express = require("express");

const { PORT } = require("./config/serverConfig");
const apiRoutes = require("./routes/index");

const db = require("./models/index");
// const { City, Airport, Airplane } = require("./models/index");

const setupAndStartServer = async () => {

    // create the express object
    const app = express();

    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    app.use('/api', apiRoutes);

    app.listen(PORT, async () => {
        console.log(`Server started at port ${PORT}`);

        if (process.env.SYNC_DB) {
            db.sequelize.sync({ alter: true });
        }

    });

}

setupAndStartServer();