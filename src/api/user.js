const express = require("express");
const userController = require("../controllers/user");

const router = express.Router();

/*
 * Signup user api
 */
router.post("/signup", userController.signup);

/*
 * Login user api
 */
router.post("/login", userController.login);

module.exports = router;
