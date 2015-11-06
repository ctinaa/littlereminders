var express = require("express");
var app = express();
var passport = passport();
app.use(express.static(__dirname + '/public'));
app.get('/', function(req, res) {

});
app.get('api',function(req,res) {

});
app.listen(4000);