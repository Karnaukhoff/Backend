const router = require('express').Router()
const loggerThree = require("../middleware/loggerThree");
const {getBooks, getBook, createBook, updateBook, deleteBook} = require("../controllers/books");

router.use(loggerThree);

router.get('/library', getBooks);
router.get('/library/:book_id', getBook);
router.post('/library', createBook);
router.patch('/library/:book_id', updateBook);
router.delete('/library/:book_id', deleteBook);

module.exports = router;