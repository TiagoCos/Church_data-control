import React, { useState } from 'react';

const Configuracoes = ({ onAddCard }) => {
  const [cardTitle, setCardTitle] = useState('');

  const handleInputChange = (e) => {
    setCardTitle(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (cardTitle) {
      onAddCard(cardTitle);
      setCardTitle('');
    }
  };

  return (
    <div>
      <h2>Configurações</h2>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="card-title">Título do Card:</label>
        <input type="text" id="card-title" value={cardTitle} onChange={handleInputChange} />
        <button type="submit">Adicionar Card</button>
      </form>
    </div>
  );
};

export default Configuracoes;
