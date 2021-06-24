// modules required for routing
import express from 'express';
const router = express.Router();
export default router;

//Routes were created using Controllers
import {DisplayAddPage, DisplayBookListPage, DisplayEditPage, ProcessAddPage, ProcessDeletePage, ProcessEditPage} from '../Controllers/books';


/* GET books List page. READ */
router.get('/', DisplayBookListPage);

//  GET the Book Details page in order to add a new Book
router.get('/add', DisplayAddPage);

// POST process the Book Details page and create a new Book - CREATE
router.post('/add', ProcessAddPage);

// GET the Book Details page in order to edit an existing Book
router.get('/edit/:id', DisplayEditPage);

// POST - process the information passed from the details form and update the document
router.post('/edit/:id', ProcessEditPage);

// GET - process the delete by user id
router.get('/delete/:id', ProcessDeletePage);


//module.exports = router;
