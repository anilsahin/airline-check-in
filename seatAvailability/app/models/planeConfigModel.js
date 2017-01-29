var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var Seat = require('./seatModel');

var PlaneConfigurationSchema = new Schema({
    seatsFree: [Seat],
    seatsAisle: [Seat],
    seatsWindow: [Seat],
    seatsLegRoom: [Seat]
});

module.exports = mongoose.model('PlaneConfiguration', PlaneConfigurationSchema);
