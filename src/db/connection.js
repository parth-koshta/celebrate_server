const mongoose = require("mongoose");

const { MONGO_URL } = process.env;

mongoose
  .connect(MONGO_URL)
  .then(() => console.log("DB Connected"))
  .catch((e) => console.log("DB Connection Error", e));
