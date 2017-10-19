var mysql = require('mysql');

var connection = function() {
  return mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'curso_node_express'
  });
}

module.exports = connection;