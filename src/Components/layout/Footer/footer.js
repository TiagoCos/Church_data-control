import '../Footer/indexFooter.css'

function  Footer(){
    
    return(
      <footer className='footer'>
        <div>
            <i>Copyright © 2020 Tech</i>
        </div>
        <section className='infomações-footer-colun01'>
            <div>

            </div>
        </section>

        <section  className='infomações-footer-colun02'>
           <div>

           </div>
        </section>
    <ul> 
        <li>
            <a href="#">


                <span className="fa fa-facebook"></span>
            </a>
        </li>
        <li>
            <a href="#">

                <span className="fa fa-twitter"></span>
            </a>
        </li>
        <li>
            <a href="#">

                <span className="fa fa-instagram"></span>
            </a>
        </li>
        <li>
            <a href="#">
                <span className="fa fa-linkedin"></span>
            </a>
        </li> 
    </ul>


        
    </footer>  
    )
}
export default Footer