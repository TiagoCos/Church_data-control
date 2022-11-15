import  '../Dashboard/indexHome.css';
import { Alert } from 'antd';
import Marquee from 'react-fast-marquee' ;
import React from 'react';

import { Carousel } from 'antd';
import 'antd/dist/antd.css';

const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

function Home(){

  const msg = 'teste 06aaaaaadda'


  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
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

          <aside className='Carrossel'>
          <Carousel afterChange={onChange}>
      <div>
        <h3 style={contentStyle}>1</h3>
      </div>
      <div>
        <h3 style={contentStyle}>2</h3>
      </div>
      <div>
        <h3 style={contentStyle}>3</h3>
      </div>
      <div>
        <h3 style={contentStyle}>4</h3>
      </div>
    </Carousel>
   </aside>      
         <h1>Conheça nosso site </h1>
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