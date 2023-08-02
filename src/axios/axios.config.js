const axios = require("axios");
const fs = require("fs");
const path = "src/confidential/token.json";
const credentials = require("../confidential/credentials");

var zunoToken = fs.readFileSync(path).toString();
const API = axios.create({
  baseURL: credentials.baseUrl,
  headers: {
    "Content-Type": "application/json",
    "x-api-key": credentials.apiKey,
    "Authorization": `Bearer ${JSON.parse(zunoToken)}`,
  },
});

module.exports = {
  API,
};
