const Author = require("../models/author.model")


module.exports = {
    // say hello
    hello: (req, res) => {
        res.json({ message: "Hello World" });
    },

    // get all
    allAuthors: (req, res) => {
        Author.find()
            .then(authors => {
                res.json(authors)
            })
            .catch((err) => {
                res.json(err)
            })
    },

    // get one 
    oneAuthor: (req, res) => {
        Author.findOne({ _id: req.params.id })
            .then(getOneAuthor => {
                res.json(getOneAuthor)
            })
            .catch((err) => {
                res.json(err)
            })
    },

    // add new user
    addAuthor: (req, res) => {
        Author.create(req.body)
            .then(newAuthor => {
                res.json(newAuthor)
            })
            .catch((err) => {
                res.status(400).json(err)
            })
    },


    updateAuthor: (req, res) => {
        Author.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true }
        )
            .then(updatedAuthor => {
                res.json(updatedAuthor)
            })
            .catch((err) => {
                res.status(400).json(err)
            });
    },


    // delete one 
    deleteAuthor: (req, res) => {
        Author.deleteOne({ _id: req.params.id })
            .then(result => {
                res.json(result)
            })
            .catch((err) => {
                res.json(err)
            })
    }
}