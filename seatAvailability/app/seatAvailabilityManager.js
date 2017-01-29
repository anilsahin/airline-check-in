var express = require('express');
var app = express();
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var mongoose   = require('mongoose');
mongoose.connect('mongodb://localhost:27018/seat_availability'); // connect to our database

var Seat = require('./models/model');
var PlaneConfiguration = require('./models/model');
