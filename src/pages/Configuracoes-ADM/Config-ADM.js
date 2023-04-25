import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './index.Configuracoes.css'
import CardForm from '../../Components/Config-components/diretoria_config';
import BannerConfig from '../../Components/Config-components/Banner-config';

function Configuracoes() {


  return (
    <main className='Config-div-main'>
   <BannerConfig/>
    <p></p>
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
          <button type="submit">Enviar</button>
     </form>
    </div>
    <p></p>
    <div id='all-containers' className='Container-Vídeo'>
      <p>teste</p>
      <div className="card-container"> 
     <CardForm/>
    </div>
    </div>
    </main>
  );
}

export default Configuracoes;

