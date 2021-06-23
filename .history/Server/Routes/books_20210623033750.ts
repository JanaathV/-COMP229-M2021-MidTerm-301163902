// modules required for routing
import express from 'express';
const router = express.Router();
export default router;

import {DisplayAddPage, DisplayBookListPage, DisplayEditPage} from '../Controllers/books';


/* GET books List page. READ */
router.get('/', DisplayBookListPage);

//  GET the Book Details page in order to add a new Book
router.get('/add', DisplayAddPage);

// POST process the Book Details page and create a new Book - CREATE
router.post('/add', ProcessAddPage);

// GET the Book Details page in order to edit an existing Book
router.get('/edit/:id', DisplayEditPage);

// POST - process the information passed from the details form and update the document
router.post('/edit/:id', (req, res, next) => {

    /*****************
     * ADD CODE HERE *
     *****************/

});

// GET - process the delete by user id
router.get('/delete/:id', (req, res, next) => {

    /*****************
     * ADD CODE HERE *
     *****************/
});


//module.exports = router;
