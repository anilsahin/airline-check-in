var request = require('request');
var express = require('express');
var app = express();
var bodyParser = require('body-parser')

var port = process.env.PORT || 8082

var router = express.Router();

router.use(function(req,res,next){

    next();
})

var seatToHold = '6A'

var holdSeat = function(){

    request.put('http://localhost:8081/api/seats/', {form:{'isOnHold': true, 'number': seatToHold}}, function (error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log(body)
      }
    })
}

holdSeat();
