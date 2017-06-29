var express = require('express');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
const cors = require('cors');
const routes = require("./routes");

var app = express();

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(cors());
// app.use(handlebars);

app.use("/", routes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: req.app.get("env") === "development" ? err : {}
  });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("ready");
});

module.exports = app;
