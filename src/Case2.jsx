import React, { useState } from "react";
import Modal from "./Components/Modal";
import "./styles.css";

const Case2 = ({ data }) => {
  const [modal, setModal] = useState(false);

  return (
    <div className="table-function">
      {modal ? (
        <div className="modal">
          <Modal setModal={setModal} />
        </div>
      ) : (
        <div className="table-container">
          <div className="div-button">
            <h1>Tabela de funcionarios</h1>
            <button onClick={() => setModal(true)}>
              Adicionar novo funcionario
            </button>
          </div>
          <table>
            <thead>
              <tr>
                <th>id</th>
                <th>Nome</th>
                <th>Profissão</th>
                <th>Salário</th>
              </tr>
            </thead>
            <tbody>
              {
                // Aqui devera ser renderizados os funcionarios
              }
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Case2;
