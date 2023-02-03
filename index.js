import mysql from "mysql";

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "first",
});

connection.connect((error) => {
  if (error) console.log(error);
  console.log("Connection");
});

// table creation
// const createTable = "CREATE TABLE people (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), surname VARCHAR(255), age INT(3))";
// connection.query(createTable, (err, result) => {
//   if (err) throw err;
//   console.log("Table created");
// });

// table deletion
// const dropTable = "DROP TABLE IF EXISTS first.people";
// connection.query(dropTable, (err, result) => {
//   if (err) throw err;
//   console.log("Table deleted");
// });

//insert table
const insert = "INSERT INTO people (name, surname, age) VALUES ('eda', 'eren', 24)";
connection.query(insert, (err, result) => {
  if (err) throw err;
  console.log("1 record inserted");
});

//select
connection.query("SELECT * FROM people", function (err, result, fields) {
  if (err) throw err;
  console.log(result);
});
