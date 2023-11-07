import logo from './logo.svg';
import './App.css';
import { NavLink, Route, Routes } from 'react-router-dom';
import Pocketmon from './components/Pocketmon';
import Book from './components/Book';
import Home from './components/Home';
import Menu from './components/Menu';
import BookInfinite from './components/BookInfinite';
function App() {
  return (
    <div className='container-fluid my-5 py-5'>

      {/* 상단 메뉴영역 */}
      <Menu />



      {/* 본문영역 */}
      <div className='row'>
        <div className='col-md-8 offset-md-2'>
          <Routes>
            <Route exact path='/' element={<Home />}>홈페이지</Route>
            <Route path='/pocketmon' element={<Pocketmon />}>포켓</Route>
            <Route path='/book' element={<Book></Book>}>책</Route>
            <Route path='/book2' element={<BookInfinite/>}>책2</Route>
          </Routes>
        </div>
        </div>


    </div>
  );
}

export default App;
