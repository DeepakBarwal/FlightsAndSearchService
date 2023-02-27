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

  