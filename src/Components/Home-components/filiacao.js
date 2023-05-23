import './filiacao.css'
import React, { useState, useEffect } from 'react';


function Filiação() {
  const [img1, setImg1] = useState('https://picsum.photos/200/300');
  const [img2, setImg2] = useState('https://picsum.photos/400/600');
  const [img3, setImg3] = useState('https://picsum.photos/500/500');

  useEffect(() => {
    fetch('http://localhost:5000/filiacao', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data)
        setImg1(data.img1)
        setImg2(data.img2)
        setImg3(data.img3)
      })
      .catch((err) => console.log(err))
  }, [])

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
          <>
           
            <button
              onClick={handleNext}
              className="filiacao_btn"
            >
              Próximo
            </button>
            <div className="swiper-slide2">
              <img className='fotos-back' alt='carregando' src={img1}></img>
            </div>
          </>
        );
      case 1:
        return (
          <>
  
            <button
              onClick={handleNext}
              className="filiacao_btn"
            >
              Próximo
            </button>
            <div className="swiper-slide2">
              <img className='fotos-back' alt='carregando' src={img2}></img>
            </div>
          </>
        );
      case 2:
        return (
          <>
    
            <button
              onClick={handleRestart}
              className="filiacao_btn"
            >
              Voltar
            </button>
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
        <div className="swiper2">
          {renderImg(step)}
        </div>
      </div>
    </div>
  );
}

export default Filiação;
