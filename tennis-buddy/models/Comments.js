var mongoose = require('mongoose');

var CommentSchema = new mongoose.Schema({
  body: String,
  author: String,
  upvotes: {type: Number, default: 0},
  game: { type: mongoose.Schema.Types.ObjectId, ref: 'Game' }
});

mongoose.model('Comment', CommentSchema);