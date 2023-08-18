'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : process.env.DB_HOST,
  user     : process.env.DB_USER,
  password : process.env.DB_PASSWORD,
  database : process.env.DB_NAME
});
 
connection.connect();
 
// App
const app = express();
app.get('/', (req, res) => {
  connection.query('SELECT * FROM books', function (error, results, fields) {
    if (error) throw error;
    //console.log('The solution is: ', results);
    res.send(results);
  });
});

//connection.end();

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);