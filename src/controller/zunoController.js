const HTTP_CODE = require("../constants/HTTP_CODE");
const API_URL = require("../constants/apiUrl");
const credentials = require("../confidential/credentials");
const zunoService = require("../services/zunoService");
const validation = require("../validation/inputParams.validation");

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
      API_URL.AUTH_TOKEN_URL
    );
    res.cookie("AUTH-TOKEN", result?.data?.access_token);
    return res
      .status(result.statusCode)
      .send(result)
      .end();
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
  const credential = {
    headers: {
      Authorization: `Bearer ${req.cookies["AUTH-TOKEN"]}`,
    },
  };

  try {
    const result = await zunoService.proceesZunoServiceQuickQuote(
      credential,
      API_URL.QUICK_QUOTE_URL,
      req.body
    );
    return res.status(HTTP_CODE.HTTP_RESPONSE_200).json(result).end();
  } catch (error) {
    console.error("getting error in controller", error);
    return res.status(error.statusCode).json(error).end();
  }
};

const zunoServiceFullQuote = async (req, res) => {
  const credential = {
    headers: {
      Authorization: `Bearer ${req.cookies["AUTH-TOKEN"]}`,
    },
  };
  try {
    const result = await zunoService.proceedZunoServiceFullQuote(
      credential,
      API_URL.FULL_QUOTE_URL,
      req.body
    );
    return res.status(HTTP_CODE.HTTP_RESPONSE_200).json(result).end();
  } catch (error) {
    console.error("getting error", error);
    return res.status(error.statusCode).json(error).end();
  }
};

const zunoKYcustomer = async (req, res) => {
  
  const credential = {
    headers: {
      Authorization: `Bearer ${req.cookies["AUTH-TOKEN"]}`,
    },
  };
  try {
    const result = await zunoService.proceedZunoKYCcustomer(
      credential,
      API_URL.KYC_CUSTOMER_URL,
      req.body
      // kycData
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
  zunoKYcustomer,
};