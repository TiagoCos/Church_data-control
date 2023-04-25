import React, { useState, useEffect } from 'react';
import axios from 'axios';

function BannerConfig() {
  const [mensagem, setMensagem] = useState('');

  useEffect(() => {
    // faz uma chamada para a API para buscar a mensagem atual
    axios.get('http://localhost:5000/Mensagem')
      .then(response => {
        setMensagem(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
    const novaMensagem = event.target.elements.mensagem.value;
    axios.post('http://localhost:5000/Mensagem', { mensagem: novaMensagem })
      .then(response => {
        setMensagem(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }

  return (
    <div>
      <h1>Minha Aplicação</h1>
      <h2>{JSON.stringify(mensagem)}</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Novo elemento da lista "Mensagem":
          <input name="mensagem" required/>
        </label>
        <button type="submit">Adicionar</button>
      </form>
    </div>
  );
}

export default BannerConfig;
