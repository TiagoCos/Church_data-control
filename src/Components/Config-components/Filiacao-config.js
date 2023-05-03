import {useState, useEffect} from 'react'

function Filiacao_Config(){
    const [selectedFile, setSelectedFile] = useState(null);

     const handleFileChange = (event) => {
     setSelectedFile(event.target.files[0]);

  };
    return(
        <div >
            <form id='all-containers' onChange={handleFileChange}>
                <h2>Itens do Slide</h2>
                <input type='file' required placeholder='slide 01' ></input>
                <input type='file' required></input>
                <input type='file' required></input>
                
                <button type='Submit'>Enviar</button>
            </form>
        </div>
    )
}

export default Filiacao_Config