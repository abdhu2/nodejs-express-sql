import dotenv from "dotenv";
dotenv.config();

import mysql from "mysql";

//creating connection db
const connection = mysql.createConnection({
  HOST: process.env.HOST,
  USER: process.env.USER,
  PASSWORD: process.env.PASSWORD,
  DB: process.env.DB,
});

//open the MySQL connection
connection.connect((error) => {
  try {
    console.log("Successfully connected to the database.");
  } catch (error) {
    if (error) throw error;
  }
});

export default connection;
