import {useState, useEffect} from 'react'
import axios from 'axios';
import Message from '../layout/Message/Message';
function Estatuto_config(){

    //componente de mensagem
     const [TypeMsg, setTypeMsg] = useState('');
     const [Msg, setMsg] = useState('');
  
     const handleFileChange = (id, novoEstatuto) => {
        const formData = new FormData();
        formData.append('estatuto', novoEstatuto);
     
      
        setTimeout(() => {
          setMsg(null);
          setTypeMsg(null);
        }, 3000);
      
        axios
          .put(`http://localhost:5000/Estatuto/${id}`, formData)
          .then(() => {
            setTypeMsg('valido');
            setMsg('Alteração bem sucedida!');
          })
          .catch((error) => {
            setTypeMsg('erro');
            setMsg('Ocorreu um erro!');
            console.log(formData)
          });
      };

    return(
        <div >
            <form id='all-containers'  onSubmit={(event) => {
                event.preventDefault();
                handleFileChange(
                1,
                event.target.elements.novoEstatuto.files[0]
                );
                 }}
                >
                <h2>Coloque aqui o estatuto da sua comunidade </h2>
                <input type='file' name='novoEstatuto' required></input>
                <button type='Submit'>Enviar</button>
                <Message msg={Msg} type={TypeMsg} />
            </form>
        </div>
    )
}

export default Estatuto_config