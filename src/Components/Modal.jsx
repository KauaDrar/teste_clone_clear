import React from "react";
import "./styles.css";

const Modal = ({ setModal, data }) => {
  // FUncao que deverar adicionar os funcionarios
  const addFunc = () => {
    //...
  };

  return (
    <div className="modal">
      <div className="table-container">
        <div className="come-back-container">
          <button className="come-back-item" onClick={() => setModal(false)}>
            Voltar
          </button>
        </div>
        <div className="div-button">
          <h1>Adicionado novos funcionarios</h1>
        </div>
        <div className="container-input">
          <div className="div-input">
            <span>Nome</span>
            <input type="text" placeholder="Nome" />
          </div>
          <div className="div-input">
            <span>Profissao</span>
            <input type="text" placeholder="Profissao" />
          </div>
          <div className="div-input">
            <span>Salario</span>
            <input type="number" placeholder="Salario" />
          </div>
          <div className="div-button">
            <button className="button-add">Adicionar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
