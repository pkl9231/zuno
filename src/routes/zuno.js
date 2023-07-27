const express = require("express");
const router = express.Router();
const controller = require("../controller/zunoController");
// const helpers = require("../helpers/utils")

router
  .post("/auth/zuno", controller.zunoAuth)
  .post("/quick-quote/zuno", controller.zunoServiceQuickQuote)
  .post("/full-quote/zuno", controller.zunoServiceFullQuote)
  // .post("/issue-policy/zuno", service.zunoServiceRating)
  // .post("/online-payment-request/zuno", service.zunoServiceRating)
  // .post("/pdf-generation/zuno", service.zunoServiceRating);

module.exports = router;
