const mongoose = require('mongoose')

reservationSchema = mongoose.Schema({
  Name:{type:String, require:true},
  Time:{type:String, require:true},
  Party:{type:Number, require:true}
})

module.exports = mongoose.model('reservation', reservationSchema)


