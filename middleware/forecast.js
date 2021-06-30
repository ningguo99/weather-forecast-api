module.exports.cityProvided = async (req, res, next) => {
    if (!req.query.city) {
        return res.status(400).send('A city name must be provided!');
    }
    next();
};