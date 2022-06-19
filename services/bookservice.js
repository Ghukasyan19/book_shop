const Books = require('../models/books');
const {sequelize} = require('sequelize');

class BookService {
    static async createBook(title, author, price, category) {
        await Books.create({title, author, price, category});
    }

    static async getBookByPrice(bookPrice){
    return Books.findAll({where: {price: { bookPrice}}
    });
}
    static async getBookByCategory(bookCategory){
        return Books.findAll({where: {category:  bookCategory}})

    }

    static async getBookById(bookId){
        return Books.findAll({where: {Id:  bookId}})

    }

    static async getBookByAuthor(bookAuthor){
        return Books.findAll({where: {author: bookAuthor}})
        }
        static async removeBook(bookId){
        await Books.destroy({where:{Id:bookId}})
        }
        static async updateBook(title, category, price, author, id){
        await Books.update({title:title, category:category, price:price, author:author, id:id })
        }
    }

    module.exports = BookService;


