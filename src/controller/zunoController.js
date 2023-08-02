const fs = require("fs");
const HTTP_CODE = require("../constants/HTTP_CODE");
const API_URL = require("../constants/apiUrl");
const credentials = require("../confidential/credentials");
const zunoService = require("../services/zunoService");
const validation = require("../validation/inputParams.validation");
const path = "src/confidential/token.json";

const zunoAuth = async (req, res) => {
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
    console.log("result?.data?.access_token", result?.data?.access_token);
    await writeData(result?.data?.access_token);
    return res.status(result.statusCode).send(result).end();
  } catch (error) {
    console.error(error);
    return res.status(error.statusCode).json(error).end();
  }
};

const zunoServiceQuickQuote = async (req, res) => {
  const errorMessage = validation.inputParamsValidaton(req.body);
  if (errorMessage) {
    return res.status(HTTP_CODE.HTTP_RESPONSE_400).json(errorMessage).end();
  }
  try {
    const result = await zunoService.proceesZunoServiceQuickQuote(
      API_URL.FOUR_WHEELER.QUICK_QUOTE_URL,
      req.body
    );
    return res.status(HTTP_CODE.HTTP_RESPONSE_200).json(result).end();
  } catch (error) {
    console.error("getting error in controller", error);
    return res.status(error.statusCode).json(error).end();
  }
};

const zunoServiceFullQuote = async (req, res) => {
  try {
    const result = await zunoService.proceedZunoServiceFullQuote(
      API_URL.FOUR_WHEELER.FULL_QUOTE_URL,
      req.body
    );
    return res.status(HTTP_CODE.HTTP_RESPONSE_200).json(result).end();
  } catch (error) {
    console.error("getting error", error);
    return res.status(error.statusCode).json(error).end();
  }
};

const zunoKYCcustomer = async (req, res) => {
  try {
    const result = await zunoService.proceedZunoKYCcustomer(
      API_URL.FOUR_WHEELER.KYC_CUSTOMER_URL,
      req.body
    );
    return res.status(HTTP_CODE.HTTP_RESPONSE_200).json(result).end();
  } catch (error) {
    console.error("getting error", error);
    return res.status(error.statusCode).json(error).end();
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

module.exports = {
  zunoAuth,
  zunoServiceQuickQuote,
  zunoServiceFullQuote,
  zunoKYCcustomer,
  zunoIssuePolicy,
  zunoOnlinePayment,
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
