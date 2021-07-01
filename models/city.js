const { DataTypes } = require('sequelize');
const { sequelize } = require('../db/sequelize-pg');

const { Country } = require('./country');

module.exports.City = sequelize.define('city', {
    id: {
        type: DataTypes.UUIDV4,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
    },
    name: {
        type: DataTypes.TEXT
    },
    latitude: {
        type: DataTypes.DOUBLE
    },
    longitude: {
        type: DataTypes.DOUBLE
    },
    countryId: {
        type: DataTypes.UUIDV4, references: {
            model: Country,
            key: 'id',
            // deferrable: INITIALLY_IMMEDIATE
        }
    }
}, {
    freezeTableName: true,
    underscored: true,
    createdAt: false,
    updatedAt: false
});

