const fs = require("fs");
const HTTP_CODE = require("../constants/HTTP_CODE");
const API_URL = require("../constants/apiUrl");
const credentials = require("../confidential/credentials");
const zunoService = require("../services/zunoService");
const validation = require("../validation/inputParams.validation");
const path = "src/confidential/token.json";

const zunoAuth = async () => {
  const credential = {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    auth: {
      username: credentials.username,
      password: credentials.password,
    },
  };
  try {
    const result = await zunoService.proceedZunoAuth(
      credential,
      API_URL.FOUR_WHEELER.AUTH_TOKEN_URL
    );
    console.log("getting token.....", result);
    // await writeData(result?.access_token);
    return result;
  } catch (error) {
    console.error(error);
    return error;
  }
};

const zunoServiceQuickQuote = async (data) => {
  const errorMessage = validation.inputParamsValidaton(data);
  if (errorMessage) {
    return errorMessage;
  }
  try {
    const result = await zunoService.proceesZunoServiceQuickQuote(
      API_URL.FOUR_WHEELER.QUICK_QUOTE_URL,
      data
    );
    return result;
  } catch (error) {
    console.error("getting error in controller", error);
    throw error;
  }
};

const zunoServiceFullQuote = async (data) => {
  // const errorMessage = validation.inputParamsValidaton(data);
  // if (errorMessage) {
  //   return errorMessage;
  // }
  try {
    const result = await zunoService.proceedZunoServiceFullQuote(
      API_URL.FOUR_WHEELER.FULL_QUOTE_URL,
      data
    );
    return result;
  } catch (error) {
    console.error("getting error in controller", error);
    throw error;
  }
};

const zunoKYCcustomer = async (data) => {
  try {
    const result = await zunoService.proceedZunoKYCcustomer(
      API_URL.FOUR_WHEELER.KYC_CUSTOMER_URL,
      data,
    );
    return result;
  } catch (error) {
    console.error("getting error in controller", error);
    throw error;
  }
};

const zunoIssuePolicy = async (req, res) => {
  try {
    const result = await zunoService.proceedZunoIssuePolicy(
      API_URL.FOUR_WHEELER.KYC_ISSUE_POLICY_URL,
      req.body
    );
    return res.status(HTTP_CODE.HTTP_RESPONSE_200).json(result).end();
  } catch (error) {
    console.error("getting error", error);
    return res.status(error.statusCode).json(error).end();
  }
};

const zunoOnlinePayment = async (req, res) => {
  try {
    const result = await zunoService.proceedZunoIssuePolicy(
      API_URL.FOUR_WHEELER.ONLINE_PAYMENT_URL,
      req.body
    );
    return res.status(HTTP_CODE.HTTP_RESPONSE_200).json(result).end();
  } catch (error) {
    console.error("getting error", error);
    return res.status(error.statusCode).json(error).end();
  }
};

const zunoPdfDownload = async (req, res) => {
  try {
    const result = await zunoService.proceedZunoPdfDownload(
      API_URL.FOUR_WHEELER.PDF_GENERATION_URL,
      req.body
    );
    return res.status(HTTP_CODE.HTTP_RESPONSE_200).json(result).end();
  } catch (error) {
    console.error("getting error", error);
    return res.status(error.statusCode).json(error).end();
  }
};

module.exports = {
  zunoAuth,
  zunoServiceQuickQuote,
  zunoServiceFullQuote,
  zunoKYCcustomer,
  zunoIssuePolicy,
  zunoOnlinePayment,
  zunoPdfDownload
};

const writeData = async (data) => {
  fs.writeFile(path, JSON.stringify(data), (error) => {
    if (error) {
      console.log("An error has occurred ", error);
      return;
    }
    console.log("Data written successfully to the file");
  });
};