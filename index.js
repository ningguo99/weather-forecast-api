const express = require('express');
const app = express();
const cors = require('cors');

const { lowerCaseRequestQueries } = require('./middleware/request-handler');

const health = require('./routes/health-routes');
const forecast = require('./routes/forecast-routes');
const countries = require('./routes/countries-routes');
const cities = require('./routes/cities-routes');

const port = process.env.PORT || 5001;

// middleware
app.use(cors());
app.use(express.json());
app.use(lowerCaseRequestQueries);

// routes
app.use('/api/health', health);
app.use('/api/forecast', forecast);
app.use('/api/countries', countries);
app.use('/api/cities', cities);

app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
});