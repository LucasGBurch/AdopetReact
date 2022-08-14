import React from 'react';
import './Cabecalho.css';
import { Link } from 'react-router-dom';

const Cabecalho = () => {
  return (
    <header className='cabecalho'>
      <nav className='cabecalho__navegacao'>

        <Link to="../Inicial/index.html">
          <button className='cabecalho__navegacao--logo cabecalho__efeito'>
          </button>
        </Link>

        <Link to="../Home/index.html">
          <button className='cabecalho__navegacao--home cabecalho__efeito'>
          </button>
        </Link>
        <Link to="../Mensagem/index.html">
          <button className='cabecalho__navegacao--msg cabecalho__efeito'>
          </button>
        </Link>

      </nav>

    </header >
  );
};

export default Cabecalho;

