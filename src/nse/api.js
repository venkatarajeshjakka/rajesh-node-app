const axios = require("axios");
const config = require("./config");
const instance = axios.create({
  baseURL: "http://www1.nseindia.com",
  timeout: 5000,
  header: config.headers
});

module.exports = { instance };
