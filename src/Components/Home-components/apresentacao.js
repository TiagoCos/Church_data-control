import Banner from './outros/banner';
import './apresentacao.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Apresentacao() {
  const [nome, setNome] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/Name/1')
      .then(response => {
        setNome(response.data.Nome);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <section id='a' className='primeiro' >
      <Banner />
      <div className='Sub-div-img'>
        <span className='info-img'>
          <h1 className='Title'>{nome}</h1>
          <p className='Sub-Title'>Confira as informações mais relevantes pra você!</p>
          <button className='btn-quem-somos' >
            <a className='btn-a' href='#c'>Quem somos</a>
          </button>
        </span>
      </div>
    </section>
  );
}

export default Apresentacao;
