import React from 'react';
import { JournalCheck } from 'react-bootstrap-icons';

const Book = ({ title, category, lender, status }) => {
   return (
      <>
         <div
            className='d-flex flex-column align-items-center'
            style={{ minWidth: '250px', minHeight: '180px' }}
         >
            {status === 'BORROWED' && (
               <span className='align-self-end me-4 bg-danger-subtle rounded p-1 text-secondary'>
                  Emprunté <JournalCheck className='text-danger' />
               </span>
            )}
            <img
               className='img-fluid'
               width='100'
               src='./img.png'
               alt='icon-book'
            />
            <div>Titre: {title.toUpperCase()}</div>
            <div>Catégorie: {category}</div>
            {lender && <div>Prêteur: {lender}</div>}
            {}
         </div>
      </>
   );
};

export default Book;
