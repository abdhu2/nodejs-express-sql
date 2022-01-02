import express from "express";
import cors from "cors";
import ejs from "ejs";
import bodyParser from "body-parser";

//import mysql from "mysql";
import dotenv from "dotenv";
dotenv.config();

const app = express();

//import database connection
import DB from "./config/connection.js";

// setv view file path
app.set("view engine", "ejs");

//use middlewares
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Import API
import postRoutes from "./routes/postRoutes.js";

//simple route
app.get("/", (req, res) => {
  //res.send("Node.js || Express || MySQL CRUD ");
  res.render("home");
});

//Redirect request to end point
app.use("/posts", postRoutes);

// set port, listen for requests
const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
