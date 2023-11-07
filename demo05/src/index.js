import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import reportWebVitals from './reportWebVitals';

import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootswatch/dist/minty/bootstrap.min.css"
import "bootstrap";

//Router는 React앱을 여러 페이지로 분할하여 사용하도록 만드는 기술
// -HashRouter는 주소에 해시(#)가 포함된다.
// -BrowserRouter는 주소에 해시(#)가 포함되지 않는다.
import { HashRouter, BrowserRouter } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <HashRouter>
        <App />
    </HashRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
