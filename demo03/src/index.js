import React from 'react';
import ReactDOM from 'react-dom/client';

//link 대신 import를 통해 설치한 라이브러리 CSS를 불러오도록 처리
// -node_mododules에 설치한 요소들은 바로 이름을 사용하여 접근 가능
//import  '/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootswatch/dist/litera/bootstrap.min.css';
//import'../node_modules/bootswatch/dist/litera/bootstrap.min.css';

//import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
