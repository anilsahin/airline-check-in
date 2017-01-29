var express = require('express');
var app = express();
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var mongoose   = require('mongoose');
mongoose.connect('mongodb://localhost:27017/airline_checkin'); // connect to our database


var Passenger = require('./models/checkIn');



var setCheckInID = function(checkInID){

    Passenger.findOne({ 'checkInID': checkInID }, function (err, passenger) {
      if (err) return handleError(err);
      passenger.checkInID = checkInID;
      passenger.isCheckedIn = true;
      passenger.save();
    })
}

var holdSeat;// should take passengerID and seat choice of passenger

var holdSeatRandom; // should just take passengerID

var getAvailableSeats;
