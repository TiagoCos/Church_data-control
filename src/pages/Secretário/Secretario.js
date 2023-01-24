import "../Secretário/index.Secretario.css"
import { Link } from 'react-router-dom'

function Secretario(){
    return(
        <main className="Secretario-main">
             <Link to='/Ficha'><div className="card-cadastro">cadastro de membros</div></Link>
            <div className="card-cadastro">membros inativos</div>
            <div className="card-cadastro">membros ativos</div>
        </main>
    )
}


export default Secretario