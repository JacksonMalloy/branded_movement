import React from 'react';
import loadervideo from '../Home/website_loadervideo_home.mp4';

export default function JumbotronHome() {
  return (
    <div className='mainwrapper'>
      <div className='hero'>
        <video
          className='background-video'
          loop={true}
          autoPlay={true}
          muted={true}
        >
          <source src={loadervideo} type='video/mp4' />
        </video>
        <div className='loader'>
          <h1
            className='future'
            data-aos='fade'
            data-aos-duration='2000'
            data-aos-delay='0'
            data-aos-once='true'
          >
            Creatively Inspiring <mark>Movement</mark>
          </h1>
          <h2
            className='subfuture'
            data-aos='fade'
            data-aos-duration='2000'
            data-aos-delay='0'
            data-aos-once='true'
          >
            {' '}
            A branding agency specializing in digital{' '}
          </h2>
        </div>
        <div className='triangle-white-grey2' />
      </div>
    </div>
  );
}
