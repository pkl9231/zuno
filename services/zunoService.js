const axios = require("axios");
const HTTP_CODE = require("../constants/constant");

const zunoService = async (req, res) => {
  try {
    // const response = await axios.get("https://dummyjson.com/users");
    // res.status(HTTP_CODE.HTTP_RESPONSE_200).send(response.data);
    res.status(HTTP_CODE.HTTP_RESPONSE_200).send("response from APi");
  } catch (error) {
    console.error(error);
    res.send(error);
  }
};

const zunoServiceGetQuote = async (req, res) => {
  console.log("Boday Data", req.body);
  try {
    // const response = await axios.post(req.body);
    res.status(HTTP_CODE.HTTP_RESPONSE_200).send(req.body);
  } catch (error) {
    console.error(error);
    res.send(error);
  }
};

const zunoServicePostQuote = async (req, res) => {
  console.log("Boday Data", req.body);
  try {
    res.status(HTTP_CODE.HTTP_RESPONSE_200).send("response from APi");
  } catch (error) {
    console.error(error);
    res.send(error);
  }
};

const zunoServiceRating = async (req, res) => {
  console.log("Boday Data", req.body);
  try {
    res.status(HTTP_CODE.HTTP_RESPONSE_200).send("response from APi");
  } catch (error) {
    console.error(error);
    res.send(error);
  }
};

module.exports = {
  zunoService,
  zunoServiceGetQuote,
  zunoServicePostQuote,
  zunoServiceRating,
};
