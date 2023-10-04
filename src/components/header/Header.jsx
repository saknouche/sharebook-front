import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
   return (
      <div>
         <nav className='navbar navbar-expand-lg bg-body-tertiary'>
            <div className='container-fluid'>
               <a className='navbar-brand' href='#'>
                  ShareBook
               </a>
               <button
                  className='navbar-toggler'
                  type='button'
                  data-bs-toggle='collapse'
                  data-bs-target='#navbarNav'
                  aria-controls='navbarNav'
                  aria-expanded='false'
                  aria-label='Toggle navigation'
               >
                  <span className='navbar-toggler-icon'></span>
               </button>
               <div
                  className='collapse navbar-collapse justify-content-lg-between align-items-sm-start align-items-lg-center'
                  id='navbarNav'
               >
                  <ul className='navbar-nav'>
                     <li className='nav-item'>
                        <Link
                           className='nav-link active'
                           aria-current='page'
                           to='/myBooks'
                        >
                           Mes livres
                        </Link>
                     </li>
                     <li className='nav-item'>
                        <Link className='nav-link' to='/myBorrows'>
                           Mes emprunts
                        </Link>
                     </li>
                     <li className='nav-item'>
                        <Link className='nav-link' to='/listBooks'>
                           Livres disponibles
                        </Link>
                     </li>
                  </ul>
                  <div className='d-flex flex-column align-items-sm-start flex-lg-row align-items-lg-center'>
                     <div className='mb-sm-3 mb-lg-1 me-2'>Bienvenue ...</div>
                     <button className='btn btn-secondary'>
                        Se déconnecter
                     </button>
                  </div>
               </div>
            </div>
         </nav>
      </div>
   );
};

export default Header;
