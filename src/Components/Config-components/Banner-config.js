import React, { useState, useEffect } from 'react';
import axios from 'axios';

function BannerConfig() {
  const [mensagem, setMensagem] = useState('');
  
  const elementos = [
    <div key="1">{mensagem} aqui </div>,
   
  ];
  
  useEffect(() => {
    // faz uma chamada para a API para buscar a mensagem atual
    axios.get('http://localhost:5000/Mensagem')
      .then(response => {
        setMensagem(response.data.mensagem); // Renderiza a propriedade 'mensagem' do objeto
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
        setMensagem(response.data.mensagem); // Renderiza a propriedade 'mensagem' do objeto
      })
      .catch(error => {
        console.error(error);
      });
  }

  function updateMensagem(id, novaMensagem) {
    axios.put(`http://localhost:5000/Mensagem/${id}`, { mensagem: novaMensagem })
      .then(response => {
        setMensagem(response.data.mensagem); // Renderiza a propriedade 'mensagem' do objeto
      })
      .catch(error => {
        console.error(error);
      });
  }

  return (
    <div>
      <h1>Minha Aplicação</h1>
      <h2>{mensagem}</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Novo elemento da lista "Mensagem":
          <input name="mensagem" required/>
        </label>
        <button type="submit">Adicionar</button>
      </form>

      <form onSubmit={(event) => {
          event.preventDefault();
          updateMensagem(1, event.target.elements.novaMensagem.value);
        }}>
        <input placeholder='digite novo valor' name='novaMensagem' required></input>
        <button type='submit'>Atualizar mensagem</button>
      </form>

    </div>
  );
}

export default BannerConfig;
