const express = require('express');
const { getAllAuthors, createAuthor } = require('./author.controllers');
const authorRouter = express.Router();




authorRouter.get("/", getAllAuthors);
authorRouter.post("/", createAuthor);






module.exports = authorRouter;