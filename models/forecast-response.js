module.exports = class ForecastResponse {
    constructor(code, message, list, city) {
        this.code = code;
        this.message = message;
        this.list = list;
        this.city = city;
    }
}