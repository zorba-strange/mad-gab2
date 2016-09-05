var express = require('express');
var mongoose = require('./db/connection');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var Madgab = mongoose.model('Madgab');

app.use("/assets", express.static("public"));
// app.get('/', function(req, res){
//   res.sendFile(__dirname + '/index.html');
// });

app.get('/api/madgabs', function(req, res){
  Madgab.find({}).then(function(madgabs){
    res.json({ madgabs });
  })
})

app.get('/api/users', function(req, res){
  User.find({}).then(function(users){
    res.json({ users });
  })
})

app.get('/api/games', function(req, res){
  Game.find({}).then(function(games){
    res.json({ games });
  })
})

http.listen(3000, function(){
  console.log("***3000***")
});
