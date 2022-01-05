const mysql = require("mysql");
const Promise = require("bluebird");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);

const dbinfo = {
    host: "localhost", // location of the database.
    user: "root",
    password: "cdac",
    database: "day1",
  };

const selectAllUser = async () => {
  const connection = mysql.createConnection(dbinfo);

  await connection.connectAsync();

  let sql = `SELECT * FROM user`;
  // let sql = `SELECT * FROM user ORDER BY ID DESC`;
  // let sql = `SELECT * FROM user WHERE ID=?`;
  const list = await connection.queryAsync(sql, [10]);

  await connection.endAsync();
  return list;
};

const addUser = async (user) => {
  const connection = mysql.createConnection(dbinfo);

  await connection.connectAsync();

  let sql = `INSERT INTO user (username, password) values (?, ?)`;
  connection.queryAsync(sql, [user.username, user.password]);
  console.log("Record Added!");

  await connection.endAsync();
};

module.exports = { selectAllUser, addUser };