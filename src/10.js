const mysql = require("mysql");
const Promise = require("bluebird");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);

const dbinfo = {
  host: "localhost", // location of the database.
  user: "root",
  password: "cdac",
  database: "day1",
};

const addUser = async (user) => {
  const connection = mysql.createConnection(dbinfo);

  await connection.connectAsync();

  let sql = `INSERT INTO user (username, password) values (?, ?)`;
  connection.queryAsync(sql, [user.username, user.password]);
  console.log("Record Added!");

  await connection.endAsync();
};

const user = { username: "aplha", password: "1234" };
addUser(user);