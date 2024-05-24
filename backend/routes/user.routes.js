const express = require("express");
const route = express.Router();
const { getAllData } = require("../controllers/user.controllers");
const { protect } = require("../middlewares/auth");

route.get("/", protect, getAllData);

module.exports = route;
