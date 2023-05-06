import { Alert } from 'antd';
import Marquee from 'react-fast-marquee';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Banner() {
  const [banner, setBanner] = useState('');

  useEffect(() => {
    // faz uma chamada para a API para buscar a mensagem atual
    axios.get(`http://localhost:5000/Mensagem/1`) // busca o objeto com ID 1
      .then(response => {
        setBanner(response.data.mensagem); // Renderiza a propriedade 
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div className='Loop-Banner'>
      <Alert className='alert'  banner message={
        <Marquee pauseOnHover gradient={false}>{banner}</Marquee> // Usa a propriedade 'Banner' do objeto
      } />
    </div>
  );
}

export default Banner;
