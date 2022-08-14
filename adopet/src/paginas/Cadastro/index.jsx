import React, { useEffect } from "react";
import './Cadastro.css';

const Cadastro = () => {

  useEffect(() => {
    document.body.classList.remove('body-inicial')
    document.body.classList.add('body-cadastro-login')
  }, []);

  return (
    <main class="principal">

    <div class="principal__logo"></div>
    <div class="principal__paragrafos">
      <p>Ainda não tem cadastro?</p>
      <p>
        Então, antes de buscar seu melhor amigo, precisamos de alguns dados:
      </p>
    </div>

    <form class="principal__formulario">

      <div id="msg-erro"></div>
      <div id="msg-sucesso"></div>

      <fieldset class="principal__formulario--campos">

        <div class="input-container">
          <label for="" id="label-email" class="principal__formulario--label">Email</label>
          <input type="email" id="email" class="principal__formulario--texto" placeholder="Escolha seu melhor email"
            required data-tipo="email" />
          <span id="erro-email"></span>
        </div>

        <div class="input-container">
          <label for="" id="label-nome" class="principal__formulario--label">Nome</label>
          <input type="text" id="nome" class="principal__formulario--texto" placeholder="Digite seu nome completo"
            minlength="3" required data-tipo="nome" />
          <span id="erro-nome"></span>
        </div>

        <div class="input-container">
          <label for="" id="label-senha" class="principal__formulario--label">Senha</label>
          <input type="password" id="senha" class="principal__formulario--texto senhas" placeholder="Crie uma senha"
            minlength="6" pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?!.*[ !@#$%^&*_=+-]).{6,12}$"
            title="A senha deve conter entre 6 a 12 caracteres, deve conter pelo menos uma letra maiúscula e minúscula, um número e não deve conter símbolos"
            required data-senha="" data-tipo="senha" />
          <i id="verSenha" class="fa fa-eye" aria-hidden="true"></i>
          <span id="erro-senha"></span>
        </div>

        <div class="input-container">
          <label for="" id="label-confirm-senha" class="principal__formulario--label">Confirme sua senha</label>
          <input type="password" id="confirm-senha" class="principal__formulario--texto senhas"
            placeholder="Repita a senha criada acima" required data-confirma="" data-tipo="senhaConfirma" />
          <i id="verConfirmeSenha" class="fa fa-eye" aria-hidden="true"></i>
          <span id="erro-confirma"></span>
        </div>

      </fieldset>

      <button class="principal__formulario--botao botao-de-forms" id="botao-cadastro">Cadastrar</button>
    </form>

  </main>
  );
};

export default Cadastro;
