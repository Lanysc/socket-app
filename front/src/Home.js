import React from 'react';
import './App.css';

function Home(props) {
  return (
    <div className="container">
      <form action="chat">
        <div className="content">
            <h1>Cola Chat</h1>
            <h3>Ajudando voçê em suas provas diarias</h3>
            <div className="row">
                <select name="select_room" id="select_room">
                    <option value="-1"> Selecione a Sala</option>
                    <option value="Arquitetura 1"> Arquitetura 1</option>
                    <option value="Redes 1"> Redes 1</option>
                    <option value="Redes 2"> Redes 2</option>
                    <option value="AI"> AI </option>
                    <option value="Sistamas Multimidia "> Sistamas Multimidia </option>
                </select>
            </div>

            <div className="row">
                <label className="form-label"> Digite Seu usuário</label>
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
