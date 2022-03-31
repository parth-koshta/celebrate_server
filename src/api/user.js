const express = require("express");
const userController = require("../controllers/user");
const authMiddleware = require("../middlewares/auth");

const router = express.Router();

/*
 * Signup user api
 */
router.post("/signup", userController.signup);

/*
 * Login user api
 */
router.post("/login", userController.login);

/*
 * Get user
 */
router.get("/me", authMiddleware.verifyJWT, userController.me);

module.exports = router;
