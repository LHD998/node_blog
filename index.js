const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  var a = 1+2;
  res.send("Hello World!");
});

// http://localhost:3000
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
