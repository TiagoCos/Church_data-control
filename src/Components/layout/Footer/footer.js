import '../Footer/indexFooter.css'
import {FaFacebook, FaInstagram, FaYoutube} from 'react-icons/fa'
import { useState } from 'react'

function  Footer(){
    const [year, setYear] = useState(new Date().getFullYear());
    
    return(
      <footer className='footer'>
        <div className='info-column'>
            <div className ='social-column'>
                    <div className='social-li'><FaFacebook/></div>
                    <div className='social-li'><FaInstagram/></div>
                    <div className='social-li'><FaYoutube/></div>
                
            </div>
        </div>
        <div className='rodape-column'>
            <i>Copyright © {year}</i>
        </div>
       
    </footer>  
    )
}
export default Footer