import logo from './logo.svg';
import './App.css';
import { NavLink, Route, Routes } from 'react-router-dom';
import Pocketmon from './components/Pocketmon';
import Book from './components/Book';
import Home from './components/Home';
function App() {
  return (
    <div className='container-fluid'>

      {/* 상단 메뉴영역 */}

      <div>
        <NavLink to={"/home"}>홈</NavLink>
        <NavLink to={"/pocketmon"}>포켓몬스터</NavLink>
        <NavLink to={"/book"}>도서</NavLink>
      </div>


      {/* 본문영역 */}
      <div>
        <Routes>
          <Route exact path='/' element={<Home/>}>홈페이지</Route>
          <Route path='/pocketmon' element={<Pocketmon/>}>포켓</Route>
          <Route path='/book' element={<Book></Book>}>책</Route>
        </Routes>
      </div>


    </div>
  );
}

export default App;
