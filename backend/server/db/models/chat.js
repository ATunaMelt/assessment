const { Sequelize, DataTypes } = require('sequelize');
const db = require('../db');

const Chat = db.define('Chat', {
  subjectLine: {
    type: DataTypes.STRING
  }
});

module.exports = Chat;
