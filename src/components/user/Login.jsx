import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
   const [userData, setUserData] = useState({
      email: '',
      password: '',
   });

   const onSubmit = (e) => {
      e.preventDefault();
      console.log(4, userData);
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
               <h2 className='mb-4'>Bienvenue sur ShareBook !</h2>
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
                     <label htmlFor='password'>Mot de passe</label>
                     <input
                        type='password'
                        name='password'
                        id='password'
                        className='form-control w-100'
                        onChange={handleChange}
                     />
                  </div>
                  <button type='submit' className='btn btn-primary'>
                     Se connecter
                  </button>
               </form>
               <div className='text-center mt-4'>
                  <Link className='btn btn-primary' to='/addUser'>
                     M'inscrire
                  </Link>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Login;
