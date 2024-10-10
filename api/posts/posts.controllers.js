const Post = require('../../models/Post');
const Author = require('../../models/Author');

exports.fetchPost = async (postId, next) => {
  try {
    const post = await Post.findById(postId);
    return post;
  } catch (error) {
    next(error);
  }
};

exports.postsCreate = async (req, res) => {
  try {
    const  authorID = req.body.author;

    // creating the post
    const newPost = await Post.create(req.body);

    // adding the new post to the authors posts array
    const author = await Author.findByIdAndUpdate(authorID, 
      { $push: { posts: newPost._id } });



    // updating the post with the author ID
    
    res.status(201).json(newPost);
  } catch (error) {
    next(error);
  }
};

exports.postsDelete = async (req, res) => {
  try {
    await Post.findByIdAndRemove({ _id: req.post.id });
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};

exports.postsUpdate = async (req, res) => {
  try {
    await Post.findByIdAndUpdate(req.post.id, req.body);
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};

exports.postsGet = async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (error) {
    next(error);
  }
};
