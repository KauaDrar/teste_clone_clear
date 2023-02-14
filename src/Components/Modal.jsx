import React, {useState} from "react";
import "./styles.css";

const Modal = ({ setModal, data }) => {
  const [name, setName] = useState("");
  const [profession, setProfession] = useState("");
  const [wage, setWage] = useState("");

  // FUncao que deverar adicionar os funcionarios
  const addFunc = () => {
    if(name != "" || profession != "" || wage != "") {
      const newUser = {
        id: data.length + 1,
        name: name,
        profession: profession,
        wage: wage
      }
      //...
      data.push(newUser)
  
      alert("Usuário Adicionado!")
  
      console.log(data);
    }
    else {
      alert("Preencha todos os campos antes de enviar.")
    }
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
            <input type="text" placeholder="Nome" onChange={text => setName(text.target.value)}/>
          </div>
          <div className="div-input">
            <span>Profissao</span>
            <input type="text" placeholder="Profissao" onChange={text => setProfession(text.target.value)}/>
          </div>
          <div className="div-input">
            <span>Salario</span>
            <input type="number" placeholder="Salario" onChange={text => setWage(text.target.value)}/>
          </div>
          <div className="div-button">
            <button className="button-add" onClick={addFunc}>Adicionar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
