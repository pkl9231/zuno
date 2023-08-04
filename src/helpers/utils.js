const authorization = (req, res, next) => {
  const sessionToken = req.cookies["AUTH-TOKEN"];
  console.log("token", sessionToken);
  return next();
};

const wrapper = (statusCode, data) => {
  return {
    body: { data },
  };
};

module.exports = {
  authorization,
  wrapper,
};
