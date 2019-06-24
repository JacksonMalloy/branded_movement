import React from 'react'
import Aboutvideo from '../About/about_page_background_video.mp4'

export default function JumbotronAbout() {
  return ( 
    <div className="mainwrapper">
        <div className="hero">
            <video className="background-video" loop={true} autoPlay={true} muted={true}>
              <source src = {Aboutvideo} type="video/mp4" />
            </video>
            <div className="loader">
                <h1 className="future">Brands Need <mark>Movement</mark></h1>
                <h2 className="subfuture">Guiding startup brands with advertising, strategy, design and development.  </h2>
            </div>

            <div className="triangle-grey-white-about">
            </div>
        </div>
    </div>
  );
}





