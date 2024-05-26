const express = require("express");
const route = express.Router();
const {
  getAllData,
  getData,
  createData,
  editData,
  deleteData,
} = require("../controllers/data.controllers");
const { protect } = require("../middlewares/auth");

route.get("/", getAllData);
route.post("/", protect, createData);
route.get("/:id", getData);
route.put("/:id", protect, editData);
route.delete("/:id", protect, deleteData);

module.exports = route;
