import { Alert } from 'antd';
import Marquee from 'react-fast-marquee' ;



function Banner({mensagem}){
    
    return(
        <div className='Loop-Banner'>
        <Alert  className='alert'
          banner
          message={
         <Marquee pauseOnHover gradient={false}>{mensagem}</Marquee>}/>
         </div>
    )
}

export default Banner