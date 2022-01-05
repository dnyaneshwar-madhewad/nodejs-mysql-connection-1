const mysql = require("mysql");
const dbinfo = {
    host: "localhost", // location of the database.
    user: "root",
    password: "cdac",
    database: "day1",
  };

  const checkConnection = () => {
    const connection = mysql.createConnection(dbinfo);
  
    // ASYNC
    connection.connect();
  
    console.log("CONNECTION SUCCESS");
  
    // ASYNC
    connection.end();
  };
  
  checkConnection();