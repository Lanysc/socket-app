import React from 'react';
import './App.css';

function Home(props) {
  return (
    <div className="container">
      <form action="chat">
        <div className="content">
            <h1>Cola Chat</h1>
            <h3>Ajudando você em suas provas diárias</h3>
            <div className="row">
                <select name="select_room" id="select_room">
                    <option value="-1"> Selecione a Sala</option>
                    <option value="Redes 1"> Redes 1</option>
                    <option value="Redes 2"> Redes 2</option>
                    <option value="AI"> AI </option>
                    <option value="Sistamas Multimidia"> Sistemas Multimídia </option>
                </select>
            </div>

            <div className="row">
                <label className="form-label"> Digite seu nome de usuário</label>
                <input type="text" name="username" placeholder="Nome do Usuário" />
            </div>

            <div className="row">
                <button type="submit" className="btn btn-primary mb-3">Entrar</button>
            </div>
        </div>
      </form>
    </div>
  );
}

export default Home;
