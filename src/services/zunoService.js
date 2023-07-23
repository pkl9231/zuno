const customAxios = require("../axios/axios.config");
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

const zunoServiceQuicQuote = async (req, res) => {
  try {
    const result = await customAxios.post("/motor/quote", req.body);
    return res.status(200).json(result.data).end();
  } catch (error) {
    console.log("getting error", error);
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
  zunoServiceQuicQuote,
  zunoServicePostQuote,
  zunoServiceRating,
};
