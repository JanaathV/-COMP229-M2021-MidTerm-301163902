import express, { Request, Response, NextFunction } from 'express';

// Contact Model Reference - db.contact
import book from '../Models/books';



// Display Functions

// Read in CRUD


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
        res.render('details', { title: 'Edit', page: 'details', books: bookItemToEdit});
    });
}

// Display Create page
export function DisplayAddPage(req: Request, res: Response, next: NextFunction): void
{
    // show the edit view
    res.render('index', { title: 'Add', page: 'update', contact: '', displayName: UserDisplayName(req)});
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
  // Instantiate a new Contact

  let newContact = new Contact
  ({
    "name": req.body.name,
      "email": req.body.email,
      "phonenumber": req.body.phonenumber
  });

  // db.contact.insert({contact data is here...})

  Contact.create(newContact, (err) => {
    if(err)
    {
      console.error(err);
      res.end(err);
    }

    res.redirect('/contact-list');
  });
}

// Process (Delete page)
export function ProcessDeletePage(req: Request, res: Response, next: NextFunction): void
{
    let id = req.params.id;

  // db.contact.remove({"_id: id"})
  Contact.remove({_id: id}, (err) => {
    if(err)
    {
      console.error(err);
      res.end(err);
    }

    res.redirect('/contact-list');
  });
}