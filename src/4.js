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
const user = { username: "virat", password: "adsfasdff" };
let sql = `INSERT INTO user (username, password) values ("${user.username}", "${user.password}")`;
connection.query(sql);

console.log("RECORD ADDED");

connection.end();