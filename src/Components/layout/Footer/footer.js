import '../Footer/indexFooter.css'
import {FaFacebook, FaInstagram, FaYoutube} from 'react-icons/fa'

function  Footer(){
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
            <i>Copyright © 2023</i>
        </div>
       
    </footer>  
    )
}
export default Footer