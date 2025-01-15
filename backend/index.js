const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDb = require("./config/db");
const router = require("./routes");
const dbconnection = require("./config/db");
dbconnection();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api", router);
const PORT = 8080 || process.env.PORT;
connectDb().then(() => {
  app.listen(PORT, () => {
    console.log("conected to db");
    console.log("server is running");
  });
});
