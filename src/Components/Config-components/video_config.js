import { useState, useEffect} from "react"
import axios from "axios";
import Message from "../layout/Message/Message";

function Video_config(){
  
  //componente de mensagem
  const [TypeMsg, setTypeMsg] = useState('');
  const [Msg, setMsg] = useState('');

    function updateVideo(id, novoVideo) {
     // resetando 
     setTimeout(() => {
      setMsg(null);
      setTypeMsg(null);
    }, 3000); // Tempo em milissegundos para limpar as mensagens de erro 

        axios.put(`http://localhost:5000/Video/${id}`, { video: novoVideo })
          .then(response => {
           // setVideo(response.data.video); // Renderiza a propriedade 'video' do objeto
      
           setTypeMsg('valido');
           setMsg('Alteração bem sucedida!')
          })
          .catch(error => {
            setTypeMsg('erro');
            setMsg('Ocorreu um erro!')
          });
      }
    
    return(
        <main>
          <div id='all-containers' className='Container-Vídeo'>
            <h2>Adicione o link de seu novo vídeo</h2>
         <form onSubmit={(event) => {
          event.preventDefault();
          updateVideo(1, event.target.elements.novoVideo.value);
        }}>
        <input placeholder='insira um novo link' name='novoVideo' required   autoComplete='off'></input>
        <button type='submit' id='Submit-btn' >Atualizar </button>
      </form>
      <Message msg={Msg} type={TypeMsg} />
      </div>
      
        </main>
    )
}

export default Video_config