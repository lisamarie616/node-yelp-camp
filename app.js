var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var app = express();

mongoose.connect("mongodb://localhost/yelp_camp");

app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine', 'ejs');

// SCHEMA SETUP
var campgroundSchema = new mongoose.Schema({
  name: String,
  image: String
});

var Campground = mongoose.model("Campground", campgroundSchema);

// Campground.create({
//     name: 'Granite Hill',
//     image: 'https://pixabay.com/static/uploads/photo/2013/09/16/19/15/camp-182951__180.jpg'
//   }, function(err, campground){
//   if(err){
//     console.log(err)
//   } else {
//     console.log("newly created campground:");
//     console.log(campground);
//   }
// });

app.get('/', function(req, res){
  res.render('landing');
});

app.get('/campgrounds', function(req, res){
  Campground.find({}, function(err, allCampgrounds){
    if(err){
      console.log(err);
    } else {
      res.render('campgrounds', {campgrounds: allCampgrounds}); 
    }
  });
});

app.get('/campgrounds/new', function(req, res){
  res.render('new');
});

app.post('/campgrounds', function(req, res){
  var name = req.body.name;
  var image = req.body.image;
  var newCampground = {name: name, image: image};

  Campground.create(newCampground, function(err, newlyCreated){
    if(err){
      console.log(err);
    } else {
      res.redirect('/campgrounds');
    }
  });
});

app.listen(3000, function(){
  console.log('YelpCamp server has started!');
});