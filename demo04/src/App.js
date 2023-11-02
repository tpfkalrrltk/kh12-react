import logo from './logo.svg';
import './App.css';
import Exam01 from './comporents/Exam01';
import Jubotron from './comporents/Jubotron';
import { useState } from 'react';
import { FaX } from "react-icons/fa6";
import { BiSolidCreditCard } from "react-icons/bi";
import { AiFillPlusCircle } from "react-icons/ai";

function App() {
  const [todoList, setTodoList] = useState([
    { no: 1, title: "학원가기", type: "공부" },
    { no: 2, title: "영어단어외우기", type: "공부" },
    { no: 3, title: "헬스장가기", type: "운동" },
    { no: 4, title: "친구만나기", type: "일상" }
  ]);

  const [data, setData] = useState({ title: "", type: "" });

  const deleteTodoList = (todo) => {
    const newTodoList = todoList.filter(t => t.no !== todo.no);
    setTodoList(newTodoList);
  }

  const changeData = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  };

  const addTodoList = () => {
    //데이터의 내용을 todolist에 추가 후 data를 초기화

    //내용검사 코드 추가 if(맘에 안들면) return;
    if(data.title.length ===0 || data.type.length ===0) return;


    const last = todoList.length - 1
    const no = todoList.length == 0 ? 1 : todoList[last].no + 1;


    setTodoList([
      ...todoList,
      {
        ...data,
        no: no
      }
    ])

    setData({ title: "", type: "" })
  };


  return (
    <>
      {/* 점보트론을 만들면서 제목과 내용을 전달 */}
      <Jubotron title="일정관리 프로그램" content="KH정보교육원 수업자료" />
      {/* 입력 화면 */}
      <div className='row mt-4'>
        <div className='col-6'>
          <input className='form-control' name='title' value={data.title} onChange={changeData} />
        </div>
        <div className='col-4'>
          <select className='form-select' name='type' value={data.type} onChange={changeData}>
            <option value="">선택</option>
            <option>공부</option>
            <option>운동</option>
            <option>일상</option>
            <option>약속</option>
            <option>취미</option>
          </select>
        </div>
        <div className='col-2'>
          <button className='btn btn-primary' onClick={addTodoList}><AiFillPlusCircle />추가</button></div>
      </div>

      {/* 출력 화면 */}
      <div className='row mt-4'>
        {todoList.map(todo => (
          <div className='col-12 fs-4 mb-2' >
            <span className='badge bg-primary me-2'>{todo.type}</span>
            {todo.title}
            {/* &times; x표시 */}
            <FaX className='text-danger' onClick={e => deleteTodoList(todo)} />
            < BiSolidCreditCard />
          </div>
        ))}



        <div className='col-12 fs-4'></div>
        <div className='col-12'>운동하기</div>
        <div className='col-12'>운동하기</div>
        <div className='col-12'>운동하기</div>
        <div className='col-12'>운동하기</div>
        <div className='col-12'>운동하기</div>
        <div className='col-12'>운동하기</div>
      </div>
      <hr />
      <Exam01 />
    </>
  );
}

export default App;
