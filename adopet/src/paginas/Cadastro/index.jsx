import React, { useEffect } from "react";
import Formulario from "../../componentes/Formulario";
import './Cadastro.css';

const Cadastro = () => {

  useEffect(() => {
    document.body.classList.remove('body-inicial')
    document.body.classList.remove('body-perfil')
    document.body.classList.remove('body-home')
    document.body.classList.remove('body-mensagem')
    document.body.classList.add('body-cadastro-login')
  }, []);

  return (
    <main class="cadastro">

    <div class="cadastro__logo"></div>
    <div class="cadastro__paragrafos">
      <p>Ainda não tem cadastro?</p>
      <p>
        Então, antes de buscar seu melhor amigo, precisamos de alguns dados:
      </p>
    </div>

    <Formulario />

  </main>
  );
};

export default Cadastro;
