import React, { useEffect, useState } from 'react';
import Book from './Book.jsx';

const ListBooks = () => {
    const [books, setBooks] = useState([])
    console.log(books)
    const array = [
        { id: 1, title: 'titin', category: 'BD' },
        { id: 2, title: 'astérix', category: 'BD' },
     ];
     useEffect(() => {
        setBooks(array)
     }, [])
  
     return (
        <>
           <h1>Livres disponibles</h1>
           {books.length > 0 ? (
              books.map((book) => (
                 <div key={book.id}>
                    <Book
                       title={book.title}
                       category={book.category}
                    />
                    <button>Emprunter</button>
                 </div>
              ))
           ) : (
              <div>Pas de livres disponibles.</div>
           )}
        </>
     );
};

export default ListBooks;