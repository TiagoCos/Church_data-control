import React, { useState, useEffect } from 'react';
import axios from 'axios';

function BannerConfig() {
  const [mensagem, setMensagem] = useState('');
  
  /*
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
*/
  function updateMensagem(id, novaMensagem) {
    axios.put(`http://localhost:5000/Name/${id}`, { banner: novaMensagem })
      .then(response => {
        setMensagem(response.data.mensagem); // Renderiza a propriedade 'mensagem' do objeto
      })
      .catch(error => {
        console.error(error);
      });
  }

  return (
    <div id='all-containers'>
      <h2>Configurações do Banner</h2>

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
