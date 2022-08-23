import React, { useState } from "react";
import BotaoForms from "../BotaoForms/BotaoForms";
import './Formulario.css';

const Formulario = () => {

  const [email, setEmail] = useState('');
  const [nome, setNome] = useState('');
  const [senha, setSenha] = useState('');
  const [confirma, setConfirma] = useState('');

  const aoCadastrar = (evento) => {
    evento.preventDefault();
  };


  return (
    <form class="formulario">

      <div id="msg-erro"></div>
      <div id="msg-sucesso"></div>

      <fieldset class="formulario__campos">

        <div class="input-container">
          <label for="" id="label-email" class="formulario__label">Email</label>
          <input type="email" id="email" class="formulario__texto" placeholder="Escolha seu melhor email"
            required data-tipo="email" />
          <span id="erro-email"></span>
        </div>

        <div class="input-container">
          <label for="" id="label-nome" class="formulario__label">Nome</label>
          <input type="text" id="nome" class="formulario__texto" placeholder="Digite seu nome completo"
            minlength="3" required data-tipo="nome" />
          <span id="erro-nome"></span>
        </div>

        <div class="input-container">
          <label for="" id="label-senha" class="formulario__label">Senha</label>
          <input type="password" id="senha" class="formulario__texto formulario__senhas" placeholder="Crie uma senha"
            minlength="6" pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?!.*[ !@#$%^&*_=+-]).{6,12}$"
            title="A senha deve conter entre 6 a 12 caracteres, deve conter pelo menos uma letra maiúscula e minúscula, um número e não deve conter símbolos"
            required data-senha="" data-tipo="senha" />
          <i id="verSenha" class="fa fa-eye" aria-hidden="true"></i>
          <span id="erro-senha"></span>
        </div>

        <div class="input-container">
          <label for="" id="label-confirm-senha" class="formulario__label">Confirme sua senha</label>
          <input type="password" id="confirm-senha" class="formulario__texto senhas"
            placeholder="Repita a senha criada acima" required data-confirma="" data-tipo="senhaConfirma" />
          <i id="verConfirmeSenha" class="fa fa-eye" aria-hidden="true"></i>
          <span id="erro-confirma"></span>
        </div>

      </fieldset>

      <BotaoForms>
        Cadastrar
      </BotaoForms>

    </form>
  );
};


export default Formulario;
