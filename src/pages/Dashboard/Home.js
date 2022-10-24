
import  '../Dashboard/indexHome.css';
import { Alert } from 'antd';
import Marquee from 'react-fast-marquee';
import React, { useState } from 'react';

function Home(){
  const prop = useState
  const msg = 'olha aqui'

     return(
        <main className='principal'>
        <section id='1' className='apresentacao'>
          <div className='Loop-Banner'>
          <Alert
              banner
                message={
               <Marquee pauseOnHover gradient={false}>
               <strong>{msg}</strong> 
               </Marquee>
               }
           />
          </div>

             <section id='b' className='diretoria'>
              <section id='c' className='filiacao'>
               <section id='d' className='estatuto'>
                <section id='2' className='presidente'>
                </section>
               </section>
              </section>
             </section>



            </section>
        </main>
    )
}
  
export default Home