const customAxios = require("../axios/axios.config");
const HTTP_CODE = require("../constants/HTTP_CODE");
const utils = require("../helpers/utils");

const proceedZunoAuth = async (req, credential, url) => {
  try {
    const result = await customAxios.API(req).post(url, "", credential);
    return utils.wrapper(HTTP_CODE.HTTP_RESPONSE_200, result.data);
  } catch (error) {
    console.error(error);
    throw {
      message: error?.response?.data?.message,
      statusCode: error?.response?.status,
    };
  }
};

const proceesZunoServiceQuickQuote = async (credential, url, bodyData) => {
  try {
    const result = await customAxios.API.post(url, bodyData, credential);
    return result.data;
  } catch (error) {
    console.log("getting error in service", error?.response);
    throw {
      message: error?.response?.data?.message,
      statusCode: error?.response?.status,
    };
  }
};

const proceedZunoServiceFullQuote = async (credential, url, bodyData) => {
  try {
    const result = await customAxios.API.post(url, bodyData, credential);
    return result.data;
  } catch (error) {
    console.log("getting error", error?.response);
    throw {
      message: error?.response?.data?.message,
      statusCode: error?.response?.status,
    };
  }
};

const proceedZunoKYCcustomer = async (credential, url, bodyData) => {
  try {
    const result = await customAxios.API().post(url, bodyData, credential);
    return result.data;
  } catch (error) {
    console.log("getting error", error?.response);
    throw {
      message: error?.response?.data?.message,
      statusCode: error?.response?.status,
    };
  }
};

const proceedZunoIssuePolicy = async (credential, url, bodyData) => {
  try {
    const result = await customAxios.API.post(url, bodyData, credential);
    return result.data;
  } catch (error) {
    console.log("getting error", error?.response);
    throw {
      message: error?.response?.data?.message,
      statusCode: error?.response?.status,
    };
  }
};

module.exports = {
  proceedZunoAuth,
  proceesZunoServiceQuickQuote,
  proceedZunoServiceFullQuote,
  proceedZunoKYCcustomer,
  proceedZunoIssuePolicy,
};
