const mysql = require("mysql");
var Promise = require("bluebird");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);
const dbinfo = {
    host: "localhost", // location of the database.
    user: "root",
    password: "cdac",
    database: "day1",
  };

  const selectAlluser = async () => {
    const connection = mysql.createConnection(dbinfo);
    await connection.connectAsync();
    let sql='SELECT * FROM user order by username desc';
    const list=await connection.queryAsync(sql);
    console.log(list);
    await connection.endAsync();
  };
selectAlluser();