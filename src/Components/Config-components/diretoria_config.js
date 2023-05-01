import { useState } from 'react';
import Diretoria from '../Home-components/diretoria';

function Diretoria_Config() {
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [img, setImg] = useState('');

  return (
    <div>
        <div id='all-containers' className='Container-Diretoria&Cargos'>
     <form>
        <h2>Adicione uma nova pessoa aos cargos da diretoria</h2>
        <label>Nome:</label>
          <input 
          type='text'
          />
        <label>Descrição do cargo:</label>
        <input 
          type='text'
          />
        <label>Envie sua imagem:</label>
        <input 
          alt='carregando...'
          type='image'
          />
          <button type="Submit">Enviar</button>
     </form>
    </div>
    
      
    </div>
  );
}

export default Diretoria_Config;
