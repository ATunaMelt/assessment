const { Sequelize, DataTypes } = require('sequelize');
const db = require('../db');

const Members = db.define('Members', {
  users: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Members;
