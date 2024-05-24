const User = require("../models/User");
const { dbConnect } = require("../utils/dbConnect");

exports.getAllData = async (req, res) => {
  await dbConnect();

  try {
    const data = await User.find();
    res.status(200).json(data);
  } catch (err) {
    res.status(404).json(err.message);
  }
};
