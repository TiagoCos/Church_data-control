import { useState } from 'react';
import './teste.css';

function Teste() {
  const [username, setUsername] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleNext = () => {
    setStep((step) => step + 1);
  };

  const handleRestart = () => {
    setStep(0);
    setUsername('');
  };

  const [step, setStep] = useState(0);

  const renderStep = (step) => {
    switch (step) {
      case 0:
        return (
          <div className="swiper-slide">
            <img src="1.svg" alt="" />
            <h2>Welcome</h2>
            <h3>Let's create your username</h3>
            <input
              type="text"
              placeholder="E.g. johnsmith"
              value={username}
              onChange={handleUsernameChange}
            />
            <button disabled={!username} type="button" onClick={handleNext}>
              Next
            </button>
          </div>
        );
      case 1:
        return (
          <div className="swiper-slide">
            <h2>Step 2</h2>
            <h3>Step 2 subtitle</h3>
            <button type="button" onClick={handleRestart}>
              Restart
            </button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="main">
      <div className="card">
        <div className="swiper">{renderStep(step)}</div>
      </div>
    </div>
  );
}

export default Teste;
