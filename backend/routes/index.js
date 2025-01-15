const express = require("express");
const router = express.Router();
const userSingupcontroller = require("../controller/usersingup");
router.post("/singup", userSingupcontroller);
module.exports = router;
