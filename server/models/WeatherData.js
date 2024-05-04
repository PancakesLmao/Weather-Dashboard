const mongoose = require('mongoose');

const weatherDataSchema = new mongoose.Schema({
    avgWindSpd:Number,
    baroPressure: Number,
    humidity:Number,
    mxWindSpd:Number,
    rainPerDay: Number,
    rainPerHr:Number,
    recordDate: String,
    RecordID:Number,
    recordTime:String,
    temp:Number,
    windDirect:Number
})

module.exports = mongoose.model('WeatherData', weatherDataSchema, 'WeatherStation');