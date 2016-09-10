var mongoose = require('mongoose');

var GameSchema = new mongoose.Schema({
  title: String,
  location: String,
  player_1: String,
  player_2: String,
  score: String,
  winner: String,
  upvotes: {type: Number, default: 0},
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }]
});


GameSchema.methods.upvote = function(cb) {
  this.upvotes += 1;
  this.save(cb);
};

mongoose.model('Game', GameSchema);