var app = angular.module('tennisBuddy', ['ui.router']);


app.factory('games', ['$http', function($http){

  var o = {
    games: [
      {comments: []}]
  };

 o.getAll = function() {
    return $http.get('/games').success(function(data){
      angular.copy(data, o.games);
    });
  };

  o.create = function(game) {
    return $http.post('/games', game).success(function(data){
      o.games.push(data);
    });
  };

  o.upvote = function(game) {
    return $http.put('/games/' + game._id + '/upvote')
      .success(function(data){
        game.upvotes += 1;
      });
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

      games.create({
        title: $scope.title,
        description: $scope.description,
        location: $scope.location,
        player_1: '',
        player_2: '',
        score: '',
        winner: '',
        upvotes: 0,
      });
      $scope.title = '';
      $scope.description = '';
      $scope.location = '';

      // $scope.games.push({
      //   title: $scope.title,
      //   description: $scope.description,
      //   location: $scope.location,
      //   player_1: '',
      //   player_2: '',
      //   score: '',
      //   winner: '',
      //   upvotes: 0,
      //   comments: [
      //     {author: 'Joe', body: 'Cool game!', upvotes: 0},
      //     {author: 'Bob', body: 'Great idea but everything is wrong!', upvotes: 0}
      //   ]
      // });
    }

  $scope.incrementUpvote = function(game) {
    game.upvotes += 1;
  };

  $scope.incrementUpvotes = function(game) {
  games.upvote(game);
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