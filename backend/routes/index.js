const express = require("express");
const app = express();

app.use("/data", require("./data.routes"));
app.use("/auth", require("./auth.routes"));
app.use("/user", require("./user.routes"));

module.exports = app;
