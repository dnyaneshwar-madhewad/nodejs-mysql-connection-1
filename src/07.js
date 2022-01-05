const mysql = require("mysql");
const dbinfo = {
    host: "localhost", // location of the database.
    user: "root",
    password: "cdac",
    database: "day1",
  };

const addUser = (user) => {
  const connection = mysql.createConnection(dbinfo);

  connection.connect();

  // ANYONE CAN HACK THIS. ::  SQL INJECTION
  // let sql = `INSERT INTO user (username, password) values ("${user.username}", "${user.password}")`;
  let sql = `INSERT INTO user (username, password) values (?, ?)`;
  connection.query(sql, [user.username, user.password]); // MASKING THE QUERY PARAMES

  console.log("USER ADDED");

  connection.end();
};

const user = { username: "CDAC", password: "asfasdfsadfd" };
addUser(user);