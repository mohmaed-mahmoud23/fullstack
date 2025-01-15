const usermodel = require("../modules/usermodules");
const bcrypt = require("bcryptjs");

async function userSingupcontroller(req, res) {
  try {
    const { email, password, name } = req.body;

    console.log("req.body", req.body);

    if (!email) {
      throw new Error("please provide email");
    }
    if (!password) {
      throw new Error("please provide password");
    }
    if (!name) {
      throw new Error("please provide name");
    }

    const salt = bcrypt.genSaltSync(10);
    const hashPassword = await bcrypt.hashSync(password, salt);

    if (!hashPassword) {
      throw new Error("Something is wrong");
    }

    const paylod = {
      ...req.body,
      password: hashPassword,
    };

    const userData = new usermodel(paylod);
    const saveuser = await userData.save();
    console.log("Saved User:", saveuser); // هنا تطبع بيانات الـ user اللي اتحفظ

    res.status(201).json({
      data: saveuser,
      success: true,
      error: false,
      message: "user created successfully!",
    });
  } catch (error) {
    
    res.json({
      message: error.message,
      error: true,
      success: false,
    });
  }
}

module.exports = userSingupcontroller;
