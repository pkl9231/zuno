const controller = require("./src/controller/zunoController");

exports.handler = async (event, context, callback) => {
  try {
    await controller.zunoAuth();
  } catch (error) {
    callback(error);
  }
};