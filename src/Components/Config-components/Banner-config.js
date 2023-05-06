import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Message from '../../Components/layout/Message/Message'
function BannerConfig() {
  const [mensagem, setMensagem] = useState('');

  //componente de mensagem
  const [TypeMsg, setTypeMsg] = useState('');
  const [Msg, setMsg] = useState('');
 
  function updateMensagem(id, novaMensagem) {
     // resetando 
     setTimeout(() => {
      setMsg(null);
      setTypeMsg(null);
    }, 3000); // Tempo em milissegundos para limpar as mensagens de erro 

    axios.put(`http://localhost:5000/Mensagem/${id}`, { mensagem: novaMensagem })
      .then(response => {
        setMensagem(response.data.mensagem); // Renderiza a propriedade 'mensagem' do objeto
        setTypeMsg('valido');
        setMsg('Alteração bem sucedida!')
      })
      .catch(error => {
        setTypeMsg('erro');
        setMsg('Ocorreu um erro!')
      });
  }

  return (
    <div id='all-containers'>
      <h2>Configurações do Banner</h2>

      <form onSubmit={(event) => {
          event.preventDefault();
          updateMensagem(1, event.target.elements.novaMensagem.value);
        }}>
        <input
        placeholder='digite novo valor' 
        name='novaMensagem' 
        required
        autoComplete='off'
        ></input>
        <button type='submit' id='Submit-btn'>Atualizar mensagem</button>
      </form>
      <Message msg={Msg} type={TypeMsg} />
    </div>
  );
}

export default BannerConfig;
