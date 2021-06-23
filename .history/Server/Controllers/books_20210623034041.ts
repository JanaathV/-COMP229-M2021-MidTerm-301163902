import express, { Request, Response, NextFunction } from 'express';

// Contact Model Reference - db.contact
import book from '../Models/books';



// Display Functions

// Read in CRUD

export function DisplayBookListPage(req: Request, res: Response, next: NextFunction): void
{
    // db.contact.find()
    book.find((err, bookCollection) =>
    {
        if(err)
        {
            console.error(err);
            res.end(err);
        }
        
        res.render('books', { title: 'Book List', page: 'books', books: bookCollection});
    });
}


// Display Edit page
export function DisplayEditPage(req: Request, res: Response, next: NextFunction): void
{
    let id = req.params.id;

    // pass the id to the db

    book.findById(id, {}, {}, (err, bookItemToEdit) => 
    {
        if(err)
        {
            console.error(err);
            res.end(err);
        }

        // show the edit view
        res.render('index', { title: 'Edit', page: 'details', books: bookItemToEdit});
    });
}

// Display Create page
export function DisplayAddPage(req: Request, res: Response, next: NextFunction): void
{
    // show the edit view
    res.render('index', { title: 'Add', page: 'details', books: ''});
}

// Process Functions

// Process Edit page
export function ProcessEditPage(req: Request, res: Response, next: NextFunction): void
{
    let id = req.params.id;

    // instantiate a new Contact Item
    let updatedContactItem = new Contact
    ({
      "_id": id,
      "name": req.body.name,
      "email": req.body.email,
      "phonenumber": req.body.phonenumber
    });
  
    // find the contact item via db.contact.update({"_id":id}) and then update
    Contact.updateOne({_id: id}, updatedContactItem, {}, (err) =>{
      if(err)
      {
        console.error(err);
        res.end(err);
      }
  
      res.redirect('/contact-list');
    });
}

// Process Create page
export function ProcessAddPage(req: Request, res: Response, next: NextFunction): void
{
  // Instantiate a new Book

  let newBook = new book
  ({
    "Title": req.body.Title,
    "Price": req.body.Price,
    "Author": req.body.Author,
    "Genre": req.body.Genre
  });

  // db.book.insert({book data is here...})

  book.create(newBook, (err) => {
    if(err)
    {
      console.error(err);
      res.end(err);
    }

    res.redirect('/books');
  });
}

// Process (Delete page)
export function ProcessDeletePage(req: Request, res: Response, next: NextFunction): void
{
    let id = req.params.id;

  // db.book.remove({"_id: id"})
  book.remove({_id: id}, (err) => {
    if(err)
    {
      console.error(err);
      res.end(err);
    }

    res.redirect('/books');
  });
}