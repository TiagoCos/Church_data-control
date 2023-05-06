import {useState, useEffect} from 'react'
import Message from '../layout/Message/Message';
import axios from 'axios';

function Name(){
 //componente de mensagem
  const [TypeMsg, setTypeMsg] = useState('');
  const [Msg, setMsg] = useState('');
  const [novoNome, setNovoNome] = useState('');

  function updateNome(id) {
     // resetando 
     setTimeout(() => {
        setMsg(null);
        setTypeMsg(null);
      }, 3000); // Tempo em milissegundos para limpar as mensagens de erro 
  
      axios.put(`http://localhost:5000/Name/${id}`, { Comunidade: novoNome })
        .then(() => {
          setTypeMsg('valido');
          setMsg('Alteração bem sucedida!')
        })
        .catch(error => {
          setTypeMsg('erro');
          setMsg('Ocorreu um erro!')
        });
    }
    return(
        <div >
            <form id='all-containers' onSubmit={(event) => {
              event.preventDefault();
              updateNome(1, novoNome);
            }}>
                <h2>Digite o nome de sua comunidade </h2>
                <input value={novoNome} onChange={(e) => setNovoNome(e.target.value)} placeholder='Igreja...'></input>
                <button type='Submit'>Enviar</button>
                <Message msg={Msg} type={TypeMsg} />
            </form>
        </div>
    )
}

export default Name
