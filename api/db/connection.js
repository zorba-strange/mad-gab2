var mongoose = require('mongoose');

var MadgabSchema = new mongoose.Schema({
  ans: String,
  obs: String
});

var UserSchema = new mongoose.Schema({
  name: String,
  wins: Number
});

var GameSchema = new mongoose.Schema({
  title: String,
  users: [UserSchema]
});

mongoose.model("Madgab", MadgabSchema);
mongoose.model("User", UserSchema);
mongoose.model("Game", GameSchema);

mongoose.connect('mongodb://localhost/madgab');

module.exports = mongoose;
