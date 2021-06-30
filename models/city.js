const { DataTypes } = require('sequelize');
const { sequelize } = require('../db/sequelize-pg');

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
    }
}, {
    freezeTableName: true,
    underscored: true,
    createdAt: false,
    updatedAt: false
});

