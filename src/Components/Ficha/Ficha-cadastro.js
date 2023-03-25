import  '../Ficha/index.Ficha.css'

function Ficha(){
    return(
        <div className='main-ficha'>
            <div className='Ficha-De-Cadastro'>
                <h1 className='Titulo-ficha'>Cadastro de membros</h1>
                <form>
                    <label >CPF: </label>
                    <input 
                    type='CPF' name='CPF' id='CPF'
                    placeholder='Digite seu CPF' autoComplete='off'></input>
                    <label >CPF: </label>
                    <input
                     type='CPF' name='CPF' id='CPF' placeholder='Digite seu CPF' autoComplete='off'></input>
                    <label >CPF: </label>
                    <input 
                    type='CPF' name='CPF' id='CPF' placeholder='Digite seu CPF' autoComplete='off'></input>
                    
                    

                </form>
            </div>
        </div>
    )
}

export default Ficha