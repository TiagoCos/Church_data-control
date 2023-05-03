import {useState, useEffect} from 'react'

function Name(){
    return(
        <div >
            <form id='all-containers'>
                <h2>Digite o nome de sua comunidade </h2>
                <input placeholder='seu campo é...'></input>
                <button type='Submit'>Enviar</button>
            </form>
        </div>
    )
}

export default Name