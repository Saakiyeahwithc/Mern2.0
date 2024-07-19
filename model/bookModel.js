const mongoose = require('mongoose')
//const Schema = mongoose.Schema

const bookSchema = new mongoose.Schema({
    bookName: {
        type: String
    },
    bookPrice: {
        type: String
    },
    authorName: {
        type: String
    },
    publishedAt: {
        type: String
    },
    isbnNumber: {
        type: Number
    }
})

const Book = mongoose.model('Book', bookSchema)
model.exports = Book