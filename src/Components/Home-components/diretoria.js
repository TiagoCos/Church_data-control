import { CardConfig } from '../Config-components/diretoria_config';
import './Diretoria.css';




function Diretoria({nome, descrição, img}) {

  return (
    <div className="segundo"> 
      <div className='cards-diretoria'>
        <CardConfig/>
        <CardConfig/>
        <CardConfig/>
        <CardConfig/>
        <CardConfig/>
        <CardConfig/>
      </div>
    </div>
    
  );

}

export default Diretoria;
