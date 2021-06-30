const express = require('express');
const router = express.Router();
const { Weather } = require('../models/weather');
const { City } = require('../models/city');

// import middleware
const { cityProvided } = require('../middleware/forecast');
const ForecastResponse = require('../models/forecast-response');

router.get('/', cityProvided, async (req, res) => {
    const city = req.query.city;

    try {
        // find the city record from db
        const cityRecord = await City.findOne({
            where: {
                name: city.toLowerCase()
            }
        });
        // if city does not exist, return 404
        if (cityRecord === null) {
            return res.status(404).json(new ForecastResponse(404, 'City Not Found'));
        }
        // find weather records for the next 10 days
        const weathers = await Weather.findAll({
            where: {
                cityId: cityRecord.id
            },
            limit: 10
        });

        res.json(new ForecastResponse(200, 0, weathers, cityRecord));
    } catch (error) {
        console.error(error.message);
        res.status(500).json(new ForecastResponse(500, error.message));
    }
});

module.exports = router;