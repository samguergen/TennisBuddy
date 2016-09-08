var app = angular.module('tennisBuddy', ['ui.router']);


app.factory('games', [function(){
  var o = {
    games: [
      {comments: []}]
  };
  return o;
}]);


app.controller('MainCtrl', [
'$scope', 'games', '$stateParams', function($scope, games, $stateParams){

  $scope.test = 'Hello world!';

  $scope.games = games.games;

  $scope.game = games.games[$stateParams.id];

   $scope.addGame = function(){
      if(!$scope.title || $scope.title === '') { return; }
      $scope.games.push({
        title: $scope.title,
        description: $scope.description,
        location: $scope.location,
        player_1: '',
        player_2: '',
        score: '',
        winner: '',
        upvotes: 0,
        comments: [
          {author: 'Joe', body: 'Cool game!', upvotes: 0},
          {author: 'Bob', body: 'Great idea but everything is wrong!', upvotes: 0}
        ]
      });
    }

  $scope.incrementUpvotes = function(game) {
    game.upvotes += 1;
  };

}]);



app.controller('GamesCtrl', [
'$scope','$stateParams','games',function($scope, $stateParams, games){

  $scope.games = games.games;

  $scope.game = games.games[$stateParams.id];

  $scope.addComment = function(){
    if($scope.body === '') { return; }
    $scope.game.comments.push({
      body: $scope.body,
      author: 'user',
      upvotes: 0
    });
    $scope.body = '';
  };

}]);