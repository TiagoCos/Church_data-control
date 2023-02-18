import { Alert } from 'antd';
import Marquee from 'react-fast-marquee' ;
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Banner(){
    const [MsgBanner, setMsgBanner] = useState('aqui    ')
    
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