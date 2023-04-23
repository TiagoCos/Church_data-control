import React, { useState } from 'react';
import CardForm from '../Config-components/diretoria_config';
import './Diretoria.css'; // importe o arquivo CSS aqui

function Diretoria() {
  const [cards, setCards] = useState([]);

  const handleCardSubmit = (cardData) => {
    const newCard = { ...cardData };
    setCards([...cards, newCard]);
  };

  return (
    <div className="card-container"> 
      <CardForm onSubmit={handleCardSubmit} />
      {cards.map((card) => (
        <div className="card" key={card.title}> 
          <h2>{card.title}</h2>
          <p>{card.description}</p>
          <img src={card.image} alt={card.title} />
        </div>
      ))}
    </div>
  );
}

export default Diretoria;
