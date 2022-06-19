const Books = require('../models/books');
const {sequelize} = require('sequelize');

class BookService {
    static async createBook(title, author, price, category) {
        await Book.create({title, author, price, category});
    }

    static async getBookByPrice(bookPrice){
    return Book.findAll({where: {price: { bookPrice}}
    });
}
    static async getBookByCategory(bookCategory){
        return Book.findAll({where: {category:  bookCategory}})

    }

    static async getBookById(bookId){
        return Book.findAll({where: {Id:  bookId}})

    }

    static async getBookByAuthor(bookAuthor){
        return Book.findAll({where: {author: bookAuthor}})
        }
        static async removeBook(bookId){
        await Book.destroy({where:{Id:bookId}})
        }
        static async updateBook(title, category, price, author, id){
        await Book.update({title:title, category:category, price:price, author:author, id:id })
        }
    }

    module.exports = BookService;


