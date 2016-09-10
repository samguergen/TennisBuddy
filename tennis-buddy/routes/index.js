var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Game = mongoose.model('Game');
var Comment = mongoose.model('Comment');

module.exports = router;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/games', function(req, res, next) {
  Game.find(function(err, games){
    if(err){ return next(err); }

    res.json(games);
  });
});

// router.post('/games', function(req, res, next) {
//   var game = new Game(req.body);

//   game.save(function(err, game){
//     if(err){ return next(err); }

//     res.json(game);
//   });
// });

// router.param('game', function(req, res, next, id) {
//   var query = Game.findById(id);

//   query.exec(function (err, game){
//     if (err) { return next(err); }
//     if (!game) { return next(new Error('can\'t find game')); }

//     req.game = game;
//     return next();
//   });
// });


// router.get('/games/:game', function(req, res) {
//   res.json(req.game);
// });

// router.put('/games/:game/upvote', function(req, res, next) {
//   req.game.upvote(function(err, game){
//     if (err) { return next(err); }

//     res.json(game);
//   });
// });

// router.post('/games/:game/comments', function(req, res, next) {
//   var comment = new Comment(req.body);
//   comment.game = req.game;

//   comment.save(function(err, comment){
//     if(err){ return next(err); }

//     req.game.comments.push(comment);
//     req.game.save(function(err, game) {
//       if(err){ return next(err); }

//       res.json(comment);
//     });
//   });
// });

// router.get('/games/:game', function(req, res, next) {
//   req.game.populate('comments', function(err, game) {
//     if (err) { return next(err); }

//     res.json(game);
//   });
// });
