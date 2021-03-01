const orm = require('../config/orm.js');

const burger = {
    selectAll(cb) {
      orm.selectAll('', () => cb(res));
    },
    // The variables cols and vals are arrays.
    insertOne(cols, vals, cb) {
      orm.create('', cols, vals, (res) => cb(res));
    },
    updateOne(objColVals, condition, cb) {
      orm.update('', objColVals, condition, (res) => cb(res));
    },
  };
  
  // Export the database functions for the controller (burgers_controller.js).
  module.exports = burger;