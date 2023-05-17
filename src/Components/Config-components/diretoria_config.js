import { useState } from 'react';
import axios from 'axios';
import Message from '../layout/Message/Message';

export const CardConfig = () => {
  return (
    <div className='Card_diretoria'>
      <img className='Card_diretoria-img' alt='' />
      <div className='Card_diretoria-info'>
        <h3 className='Card_diretoria-title'>title</h3>
        <p className='Card_diretoria-description'>teste de descricao</p>
      </div>
    </div>
  );
}

function Diretoria_Config() {

  const [nome, setNome] = useState('testenome');
  const [descricao, setDescricao] = useState('testeDescrição');
  const [img, setImg] = useState('https://picsum.photos/500/500');
  const [isCardVisible, setIsCardVisible] = useState(false);
  //componente de mensagem
  const [TypeMsg, setTypeMsg] = useState('');
  const [Msg, setMsg] = useState('');

  //chama a API para trocar de valores
  function updateDiretoria(id, novoNome, novaDescricao, novaFoto) {
    // resetando 
    setTimeout(() => {
     setMsg(null);
     setTypeMsg(null);
   }, 3000); // Tempo em milissegundos para limpar as mensagens de erro 

   axios.put(`http://localhost:5000/Diretoria/${id}`, { 
    nome: novoNome,
    descrição:novaDescricao ,
    foto: novaFoto })

     .then(response => {
     
       setTypeMsg('valido');
       setMsg('Alteração bem sucedida!')
     })
     .catch(error => {
       setTypeMsg('erro');
       setMsg('Ocorreu um erro!')
     });
 }

  const handleToggleCard = (event) => {
    event.preventDefault(); // Impede o envio do formulário
    setIsCardVisible(!isCardVisible);
  };

  return (
    <div>
      <div className='Container-Diretoria&Cargos'>
        <form className='container-especial' onSubmit={(event) => {
          event.preventDefault();
          updateDiretoria(1, event.target.elements.novoNome.value,
             event.target.elements.novaDescricao.value,
             event.target.elements.novaFoto.value
            );
        }}>
          {isCardVisible && <CardConfig />}
          <button type="Submit" id='Submit-btn'>Enviar</button>

          <input
          placeholder='digite novo valor' 
          name='novoNome' 
          required
          autoComplete='off'
        ></input>
               <input
          placeholder='digite novo valor' 
          name='novaDescricao' 
          required
          autoComplete='off'
        ></input>
             <input
          placeholder='digite novo valor' 
          name='novaFoto' 
          required
          autoComplete='off'
        ></input>
          <button onClick={handleToggleCard}>
            {isCardVisible ? 'Ocultar Card' : 'Mostrar Card'}
          </button>
        </form>
        <Message msg={Msg} type={TypeMsg} />
      </div>

    </div>
  );
}

export default Diretoria_Config;
