const mysql = require("mysql");

const dbinfo = {
    host: "localhost", // location of the database.
    user: "root",
    password: "cdac",
    database: "day1",
  };

const connection = mysql.createConnection(dbinfo);

connection.connect();

// QUERY
let sql = `INSERT INTO user (username, password) values ("Dnyaneshwar", "cdac")`;
connection.query(sql);

console.log("RECORD ADDED");

connection.end();