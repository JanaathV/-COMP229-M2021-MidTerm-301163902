"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProcessDeletePage = exports.ProcessAddPage = exports.ProcessEditPage = exports.DisplayAddPage = exports.DisplayEditPage = exports.DisplayBookListPage = void 0;
const books_1 = __importDefault(require("../Models/books"));
function DisplayBookListPage(req, res, next) {
    books_1.default.find((err, bookCollection) => {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.render('books', { title: 'Book List', page: 'books', books: bookCollection });
    });
}
exports.DisplayBookListPage = DisplayBookListPage;
function DisplayEditPage(req, res, next) {
    let id = req.params.id;
    books_1.default.findById(id, {}, {}, (err, bookItemToEdit) => {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.render('index', { title: 'Edit', page: 'details', books: bookItemToEdit });
    });
}
exports.DisplayEditPage = DisplayEditPage;
function DisplayAddPage(req, res, next) {
    res.render('index', { title: 'Add', page: 'details', books: '' });
}
exports.DisplayAddPage = DisplayAddPage;
function ProcessEditPage(req, res, next) {
    let id = req.params.id;
    let updatedBookItem = new books_1.default({
        "_id": id,
        "Title": req.body.Title,
        "Price": req.body.Price,
        "Author": req.body.Author,
        "Genre": req.body.Genre
    });
    books_1.default.updateOne({ _id: id }, updatedBookItem, {}, (err) => {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.redirect('/books');
    });
}
exports.ProcessEditPage = ProcessEditPage;
function ProcessAddPage(req, res, next) {
    let newBook = new books_1.default({
        "Title": req.body.Title,
        "Price": req.body.Price,
        "Author": req.body.Author,
        "Genre": req.body.Genre
    });
    books_1.default.create(newBook, (err) => {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.redirect('/books');
    });
}
exports.ProcessAddPage = ProcessAddPage;
function ProcessDeletePage(req, res, next) {
    let id = req.params.id;
    books_1.default.remove({ _id: id }, (err) => {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.redirect('/books');
    });
}
exports.ProcessDeletePage = ProcessDeletePage;
//# sourceMappingURL=books.js.map