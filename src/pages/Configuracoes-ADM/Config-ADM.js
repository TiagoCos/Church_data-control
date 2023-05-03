import React from 'react';
import './index.Configuracoes.css'
import Diretoria_Config from '../../Components/Config-components/diretoria_config';
import BannerConfig from '../../Components/Config-components/Banner-config';
import Video_config from '../../Components/Config-components/video_config';
import Name from '../../Components/Config-components/Name-config';
import Social from '../../Components/Config-components/Social-config'
import Filiacao_Config from '../../Components/Config-components/Filiacao-config';
import Estatuto_config from '../../Components/Config-components/Estatuto-config';
function Configuracoes() {


  return (
    <main className='Config-div-main'>
      <BannerConfig/>
      <Diretoria_Config/>
      <Video_config />
      <Name/>
      <Social/>
      <Filiacao_Config/>
      <Estatuto_config/>
    </main>
  );
}

export default Configuracoes;

