const {
  getBooks,
  createBook,
  updateBook,
  removeBook,
  getAuthorBooks,
} = require("../models/books");

// Cekor 3 - Implementacija na handleri

const getAllBooks = async (req, res) => {
  try {
    const books = await getBooks();
    return res.status(200).send(books);
  } catch (err) {
    console.log(err);
    return res.status(500).send("Internal Server Error!");
  }
};

const getAllBooksForAuthor = async (req, res) => {
  try {
    const books = await getAuthorBooks(req.auth.id);
    return res.status(200).send(books);
  } catch (err) {
    console.log(err);
    return res.status(500).send("Internal Server Error!");
  }
};

// createNewBook
const createNewBook = async (req, res) => {
  try {
    const data = {
      ...req.body,
      author_id: req.auth.id,
    };
    await createBook(data);
    return res.status(200).send("Book created successfully!");
  } catch (err) {
    console.log(err);
    return res.status(500).send("Internal Server Error!");
  }
};

// updateCurrentBook
const updateCurrentBook = async (req, res) => {
  try {
    await updateBook(req.params.id, req.body);
    return res.status(200).send("Book updated successfully!");
  } catch (err) {
    console.log(err);
    return res.status(500).send("Internal Server Error!");
  }
};

// removeCurrentBook
const removeCurrentBook = async (req, res) => {
  try {
    await removeBook(req.params.id);
    return res.status(200).send("Book deleted successfully!");
  } catch (err) {
    console.log(err);
    return res.status(500).send("Internal Server Error!");
  }
};

module.exports = {
  getAllBooks,
  createNewBook,
  updateCurrentBook,
  removeCurrentBook,
  getAllBooksForAuthor,
};
