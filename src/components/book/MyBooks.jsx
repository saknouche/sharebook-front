import React, { useEffect, useState } from 'react';
import Book from './Book.jsx';
import { Link } from 'react-router-dom';
import { PencilSquare, Trash, BookFill } from 'react-bootstrap-icons';

const MyBooks = () => {
   const [books, setBooks] = useState([]);

   const array = [
      { id: 1, title: 'Les berbères du Maghreb', category: 'Roman' },
      { id: 2, title: "L'espoir assassiné", category: 'Roman' },
      { id: 3, title: "L'espoir assassiné", category: 'Roman' },
      { id: 4, title: "L'espoir assassiné", category: 'Roman' },
   ];
   useEffect(() => {
      setBooks(array);
   }, []);

   return (
      <>
         <div className='container'>
            <div className='row mt-3'>
               <div className='d-flex flex-column align-items-sm-start flex-md-row justify-content-md-between align-items-md-center mb-4'>
                  <h1 className='mt-3'>Mes livres</h1>
                  <Link to='/addBook' className='btn btn-success'>
                     <BookFill /> Nouveau livre
                  </Link>
               </div>
               {books.length > 0 ? (
                  books.map((book) => (
                     <div
                        className='col-sm-12 col-md-6 col-lg-4 d-flex flex-column mb-5'
                        key={book.id}
                     >
                        <Book title={book.title} category={book.category} />
                        <div className='mt-2 text-center'>
                           <Link
                              to={`/addBook/${book.id}`}
                              className='btn btn-primary me-2'
                           >
                              <PencilSquare /> Modifier
                           </Link>
                           <Link className='btn btn-danger'>
                              <Trash /> Supprimer
                           </Link>
                        </div>
                     </div>
                  ))
               ) : (
                  <div>Vous n'avez pas déclaré de livres.</div>
               )}
            </div>
         </div>
      </>
   );
};

export default MyBooks;
