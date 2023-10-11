import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Api } from '../../config/Api.js';
import { AUTH_TOKEN_KEY } from '../../App.jsx';
import { toast } from 'react-toastify';

const Login = ({ setUserInfo }) => {
   const navigate = useNavigate();
   const [userData, setUserData] = useState({
      email: '',
      password: '',
   });

   const onSubmit = (e) => {
      e.preventDefault();
      Api.post('/authenticate', { ...userData })
         .then((res) => {
            const bearerToken = res?.data?.accessToken;
            if (bearerToken && bearerToken.slice(0, 7) === 'Bearer ') {
               // const jwt = bearerToken.slice(7, bearerToken.length);
               localStorage.setItem(AUTH_TOKEN_KEY, JSON.stringify(res.data));
               setUserInfo(`${res.data?.firstName} ${res.data?.lastName}`);
            }
            toast.success('Vous avez été connecté avec succès !');
            navigate('/myBooks');
         })
         .catch((e) => {
            toast.error('Authentification erronée !');
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
                  <div className='d-flex justify-content-between'>
                     <button type='submit' className='btn btn-primary'>
                        Se connecter
                     </button>
                     <div>
                        {' '}
                        Pas encore inscrit ?
                        <Link className='btn btn-primary ms-2' to='/addUser'>
                           M'inscrire
                        </Link>
                     </div>
                  </div>
               </form>
            </div>
         </div>
      </div>
   );
};

export default Login;
