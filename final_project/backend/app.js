const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const ReviewModel = require('./models/review')


mongoose.connect("mongodb+srv://CadenHicks:starwars0614@cluster0.u40wcjz.mongodb.net/review?retryWrites=true&w=majority")
.then(() => {
  console.log('Connected to Database')
})
.catch(() =>{
  console.log('Connection Error')
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

app.use((req,res,next) => {
  res.setHeader("Access-Control-Allow-Origin","*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader("Access-Control-Allow-Methods",
  "GET, POST, PATCH, DELETE, OPTIONS"
  );
  console.log('Middleware');
  next();
})

app.post("/api/reviews",(req,res,next)=>{
  const review = new ReviewModel({
    content: req.body.content
  });
  review.save()
  console.log(review)
  res.status(201).json({
    message:'Review added successful'
  });
})

app.get('/api/reviews',(req,res,next) =>{
  ReviewModel.find().then(documents => {
    res.status(200).json({
      message: "This is fecthed data",
      reviews: documents
    });
  });
});


module.exports = app
