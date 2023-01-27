import '../Footer/indexFooter.css'
import {FaFacebook, FaInstagram, FaYoutube} from 'react-icons/fa'
import { useState } from 'react'

function  Footer(){
    const [year, setYear] = useState(new Date().getFullYear());
    
    return(
      <footer className='footer'>
        <div className='info-column'>
            <div className ='column-1'>
                <ul>
                    <li></li>
                </ul>
            </div>
            <div className ='column-2'>
            <ul>
                    <li></li>
            </ul>
            </div>
            <div className ='social-column'>
                <ul>
                    <li className='social-li'><FaFacebook/></li>
                    <li className='social-li'><FaInstagram/></li>
                    <li className='social-li'><FaYoutube/></li>
                </ul>
            </div>
        </div>
        <div className='rodape-column'>
            <i>Copyright © {year}</i>
        </div>
       
    </footer>  
    )
}
export default Footer