const Book = require("../models/books")

//get all Books
const getBooks = (request, response) => {
    Book.find({})
    .then((book) => {
      response.status(200).send(book);
    })
    .catch((e) => {
      response.status(500).send(e.message);
    });
};

//get a Book
const getBook = (request, response) => {
    const { book_id } = request.params;
    Book.findById(book_id)
      .then((book) => {
        if (!book) response.status(404).send("Book not found");
        else response.status(200).send(book);
      })
      .catch((e) => {
        response.status(500).send(e.message);
      });
};

//create a Book
const createBook = (request, response) => {
    const data = request.body;
    Book.create(data)
      .then((book) => {
        response.status(201).send(book);
      })
      .catch((e) => {
        response.status(500).send(e.message);
      });
};

//update a Book
const updateBook = (request, response) => {
    const { book_id } = request.params;
    const data = request.body;
    Book.findByIdAndUpdate(book_id, data, { new: true, runValidators: true })
      .then((book) => {
        if (!book) response.status(404).send("Book not found");
        else response.status(200).send(book);
      })
      .catch((e) => {
        response.status(500).send(e.message);
      });
};

//delete a book
const deleteBook = (request, response) => {
    const { book_id } = request.params;
    Book.findByIdAndDelete(book_id)
      .then((book) => {
        if (!book) response.status(404).send("Book not found");
        else response.status(200).send("Done");
      })
      .catch((e) => {
        response.status(500).send(e.message);
      });
};

module.exports = {
    getBooks,
    getBook,
    createBook,
    updateBook,
    deleteBook,
};