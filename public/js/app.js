var app = angular.module('tennisBuddy', []);

app.controller('MainCtrl', [
'$scope',
function($scope){
  $scope.test = 'Hello world!';

  $scope.game = {title: "", description: "", player_1: "", player_2: "", score: 0, winner: "", upvotes: 0};


  $scope.games = [
  {title: 'Tennis Game 1', description: "first tennis game", player_1: "", player_2: "", score: 0, winner: "", upvotes: 5},
  {title: 'Tennis Game 2', description: "", , player_1: "", player_2: "", score: 0, winner: "", upvotes: 2},
  {title: 'Tennis Game 3', description: "", , player_1: "", player_2: "", score: 0, winner: "", upvotes: 15},
  {title: 'Tennis Game 4', description: "", , player_1: "", player_2: "", score: 0, winner: "", upvotes: 9},
  {title: 'Tennis Game 5', description: "", , player_1: "", player_2: "", score: 0, winner: "", upvotes: 4}
];


$scope.addGame = function(theGame){
  $scope.games.push(theGame);
};

$scope.posts = [
  {title: 'Post Title 1', description: "", upvotes: 5},
  {title: 'Post Title 2', description: "", upvotes: 2},
  {title: 'Post Title 3', description: "", upvotes: 15},
  {title: 'Post Title 4', description: "", upvotes: 9},
  {title: 'Post Title 5', description: "", upvotes: 4}
];

 $scope.addPost = function(){
  if(!$scope.title || $scope.title === '') { return; }
  $scope.posts.push({
    title: $scope.title,
    link: $scope.link,
    upvotes: 0
  });
  $scope.title = '';
  $scope.link = '';
};

  $scope.incrementUpvotes = function(post) {
    post.upvotes += 1;
  };
}]);