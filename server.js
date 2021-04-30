const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = 5000;

require("dotenv").config({ path: "./config/config.env" });

//Middleware to connect client and server
app.use(cors());

//Used for request parameters, alternative to bodyParser
app.use(express.json());

//DB uri
const uri = process.env.ATLAS_URI;

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("Database connection established");
});

//Bringing articles route in main file
const articleRoutes = require("./routes/articles");

app.use("/", articleRoutes);

app.listen(PORT, () => {
  console.log("Server listening on port " + PORT);
});
