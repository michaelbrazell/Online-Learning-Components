// Requires JS and allows app to use Express API with the var express
var express = require('express');

// Create our app
var app = express();
const PORT = process.env.PORT  || 3000;

/*
  OpenWeatherMap doesnt' work on HTTPS so we have to Redirect HTTP traffic
  This is express middleware, expecting a request, response, and next
*/
app.use(function (req, res, next) {
  if (req.headers['x-forwarded-proto'] === 'https') {
    res.redirect('http://' + req.hostname + req.url);
  } else {
    next();
  }
})

// Call which folder to use, express starts static server, serving the directory "public"
app.use(express.static('public'));

// Runs on port 3000
app.listen(PORT, function() {
  console.log('Express server running on port ' + PORT);
});
