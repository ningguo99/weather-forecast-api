const express = require('express');
const router = express.Router();

const ApiResponse = require('../models/api-response');
const { Country } = require('../models/country');

router.get('/', async (req, res) => {
    try {
        const countries = await Country.findAll();
        res.json(new ApiResponse(200, 0, countries));
    } catch (error) {
        console.error(error.message);
        res.status(500).json(new ApiResponse(500, error.message));
    }
});

module.exports = router;