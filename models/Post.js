const { model, Schema } = require('mongoose');

const PostSchema = new Schema({
  title: String,
  body: String,
  author: {type: Schema.Types.ObjectId, ref:"Author"} // it is not array because post can have only one author
});

module.exports = model('Post', PostSchema);
