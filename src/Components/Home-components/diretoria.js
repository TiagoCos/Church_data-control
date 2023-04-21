import React, { useState } from 'react';

const Diretoria = () => {
  const [cards, setCards] = useState([]);

  const handleAddCard = (title) => {
    const newCard = { id: Date.now(), title };
    setCards([...cards, newCard]);
  };

  return (
    <section id='b' className='segundo'>
    <div className='diretoria-container'>
      <h2>Diretoria</h2>
      {cards.map((card) => (
        <div className='diretoria-card'
        key={card.id}>
          <h3>{card.title}</h3>
        </div>
      ))}
    </div>
    </section>
  );
};

export default Diretoria;
