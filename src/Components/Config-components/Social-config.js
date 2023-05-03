import {useState, useEffect} from 'react'

function Social(){
    return(
        <div >
            <form id='all-containers'>
                <h2>Atualize suas redes sociais: </h2>
                <input placeholder='Instagram'></input>
                <input placeholder='Facebook'></input>
                <input placeholder='Youtube'></input>
                <button type='Submit'>Enviar</button>
            </form>
        </div>
    )
}

export default Social