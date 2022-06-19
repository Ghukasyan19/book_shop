const express = require('express');
const router = express.Router();

const BookController = require('../controllers/bookController');

router.post('/', BookController.createBook);
router.delete('/:id', BookController.RemoveBook);
router.put('/', BookController.updateBook);
router.get('/price/:price', BookControllergetBookByPrice);
router.get('/category/:name', BookController.getBookByCategory);
router.get('/aithor/:name', BookController.getBookByAuthor);

module.exports = router;
