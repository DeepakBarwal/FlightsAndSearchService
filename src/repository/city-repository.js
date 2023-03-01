const { City } = require("../models/index");

class CityRepository {
    async createCity({ name }) {
        try {
            const city = await City.create({ name });
            return city;
        } catch (error) {
            console.log(`Something went wrong in the city repository layer`);
            throw {error};
        }
    }

    async deleteCity(cityId) {
        try {
            await City.destroy({
                where: {
                    id: cityId
                }
            });
            return true;
        } catch (error) {
            console.log(`Something went wrong in the city repository layer`);
            throw {error};
        }
    }

    async updateCity(cityId, data) {
        try {
            // // this approach won't return updated obj, returning: true only works for pg sql
            // const city = await City.update(data, {
            //     where: {
            //         id: cityId
            //     }
            // });

            // below approach returns updated obj
            const city = await City.findByPk(cityId);
            city.name = data.name;
            await city.save();
            return city;
        } catch (error) {
            console.log(`Something went wrong in the city repository layer`);
            throw {error};
        }
    }

    async getCity(cityId) {
        try {
            const city = await City.findByPk(cityId);
            return city;
        } catch (error) {
            console.log(`Something went wrong in the city repository layer`);
            throw {error};
        }
    }

    async getAllCities() {
        try {
            const cities = await City.findAll();
            return cities;
        } catch (error) {
            console.log(`Something went wrong in the city repository layer`);
            throw {error};
        }
    }
}

module.exports = CityRepository;