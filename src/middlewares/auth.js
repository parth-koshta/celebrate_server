const jwtHelpers = require("../helpers/jwt");

const authMiddleware = {};

authMiddleware.verifyJWT = (req, res, next) => {
  try {
    const token = req.headers["auth-token"];
    console.log(token, "token");
    if (!token) res.status(400).send({ message: "Bad request." });
    console.log("sending verify");
    const { _id } = jwtHelpers.verifyJWT(token);
    console.log(_id, "verified");
    req.userId = _id;
    next();
  } catch (err) {
    console.log(error, "error");
    res.status(401).send({ message: "User not authorized." });
  }
};

module.exports = authMiddleware;
