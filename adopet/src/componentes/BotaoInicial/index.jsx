import React from 'react';
import './BotaoInicial.css';

const BotaoInicial = (props) => {
  return (
    <button className="principal__elementos--botoes botao-pag-inicial">{props.children}</button>
  );
};

export default BotaoInicial;

