<!--
/
    - src/
        index.js // server
        models/
        controllers/
        middlewares/
        services/
        utils/
        config/
        repository/
    - tests/ [later]
    - static/
    - temp/
-->

# Welcome to 'Flights and Search' Service

## Project Setup
- Clone the Project on your local
- Execute `npm install` on the same path as your root directory of the downloaded project
- Create a `.env` file in the root of project directory and add the following environment variables
    - `PORT=3000`
- Inside the `src/config` folder, create a new file `config.json` and then add the following piece of json

```
{
  "development": {
    "username": <YOUR_DB_USERNAME>,
    "password": <YOUR_DB_PASSWORD>,
    "database": "Flights_Search_DB_DEV",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
```
- Once you've added your DB config as listed above, go to the src folder from your terminal and execute `npx sequelize db:create`
and then execute 
`npx sequelize db:migrate`

## DB Design
  - Airplane Table
  - Flight Table
  - City Table
  - Airport Table
  
  - A flight belongs to an airplane but one airplane can be used in multiple flights.
  - A city has many airports but one airport belongs to one city.
  - One airport can have many flights but one flight belongs to one airport.


## Tables

### Cities -> id, name, createdAt, updatedAt
### Airports -> id, name, address, city_id, createdAt, updatedAt
  Relationship -> City has many airports and Airport belongs to a city (one to many)
### Airplanes -> id, modelNumber, capacity, createdAt, updatedAt

```
  npx sequelize model:generate --name City --attributes name:String

  npx sequelize model:generate --name Airport --attributes name:String,address:String,cityId:integer

  npx sequelize seed:generate --name add-airports

  npx sequelize db:seed:all

  npx sequelize model:generate --name Airplane --attributes modelNumber:String,capacity:integer

  npx sequelize db:migrate

  npx sequelize seed:generate --name add-airplanes

  npx sequelize model:generate --name Flights --attributes flightNumber:String,airplaneId:integer,departureAirportId:integer,arrivalAirportId:integer,arrivalTime:Date,departureTime:Date,price:integer,boardingGate:String,totalSeats:integer
```

