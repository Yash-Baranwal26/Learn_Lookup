import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import DocterLogin from './Docter/DocterLogin';
import UserLogin from './User/UserLogin';
import UserRegister from './User/UserRegister';
import DocterRegister from './Docter/DocterRegister';
import P_Welcome from './User/p_Welcome';
import D_Welcome from './Docter/D_Welcome';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<App/>} />
    <Route path='/userlogin' element={<UserLogin/>} />
    <Route path='/uRegister' element={<UserRegister/>} />
    <Route path='/dLogin' element={<DocterLogin/>} />
    <Route path='/dRegister' element={<DocterRegister/>} />
    <Route path='/pWelcome' element={<P_Welcome/>} />
    <Route path='/dWelcome' element={<D_Welcome/>} />
  </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

