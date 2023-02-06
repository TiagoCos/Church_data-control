import Banner from './outros/banner';
import './apresentacao.css'
function Apresentacao(){
   
    return(
        
    <section id='a' className='primeiro'>
      <Banner />
        <div className='Sub-div-img'>
         <span className='info-img'>
            <h1 className='Title'>Conheça nosso site </h1>
              <p className='Sub-Title'>Confira as informações mais relevantes pra você!</p>
               {/* botão*/} 
                <button className='btn-quem-somos'>
                 <a className='btn-a' href='#d'>Quem somos</a>
                </button>
               </span>
             </div>
          </section>  
       
    )
}

export default Apresentacao