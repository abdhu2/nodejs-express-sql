import express from "express";
import cors from "cors";
//import mysql from "mysql";
import dotenv from "dotenv";
dotenv.config();

const app = express();

//import database connection
import connectDB from "./config/connection.js";

app.use(cors());
app.use(express.json());

//Import API
import postRoutes from "./routes/postRoutes.js";

app.use("/posts", postRoutes);

//simple route
app.get("/", (req, res) => {
  res.json({ msg: "wlcm tp crud api" });
});

//Redirect request to end point

// set port, listen for requests

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
