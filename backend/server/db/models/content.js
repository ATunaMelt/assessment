const { Sequelize, DataTypes } = require('sequelize');
const db = require('../db');

const Content = db.define('Content', {
  msg: {
    type: DataTypes.STRING,
    allowNull: false
  },
  sender: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = Content;
