import { useState } from 'react';


export const CardConfig = () => {
  return  (
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
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [img, setImg] = useState('');
  const [isCardVisible, setIsCardVisible] = useState(true);

  const handleToggleCard = () => {
    setIsCardVisible(!isCardVisible);
  };


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

          <button onClick={handleToggleCard}>
        {isCardVisible ? 'Ocultar Card' : 'Mostrar Card'}
      </button>

      {isCardVisible && <CardConfig />}
     </form>
    </div>
   </div>
  );
}

export default Diretoria_Config;
