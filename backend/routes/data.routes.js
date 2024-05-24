const express = require("express");
const route = express.Router();
const { getAllData, createData } = require("../controllers/data.controllers");
const { protect } = require("../middlewares/auth");

route.get("/", getAllData);
route.post("/", protect, createData);

module.exports = route;
