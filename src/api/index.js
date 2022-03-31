const userApi = require("./user");

function api(server) {
  server.use("/api/v1/user", userApi);
}

module.exports = api;
