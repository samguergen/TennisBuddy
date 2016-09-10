var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Game = mongoose.model('Game');
var Comment = mongoose.model('Comment');

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


module.exports = router;
