import React from 'react';
import ReactPlayer from 'react-player';
import './video.css'

function Video_container({video ='https://youtu.be/dQw4w9WgXcQ'}){

    return(
    <section id='c' className='terceiro'>
      <div className='container-video'>
       <ReactPlayer url={video} controls width="100%" height="100%" />
      </div>
    </section>
    )
}

export default Video_container