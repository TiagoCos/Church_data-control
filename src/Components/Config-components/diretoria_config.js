import { useState } from 'react';
import Diretoria from '../Home-components/diretoria';

function Diretoria_Config() {
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [img, setImg] = useState('');

  return (
    <div>
        <div  className='Container-Diretoria&Cargos'>
     <form id='all-containers'>
        <h2>Adicione uma nova pessoa aos cargos da diretoria</h2>
    
          <input 
          required
          type='text'
          autoComplete='off'
          placeholder='insira um titulo para seu novo card'
          />
    
        <input 
            required
             type='text'
             autoComplete='off'
             placeholder='insira um Sub-titulo para seu novo card'
          />
        <input 
            autoComplete='off'
            required
            placeholder='insira uma nova imagem para seu novo card'
            
          type='image'
          />
          <button type="Submit" id='Submit-btn' >Enviar</button>
     </form>
    </div>
    
      
    </div>
  );
}

export default Diretoria_Config;
