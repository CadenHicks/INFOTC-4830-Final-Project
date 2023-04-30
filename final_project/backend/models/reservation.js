const mongoose = require('mongoose')

reservationSchema = mongoose.Schema({
  name:{type:String, require:true},
  time:{type:String, require:true},
  party:{type:Number, require:true}
})

module.exports = mongoose.model('reservation', reservationSchema)


