const express = require("express");
const cors = require('cors');
const app = express();

// For parsing application/json
app.use(express.json());

// For avoiding cors error
app.use(cors());

// For parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });

require("./src/db/connection");

const api = require("./src/api");

const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

api(app);

app.use((err, req, res, next) => {
  if (res.statusCode === 200 || res.statusCode === 500) {
    res
      .status(500)
      .send({ message: "Something went wrong. Please try again." });
  }
});

app.use((req, res, next) => {
  res.status(404).send({ message: "Sorry can't find that!" });
});

app.listen(port, () => {
  console.log(`Celebrate listening on port ${port}`);
});
