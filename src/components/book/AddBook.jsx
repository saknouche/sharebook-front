import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const AddBook = () => {
   const { bookId } = useParams();

   const [bookData, setBookData] = useState({
      name: '',
      categoryId: 1,
   });
   
   const categories = [
      { id: 1, label: 'BD' },
      { id: 2, label: 'Roman' },
      { id: 3, label: 'Informatique' },
   ];

   const onSubmit = (e) => {
      e.preventDefault();
      console.log(bookData);
   };

   const handleChange = (e) => {
    //Immutabilité
    const currentState = {...bookData};
    currentState[e.target.name] = e.target.value;
    setBookData(currentState);
   };

   return (
      <div>
         {bookId ? (
            <div>Update book</div>
         ) : (
            <div className='container mt-4'>
               <div className='row justify-content-center'>
                  <div className='col-lg-8'>
                     <h1 className='mb-5'>Ajouter un livre</h1>
                     <form onSubmit={onSubmit}>
                        <div className='input-group d-flex flex-column mb-2'>
                           <label htmlFor='name'>Nom du livre</label>
                           <input
                              type='text'
                              name='name'
                              id='name'
                              className='form-control w-100'
                              onChange={handleChange}
                           />
                        </div>
                        <div className='input-group d-flex flex-column mb-2'>
                           <label htmlFor='categoryId'>Catégorie</label>
                           <select
                              name='categoryId'
                              id='categoryId'
                              className='form-select w-100'
                              onChange={handleChange}
                           >
                              {categories.map((category) => (
                                 <option key={category.id} value={category.id}>
                                    {category.label}
                                 </option>
                              ))}
                           </select>
                        </div>
                        <button type='submit' className='btn btn-primary'>
                           Valider
                        </button>
                     </form>
                  </div>
               </div>
            </div>
         )}
      </div>
   );
};

export default AddBook;
