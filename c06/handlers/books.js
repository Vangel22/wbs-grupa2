const { getBooks } = require("../models/books");

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

// createNewBook
// updateCurrentBook
// removeCurrentBook
