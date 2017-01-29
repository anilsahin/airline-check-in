var express = require('express');
var app = express();
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var mongoose   = require('mongoose');
mongoose.connect('mongodb://localhost:27017/airline_checkin'); 

var Passenger = require('./app/models/checkIn');

var port = process.env.PORT || 8080

var router = express.Router();

router.use(function(req,res,next){

    next();
})

router.route('/passengers')
    .post(function(req,res){

        var passenger = new Passenger();
        passenger.name = req.body.name;
        passenger.paymentInfo = req.body.paymentInfo;
        passenger.passengerID = req.body.passengerID;
        passenger.isCheckedIn = req.body.isCheckedIn;
        passenger.checkInID = req.body.checkInID;

        passenger.save(function(err){
            if(err)
                res.send(err);

            res.json({ message: 'Passenger created!' });
        });
    })
    .get(function(req, res) {
        Passenger.find(function(err, passengers) {
            if (err)
                res.send(err);

            res.json(passengers);
        });
    });
router.route('/passengers/:passenger_id')
    .get(function(req,res){
        Passenger.findById(req.params.passenger_id,function(err,passenger){
            if(err)
                res.send(err);
            res.json(passenger)
        });
    })
    .put(function(req,res){
        Passenger.findById(req.params.passenger_id, function(err,passenger){
            if(err)
                res.send(err);

            passenger.name = req.body.name;
            passenger.save(function(err){
                if(err)
                    res.send(err);

                    res.json({ message: 'Passenger updated!' })
            });

        });
    })
    .delete(function(req,res){
        Passenger.remove({
            _id: req.params.passenger_id
        }, function(err, passenger){
            if(err)
                res.send(err);
            res.json({ message: 'Successfully deleted'})
        });
    });



app.use('/api', router);

app.listen(port);
console.log('Come to port '+ port );
