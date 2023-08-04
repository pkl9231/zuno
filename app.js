const createError = require('http-errors');
const express = require('express');
const serverless = require('serverless-http');
// const path = require('path');
// const cookieParser = require('cookie-parser');
const logger = require('morgan');
const zunoApiRouter = require('./src/routes/zuno');

const app = express();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', zunoApiRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

const port = process.env.PORT || 3000;
if (process.env.ENVIRONMENT === 'production') {
  console.log("server starting on production");
  exports.handler = serverless(app);
} else {
  app.listen(port, () => {
    console.log(`server started local on port ${port}.`);
  });
}
