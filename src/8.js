const mysql = require("mysql");
const dbinfo = {
    host: "localhost", // location of the database.
    user: "root",
    password: "cdac",
    database: "day1",
  };

  const checkconnection = () => {

    const connection = mysql.createConnection(dbinfo);
    connection.connect();
    console.log("USER ADDED");

    connection.end();

  };
  checkconnection.end();