const express = require("express");
const router = express.Router();
const service = require("../services/zunoService")

router
  .get("/", service.zunoService)
  .post("/get-quote", service.zunoServiceGetQuote)
  .post("/post-quote", service.zunoServicePostQuote)
  .post("/post-quote", service.zunoServiceRating)

module.exports = router;
