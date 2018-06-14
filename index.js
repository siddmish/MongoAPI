var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var mroute = require("./mroutes/mroute");

var app = express();
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost/capgemini");

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function () {

    console.log("mongo db connection is open..!!");
});

app.listen("4780", function () {
    console.log("Server is listeneing on 4780");
});

app.use('/mongo-api',mroute);

