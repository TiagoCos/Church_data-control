import { Alert } from 'antd';
import Marquee from 'react-fast-marquee' ;
import { useState } from 'react';

function Banner(){
    const [MsgBanner, setMsgBanner] = useState('')
    
    return(
        <div className='Loop-Banner'>
        <Alert  className='alert'
          banner
          message={
         <Marquee pauseOnHover gradient={false}>{MsgBanner}</Marquee>}/>
         </div>
    )
}

export default Banner