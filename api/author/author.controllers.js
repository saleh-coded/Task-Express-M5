const Author = require('../../models/Author');

const getAllAuthors = async (req, res, next) => {
    try {

        const authors = await Author.find().populate('posts');
        return res.status(200).json(authors);
    } catch (error) {
        next(error);
        
    }
};


const createAuthor = async (req, res, next) => {
    try {
        const newAuthor = await Author.create(req.body);
        return res.status(201).json(newAuthor);
    } catch (error) {
        next(error);
    }
};


module.exports = {
    getAllAuthors,
    createAuthor    
};
