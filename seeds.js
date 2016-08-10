var mongoose = require('mongoose');
var Campground = require('./models/campground');
var Comment = require('./models/comment');

var data = [
  {
    name: "Cloud's Rest",
    image: "https://pixabay.com/static/uploads/photo/2016/06/06/08/32/tent-1439061__180.jpg",
    description: "Peaceful campground"
  },
  {
    name: "Meow Meadows",
    image: "https://pixabay.com/static/uploads/photo/2015/02/26/15/41/ginger-cat-650545__180.jpg",
    description: "Bring your cat with you"
  },
  {
    name: "Canyon Floor",
    image: "https://pixabay.com/static/uploads/photo/2013/09/16/19/15/camp-182951__180.jpg",
    description: "Group camping fun!"
  }
]

function seedDB(){
  Campground.remove({}, function(err){
    if(err){
      console.log(err);
    }
    console.log("removed campgrounds!")

    data.forEach(function(seed){
      Campground.create(seed, function(err, campground){
        if(err){
          console.log(err);
        } else {
          console.log("Added a campground");
          Comment.create(
            {
              text: "this place is great, but I wish there was internet",
              author: "Homer"
            }, function(err, comment){
              if(err){
                console.log(err);
              } else {
                campground.comments.push(comment);
                campground.save();
                console.log("Created new comment");
              }
            });
        }
      });
    });
  });
}

module.exports = seedDB;