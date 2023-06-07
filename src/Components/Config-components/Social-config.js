import {useState, useEffect} from 'react'
import axios from 'axios';
import Message from '../layout/Message/Message';

function Social(){
    //componente de mensagem
  const [TypeMsg, setTypeMsg] = useState('');
  const [Msg, setMsg] = useState('');
 

  function updateSocial(id,novoInstagram,novoFacebook,novoYoutube){
     // resetando 
     setTimeout(() => {
        setMsg(null);
        setTypeMsg(null);
      }, 3000); // Tempo em milissegundos para limpar as mensagens de erro 
  
      axios.put(`http://localhost:5000/Social/${id}`, { 
        Instagram: novoInstagram ,
        Facebook: novoFacebook ,
        Youtube: novoYoutube})
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
              updateSocial(1, 
                event.target.elements.novoInstagram.value,
                event.target.elements.novoFacebook.value,
                event.target.elements.novoYoutube.value);
            }}>
                <h2>Atualize suas redes sociais: </h2>
                <input placeholder='Instagram' required autoComplete='off' name='novoInstagram'></input>
                <input placeholder='Facebook' required autoComplete='off' name='novoFacebook'></input>
                <input placeholder='Youtube' required autoComplete='off' name='novoYoutube'></input>
                <button type='Submit'>Enviar</button>
                <Message msg={Msg} type={TypeMsg} />
            </form>
          
        </div>
    )
}

export default Social

