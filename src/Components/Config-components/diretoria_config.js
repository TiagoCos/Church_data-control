import React, { useState } from 'react';

function CardForm({ onSubmit }) {
    //novo diretoria
    const [cards, setCards] = useState([]);

    const handleCardSubmit = (cardData) => {
      const newCard = { ...cardData };
      setCards([...cards, newCard]);
    };
  //______________________________
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const cardData = { title, description, image };
    onSubmit(cardData);
    setTitle('');
    setDescription('');
    setImage('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title:</label>
      <input
        type="text"
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label htmlFor="description">Description:</label>
      <textarea
        id="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <label htmlFor="image">Image URL:</label>
      <input
        type="text"
        id="image"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <button type="submit">Submit</button>


    
      {cards.map((card) => (
        <div className="card" key={card.title}> 
          <h2>{card.title}</h2>
          <p>{card.description}</p>
          <img src={card.image} alt={card.title} />
        </div>
      ))}
    </form>
  );
}

export default CardForm;
