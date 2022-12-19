import '../Footer/indexFooter.css'
import {YoutubeOutlined} from '@ant-design/icons'
import {FacebookOutlined} from '@ant-design/icons'
import {InstagramOutlined } from '@ant-design/icons'

function  Footer(){
    
    return(
      <footer className='footer'>
        <span className='info-column'>
       
        </span>
        <div className='info-column'>
            <i>Copyright © 2022 Church</i>
        </div>
        <div className='info-column'>
           Siga-nos 
            </div> 
        <aside className='Social-column'>
            <a ><YoutubeOutlined /></a>
            <a><InstagramOutlined /></a>
            <a><FacebookOutlined /></a>
        </aside>
    </footer>  
    )
}
export default Footer