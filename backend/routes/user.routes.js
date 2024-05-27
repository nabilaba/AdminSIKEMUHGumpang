const express = require("express");
const route = express.Router();
const {
  getAllData,
  addAdmin,
  editProfileByToken,
  getProfileByToken
} = require("../controllers/user.controllers");
const { protect } = require("../middlewares/auth");

route.get("/", protect, getAllData);
route.post("/", protect, addAdmin);
route.put("/", protect, editProfileByToken);
route.get("/profile", protect, getProfileByToken);

module.exports = route;
