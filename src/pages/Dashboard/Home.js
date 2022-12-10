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
    <section id='1' className='apresentacao'>
      <div className='Sub-div'> 
         <div className='Loop-Banner'>
           <Alert
              banner
                message={
               <Marquee pauseOnHover gradient={false}>
               <strong>{msg}</strong> 
               </Marquee>
               }/></div>
        <h3 id='info'>Conheça nosso site </h3>
        <p id='info'>Confira as informações mais relevantes pra você!</p>
        </div>
   </section>  
          <section id='b' className='diretoria'>
            <h3>Diretoria e direção da igreja.</h3>
              <div className='imagem-presidente'></div>
               <h2>{cargo}</h2>
                 

                 </section>

           <section id='c' className='filiacao'>
              </section>

            <section id='d' className='estatuto'>
               </section>

             <section id='2' className='presidente'>
                </section>
          
        </main>
    )
}
  
export default Home