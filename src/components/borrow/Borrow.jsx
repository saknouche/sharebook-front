import React from 'react';
import { JournalCheck } from 'react-bootstrap-icons';
import FormatDate from '../../utils/FormatDate.js';

const Borrow = ({ borrow }) => {
   return (
      <>
         <div
            className='d-flex flex-column align-items-center'
            style={{ minWidth: '250px', minHeight:'205px' }}
         >
             {borrow.closeDate && (
               <span className='align-self-end me-4 bg-danger-subtle rounded p-1 text-secondary'>
                  Clôturé <JournalCheck className='text-danger' />
               </span>
            )}
            <img
               className='img-fluid'
               width='100'
               src='./img.png'
               alt='icon-book'
            />
            <div>Titre: {borrow?.bookTitle.toUpperCase()}</div>
            <div>Catégorie: {borrow?.bookCategory}</div>
            {borrow?.lender && <div>Prêteur: {`${borrow?.lender?.firstName} ${borrow?.lender?.lastName}`}</div>}
            {borrow?.askDate && <div>Date d'emprunt: {FormatDate(borrow?.askDate)}</div>}
            {borrow?.closeDate && <div>Date de clôture: {FormatDate(borrow?.closeDate)}</div>}
         </div>
      </>
   );
};

export default Borrow;
