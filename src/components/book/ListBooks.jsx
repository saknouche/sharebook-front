import React, { useEffect, useState } from 'react';
import Book from './Book.jsx';
import { Link } from 'react-router-dom';
import {BookmarkStar} from 'react-bootstrap-icons';

const ListBooks = () => {
   const [books, setBooks] = useState([]);
   const array = [
      { id: 1, title: 'titin', category: 'BD' },
      { id: 2, title: 'astérix', category: 'BD' },
      { id: 3, title: 'astérix', category: 'BD' },
      { id: 4, title: 'astérix', category: 'BD' },
   ];
   useEffect(() => {
      setBooks(array);
   }, []);

   return (
      <>
         <div className='container mt-4'>
            <h1>Livres disponibles</h1>
            <div className='row mt-4'>
               {books.length > 0 ? (
                  books.map((book) => (
                     <div className='col-md-6 col-lg-4 mb-3 d-flex flex-column' key={book.id}>
                        <Book title={book.title} category={book.category} />
                        <Link className='btn btn-primary mt-1 align-self-center'><BookmarkStar/> Emprunter</Link>
                     </div>
                  ))
               ) : (
                  <div>Pas de livres disponibles.</div>
               )}
            </div>
         </div>
      </>
   );
};

export default ListBooks;
