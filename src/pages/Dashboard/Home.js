import  '../Dashboard/indexHome.css';
import { Alert } from 'antd';
import Marquee from 'react-fast-marquee' ;
import React from 'react';
import 'antd/dist/antd.css';
import { useState } from 'react';

function Home(){
  const [cargo , setCargo] = useState('')

  const msg = 'teste de mensagem'

     return(
  <main className='principal'>
    <section id='a' className='primeiro'>
      <div className='Sub-div-img'> 
         <div className='Loop-Banner'>
           <Alert
              banner
                message={
               <Marquee pauseOnHover gradient={false}>
               <strong>{msg}</strong> 
               </Marquee>
               }/></div>
        <span className='info-img'>
        <h1 className='Title'>Conheça nosso site </h1>
        <p className='Sub-Title'>Confira as informações mais relevantes pra você!</p>
        </span>
        </div>
        </section>  
          <section id='b' className='segundo'>
            <h3>Diretoria e direção da igreja.</h3>
              <div className='imagem-presidente'></div>
               <h2>{cargo}</h2>
                 </section>
        <section id='c' className='terceiro'>
            <p>presidente</p>
                 </section>

        <section id='d' className='quarto'>
            <p>Filiação</p>
               </section>

        <section id='e'className='quinto' >
           <p> estatuto</p>
              </section>
          
        </main>
    )
}
  
export default Home