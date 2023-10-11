import React, { useEffect, useState } from 'react';
import Book from './Book.jsx';
import { Link } from 'react-router-dom';
import { PencilSquare, Trash, BookFill } from 'react-bootstrap-icons';
import { Api } from '../../config/Api.js';
import { toast } from 'react-toastify';

const MyBooks = () => {
   const [books, setBooks] = useState([]);
   useEffect(() => {
      Api.get('/books').then((res) => {
         setBooks(res.data);
      });
   }, []);
   const handleDelete = (bookId) => {
      if (confirm('Etes-vous certain de vouloir supprimer ce livre?')) {
         Api.delete(`/books/${bookId}`)
            .then((res) => {
               toast.success('Le livre a bien été supprimé !');
               setBooks(books.filter((book) => book.id !== bookId));
            })
            .catch((e) => toast.error(e.response.data));
      }
   };
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
                        <Book
                           title={book.title}
                           category={book.category.label}
                           status={book.status}
                        />
                        <div className='mt-2 text-center'>
                           <Link
                              to={`/addBook/${book.id}`}
                              className='btn btn-primary me-2'
                           >
                              <PencilSquare /> Modifier
                           </Link>
                           <Link
                              className='btn btn-danger'
                              onClick={(e) => handleDelete(book.id)}
                           >
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
