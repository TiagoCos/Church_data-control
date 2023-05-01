import { useState, useEffect} from "react"
import axios from "axios";
import Video_container from "../Home-components/video";

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
            <h1>Adicione seu novo Vídeo aqui</h1>
         <form onSubmit={(event) => {
          event.preventDefault();
          updateVideo(1, event.target.elements.novoVideo.value);
        }}>
        <input placeholder='insira um novo link' name='novoVideo' required></input>
        <button type='submit'>Atualizar </button>
      </form>
      </div>
        </main>
    )
}

export default Video_config