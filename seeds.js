var mongoose = require('mongoose');
var Campground = require('./models/campground');
var Comment = require('./models/comment');

var data = [
  {
    name: "Cloud's Rest",
    image: "https://pixabay.com/static/uploads/photo/2016/06/06/08/32/tent-1439061__180.jpg",
    description: "Lorem ipsum dolor sit amet mittens aquarium vaccination purr. Roll Over right paw throw critters feathers lazy dog grooming slobber fluffy drool maine coon cat. Collar brush yawn aquarium behavior groom play dead bed. Dinnertime puppy behavior Rover kibble bird seed fetch dinnertime feathers gimme five furry pet Snowball smooshy speak wagging Scooby snacks water dog Spike swimming. Lol Catz small animals chirp cage aquarium puppy food stick leash birds litter twine cat house train furry. Mouse groom litter box lazy cat pet play dead.Chew kibble feathers dog smooshy catch chew kibble nap wagging toy dog house Tigger. Biscuit shake lick finch pet food house train. Chew speak chow head Buddy cat aquatic canary kibble. Bark barky commands house train canary biscuit mouse leash teeth small animals chow cage chew food lazy cat small animals scratcher feathers tuxedo toys. Snowball canary string food fur fleas stay water dog Tigger collar pet supplies bird seed foot Spike purr play. Wagging dinnertime crate smooshy birds fleas tuxedo vitamins lazy cat bird dog string ball treats Snowball. Water Dog heel play dead litter box canary teeth kibble commands. Feathers slobber fetch sit slobber litter kibble. Toys dinnertime puppy lazy cat run nap dog bird seed pet aquatic slobber lazy cat litter box.Hamster crate fetch chow behavior grooming kitten feathers toys food litter box grooming dog house bedding twine toys smooshy litter box grooming. Food speak walk harness slobbery groom lol catz biscuit. Fleas lick food cat kibble nap. Smooshy Tigger dinnertime shake stay pet dog pet food dog house nest fluffy stick lick litter box aquatic water dog."
  },
  {
    name: "Meow Meadows",
    image: "https://pixabay.com/static/uploads/photo/2015/02/26/15/41/ginger-cat-650545__180.jpg",
    description: "Lorem ipsum dolor sit amet mittens aquarium vaccination purr. Roll Over right paw throw critters feathers lazy dog grooming slobber fluffy drool maine coon cat. Collar brush yawn aquarium behavior groom play dead bed. Dinnertime puppy behavior Rover kibble bird seed fetch dinnertime feathers gimme five furry pet Snowball smooshy speak wagging Scooby snacks water dog Spike swimming. Lol Catz small animals chirp cage aquarium puppy food stick leash birds litter twine cat house train furry. Mouse groom litter box lazy cat pet play dead.Chew kibble feathers dog smooshy catch chew kibble nap wagging toy dog house Tigger. Biscuit shake lick finch pet food house train. Chew speak chow head Buddy cat aquatic canary kibble. Bark barky commands house train canary biscuit mouse leash teeth small animals chow cage chew food lazy cat small animals scratcher feathers tuxedo toys. Snowball canary string food fur fleas stay water dog Tigger collar pet supplies bird seed foot Spike purr play. Wagging dinnertime crate smooshy birds fleas tuxedo vitamins lazy cat bird dog string ball treats Snowball. Water Dog heel play dead litter box canary teeth kibble commands. Feathers slobber fetch sit slobber litter kibble. Toys dinnertime puppy lazy cat run nap dog bird seed pet aquatic slobber lazy cat litter box.Hamster crate fetch chow behavior grooming kitten feathers toys food litter box grooming dog house bedding twine toys smooshy litter box grooming. Food speak walk harness slobbery groom lol catz biscuit. Fleas lick food cat kibble nap. Smooshy Tigger dinnertime shake stay pet dog pet food dog house nest fluffy stick lick litter box aquatic water dog."
  },
  {
    name: "Canyon Floor",
    image: "https://pixabay.com/static/uploads/photo/2013/09/16/19/15/camp-182951__180.jpg",
    description: "Lorem ipsum dolor sit amet mittens aquarium vaccination purr. Roll Over right paw throw critters feathers lazy dog grooming slobber fluffy drool maine coon cat. Collar brush yawn aquarium behavior groom play dead bed. Dinnertime puppy behavior Rover kibble bird seed fetch dinnertime feathers gimme five furry pet Snowball smooshy speak wagging Scooby snacks water dog Spike swimming. Lol Catz small animals chirp cage aquarium puppy food stick leash birds litter twine cat house train furry. Mouse groom litter box lazy cat pet play dead.Chew kibble feathers dog smooshy catch chew kibble nap wagging toy dog house Tigger. Biscuit shake lick finch pet food house train. Chew speak chow head Buddy cat aquatic canary kibble. Bark barky commands house train canary biscuit mouse leash teeth small animals chow cage chew food lazy cat small animals scratcher feathers tuxedo toys. Snowball canary string food fur fleas stay water dog Tigger collar pet supplies bird seed foot Spike purr play. Wagging dinnertime crate smooshy birds fleas tuxedo vitamins lazy cat bird dog string ball treats Snowball. Water Dog heel play dead litter box canary teeth kibble commands. Feathers slobber fetch sit slobber litter kibble. Toys dinnertime puppy lazy cat run nap dog bird seed pet aquatic slobber lazy cat litter box.Hamster crate fetch chow behavior grooming kitten feathers toys food litter box grooming dog house bedding twine toys smooshy litter box grooming. Food speak walk harness slobbery groom lol catz biscuit. Fleas lick food cat kibble nap. Smooshy Tigger dinnertime shake stay pet dog pet food dog house nest fluffy stick lick litter box aquatic water dog."
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