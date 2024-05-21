const Data = require("../models/Data");
const { dbConnect } = require("../utils/dbConnect");
const mongoose = require("mongoose");

exports.getAllData = async (req, res) => {
  await dbConnect();

  try {
    const data = await Data.find();
    res.status(200).json(data);
  } catch (err) {
    res.status(404).json(err.message);
  }
};