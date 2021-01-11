// import the Sequelize constructor from the library
const Sequelize = require('sequelize');

// dotenv is an NPM package that will help protect sensitive data (password and username)
// npm install dotenv (to install via your cli)
require('dotenv').config();

// create connection to our database, pass in your MySQL information for username and password
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
  });

module.exports = sequelize;
