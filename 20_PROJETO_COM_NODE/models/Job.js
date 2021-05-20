const Sequelize = require('sequelize');
const db = require('../db/connection');

const Job = db.define('job', {
  TITLE: {
    type: Sequelize.STRING,
  },
  DESCRIPTION: {
    type: Sequelize.STRING,
  },
  SALARY: {
    type: Sequelize.STRING,
  },
  COMPANY: {
    type: Sequelize.STRING,
  },
  EMAIL: {
    type: Sequelize.STRING,
  },
  NEW_JOB: {
    type: Sequelize.INTEGER,
  }
});

module.exports = Job