import { Route, Routes } from 'react-router-dom';
import ListBooks from './components/book/ListBooks.jsx';
import MyBooks from './components/book/MyBooks.jsx';
import AddBook from './components/book/AddBook.jsx';
import MyBorrows from './components/borrow/MyBorrows.jsx';
import Login from './components/user/Login.jsx';
import AddUser from './components/user/AddUser.jsx';
import Header from './components/header/Header.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import { useEffect, useState } from 'react';
export const AUTH_TOKEN_KEY = 'user';

function App() {
   //state pour gérer l'affichage de userInfo
   const [userInfo, setUserInfo] = useState('');
   useEffect(() => {
      if (localStorage.getItem(AUTH_TOKEN_KEY) !== null) {
         setUserInfo(
            `${JSON.parse(localStorage.getItem(AUTH_TOKEN_KEY)).firstName} ${
               JSON.parse(localStorage.getItem(AUTH_TOKEN_KEY)).lastName
            }`
         );
      }
   }, [userInfo]);

   return (
      <>
         {userInfo && <Header userInfo={userInfo} setUserInfo={setUserInfo} />}
         <div className='container'>
            <Routes>
               <Route path='mybooks' element={<MyBooks />} />
               <Route path='listBooks' element={<ListBooks />} />
               <Route path='addBook' element={<AddBook />} />
               <Route path='addBook/:bookId' element={<AddBook />} />
               <Route path='myBorrows' element={<MyBorrows />} />
               <Route path='addUser' element={<AddUser />} />
               <Route path='*' element={<Login setUserInfo={setUserInfo} />} />
            </Routes>
         </div>
      </>
   );
}

export default App;
