import { CardConfig } from '../Config-components/diretoria_config';
import './Diretoria.css';




function Diretoria({visivel = false}) {

  return (
    <div className="segundo"> 
      <div className='cards-diretoria'>
        {visivel && <CardConfig />}
        {visivel && <CardConfig />}
        {visivel && <CardConfig />}
        {visivel && <CardConfig />}
        {visivel && <CardConfig />}
        {visivel && <CardConfig />}
      </div>
    </div>
    
  );

}

export default Diretoria;
