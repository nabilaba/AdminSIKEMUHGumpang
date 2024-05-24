const Data = require("../models/Data");
const { dbConnect } = require("../utils/dbConnect");

exports.getAllData = async (req, res) => {
  await dbConnect();
  try {
    const data = await Data.find();
    res.status(200).json(data);
  } catch (err) {
    res.status(404).json(err.message);
  }
};

exports.createData = async (req, res) => {
  await dbConnect();
  try {
    const data = await Data.create(req.body);
    console.log(data);
    res.status(201).json(data);
  } catch (err) {
    res.status(400).json(err.message);
  }
};
