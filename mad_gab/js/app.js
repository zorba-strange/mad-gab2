'use strict';

(function(){
  angular
    .module('mad', [
    'ui.router'
    ])
    .controller('IndexController',
    function(){
      var vm = this;
      vm.guesses = [];
      vm.games = [];
      vm.title;
      vm.users = [];
      vm.me;
      vm.userName = function(){
        vm.users.push(vm.user.name);
        vm.me = vm.user.name;
        vm.user.name="";
        document.getElementById('game_options').style.display = 'inline';
      };
      vm.userGuess = function(){
        console.log(vm.guess);
        vm.guesses.push(vm.guess);
        vm.guess="";
      };
      vm.gameNew = function(){
        console.log(vm.game.title);
        vm.games.push(vm.game.title);
        vm.title = vm.game.title;
        vm.game.title = "";
        console.log(vm.games);
      };
      vm.gameNewShow = function(){
        document.getElementById('game_form').style.display = 'inline';
      };
      vm.gameList = function(){
        document.getElementById('game_list').style.display = 'inline';
      };
    })
}());

