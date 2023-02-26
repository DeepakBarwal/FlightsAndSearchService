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