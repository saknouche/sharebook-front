import { Route, Routes } from 'react-router-dom';
import ListBooks from './components/book/ListBooks.jsx';
import MyBooks from './components/book/MyBooks.jsx';
import AddBook from './components/book/AddBook.jsx';
import MyBorrows from './components/borrow/MyBorrows.jsx';
import Login from './components/user/Login.jsx';
import AddUser from './components/user/AddUser.jsx';
import Header from './components/header/Header.jsx';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'

function App() {
   return (
    <>
      <Header/>
      <div className='container'>
         <Routes>
            <Route path='mybooks' element={<MyBooks />} />
            <Route path='listBooks' element={<ListBooks />} />
            <Route path='addBook' element={<AddBook />} />
            <Route path='addBook/:bookId' element={<AddBook />} />
            <Route path='myBorrows' element={<MyBorrows />} />
            <Route path='login' element={<Login />} />
            <Route path='addUser' element={<AddUser />} />
         </Routes>
      </div>
    </>
   );
}

export default App;
