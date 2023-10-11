import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Api } from '../../config/Api.js';
import { toast } from 'react-toastify';

const AddBook = () => {
   const { bookId } = useParams();
   const navigate = useNavigate();
   const [bookData, setBookData] = useState({ title: '', categoryId: 1 });
   const [categoriesData, setCategoriesData] = useState([]);

   useEffect(() => {
      Api.get('/categories')
         .then((res) => {
            setCategoriesData(res.data);
         })
         .then(() => {
            if (bookId) {
               Api.get(`/books/${bookId}`).then((res) => {
                  setBookData({
                     title: res.data.title,
                     categoryId: res.data.category.id,
                  });
               });
            }
         })
         .catch((e) => console.log(e));
   }, [bookId]);

   const onSubmit = (e) => {
      e.preventDefault();
      //update
      if (bookId) {
         Api.put(`/books/${bookId}`, { ...bookData })
            .then(() => {
               toast.success('Le livre a bien été modifié.')
               navigate('/myBooks');
            })
            .catch((e) => {
               toast.error(e.response.data);
               navigate('/myBooks');
            });
      } else {
         //create
         Api.post('/books', { ...bookData })
            .then(() => {
               toast.success('Le livre a bien été enregistré.')
               navigate('/myBooks');
            })
            .catch((e) => console.log(e));
      }
   };

   const handleChange = (e) => {
      //Immutabilité
      const currentState = { ...bookData };
      currentState[e.target.name] = e.target.value;
      setBookData(currentState);
   };

   return (
      <div>
         <div className='container mt-4'>
            <div className='row justify-content-center'>
               <div className='col-lg-8'>
                  <h1 className='mb-5'>{bookId ? "Modifier un livre" : "Ajouter un livre"}</h1>
                  <form onSubmit={onSubmit}>
                     <div className='input-group d-flex flex-column mb-2'>
                        <label htmlFor='title'>Nom du livre</label>
                        <input
                           type='text'
                           name='title'
                           id='title'
                           className='form-control w-100'
                           onChange={handleChange}
                           value={bookData.title}
                        />
                     </div>
                     <div className='input-group d-flex flex-column mb-2'>
                        <label htmlFor='categoryId'>Catégorie</label>
                        <select
                           name='categoryId'
                           id='categoryId'
                           className='form-select w-100'
                           onChange={handleChange}
                           value={bookData.categoryId}
                        >
                           {categoriesData.map((category) => (
                              <option key={category.id} value={category.id}>
                                 {category.label}
                              </option>
                           ))}
                        </select>
                     </div>
                     <button type='submit' className='btn btn-primary'>
                       {bookId ? "Modifier" : "Valider"} 
                     </button>
                  </form>
               </div>
            </div>
         </div>
      </div>
   );
};

export default AddBook;
