import React, { useEffect, useState } from 'react';
import Borrow from './Borrow.jsx';
import { Api } from '../../config/Api.js';
import { toast } from 'react-toastify';

const MyBorrows = () => {
   const [myBorrows, setMyBorrows] = useState([]);
   const getMyBorrows = () => {
      Api.get('/borrows')
         .then((res) => {
            setMyBorrows(res.data)
         })
         .catch((e) => toast.error(e.response.data))
   }
   useEffect(() => {
      getMyBorrows();
   }, []);

   const closeBorrow = (borrowId) => {
      Api.delete(`/borrows/${borrowId}`)
         .then((res) => {
            getMyBorrows();
            toast.success(res.data);
         })
         .catch((e) => toast.error(e.response.data))
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
                <div>Vous n'avez pas d'emprunts !</div>
               )}
            </div>
         </div>
      </div>
   );
};

export default MyBorrows;
