import '../Admin/indexAdmin.css'
import{ Link } from 'react-router-dom'

function Administrador(){
    return(
       <main className='main-ADM'>
        <div className='coluna-adm'>
           <Link to="/Configuracoes"><p>Configurações</p></Link>
           <Link to="/Usuarios"><p>Adicionar novo usuário</p></Link>
           </div>

       </main>
    )
}

export default Administrador