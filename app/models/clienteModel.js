var db = require('../../config/db');

module.exports = function() {
  this.all = function(callback) {
    var connection = db();
    return connection.query('select * from clientes', callback);
  }

  this.find = function(id, callback) {
    var connection = db();
    return connection.query('select * from clientes where id = ?', id, callback);
  }

  this.save = function(data, callback) {
    var connection = db();
    return connection.query('insert into clientes set ?', data, callback);
  }

  return this;
}
