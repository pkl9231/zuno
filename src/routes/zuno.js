const express = require("express");
const router = express.Router();
const service = require("../services/zunoService");

router
  .get("/", service.zunoService)
  .post("/quick-quote/zuno", service.zunoServiceQuicQuote)
  .post("/fullQuote/zuno", service.zunoServicePostQuote)
  .post("/issue-policy/zuno", service.zunoServiceRating)
  .post("/online-payment-request/zuno", service.zunoServiceRating)
  .post("/pdf-generation/zuno", service.zunoServiceRating);

module.exports = router;
