import '../Footer/indexFooter.css'
import {FaFacebook, FaInstagram, FaYoutube} from 'react-icons/fa'
import { useState, useEffect} from 'react'
import axios from 'axios';

function  Footer(){
    const [year, setYear] = useState(new Date().getFullYear());
    
    const [Insta, setInsta] = useState('');
    const [Face, setFace] = useState('');
    const [Youtube, setYoutube] = useState('');

    useEffect(() => {
      axios.get('http://localhost:5000/Social/1')
        .then(response => {
          setInsta(response.data.Instagram);
          setFace(response.data.Facebook);
          setYoutube(response.data.Youtube);
        })
        .catch(error => {
          console.error(error);
        });
    }, []);
  
    return(
      <footer className='footer'>
        <div className='info-column'>
            <div className ='social-column'>
            <div className='social-li'>
                <a href={Face} target='_blank' rel='noopener noreferrer' className='Fa'>
                    <FaFacebook /> 
                    
                </a>
                </div>
                <div className='social-li'>
                <a href={Insta} target='_blank' rel='noopener noreferrer'  className='In'>
                    <FaInstagram /> 
                    
                </a>
                </div>
                <div className='social-li'>
                <a href={Youtube} target='_blank' rel='noopener noreferrer'  className='Yu'>
                    <FaYoutube /> 
                   
                </a>
                </div>                   
            </div>
        </div>
        <div className='rodape-column'>
            <i>Copyright © {year}</i>
        </div>
       
    </footer>  
    )
}
export default Footer