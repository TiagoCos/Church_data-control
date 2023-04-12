import "../Secretário/index.Secretario.css"
import { Link } from 'react-router-dom'
import { useState } from "react"; 

function Secretario(){
    const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  return (
    <main className="Secretario-main">
    <div className="hamburger-menu">
      <button onClick={toggleMenu}>
        <span className="hamburger-icon">button</span>
      </button>
      {isOpen && (
        <ul className="menu-list">
          <li><Link to='/Cadastro-de-membros'><div className="card-cadastro">cadastro de membros</div></Link></li>
          <li>Opção 2</li>
          <li>Opção 3</li>
        </ul>
      )}
    </div>
    </main>
  );
}


export default Secretario