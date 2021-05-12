'user strict';

const mysql = require('mysql');//module import

// local mysql db connection
const dbConn = mysql.createConnection({ //connection function from module
  host: 'localhost', //definition of local host
  user: 'root', //definition of user
  password: 'root', //password
  port: '32000',
  database: 'citiesData', //database definition
});
dbConn.connect((err) => {
  if (err) throw err;
});
module.exports = dbConn;
