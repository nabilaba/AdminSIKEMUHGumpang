const express = require("express");
const route = express.Router();
const { getAllData, createData, deleteData } = require("../controllers/data.controllers");
const { protect } = require("../middlewares/auth");

route.get("/", getAllData);
route.post("/", protect, createData);
route.delete("/:id", protect, deleteData);

module.exports = route;
