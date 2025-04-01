const mongoose = require("mongoose");

// Cekor 1: Napravete ja semata za ovie polinja
// title
// author
// language
// pages
// genre
// publicationDate
// publisher
// createdAt
// updatedAt

const bookSchema = mongoose.Schema(
  {
    title: String,
    author: String,
    language: String,
    pages: Number,
    genre: String,
    publicationDate: Date,
    publisher: String,

    // book: {
    //     type: mongoose.SchemaTypes.ObjectId,
    //     ref: "Book"
    // }
  },
  { timestamps: true }
);

//Cekor 2: Napravete CRUD za ovoj model/schema

const BookModel = mongoose.model("Book", bookSchema, "books");

// get
const getBooks = async () => {
  return await BookModel.find();
};

// create
const createBook = async (data) => {
  const newBook = new BookModel(data);
  return await newBook.save();
};

// update
const updateBook = async (id, data) => {
  return await BookModel.updateOne({ _id: id }, data);
};

// remove
const removeBook = async (id) => {
  return await BookModel.deleteOne({ _id: id });
};

module.exports = {
  getBooks,
  createBook,
  updateBook,
  removeBook,
};

// class BookModelClass {
//     constructor(data) {

//     }
// }

// new BookModelClass(data)

// bookObject = {
//     title: "Animal Farm",
//     author: "George Orwel",
//     language: "English",
//     pages: 130,
//     genre: "Political",
//     publicationDate: "1943-01-01",
//     publisher: "TRI",
// }
