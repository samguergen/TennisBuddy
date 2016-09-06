var app = angular.module('tennisBuddy', ['ui.router']);


app.factory('posts', [function(){
  var o = {
    posts: [
      {comments: ''}]
  };
  return o;
}]);


app.controller('MainCtrl', [
'$scope', 'posts', '$stateParams',
function($scope, posts, $stateParams){
  $scope.test = 'Hello world!';

  $scope.game = {title: "", description: "", player_1: "", player_2: "", score: 0, winner: "", upvotes: 0};


  $scope.games = [
  {title: 'Tennis Game 1', description: "first tennis game", player_1: "", player_2: "", score: 0, winner: "", upvotes: 5},
  {title: 'Tennis Game 2', description: "", player_1: "", player_2: "", score: 0, winner: "", upvotes: 2},
  {title: 'Tennis Game 3', description: "", player_1: "", player_2: "", score: 0, winner: "", upvotes: 15},
  {title: 'Tennis Game 4', description: "", player_1: "", player_2: "", score: 0, winner: "", upvotes: 9},
  {title: 'Tennis Game 5', description: "", player_1: "", player_2: "", score: 0, winner: "", upvotes: 4}
];


$scope.addGame = function(theGame){
  $scope.games.push(theGame);
};


$scope.posts = posts.posts;

$scope.post = posts.posts[$stateParams.id];

 $scope.addPost = function(){
  if(!$scope.title || $scope.title === '') { return; }
  $scope.posts.push({
  title: $scope.title,
  link: $scope.link,
  upvotes: 0,
  comments: [
    {author: 'Joe', body: 'Cool post!', upvotes: 0},
    {author: 'Bob', body: 'Great idea but everything is wrong!', upvotes: 0}
  ]
});
}

  $scope.incrementUpvotes = function(post) {
    post.upvotes += 1;
  };
}]);


app.controller('PostsCtrl', [
'$scope',
'$stateParams',
'posts',
function($scope, $stateParams, posts){

  $scope.posts = posts.posts;

  $scope.post = posts.posts[$stateParams.id];

  $scope.addComment = function(){
  if($scope.body === '') { return; }
  $scope.post.comments.push({
    body: $scope.body,
    author: 'user',
    upvotes: 0
  });
  $scope.body = '';
};

}]);