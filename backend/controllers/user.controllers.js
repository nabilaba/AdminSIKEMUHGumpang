const User = require("../models/User");
const { dbConnect } = require("../utils/dbConnect");
const jwt = require("jsonwebtoken");

exports.getAllData = async (req, res) => {
  await dbConnect();

  try {
    const data = await User.find();
    res.status(200).json(data);
  } catch (err) {
    res.status(404).json(err.message);
  }
};

exports.addAdmin = async (req, res) => {
  await dbConnect();

  try {
    const data = await User.create(req.body);
    res.status(201).json(data);
  } catch (err) {
    res.status(400).json(err.message);
  }
};

exports.editProfileByToken = async (req, res) => {
  await dbConnect();

  try {
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findByIdAndUpdate(decoded.id, req.body, {
      new: true,
    });
    res.status(200).json(user);
  } catch (err) {
    res.status(400).json(err.message);
  }
};

exports.getProfileByToken = async (req, res) => {
  await dbConnect();

  try {
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id);
    res.status(200).json(user);
  } catch (err) {
    res.status(400).json(err.message);
  }
};
