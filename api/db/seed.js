var mongoose = require('./connection')

var Madgab = mongoose.model("Madgab");
var User = mongoose.model("User");
var Game = mongoose.model("Game");

var madgab1 = { ans: "sick and tired of it", obs: "sea can't higher dove fit"}
var madgab2 = { ans: "a king size bed", obs: "ache inks high sped"}
var madgab3 = { ans: "he's a ladies man", obs: "easel aid ease man"}

var user1 = { name: "user1", wins: 0 }
var user2 = { name: "unsweetened green tea", wins: 0 }

var game1 = { title: "game1" }

var madgabs = [madgab1, madgab2, madgab3]
var users = [user1, user2]
var games = [game1]

User.remove({}).then(function(err) {
  if(err){
    console.log(err)
  } else {
  console.log("balls");
  }
User.collection.insert(users, function(err) {
  if(err){
    console.log(err)
  } else {
  console.log("User");
  }
  })
})

Game.remove({}).then(function() {
  Game.collection.insert(games, function() {
    console.log("Game")
  })
})

Madgab.remove({}).then(function() {
  Madgab.collection.insert(madgabs, function() {
    console.log("Madgab");
  })
})
