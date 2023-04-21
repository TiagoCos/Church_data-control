import './filiacao.css'
import React from 'react';
import { useState } from 'react';



function Filiação({img1 = 'https://picsum.photos/200/300',
 img2='https://picsum.photos/400/600',
  img3='https://picsum.photos/500/500'}){

const handleRestart = () => {
    setStep(0);
  
    };
const [step, setStep] = useState(0);

const handleNext = () => {
    setStep((step) => step + 1);
  };

  const renderImg = (step) => {
    switch (step) {
      case 0:
        return (
          <>      <h1>01</h1>
          <button 
              onClick={handleNext}
              className="filiacao_btn"
          >Próximo</button>
          <div className="swiper-slide2">
            <img className='fotos-back' alt='carregando' src={img1}></img>
          </div>
          </>
        );
      case 1:
        return (
          <>  <h1>02</h1>
          <button
                  onClick={handleNext}
                  className="filiacao_btn"
              >Próximo</button>
          <div className="swiper-slide2">
          
                <img className='fotos-back' alt='carregando' src={img2}></img>
          </div>
          </>
        );
      case 2:
         return (
          <> <h1>03</h1>
          <button
              onClick={handleRestart}
              className="filiacao_btn"
             >Voltar</button>
             <div className="swiper-slide2">
            
                <img className='fotos-back' alt='carregando' src={img3}></img>
            </div>
            </>
            );
      default:
        return null;
    }
  };

  return (
    <div className="quarto" id='d'>
      <div className="card2">
        <div className="swiper2">{renderImg(step)}</div>
      </div>
    </div>
  );
  }

export default Filiação;
