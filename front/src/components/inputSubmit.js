import React, { useState } from 'react';

function InputSubmit({ onSubmit }) {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      onSubmit(inputValue);
      setInputValue(''); // Limpa o input após o submit, se necessário
    }
  };

  return (
      <input
        className="form-control"
        type="text"
        placeholder="Digite a Mensagem"
        value={inputValue}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
  );
}

export default InputSubmit;
