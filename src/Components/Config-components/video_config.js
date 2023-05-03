import { useState, useEffect} from "react"
import axios from "axios";


function Video_config(){
    const [Video, setVideo] = useState('');

    function updateVideo(id, novoVideo) {
        axios.put(`http://localhost:5000/Video/${id}`, { video: novoVideo })
          .then(response => {
            setVideo(response.data.video); // Renderiza a propriedade 'video' do objeto
          })
          .catch(error => {
            console.error(error);
          });
      }
    
    return(
        <main>
          <div id='all-containers' className='Container-Vídeo'>
            <h2>Adicione o link de seu novo vídeo</h2>
         <form onSubmit={(event) => {
          event.preventDefault();
          updateVideo(1, event.target.elements.novoVideo.value);
        }}>
        <input placeholder='insira um novo link' name='novoVideo' required   autoComplete='off'></input>
        <button type='submit' id='Submit-btn' >Atualizar </button>
      </form>
      </div>
        </main>
    )
}

export default Video_config