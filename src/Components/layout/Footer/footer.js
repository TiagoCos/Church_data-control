import '../Footer/indexFooter.css'
import facebook from '../../../assets/icons/icons-social/facebook.png'
import insta from '../../../assets/icons/icons-social/instagram.png'
import Youtube from '../../../assets/icons/icons-social/youtube.png'

function  Footer(){
    return(
      <footer className='footer'>
        <div className='info-column'>
            <div className ='column'>
                teste
            </div>
            <div className ='column'>
            Siganos 
            </div>
            <div className ='column'>
                <img src={facebook} alt=''></img>
                <img src={insta} alt=''></img>
                <img src={Youtube} alt=''></img>
            </div>
        </div>
        <div className='rodape-column'>
            <i>Copyright © 2022</i>
        </div>
       
    </footer>  
    )
}
export default Footer