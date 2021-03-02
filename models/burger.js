const orm = require('../config/orm');

var burger = {
  selectAll: function (cb) {
      orm.selectAll("burgers", function (res) {
          cb(res);
      });
  },
  insertOne: function (name, cb) {
      orm.insertOne("burgers", [
          "burger_name", "devoured"
      ], [
        burger_name, false
      ], cb);
  },
  updateOne: function (id, cb) {
      var condition = "id=" + id;
      orm.updateOne("burgers", {
          devoured: true
      }, condition, cb);
  }
};

  
  // Export the database functions for the controller (burgers_controller.js).
  module.exports = burger;