import "../Cadastro/indexCadastro.css";
import { useNavigate } from "react-router-dom";
import Message from "../../Components/layout/Message/Message.js";
import { useState } from "react";
import { cpf as validateCpf } from "cpf-cnpj-validator";

const ERR_CADASTRO_EXISTENTE = "Seu CPF já possui cadastro!";
const ERR_CPF_INVALIDO = "CPF inválido!";

async function verificarCPF(cpf) {
  const response = await fetch(`sua_api/cpf/${cpf}`);
  const data = await response.json();
  return data.existe;
}

async function verificarCPFValido(cpf) {
  return validateCpf(cpf);
}

function Cadastro() {
  const [TypeMsg, setTypeMsg] = useState("");
  const [Msg, setMsg] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    const { value: cpf } = event.target.cpf;

    const cpfExiste = await verificarCPF(cpf);
    const cpfValido = await verificarCPFValido(cpf);

    if (cpfExiste || !cpfValido) {
      setTypeMsg("erro");
      setMsg(cpfExiste ? ERR_CADASTRO_EXISTENTE : ERR_CPF_INVALIDO);
      return;
    } else {
      setCerto(true);
    }
  }

  const [length, setLength] = useState(false);

  const hendleLength = (event) => {
    const valor = event.target.value;
    if (valor.length === 11) {
      setLength(true);
    }
  };

  const [Certo, setCerto] = useState(false);

  const handleNext = () => {
    setStep((step) => step + 1);
  };

  const handleRestart = () => {
    setStep(0);
    setCerto(false);
  };

  const [step, setStep] = useState(0);

  const renderStep = (step) => {
    switch (step) {
      case 0:
        return (
          <div className="swiper-slide">
            <img className="image-cadastro" src="1.svg" alt="" />
            <h2>Welcome</h2>
            <h3>Let's create your username</h3>
            <form onSubmit={handleSubmit}>
              <label>CPF: </label>
              <input
                type="text"
                className="cpf"
                id="cpf"
                placeholder="Digite seu CPF"
                autoComplete="off"
                maxLength={11}
                onInput={hendleLength}
              />
              <Message type={TypeMsg} message={Msg} />
              <button
                className="btn-cadastro"
                type="button"
                id="bt"
                disabled={!Certo || !length}
                onClick={handleNext}
              >
                Próximo
              </button>
            </form>
          </div>
        );
      case 1:
        return (
          <div className="swiper-slide">
            <h2>Step 2</h2>
            <h3>Step 2 subtitle</h3>
            <button className="btn-cadastro" type="button" onClick={handleRestart}>
              Restart
            </button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="principal-cadastro">
      <div className="container-cadastro">
        <div className="card">
          <div className="swiper">{renderStep(step)}</div>
        </div>
      </div>
    </div>
  );
}

export default Cadastro;
