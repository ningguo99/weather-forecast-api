const express = require('express');
const router = express.Router();

const ApiResponse = require('../models/api-response');
const { City } = require('../models/city');

router.get('/', async (req, res) => {
    try {
        let cities = [];
        console.log(req.query.countryId)
        if (req.query.countryId) {
            cities = await City.findAll({
                where: {
                    countryId: req.query.countryId
                }
            });
        } else {
            cities = await City.findAll();
        }

        return res.json(new ApiResponse(200, 0, cities));
    } catch (error) {
        console.error(error.message);
        return res.status(500).json(new ApiResponse(500, error.message));
    }
});

module.exports = router;