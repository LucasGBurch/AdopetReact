import React from "react";


const CampoTexto = (props) => {

  const aoDigitado = (evento) => {
    props.aoAlterado(evento.target.value);
  }

  return (
    <div class="input-container">
      <label for="" id="label-email" class="formulario__label">Email</label>
      <input type="email" id="email" class="formulario__texto" placeholder="Escolha seu melhor email"
        required data-tipo="email" />
      <span id="erro-tipo"></span>
    </div>
  );
};

export default CampoTexto;