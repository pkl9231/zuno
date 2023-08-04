exports.handler = async (event, context, callback) => {
  const controller = require("./src/controller/zunoController");
  if (!event.body) {
    return callback(null, "missing body data");
  }
  let body = JSON.parse(event.body); 
  try {
    let quickQuoteData = await controller.zunoKYCcustomer(body);
    return callback(null, quickQuoteData);
  } catch (error) {
    console.error(error);
    return callback(error);
  }
};
