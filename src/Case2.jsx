import React, {useState} from "react";
import "./styles.css";
import Modal from './Components/Modal';

const Case2 = ({ data }) => {

  const [modal, setModal] = useState(true)

  return (
    <div className="table-function">
      {modal ? (
        <div className="modal">
          <Modal setModal={setModal} data={data}/>
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
                data.map((person) => (
                  <tr>
                    <th>{person.id}</th>
                    <th>{person.name}</th>
                    <th>{person.profession}</th>
                    <th>{person.wage}</th>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Case2;
