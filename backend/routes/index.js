const express = require("express");
const app = express();

app.use("/data", require("./data.routes"));

module.exports = app;
