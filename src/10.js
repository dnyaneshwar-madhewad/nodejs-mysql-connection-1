const mysql = require("mysql");
var Promise = require("bluebird");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);
const dbinfo = {
    host: "localhost", // location of the database.
    user: "root",
    password: "cdac",
    database: "day1",
  };

  const addUser = async () => {
    const connection = mysql.createConnection(dbinfo);
    await connection.connectAsync();
    let sql = `INSERT INTO user (username, password) values (?, ?)`;
    connection.queryAsync(sql,[user.username, user.password]);
    await connection.endAsync();


  }
  const user={username :};
  addUser