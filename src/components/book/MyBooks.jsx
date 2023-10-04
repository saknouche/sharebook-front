import React, { useEffect, useState } from 'react';
import Book from './Book.jsx';

const MyBooks = () => {
    const [books, setBooks] = useState([])
    console.log(books)
    const array = [
        // { id: 1, title: 'Les berbères du Maghreb', category: 'Roman' },
        // { id: 2, title: 'L\'espoir assassiné', category: 'Roman' },
     ];
     useEffect(() => {
        setBooks(array)
     }, [])
  
     return (
        <>
           <h1>Mes livres</h1>
           {books.length > 0 ? (
              books.map((book) => (
                 <div key={book.id}>
                    <Book
                       title={book.title}
                       category={book.category}
                    />
                    <button>Modifier</button>
                    <button>Supprimer</button>
                 </div>
              ))
           ) : (
              <div>Vous n'avez pas déclaré de livres.</div>
           )}
           <br/>
           <button>Nouveau</button>
        </>
     );
};

export default MyBooks;