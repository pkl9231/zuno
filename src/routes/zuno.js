const express = require("express");
const router = express.Router();
const controller = require("../controller/zunoController");
// const helpers = require("../helpers/utils")

router
  .post("/auth/zuno", controller.zunoAuth)
  .post("/quick-quote/zuno", controller.zunoServiceQuickQuote)
  .post("/full-quote/zuno", controller.zunoServiceFullQuote)
  .post("/kyc/zuno", controller.zunoKYCcustomer)
  .post("/issue-policy/zuno", controller.zunoIssuePolicy)
  .post("/online-payment-request/zuno", controller.zunoOnlinePayment)
  .post("/pdf-generation/zuno", controller.zunoPdfDownload);

module.exports = router;
