// connection to database
const mongoose = require("mongoose");

const uri ="mongodb+srv://asazaza12340:momo123@mern.t03vv.mongodb.net/?retryWrites=true&w=majority&appName=MERN";
const dbconnection = () => {
  mongoose.connect(uri).then((conn) => {
    console.log(`Database Connected: ${conn.connection.host}`);
  });
};

module.exports = dbconnection;
