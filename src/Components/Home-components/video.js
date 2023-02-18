import React from 'react';
import ReactPlayer from 'react-player';
import { useState } from 'react';

function Video_container({video}){
  const [URL_video, setURL_video ] = useState('')
    return(
    <section id='c' className='terceiro'>
      <div className='container-video'>
       <ReactPlayer url={video} controls width="100%" height="100%" />
      </div>
    </section>
    )
}

export default Video_container