var mongoose = require('mongoose')
var Schema = mongoose.Schema
var Hotel = new Schema({
    id: Number,
    name: String,
    fabricationDate: Date,
    nbrRooms: Number
})
module.exports = mongoose.model('hotels', Hotel)