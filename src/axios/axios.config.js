const axios = require("axios");
const credentials = require("../confidential/credentials");

const API = axios.create({
  baseURL: credentials.baseUrl,
  headers: {
    "Content-Type": "application/json",
    "x-api-key": credentials.apiKey,
  },
});

module.exports = {
  API,
};
