const express = require("express");

const PORT = 8080;

const app = express();
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, HOST, () => {
  console.log(`Running on http://localhost:${PORT}`);
});
