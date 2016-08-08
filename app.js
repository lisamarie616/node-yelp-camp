var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine', 'ejs');

var campgrounds = [
  {name: 'Salmon Creek', image: 'https://pixabay.com/static/uploads/photo/2016/06/06/08/32/tent-1439061__180.jpg'},
  {name: 'Granite Hill', image: 'https://pixabay.com/static/uploads/photo/2013/09/16/19/15/camp-182951__180.jpg'},
  {name: "Mountain Goat's Rest", image: 'https://pixabay.com/static/uploads/photo/2015/02/26/15/41/ginger-cat-650545__180.jpg'},
  {name: 'Salmon Creek', image: 'https://pixabay.com/static/uploads/photo/2016/06/06/08/32/tent-1439061__180.jpg'},
  {name: 'Granite Hill', image: 'https://pixabay.com/static/uploads/photo/2013/09/16/19/15/camp-182951__180.jpg'},
  {name: "Mountain Goat's Rest", image: 'https://pixabay.com/static/uploads/photo/2015/02/26/15/41/ginger-cat-650545__180.jpg'},
  {name: 'Salmon Creek', image: 'https://pixabay.com/static/uploads/photo/2016/06/06/08/32/tent-1439061__180.jpg'},
  {name: 'Granite Hill', image: 'https://pixabay.com/static/uploads/photo/2013/09/16/19/15/camp-182951__180.jpg'},
  {name: "Mountain Goat's Rest", image: 'https://pixabay.com/static/uploads/photo/2015/02/26/15/41/ginger-cat-650545__180.jpg'}
]

app.get('/', function(req, res){
  res.render('landing');
});

app.get('/campgrounds', function(req, res){
  res.render('campgrounds', {campgrounds: campgrounds});
});

app.get('/campgrounds/new', function(req, res){
  res.render('new');
});

app.post('/campgrounds', function(req, res){
  var name = req.body.name;
  var image = req.body.image;
  var newCampground = {name: name, image: image};

  campgrounds.push(newCampground);
  res.redirect('/campgrounds');
});

app.listen(3000, function(){
  console.log('YelpCamp server has started!');
});