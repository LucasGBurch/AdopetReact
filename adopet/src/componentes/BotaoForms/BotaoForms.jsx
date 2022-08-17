import React from "react";
import './BotaoForms.css';

const BotaoForms = (props) => {
  return (
    <button class="formulario__botao botao-de-forms" id="botao-cadastro">{props.children}</button>
  );
};

export default BotaoForms;
