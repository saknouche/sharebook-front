import React from 'react';

const Book = ({ title, category }) => {
   return (
      <>
         <div className='d-flex flex-column align-items-center'>
            <img className='img-fluid' width="100" src="./img.png" alt="icon-book" />
            <div>Titre: {title.toUpperCase()}</div>
             <div>Catégorie: {category}</div> 
         </div>
      </>
   );
};

export default Book;
