import  '../Dashboard/indexHome.css';
import React from 'react';
import Apresentacao from '../../Components/Home-components/apresentacao';
import Diretoria from '../../Components/Home-components/diretoria';
import Video_container from '../../Components/Home-components/video';
import Filiacao from '../../Components/Home-components/filiacao';
import Estatuto from '../../Components/Home-components/estatuto';



function Home(){
  
return(
  <main className='principal'>
      <Apresentacao/>
      <Diretoria />
      <Video_container video="https://www.youtube.com/watch?v=mb-Cnwi9BqA&list=LL&index=97&ab_channel=ImagineDragons"/>
      <Filiacao />
      <Estatuto />
     

    </main>
    )
}
  
export default Home