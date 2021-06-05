const express = require("express");
const bcrypt = require("bcryptjs");
const signinRouter = new express.Router();
require("../db/conn");
const User = require("../models/userSchema");

signinRouter.get("/signin", (req, res) => {
  res.send("this is signin page");
});

signinRouter.post("/signin", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: "Plz fill up all details" });
    }
    const userinfo = await User.findOne({ email: email });

    if (userinfo) {
      // bcrypt.compare auth password
      const userpass = await bcrypt.compare(password, userinfo.password);
      // generating token using jwt
      const token = await userinfo.generateToken();
      console.log(`This is Token : ${token}`);
      res.cookie("jwt", token);
      if (userpass) {
        res.status(200).json({ message: "Congrats! Signin Successful" });
      } else {
        res.status(400).json({ error: "Invaild password" });
      }
    } else {
      res.status(400).json({ error: "Invaild email" });
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = signinRouter;
