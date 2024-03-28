const  { AuthorModel } = require('../models/Author.model')

module.exports = {
    getAllAuthors: (req, res) => {
        AuthorModel
            .find()
            .then(allAuthors => res.json(allAuthors))
            .catch(err => res.json(err))
    },
    createAuthor: (req, res) => {
        AuthorModel
            .create(req.body)
            .then(createdAuthor => res.json(createdAuthor))
            .catch(err => res.json(err))
    },
    getAuthor: (req, res) => {
        AuthorModel
            .findById(req.params.id)
            .then(oneAuthor => {
                if (oneAuthor) {
                    res.json(oneAuthor)                    
                } else {
                    res.status(404).json({ message: 'Author not found' })
                }

            })
            .catch(err => {
                console.log(err);
                res.status(400).json({ message: 'Author not found' })
            })
    },
    updateAuthor: (req, res) => {
        AuthorModel
            .findOneAndUpdate(
                { _id: req.params.id },
                req.body,
                { new: true, runValidators: true }
            )
            .then(updatedAuthor => res.json(updatedAuthor))
            .catch(err => res.json(err))
    },
    deleteAuthor: (req, res) => {
        AuthorModel
            .findByIdAndDelete(req.params.id)
            .then(deletedAuthor => res.json(deletedAuthor))
            .catch(err => res.json(err))
    }       
}
    