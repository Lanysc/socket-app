import React, { useState } from 'react';

function InputSubmit({ onSubmit, onChange }) {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
    onChange(event.target.value); // Pass the input value to the parent component
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      if (inputValue !== '') {
        onSubmit(inputValue);
        setInputValue('');
      }
    }
  };

  const handleSubmit = () => {
    if (inputValue.trim() !== '') {
      onSubmit(inputValue);
      setInputValue('');
    }
  };

  return (
    <>
      <input
        className="form-control"
        type="text"
        placeholder="Digite a Mensagem"
        value={inputValue}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <button className='botaoEnviar' onClick={handleSubmit}>Enviar</button>
    </>
  );
}

export default InputSubmit;
