const axios = require("axios");
const config = require("./config");
const instance = axios.create({
  baseURL: "https://www1.nseindia.com",
  timeout: 10000,
  headers: config.headers
});

module.exports = { instance };
