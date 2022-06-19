const BookService = require ('../services/bookservice');
const Books = require('../models/books');

class BookController{
    static async createBook(req, res){
        const {title, author, price, category} = req.body;
        await BookService.createBook(title, author, price, category);

        res.status(201).send(`Book successfully created!`);
    }
}
module.exports = BookController;
