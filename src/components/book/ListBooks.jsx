import React, { useEffect, useState } from 'react';
import Book from './Book.jsx';
import { Link, useNavigate } from 'react-router-dom';
import { BookmarkStar } from 'react-bootstrap-icons';
import { Api } from '../../config/Api.js';
import { toast } from 'react-toastify';

const ListBooks = () => {
   const navigate = useNavigate();
   const [books, setBooks] = useState([]);
 
   useEffect(() => {
      Api.get(`/books?status=FREE`).then((res) => {
         setBooks(res.data)
      });
   }, []);

   const borrowBook = (bookId) => {
      Api.post(`/borrows/${bookId}`, {})
         .then((res) => {
            toast.success(res.data);
            navigate('/myBorrows');
         })
         .catch((e) => toast.error(e.response.data))
   }

   return (
      <>
         <div className='container mt-4'>
            <h1>Livres disponibles</h1>
            <div className='row mt-4'>
               {books.length > 0 ? (
                  books.map((book) => (
                     <div
                        className='col-md-6 col-lg-4 mb-3 d-flex flex-column'
                        key={book.id}
                     >
                        <Book title={book.title} category={book.category.label} lender={`${book.lender.firstName} ${book.lender.lastName}`} />
                        <Link className='btn btn-primary mt-1 align-self-center mt-2' onClick={() => borrowBook(book.id)}>
                           <BookmarkStar /> Emprunter
                        </Link>
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
