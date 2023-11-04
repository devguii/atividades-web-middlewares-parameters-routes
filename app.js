var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
const atv1Router = require("./routes/atv1");
const atv2Router = require("./routes/atv2");
const atv3Router = require("./routes/atv3");
const atv4Router = require("./routes/atv4");
const atv5Router = require("./routes/atv5");
const atv6Router = require("./routes/atv6");
// const atv7Router = require("./routes/atv7");
// const atv8Router = require("./routes/atv8");
// const atv9Router = require("./routes/atv9");
// const atv10Router = require("./routes/atv10");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/atv1", atv1Router);
app.use("/atv2", atv2Router);
app.use("/atv3", atv3Router);
app.use("/atv4", atv4Router);
app.use("/atv5", atv5Router);
app.use("/atv6", atv6Router);
// app.use("/atv7", atv7Router);
// app.use("/atv8", atv8Router);
// app.use("/atv9", atv9Router);
// app.use("/atv10", atv10Router);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});
app.listen(3000);

module.exports = app;
