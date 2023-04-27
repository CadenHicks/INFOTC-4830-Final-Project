const mongoose = require('mongoose')

reviewSchema = mongoose.Schema({
  title:{type:String, require:true},
  content:{type:String, require:true},
  stars:{type:Number, require:true}
})

module.exports = mongoose.model('review', reviewSchema)


