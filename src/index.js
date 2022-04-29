import React from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './global.css';
import Header from './pages/header';
import Login from './pages/login';
import Cadastro from './pages/cadastro';
import Pagina from './pages/pagina';
import Recuperar from './pages/Recuperar';

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
        <Route path="/pagina" element={<Pagina/>}/>
        <Route path="/recuperar" element={<Recuperar/>}/>
      </Routes>
    </main>
    <footer>
      <p>Desenvolvido por Alexandre e Leonardo Yudi</p>
    </footer>
  </BrowserRouter>,
  document.getElementById('root')
);

