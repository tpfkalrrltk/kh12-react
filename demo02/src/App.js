import logo from './logo.svg';
import KHlogo from './KH.png';
import './App.css';

//JSX에서는 프로그래밍 변수를 속성에 넣기위해 {}를 사용한다
//- src="hello"로 되어있으면 경로를 의미
//- src={hello}로 되어있으면 변수를 의미


//JSX에서는 모든 태그가 닫혀야 한다.(unput도  />닫아야한다)
function App() {
  var size = 200;
  return (
    <div className="App">
      
     <h1 className='App-header'>KH정보 교육원 Reract 수업자료
        <img src={KHlogo}  alt="logo"  width={size}  />
        </h1>
    </div>
  );
}

export default App;
