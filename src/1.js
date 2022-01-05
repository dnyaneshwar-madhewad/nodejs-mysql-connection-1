// 1
const mysql = require("mysql");

// 2 Database Information and Credentials
const dbinfo = {
  host: "localhost", // location of the database.
  user: "root",
  password: "cdac",
  database: "day1",
};

// 3
const connection = mysql.createConnection(dbinfo);

// 4 Opening the connection
connection.connect();

// QUERY...
console.log("CONNECTION SUCCESS!!!!");

// LAST STEP Close the connection
connection.end();