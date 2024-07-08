const mysql = require("mysql2/promise");

const pool = mysql.createPool({
  host: "roundhouse.proxy.rlwy.net",
  port: 26386,
  user: "root",
  password: "krAFFKrkwuQcVzJwELmKRBjsBqkQbzUL",
  database: "railway",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

module.exports = {
  pool,
};
