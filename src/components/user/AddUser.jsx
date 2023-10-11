import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Api } from '../../config/Api.js';
import { toast } from 'react-toastify'

const AddUser = () => {
   const navigate = useNavigate();
   const [userData, setUserData] = useState({
      email: '',
      lastName: '',
      firstName: '',
      password: '',
   });

   const onSubmit = (e) => {
      e.preventDefault();
      Api.post('/users', { ...userData })
         .then((res) => {
            toast.success(res.data);
            navigate('/login');
         })
         .catch((e) => {
            // const errors = Object.keys(e.response.data).map(error => [e.response.data[error]])
            // errors.map(er => toast.error(er[0]))
            toast.error(e.response.data)
         });
   };

   const handleChange = (e) => {
      const currentState = { ...userData };
      currentState[e.target.name] = e.target.value;
      setUserData(currentState);
   };
   return (
      <div className='container mt-5'>
         <div className='row justify-content-center align-items-center'>
            <div className='col-md-2 mb-3 col-sm-12 d-flex justify-content-sm-center'>
               <img src='./logo.jpg' alt='Logo' className='img-fluid' />
            </div>
            <div className='col-md-7'>
               <h2 className='mb-4'>Inscription</h2>
               <form onSubmit={onSubmit}>
                  <div className='input-group d-flex flex-column mb-2'>
                     <label htmlFor='email'>Email</label>
                     <input
                        type='email'
                        name='email'
                        id='email'
                        className='form-control w-100'
                        onChange={handleChange}
                     />
                  </div>
                  <div className='input-group d-flex flex-column mb-2'>
                     <label htmlFor='lastName'>Nom</label>
                     <input
                        type='text'
                        name='lastName'
                        id='lastName'
                        className='form-control w-100'
                        onChange={handleChange}
                     />
                  </div>
                  <div className='input-group d-flex flex-column mb-2'>
                     <label htmlFor='firstName'>Prénom</label>
                     <input
                        type='text'
                        name='firstName'
                        id='firstName'
                        className='form-control w-100'
                        onChange={handleChange}
                     />
                  </div>
                  <div className='input-group d-flex flex-column mb-2'>
                     <label htmlFor='password'>Mot de passe</label>
                     <input
                        type='password'
                        name='password'
                        id='password'
                        className='form-control w-100'
                        onChange={handleChange}
                     />
                  </div>
                  <div className='d-flex justify-content-between'>
                     <button type='submit' className='btn btn-primary'>
                        S'inscrire
                     </button>
                     <Link className='btn btn-primary' to='/'>
                        Retour à l'accueil
                     </Link>
                  </div>
               </form>
            </div>
         </div>
      </div>
   );
};

export default AddUser;
