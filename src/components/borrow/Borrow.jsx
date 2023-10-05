import React from 'react';

const Borrow = ({ borrow }) => {
   return (
      <>
         <div
            className='d-flex flex-column align-items-center border bg-success-subtle p-1 rounded'
            style={{ minWidth: '250px' }}
         >
            <img
               className='img-fluid'
               width='100'
               src='./img.png'
               alt='icon-book'
            />
            <div>Titre: {borrow.book.name.toUpperCase()}</div>
            <div>Catégorie: {borrow.book.category.label}</div>
            <div>
               Détenteur:{' '}
               {`${borrow.lender.firstName} ${borrow.lender.lastName}`}
            </div>
            {borrow.askDate && <div>Date d'emprunt: {borrow.askDate}</div>}
            {borrow.closeDate && <div>Date de clôture: {borrow.closeDate}</div>}
         </div>
      </>
   );
};

export default Borrow;
