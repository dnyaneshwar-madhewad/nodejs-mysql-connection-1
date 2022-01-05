const mysql = require("mysql");
var Promise = require("bluebird");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);
const dbinfo = {
    host: "localhost", // location of the database.
    user: "root",
    password: "cdac",
    database: "day1",
  };

  const checkconnection = () => {

    const connection = mysql.createConnection(dbinfo);

   await connection.connectAsync();
    console.log("USER ADDED");

    connection.endAsync();

  };
  checkconnection.end();