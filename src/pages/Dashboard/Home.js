import  '../Dashboard/indexHome.css';
import { Alert } from 'antd';
import Marquee from 'react-fast-marquee' ;
import React from 'react';



function Home(){
 
  const msg = 'teste de mensagem'



return(
  <main className='principal'>
    <section id='a' className='primeiro'>
    <div className='Loop-Banner'>
           <Alert  className='alert'
              banner
              message={
              <Marquee pauseOnHover gradient={false}>{msg}</Marquee>}/>
              </div>
            <span className='info-img'>
            <h1 className='Title'>Conheça nosso site </h1>
              <p className='Sub-Title'>Confira as informações mais relevantes pra você!</p>
               {/* botão*/} 
               <button className='btn-quem-somos'>
                  <a className='btn-a' href='#d'>Quem somos</a>
               </button>
              </span>
              <div className='Sub-div-img'></div>
            </section>  

        <section id='b' className='segundo'>
                <h3 className='Title-diretoria'>Diretoria e direção da igreja.</h3>
                <aside className='reparticao'>
                <div className='card'>
                  <img className='icon-presidente' alt=''></img>
                    <p className='Nome-presidente' id='Nome-cargos'>Tiago Costa </p>             
      </div>
        <div className='card'>
          <img className='icon-presidente' alt=''></img>
            <p className='Nome-Co-presidente' id='Nome-cargos' ></p>
              </div>

       <div className='card'>
          <img className='icon-presidente' alt=''></img>
            <p className='Nome-evangelista' id='Nome-cargos'></p>
               </div>
            <div className='card'>
              <img className='icon-presidente' alt=''></img>
                <p className='Nome-missionario' id='Nome-cargos' ></p>
                </div>
            </aside>
          </section>
          
        <section id='c' className='terceiro'>
      
        </section>

        <section id='d' className='quarto'>
            <p>Filiação</p>
               </section>

      <section id='e'className='quinto' >
        <h3 className='estatuto-title'> Baixe o estatuto para conhecer essa comunidade!</h3>
          <span className='span-container'>
                <button className='btn-download'>
                <a className='img-download' download href='#'>Baixar</a>
                </button>
             </span>
        </section>
        
        </main>
    )
}
  
export default Home