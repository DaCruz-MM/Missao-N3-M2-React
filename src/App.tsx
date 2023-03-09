import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import ListaLivro from './LivroLista';
import LivroDados from './LivroDados';
import './App.css';

function App() {
  return (
      <BrowserRouter>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
          <Link className='navbar-brand mx-sm-3' to="/">Catálogo</Link>{" "}
          <Link className='navbar-brand mx-sm-3' to="/dados">Dados</Link>{" "}
        </nav>
        <Routes>
          <Route path="" element={<ListaLivro/>} />
          <Route path="dados" element={<LivroDados/>} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
