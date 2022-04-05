import React from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './global.css';
import Header from './pages/header';
import Login from './pages/login';
import Cadastro from './pages/cadastro';


ReactDOM.render(
  <BrowserRouter>
    <header>
      <Header/>
    </header>
    <main>
      <Routes>
        <Route path="/" element={<Home/>}/> 
        <Route path="/login" element={<Login/>}/>
        <Route path="/cadastro" element={<Cadastro/>}/>
      </Routes>
    </main>
    <footer>
      <p>Desenvolvido por Alexandre e Leonardo Yudi</p>
    </footer>
  </BrowserRouter>,
  document.getElementById('root')
);

