const customAxios = require("../axios/axios.config");
const HTTP_CODE = require("../constants/HTTP_CODE");
const utils = require("../helpers/utils");

const proceedZunoAuth = async (credential, url) => {
  try {
    const result = await customAxios.API.post(url, "", credential);
    return  utils.wrapper(result.data);
  } catch (error) {
    console.error(error);
    throw {
      message: error?.response?.data?.message,
      statusCode: error?.response?.status,
    };
  }
};

const proceesZunoServiceQuickQuote = async (url, bodyData) => {
  try {
    const result = await customAxios.API.post(url, bodyData);
    console.log("getting data", result);
    return utils.wrapper(result.data);
  } catch (error) {
    console.error("getting error in service", error?.response);
    return {
      message: error?.response?.data?.message,
      statusCode: error?.response?.status,
    };
  }
};

const proceedZunoServiceFullQuote = async (url, bodyData) => {
  try {
    const result = await customAxios.API.post(url, bodyData);
    console.log("getting data", result);
    return utils.wrapper(result.data);
  } catch (error) {
    console.log("getting error", error?.response);
    return {
      message: error?.response?.data?.message,
      statusCode: error?.response?.status,
    };
  }
};

const proceedZunoKYCcustomer = async (url, bodyData) => {
  try {
    const result = await customAxios.API.post(url, bodyData);
    console.log("getting data", result);
    return utils.wrapper(result.data);
  } catch (error) {
    console.log("getting error", error);
    return {
      message: error?.response?.data?.message,
      statusCode: error?.response?.status,
    };
  }
};

const proceedZunoIssuePolicy = async (url, bodyData) => {
  try {
    const result = await customAxios.API.post(url, bodyData);
    return result.data;
  } catch (error) {
    console.log("getting error", error);
    throw {
      message: error?.response?.data?.message,
      statusCode: error?.response?.status,
    };
  }
};

const proceedZunoOnlinePayment = async (url, bodyData) => {
  try {
    const result = await customAxios.API.post(url, bodyData);
    return result.data;
  } catch (error) {
    console.log("getting error", error);
    throw {
      message: error?.response?.data?.message,
      statusCode: error?.response?.status,
    };
  }
};

const proceedZunoPdfDownload = async (url, bodyData) => {
  try {
    const result = await customAxios.API.post(url, bodyData);
    return result.data;
  } catch (error) {
    console.log("getting error", error);
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
  proceedZunoOnlinePayment,
  proceedZunoPdfDownload,
};
