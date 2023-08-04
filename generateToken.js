exports.handler = async (event, context, callback) => {
  const controller = require("./src/controller/zunoController");
  try {
    let token = await controller.zunoAuth();
    return callback(null, token);
  } catch (error) {
    console.error(error)
    return callback(error);
  }
};
