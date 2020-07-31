const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");
const item = require("./routes/item");

const app = express();
const router = new express.Router();
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api", item);

app.listen(3001, () =>
  console.log("Express server is running on localhost:3001 🟢 ")
);
