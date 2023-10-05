import React, { useEffect, useState } from 'react';
import Borrow from './Borrow.jsx';

const MyBorrows = () => {
   const [myBorrows, setMyBorrows] = useState([]);
   useEffect(() => {
      setMyBorrows([
         {
            id: 1,
            lender: {
               firstName: 'sadev',
               lastName: 'root',
            },
            borrower: {
               firstName: 'vini',
               lastName: 'jr',
            },
            book: {
               name: 'Moby Dick',
               category: {
                  label: 'Roman',
               },
            },
            askDate: '',
            closeDate: '',
         }
      ]);
   }, []);

   const closeBorrow = (borrowId) => {
      console.log(borrowId);
   };
   return (
      <div className='container'>
         <div className='row justify-content-start'>
            <h1 className='my-4'>Mes emprunts</h1>
            <div className='col d-flex flex-column align-items-sm-center align-items-md-start flex-md-row justify-content-evenly'>
               {myBorrows.length > 0 ? (
                myBorrows.map((borrow) => (
                  <div key={borrow.id} className='me-md-2'>
                     <Borrow key={borrow.id} borrow={borrow} />
                     {borrow.closeDate ? (
                        ""
                     ) : (
                        <div className='text-center mt-2 mb-3'>
                           <button
                              className='btn btn-danger w-100'
                              onClick={() => closeBorrow(borrow.id)}
                           >
                              Clore
                           </button>
                        </div>
                     )}
                  </div>
               ))
               ):(
                <div className='alert alert-danger w-100'>Vous n'avez pas d'emprunts !</div>
               )}
            </div>
         </div>
      </div>
   );
};

export default MyBorrows;
