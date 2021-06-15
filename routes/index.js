var express = require('express');
var router = express.Router();

// Get the home page
router.get('/', function(req, res, next) {
  res.render('index', { title: 'WeatherApp', message: 'Welcome to the WeatherApp!' })
});

module.exports = router;