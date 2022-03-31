const express = require("express");
const bcrypt = require("bcrypt");
const api = require(".");
const router = express.Router();
const User = require("../models/user");

const SaltRounds = 10;

/*
 * Signup user api
 */
router.post("/signup", async (req, res, next) => {
  try {
    const { email, username, dob, phone, password } = req.body;
    const userExists = await User.exists({ $or: [{ email }, { phone }] });
    if (userExists) {
      return res.status(400).send({ message: "User already exists" });
    }

    const salt = await bcrypt.genSalt(SaltRounds);
    const hashPassword = await bcrypt.hash(password, salt);

    let user = await User.create({
      email,
      username,
      dob,
      phone,
      password: hashPassword,
    });
    user = user.toObject();
    delete user.password;
    return res.send(user);
  } catch (err) {
    console.log(err);
    next(err);
  }
});

/*
 * Login user api
 */
router.post("/login", async (req, res, next) => {
  try {
    const { email, phone, password } = req.body;
    if (!email && !phone) {
      return res
        .status(400)
        .send({ message: "Email or phone number is required." });
    }
    let user = await User.findOne({ $or: [{ email }, { phone }] }).select(
      "+password"
    );
    if (!user) {
      return res
        .status(400)
        .send({ message: "User doesn't exist. Please signup." });
    }

    if (!password) {
      return res.status(400).send({ message: "Password is required." });
    }

    const validPass = await bcrypt.compare(password, user.password);
    if (!validPass) {
      return res
        .status(400)
        .send({ message: "Incorrect password. Please try again." });
    }
    user = user.toObject();
    delete user.password;
    return res.send(user);
  } catch (err) {
    console.log(err);
    next(err);
  }
});

module.exports = router;
