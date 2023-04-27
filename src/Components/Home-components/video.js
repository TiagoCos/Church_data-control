import React from 'react';
import ReactPlayer from 'react-player';
import './video.css'

function Video_container({video ='https://youtu.be/McKqDvwikF8?list=PLYXIp3MDqkOV7W61L1ejWMUo1YJSLMhRa'}){

    return(
    <section id='c' className='terceiro'>
      <div className='container-video'>
       <ReactPlayer url={video} controls width="100%" height="85%" />
      </div>
    </section>
    )
}

export default Video_container