const mysql = require("mysql");
const Promise = require("bluebird");

//console.log("hello");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);
const dbinfo = {
  host: "localhost",
  user: "root",
  password: "cdac",
  database: "shri",
};

async function connectionCheck() {
  const connection = mysql.createConnection(dbinfo);
  await connection.connectAsync();
  console.log("SUCCESS");
  await connection.endAsync();
}
connectionCheck();

async function addUser(user) {
  const connection = mysql.createConnection(dbinfo);
  await connection.connectAsync();
  console.log("SUCCESS");
  let sql = `INSERT INTO user(username,password) values (?,?)`;

  await connection.queryAsync(sql, [user.username, user.password]);
  await connection.endAsync();
}
async function selectUser(user) {
  const connection = mysql.createConnection(dbinfo);
  await connection.connectAsync();
  console.log("SUCCESS");
  let sql = `select * from user`;

  const list = await connection.queryAsync(sql, []);
  await connection.endAsync();
  console.log(list);
  return list;
}
const user = {
  username: "shrikant",

  password: "asdfg",
};
//addUser(user);
selectUser();
module.exports = { selectUser, addUser };
