const mongoose = require("mongoose");

const DataSchema = new mongoose.Schema(
  {
    nama: {
      type: String,
    },
    nbm: {
      type: String,
    },
    profesi: {
        type: String,
    },
    pendidikan: {
        type: String,
    },
    alamat: {
        type: String,
    },
    jabatan: {
        type: String
    },
    foto: {
        type: String
    }
  },
  { timestamps: true, versionKey: false }
);

module.exports = mongoose.model("data", DataSchema, "data");
