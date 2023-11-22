const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Api is working");
});

app.listen(8080, () => {
  console.log("listenig at port 8080");
});
