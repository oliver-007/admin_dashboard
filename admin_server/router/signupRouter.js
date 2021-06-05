const express = require("express");
const signupRouter = new express.Router();
require("../db/conn");
const User = require("../models/userSchema");

signupRouter.get("/signup", (req, res) => {
  res.send("this is signup ");
});

// using async await

signupRouter.post("/signup", async (req, res) => {
  const { firstname, lastname, email, password, cpassword } = req.body;
  if (!firstname || !lastname || !email || !password || !cpassword) {
    return res.status(422).json({ error: "Plz fill up all fields properly" });
  }
  try {
    const userExist = await User.findOne({ email: email });
    if (userExist) {
      return res.status(422).json({ error: "Email Id already exist." });
    } else if (password != cpassword) {
      return res.status(422).json({ error: "Password doesn't match" });
    } else {
      const user = new User({
        firstname: firstname,
        lastname: lastname,
        email: email,
        password: password,
        cpassword: cpassword,
      });
      // --------> bcrypt hash will work here
      await user.save();
      res.status(201).json({ message: "User Registration Successful" });
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = signupRouter;
