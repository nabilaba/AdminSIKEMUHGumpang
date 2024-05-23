const express = require("express");
const app = express();

app.use("/data", require("./data.routes"));
app.use("/auth", require("./auth.routes"));

module.exports = app;
