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
    let updatedContactItem = new Contact({
        "_id": id,
        "name": req.body.name,
        "email": req.body.email,
        "phonenumber": req.body.phonenumber
    });
    Contact.updateOne({ _id: id }, updatedContactItem, {}, (err) => {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.redirect('/contact-list');
    });
}
exports.ProcessEditPage = ProcessEditPage;
function ProcessAddPage(req, res, next) {
    let newContact = new Contact({
        "name": req.body.name,
        "email": req.body.email,
        "phonenumber": req.body.phonenumber
    });
    Contact.create(newContact, (err) => {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.redirect('/contact-list');
    });
}
exports.ProcessAddPage = ProcessAddPage;
function ProcessDeletePage(req, res, next) {
    let id = req.params.id;
    Contact.remove({ _id: id }, (err) => {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.redirect('/contact-list');
    });
}
exports.ProcessDeletePage = ProcessDeletePage;
//# sourceMappingURL=books.js.map