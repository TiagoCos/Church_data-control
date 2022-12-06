import  '../Dashboard/indexHome.css';
import { Alert } from 'antd';
import Marquee from 'react-fast-marquee' ;
import React from 'react';
import imagem from '../../assets/imagem.jpg'
import 'antd/dist/antd.css';

function Home(){

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
               }/>
          </div>

          <img className='Home_img' src={imagem}></img> 
         <h1 className='aqui'>Conheça nosso site </h1>
         <i></i>
         <p>baixe as informações mais relevantes pra você!</p>
        </div>
   </section>  
             <section id='b' className='diretoria'>
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