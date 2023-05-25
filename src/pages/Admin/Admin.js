import '../Admin/indexAdmin.css'
import{ Link } from 'react-router-dom'

function Administrador(){
    return(
       <main className='main-ADM'>
           <Link to="/Configuracoes"><p>Configurações</p></Link>
           <Link to="/Configuracoes"><p>Adicionar novo usuário</p></Link>
           

       </main>
    )
}

export default Administrador