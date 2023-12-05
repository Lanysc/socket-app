import React from 'react';
import './App.css';
import { useLocation, useNavigate } from 'react-router-dom';


function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function Chat(props) {
  const query = useQuery();
  const username = query.get('username');
  const navigate = useNavigate();
  function handleLogoutClick() {
    navigate('/');
  }


  return (
    <div className="container chat-container">
      <div className="header">
        <div id="username">Bem-vindo à sala, {username}!</div>
        <button type="button" className="logout btn-danger" id="logout" onClick={handleLogoutClick}>Sair</button>
      </div>
      <div className="chat-content">
        <div className="message received"><strong>João:</strong> Ei, Maria! Você sabe responder a primeira questão sobre a camada de transporte?</div>
        <div className="message sent"><strong>Maria:</strong> Sim, é sobre segmentação e reagrupamento dos dados. E a camada de transporte garante a entrega correta dos segmentos.</div>
        <div className="message received"><strong>João:</strong> Entendi! E a questão sobre os protocolos TCP e UDP, eles pertencem a essa camada, certo?</div>
        <div className="message sent"><strong>Maria:</strong> Isso mesmo! TCP é orientado à conexão e garante a entrega, enquanto o UDP é sem conexão e não garante a entrega dos pacotes.</div>
        <div className="message received"><strong>João:</strong> Valeu, Maria! Você me salvou nessa prova.</div>
        <div className="message sent"><strong>Maria:</strong> Sempre à disposição, João! Vamos nos ajudando e passando juntos.</div>
      </div>
      <div className="input-area">
        <input className="form-control" type="text" placeholder="Digite a Mensagem" id="messageInput" />
      </div>
    </div>
  );
}

export default Chat;
