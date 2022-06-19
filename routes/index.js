const express = require('express');

const bookRoute = require('./bookRoute');

const router = express.Router();

//router.post('/', BookController.createBook);

router.use('/book', bookRoute);

module.exports = router
