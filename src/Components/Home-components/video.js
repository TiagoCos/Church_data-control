import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import axios from 'axios';
import './video.css';

function Video_container() {
  // fazendo um GET na api para exibir o vídeo 
  const [video, setVideo] = useState('');

  useEffect(() => {
    const id = 1;
    // faz uma chamada para a API para buscar o vídeo atual
    axios.get(`http://localhost:5000/Video/${id}`)
      .then(response => {
        setVideo(response.data.video); // Renderiza a propriedade 'video' do objeto
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <section id='c' className='terceiro'>
      <div className='container-video'>
        <ReactPlayer url={video} controls width="100%" height="85%" />
      </div>
    </section>
  );
}

export default Video_container;
