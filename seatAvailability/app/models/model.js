var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

module.exports = function(mongoose){
    var SeatSchema = new Schema({
        number: String,
        group: String,
        fee: Number,
        isOnHold: Boolean,
        isReserved: Boolean
    });

    var PlaneConfigurationSchema = new Schema({
        seatsFree: [SeatSchema],
        seatsAisle: [SeatSchema],
        seatsWindow: [SeatSchema],
        seatsLegRoom: [SeatSchema]
    });

    var models = {
        'Seat': mongoose.model('Seat', SeatSchema),
        'PlaneConfig': mongoose.model('PlaneConfig',PlaneConfigurationSchema )
    }

    return models;
}
