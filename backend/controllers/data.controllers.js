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

exports.getData = async (req, res) => {
  await dbConnect();
  console.log(req.params.id);
  try {
    const data = await Data.findById(req.params.id);
    console.log(data);
    res.status(200).json(data);
  } catch (err) {
    res.status(404).json(err.message);
  }
};

exports.editData = async (req, res) => {
  await dbConnect();
  try {
    const data = await Data.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json(data);
  } catch (err) {
    res.status(404).json(err.message);
  }
};

exports.deleteData = async (req, res) => {
  await dbConnect();
  try {
    const data = await Data.findByIdAndDelete(req.params.id);
    res.status(200).json(data);
  } catch (err) {
    res.status(404).json(err.message);
  }
};
