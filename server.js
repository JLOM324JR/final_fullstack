var express = require('express');
var app = express();
var cors = require('cors')
var db = require('./database.js') //connect database
app.use(cors())

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
extended: true
}));

//Add  rounting 
// index page
app.get('/', function (req, res) {
    res.send('Express is running');
});
var port = process.env.PORT || 8080;
app.listen(port, function () {
console.log('App is running on http://localhost:' + port);
});