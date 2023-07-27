const authorization = (req, res, next)=>{
    const sessionToken = req.cookies['AUTH-TOKEN'];
    console.log("token", sessionToken);
    return next();
}

const wrapper = (statusCode, data) => {
  return {
    statusCode: data.error ? "401" : statusCode,
    data: data,
  };
};

module.exports = {
    authorization,
    wrapper,
}

