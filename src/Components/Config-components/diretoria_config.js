import { useState } from 'react';
import Diretoria from '../Home-components/diretoria';
function CardForm() {
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [img, setImg] = useState('');

  return (
    <div>
      <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
      <input type="text" value={descricao} onChange={(e) => setDescricao(e.target.value)} />
      <input type="text" value={img} onChange={(e) => setImg(e.target.value)} />

      
    </div>
  );
}

export default CardForm;
