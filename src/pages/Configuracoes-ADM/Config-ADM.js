import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './index.Configuracoes.css'
import Diretoria_Cfg from '../../Components/Config-components/diretoria_config';


function Configuracoes() {
  const [message, setMessage] = useState('');
  const [editedMessage, setEditedMessage] = useState('');

  useEffect(() => {
    axios.get('http://your-api-endpoint.com/message')
      .then(response => setMessage(response.data))
      .catch(error => console.error(error));
  }, []);

  function handleMessageEdit(event) {
    setEditedMessage(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    axios.put('http://your-api-endpoint.com/message', { message: editedMessage })
      .then(response => setMessage(editedMessage))
      .catch(error => console.error(error));
  }

  return (
    <main className='Config-div-main'>
    <div id='all-containers'  className='container-message-banner'>
      <h1>{message}</h1>
      <h2>Mude sua mensagem </h2>
      <form onSubmit={handleSubmit}>
        <label>Coloque sua mensagem aqui:</label>
        <input 
          type="text"
          value={editedMessage}
          onChange={handleMessageEdit}
        />
        <button type="submit">Enviar</button>
        <button type="Remove">Remover Mensagem</button>
      </form>
    </div>
    <p></p>
    <div id='all-containers' className='Container-Diretoria&Cargos'>
     <form>
        <h2>Adicione uma nova pessoa aos cargos da diretoria</h2>
        <label>Nome:</label>
          <input 
          type='text'
          />
        <label>Descrição do cargo:</label>
        <input 
          type='text'
          />
        <label>Envie sua imagem:</label>
        <input 
          alt='carregando...'
          type='image'
          />
          <button type="submit">Enviar</button>
     </form>
    </div>
    <p></p>
    <div id='all-containers' className='Container-Vídeo'>
      <Diretoria_Cfg/>
    </div>
    </main>
  );
}

export default Configuracoes;

