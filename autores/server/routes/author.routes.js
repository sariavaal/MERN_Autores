const express = require('express')

const AuthorController = require('../controllers/author.controller')

const AuthorRouter = express.Router()

//api/author
AuthorRouter.get('/', AuthorController.getAllAuthors)
AuthorRouter.get('/:id', AuthorController.getAuthor)
AuthorRouter.post('/', AuthorController.createAuthor)
AuthorRouter.put('/:id', AuthorController.updateAuthor)
AuthorRouter.delete('/:id', AuthorController.deleteAuthor)

module.exports = AuthorRouter

