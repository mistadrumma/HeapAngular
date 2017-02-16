// server.js
const express = require('express');
const path = require('path');

const app = express();
// Run the app by serving the static files
// in the dist directory
app.use(express.static(__dirname + '/dist'));

const forceSSL = function() {
  return function (req, res, next) {
    if (req.headers['x-forwarded-proto'] !== 'https') {
      return res.redirect(
       ['https://', req.get('Host'), req.url].join('')
      );
    }
    next();
  }
}

app.use(forceSSL());

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});


// listen (start app with node server.js) ======================================
var port = Number(process.env.PORT || 5000);
//var port = 3000;
app.listen(port, function() {
	console.log("Listening on " + port);
});
