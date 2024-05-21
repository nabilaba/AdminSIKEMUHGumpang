const express = require("express");
const route = express.Router();
const { getAllData } = require("../controllers/data.controllers");

route.get("/", getAllData);

module.exports = route;
