import './Diretoria.css';
import teste from  '../../assets/imagem01.jpg'
function Diretoria({nome, descrição, img}) {
  
  return (
    <div className="segundo"> 
      <div className='cards-diretoria'>
        
        <div className='Card_diretoria'>
          <img className='Card_diretoria-img' src={teste} alt='' />
          <div className='Card_diretoria-info'>
            <h3 className='Card_diretoria-title'>{nome}</h3>
            <p className='Card_diretoria-description'>{descrição}</p>
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default Diretoria;
