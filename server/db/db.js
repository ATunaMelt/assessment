const { Sequelize } = require('sequelize');
const pkg = require('../../package.json');
require('dotenv').config();

const sequelize = new Sequelize(
  `postgres://${process.env.DB_USER}:${process.env.DB_PASS}@localhost:5432/${pkg.name}`
);

async function connect() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
    await sequelize.sync(/*{ force: true }*/);
    console.log('All models were synchronized successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

connect();

module.exports = sequelize;
