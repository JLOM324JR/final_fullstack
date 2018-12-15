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
// index page api
app.get('/', function (req, res) {
    res.send('Express is running');
});
var output = {
    status: 'success',
    message: 'REST API is working'
}
/*
app.get('/api/json', function (req, res) {
    res.status(500).json(output);
});
*/

app.get('/api/categories', db.getcategories)







var port = process.env.PORT || 8080;
app.listen(port, function () {
console.log('App is running on http://localhost:' + port);
});