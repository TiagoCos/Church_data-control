import '../Footer/indexFooter.css'
import facebook from '../../../assets/icons/icons-social/facebook.png'
import insta from '../../../assets/icons/icons-social/instagram.png'
import Youtube from '../../../assets/icons/icons-social/youtube.png'

function  Footer(){
    return(
      <footer className='footer'>
        <div className='info-column'>
            <div className ='column'>
            "A RD University ajudou a aprimorar os
             processos comerciais e operacionais da minha agência", Joilson Fernandes.
            </div>
            <div className ='column'>
            "A RD University ajudou a aprimorar os
             processos comerciais e operacionais da minha agência", Joilson Fernandes.
            </div>
            <div className ='column'>
                <img src={facebook}></img>
                <img src={insta}></img>
                <img src={Youtube}></img>
            </div>
        </div>
        <div className='rodape-column'>
            <i>Copyright © 2022</i>
        </div>
       
    </footer>  
    )
}
export default Footer