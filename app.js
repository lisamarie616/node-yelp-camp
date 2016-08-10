var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Campground = require('./models/campground');
var seedDB = require('./seeds');
var app = express();

seedDB();
mongoose.connect("mongodb://localhost/yelp_camp");

app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine', 'ejs');

// Campground.create({
//     name: 'Granite Hill',
//     image: 'https://pixabay.com/static/uploads/photo/2013/09/16/19/15/camp-182951__180.jpg',
//     description: 'This is a huge granite hill, no bathrooms. No water. Beautiful granite!'
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
      res.render('index', {campgrounds: allCampgrounds}); 
    }
  });
});

app.get('/campgrounds/new', function(req, res){
  res.render('new');
});

app.post('/campgrounds', function(req, res){
  var name = req.body.name;
  var image = req.body.image;
  var desc = req.body.description;
  var newCampground = {name: name, image: image, description: desc};

  Campground.create(newCampground, function(err, newlyCreated){
    if(err){
      console.log(err);
    } else {
      res.redirect('/campgrounds');
    }
  });
});

app.get('/campgrounds/:id', function(req, res){
  Campground.findById(req.params.id, function(err, foundCampground){
    if(err){
      console.log(err);
    } else {
      res.render('show', {campground: foundCampground});
    }
  });
});

app.listen(3000, function(){
  console.log('YelpCamp server has started!');
});