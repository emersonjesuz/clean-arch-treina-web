import mysql from "mysql2/promise";

export async function connect(): Promise<mysql.Connection> {
  return mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "teste",
  });
}
