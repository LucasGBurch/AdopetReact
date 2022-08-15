import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import './Inicial.css';
import '../../index.css';
import BotaoInicial from "../../componentes/BotaoInicial";

const Inicial = () => {

  useEffect(() => {
    document.body.classList.remove('body-cadastro-login');
    document.body.classList.add('body-inicial');
  }, []);

  return (
    <main className="principal">

      <section className="principal__elementos">

        <div className="principal__elementos--textos">
          <div className="logo"></div>
          <h3 className="subtitulo">Boas-Vindas!</h3>
        </div>

        <p className="principal__elementos--texto">
          Que tal mudar sua vida adotando seu novo melhor amigo? Vem com a gente!
        </p>
        <p className="principal__elementos--texto-maior">
          Adotar pode mudar uma vida. Que tal buscar seu novo melhor amigo hoje?
          Vem com a gente!
        </p>
        <Link to="/login">
          <BotaoInicial>
            Já tenho conta
          </BotaoInicial>
        </Link>

        <Link to="/cadastro">
        <BotaoInicial>
            Quero me cadastrar
          </BotaoInicial>
        </Link>

      </section>

      <div className="principal__ilustracao"></div>

    </main>
  );
};


export default Inicial;
