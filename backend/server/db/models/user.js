const { Sequelize, DataTypes } = require('sequelize');
const db = require('../db');

const User = db.define(
  'User',
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }
  // {
  //   tableName: 'User',
  // }
);

module.exports = User;
