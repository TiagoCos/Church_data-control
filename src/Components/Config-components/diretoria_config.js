import { useState } from 'react';
import axios from 'axios';
import Message from '../layout/Message/Message';
import { Cards,Cards02,Cards03 } from '../Home-components/outros/Cards'


function Diretoria_Config() {

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
  return (
    <div className='container-especial' >
     
      <div className='Hug'>
        <form onSubmit={(event) => {
          event.preventDefault();
          updateDiretoria(1, event.target.elements.novoNome.value,
             event.target.elements.novaDescricao.value,
             event.target.elements.novaFoto.files[0]  //tem que ser assim para obter o item foto em si
            );
        }}>
       
        <Cards/>
          <button type="Submit" id='Submit-btn'>Enviar</button>

          <input
          placeholder='digite o nome' 
          name='novoNome' 
          required
          autoComplete='off'
        ></input>
               <input
          placeholder='digite a descrição do seu card' 
          name='novaDescricao' 
          required
          autoComplete='off'
        ></input>
             <input
          type='file'
          name='novaFoto' 
          
          autoComplete='off'
        ></input>
   
        
        </form>
      
        
    
      { /*----------------------Card02------------------------ */}
      <form onSubmit={(event) => {
          event.preventDefault();
          updateDiretoria(2, event.target.elements.novoNome.value,
             event.target.elements.novaDescricao.value,
             event.target.elements.novaFoto.files[0]  //tem que ser assim para obter o item foto em si
            );
        }}>
        
        <Cards02/>
          <button type="Submit" id='Submit-btn'>Enviar</button>

          <input
          placeholder='digite o nome' 
          name='novoNome' 
          required
          autoComplete='off'
        ></input>
               <input
          placeholder='digite a descrição do seu card' 
          name='novaDescricao' 
          required
          autoComplete='off'
        ></input>
             <input
          type='file'
          name='novaFoto' 
       
          autoComplete='off'
        ></input>
        <Message msg={Msg} type={TypeMsg} />
        </form>

        { /*----------------------Card03------------------------ */}
      <form onSubmit={(event) => {
          event.preventDefault();
          updateDiretoria(3, event.target.elements.novoNome.value,
             event.target.elements.novaDescricao.value,
             event.target.elements.novaFoto.files[0]  //tem que ser assim para obter o item foto em si
            );
        }}>
        
        <Cards03/>
          <button type="Submit" id='Submit-btn'>Enviar</button>

          <input
          placeholder='digite o nome' 
          name='novoNome' 
          required
          autoComplete='off'
        ></input>
               <input
          placeholder='digite a descrição do seu card' 
          name='novaDescricao' 
          required
          autoComplete='off'
        ></input>
             <input
          type='file'
          name='novaFoto' 
     
          autoComplete='off'
        ></input>
   
   
        </form>
        </div>
    </div>
  );
}

export default Diretoria_Config;