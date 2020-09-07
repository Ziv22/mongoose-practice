const mongoose      = require("mongoose")
const Schema        = mongoose.Schema

mongoose.connect("mongodb://localhost/booksDB")

const bookSchema    = new Schema({
    title: String,
    author: String,
    pages: Number,
    genres: [String],
    rating: String
})

const Book = mongoose.model("Book" , bookSchema )

module.exports = Book
