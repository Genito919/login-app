import mysql from "mysql2/promise";

export const pool = mysql.createPool({
  host: "0.0.0.0",
  user: "root",
  password: "123456",
  database: "login_db",
});