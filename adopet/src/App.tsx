import React from 'react';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import Cabecalho from './componentes/Cabecalho/';
import Rodape from './componentes/Rodape/';
import Inicial from './paginas/Inicial/';
import Cadastro from './paginas/Cadastro/';

function App() {

  return (
    <>
      <Router>
        <Cabecalho />
        <Routes>

          <Route path='/' element={<Inicial />} />

          <Route path='/cadastro' element={<Cadastro />} />

        </Routes>
        <Rodape />
      </Router>
    </>
  );
}

export default App;
