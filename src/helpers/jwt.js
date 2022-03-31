const jwt = require('jsonwebtoken');
const { JWT_SECRET } = process.env;
const jwtHelpers = {};

jwtHelpers.generateJWT = (user) => {
  
  return jwt.sign({ _id: user._id }, JWT_SECRET);
};

jwtHelpers.verifyJWT = (token) => {
  return jwt.verify(token, JWT_SECRET)
}

module.exports = jwtHelpers;
