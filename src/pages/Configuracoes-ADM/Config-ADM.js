import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './index.Configuracoes.css'
import Diretoria_Config from '../../Components/Config-components/diretoria_config';
import BannerConfig from '../../Components/Config-components/Banner-config';
import Video_config from '../../Components/Config-components/video_config';

function Configuracoes() {


  return (
    <main className='Config-div-main'>
      <BannerConfig/>
 
      <Diretoria_Config/>

      <Video_config />
      <div id='all-containers'></div>
      <div id='all-containers'></div>
      <div id='all-containers'></div>
      <div id='all-containers'>novo</div>
      
    </main>
  );
}

export default Configuracoes;

