const express = require("express");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send("Api is working");
});

app.listen(PORT, () => {
  console.log("listenig at port 8080");
});
