import {useState, useEffect} from 'react'
import axios from 'axios';
import Message from '../layout/Message/Message';

function Filiacao_Config(){

     //componente de mensagem
     const [TypeMsg, setTypeMsg] = useState('');
     const [Msg, setMsg] = useState('');
  
     const handleFileChange = (id, novaImagem01, novaImagem02, novaImagem03) => {
        const formData = new FormData();
        formData.append('imagem01', novaImagem01);
        formData.append('imagem02', novaImagem02);
        formData.append('imagem03', novaImagem03);
      
        setTimeout(() => {
          setMsg(null);
          setTypeMsg(null);
        }, 3000);
      
        axios
          .put(`http://localhost:5000/Filiacao/${id}`, formData)
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
            <form
            id='all-containers'
            onSubmit={(event) => {
                event.preventDefault();
                handleFileChange(
                1,
                event.target.elements.novaImagem01.files[0],
                event.target.elements.novaImagem02.files[0],
                event.target.elements.novaImagem03.files[0]
                );
            }}
            >
            <h2>Itens do Slide</h2>

            <input type='file' name='novaImagem01' required />
            <input type='file' name='novaImagem02' required />
            <input type='file' name='novaImagem03' required />

            <button type='submit'>Enviar</button>
            <Message msg={Msg} type={TypeMsg} />
            </form>

        </div>
    )
}

export default Filiacao_Config