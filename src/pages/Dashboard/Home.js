import  '../Dashboard/indexHome.css';
import { Alert } from 'antd';
import Marquee from 'react-fast-marquee' ;
import React from 'react';


import { Avatar, Card } from 'antd';


function Home(){
 
const msg = 'teste de mensagem'

const { Meta } = Card;

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
        <Card
          style={{ width: 300, border: '1px solid #fff',
          height: 220, background: '#ececec',}}
          cover={
            <img
              alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"/>}>
                <b>Title</b>
          <Meta
            avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
            description="This is the description"
          />
        </Card>
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