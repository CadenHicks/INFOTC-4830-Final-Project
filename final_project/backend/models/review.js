const mongoose = require('mongoose')

reviewSchema = mongoose.Schema({
  content:{type:String, require:true}
})

module.exports = mongoose.model('review', reviewSchema)


