const { model, Schema } = require('mongoose');

const AuthorSchema = new Schema({
  name: String,
  posts: [{type: Schema.Types.ObjectId, ref:"Post"}] // it array because author can have many posts
});

module.exports = model('Author', AuthorSchema);