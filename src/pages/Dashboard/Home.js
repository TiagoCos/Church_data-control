import  '../Dashboard/indexHome.css';
import { Alert } from 'antd';
import Marquee from 'react-fast-marquee' ;
import React from 'react';
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

         <h3>Conheça nosso site </h3>
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