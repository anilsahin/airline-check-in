var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var CheckInSchema   = new Schema({
    name: String,
    paymentInfo: String,
    passengerID: Number,
    isCheckedIn: Boolean,
    checkInID: Number
});

module.exports = mongoose.model('Passenger', CheckInSchema);
