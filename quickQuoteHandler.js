exports.handler = async (event, context, callback) => {
  const controller = require("./src/controller/zunoController");
  let body = JSON.parse(event.body); 
  try {
    let quickQuoteData = await controller.zunoServiceQuickQuote(body);
    return callback(null, quickQuoteData);
  } catch (error) {
    console.error(error)
    return callback(error);
  }
};
