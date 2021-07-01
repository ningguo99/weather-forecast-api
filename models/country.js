const { DataTypes } = require('sequelize');
const { sequelize } = require('../db/sequelize-pg');

module.exports.Country = sequelize.define('country', {
  id: {
    type: DataTypes.UUIDV4,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4
  },
  name: {
    type: DataTypes.TEXT
  }
}, {
  freezeTableName: true,
  underscored: true,
  createdAt: false,
  updatedAt: false
});