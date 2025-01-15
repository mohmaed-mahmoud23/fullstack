const mongoose = require("mongoose");

const userScema = new mongoose.Schema(
  {
    name: String,
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: String,
    profil: String,
  },
  {
    timestamps: true,
  }
);

const usermodel = mongoose.model("user", userScema);
module.exports = usermodel;
