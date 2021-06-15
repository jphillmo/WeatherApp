var createError = require('http-errors');   // Load http-errors
var express = require('express');           // Load Express
var path = require('path');                 // Load Path

var app = express();

// Server Routers
var indexRouter = require('./routes/index.js');

// Set view engine
app.set('views', 'views');
app.set('view engine', 'pug');

app.use(express.static('public'));

// Set app to use routers
app.use('/', indexRouter);

app.listen(3000, function(){
  console.log("Listening on port 3000!")
});

/* BE SURE TO INCLUDE ERROR.PUG IF YOU USE THIS
// ------------------------------------------
// ERROR HANDLING
// Catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});


// Error handler
app.use(function(err, req, res, next) {
  // Set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // Render the error page
  res.status(err.status || 500);
  res.render('error');
});
*/
module.exports = app;
