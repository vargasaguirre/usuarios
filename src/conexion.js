var express = require('express');
var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password : '',
  database: 'usuarios'
});

connection.connect(function(err){
  if(err) {
    console.log("Connection error: "+err);
  }
});

module.exports = connection;