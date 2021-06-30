const express = require('express');
const app = express();
const cors = require('cors');

const port = process.env.PORT || 5001;

// middleware
app.use(cors());
app.use(express.json());

const health = require('./routes/health-routes');
const forecast = require('./routes/forecast-routes');

// routes
app.use('/api/health', health);
app.use('/api/forecast', forecast);

app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
});