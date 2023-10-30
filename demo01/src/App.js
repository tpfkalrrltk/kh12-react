import logo from './logo.svg';
import './App.css';

//리액트의 함수형 컴포넌트(Function Component)
// -리액트에서는 화면의 조각을 컴포넌트라고 부른다.
// -리액트에서는 화면이 무수히 많은 컴포넌트의 조합이다.
// -컴포넌트를 클래스 또는 함수로 만들 수있다.
// -컴포넌트 함수에서는 반드시 화면코드를 반환해야 한다.
// -이 화면코드를 JSX(Java Script Xml)라고 부른다.
// -(주의) JSX는 반드시 한개의 태그로 감싸져야 한다.(정없으면 <></> 사용한다.)
function App() {
  return (
    <>
    <h1>Hello React!</h1>
    <p>
      첫번째 리액트 앱
    </p>
    </>
  );
}
// 모듈형 자바스크립트에서는 export키워드는 import가 가능하도록 만드는 요소
export default App;
