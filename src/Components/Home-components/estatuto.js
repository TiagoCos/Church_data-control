import { useState } from "react"


function Estatuto(){
const [qrCode, setQrcode] = useState('https://cdn.me-qr.com/qr/46001750.png?v=1674858547')

    return(
        <section id='e'className='quinto' >
        <h3 className='estatuto-title'> Baixe o estatuto para conhecer essa comunidade!</h3>
          <span className='span-container'>
                <button className='btn-download'>
                <a className='img-download' download href='#'>Baixar</a>
                </button>
                <p style={{marginLeft:'50px', marginRight:'50px', fontSize:'bold' }}><strong> Ou  </strong> </p>
                <a><img src={qrCode} alt="..."
            style={{height: '80px', width: '80px', display: 'flex', boxShadow:'4px 4px 4px #252525'}}>
            </img></a>
          
            </span>
            
        </section>
        
    )
}

export default Estatuto