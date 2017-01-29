var express = require('express');
var app = express();
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var mongoose   = require('mongoose');
mongoose.connect('mongodb://localhost:27018/seat_availability');


var Models = require('./app/models/model')(mongoose);

var port = process.env.PORT || 8081

var router = express.Router();

router.use(function(req,res,next){

    next();
})

router.route('/seats')
    .post(function(req,res){

        var seat = new Models.Seat();
        seat.number = req.body.number;
        seat.group = req.body.group;
        seat.fee = req.body.fee;
        seat.isOnHold = req.body.isOnHold;
        seat.isReserved = req.body.isReserved;

        seat.save(function(err){
            if(err)
                res.send(err);

            res.json({ message: 'Seat created!' });
        });
    })
    .get(function(req, res) {
        Models.Seat.find(function(err, seats) {
            if (err)
                res.send(err);

            res.json(seats);
        });
    })
    .put(function(req,res){
        Models.Seat.findOne({'number': req.body.number}, function(err,seat){
            if(err)
                res.send(err);
            seat.isOnHold = req.body.isOnHold;
            seat.save(function(err){
                if(err)
                    res.send(err);

                    res.json({ message: 'Seat On Hold!' })
            });

        });
    });
router.route('/seats/:seat_id')
    .get(function(req,res){
        Models.Seat.findById(req.params.seat_id,function(err,seat){
            if(err)
                res.send(err);
            res.json(seat)
        });
    })
    .put(function(req,res){
        Models.Seat.findById(req.params.seat_id, function(err,seat){
            if(err)
                res.send(err);
            seat.isOnHold = req.body.isOnHold;
            seat.save(function(err){
                if(err)
                    res.send(err);

                    res.json({ message: 'Seat On Hold!' })
            });

        });
    })
    .delete(function(req,res){
        Models.Seat.remove({
            _id: req.params.seat_id
        }, function(err, seat){
            if(err)
                res.send(err);
            res.json({ message: 'Successfully deleted'})
        });
    });




app.use('/api', router);

app.listen(port);
console.log('Come to port '+ port );
