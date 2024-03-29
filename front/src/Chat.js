import React, { useEffect, useState } from 'react';
import './App.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { socket } from './socket';
import InputSubmit from './components/inputSubmit';
import {v4 as uuid} from 'uuid'

// interface IMessage {
//   id: String;
//   name: String;
//   text: string;
//   isOwner?: Boolean;
// }

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function Chat(props) {
  const query = useQuery();
  const username = query.get('username');
  const room = query.get('select_room');
  const navigate = useNavigate();
  var msg = "";
  function handleLogoutClick() {
    navigate('/');
  }
  const [socketInstance] = useState(socket());

  const [messages, setMessages] = useState([]);

  const [messageText, setMessageText] = useState('');

  useEffect(() => {
    socketInstance.on(room, (message) => {
      setMessages( (prev) => [
        ...prev, message
      ])
    });

    return () =>{
      socketInstance.off(room)
    }
  }, []);

  const handleSubimit = (data) => {
    const newMessage = {
      text: data,
      name: username,
      id: uuid()
    }
    socketInstance.emit(room, newMessage)

    setMessages( (prev) => [
      ...prev,
      {...newMessage, isOwner: true}
    ])
  }

  const handleButtonClick = () => {
    if (messageText.trim() !== '') {
      handleSubimit(messageText);
      setMessageText(''); // Clear input after submission if needed
    }
  };

  const handleChange = (data) => {
    setMessageText(data);
  }

  return (
    <div className="container chat-container">
      <div className="header">
        <div className='boas-vindas' id="username">Bem-vindo à sala <strong>{room}</strong>, {username}!</div>
        <button type="button" className="logout btn-danger" id="logout" onClick={handleLogoutClick}>Sair</button>
      </div>
      <div className="chat-content">
        {messages.map((mensage) => (
          <div key={mensage.id} className={`message ${mensage.isOwner ? 'sent' : 'received'}`}>
            <strong>{mensage.name}:</strong>{mensage.text}
          </div>
        ))}
      </div>
      <div className='row-input'>
        <div className="input-area col-10">
          <InputSubmit onChange={handleChange} onSubmit={handleSubimit} />
        </div>
      </div>
    </div>
  );
}

export default Chat;
