import React from 'react';
import loadervideov2 from '../Home/website_loadervideo_homev2.mp4';
import TabsB from './Subcomponents/TabsB';

export default function SectionB() {
  return (
    <div className='mainwrapperv2'>
      <div className='b-vid-container'>
        <div className='triangle-grey-white' />

        <video
          className='fade-video-b'
          loop={true}
          autoPlay={true}
          muted={true}
        >
          <source src={loadervideov2} type='video/mp4' />
        </video>

        <div id='section-b'>
          <div className='page-column services-column'>
            <TabsB />
            <>
              <div className='page-header3'>
                <h2>
                  Our <mark>Services</mark>
                </h2>
                <div className='tabcontent'>
                  <h3>
                    <a href='advertising.php'>
                      <mark>ADVERTISING</mark>
                    </a>
                  </h3>
                  <p>
                    Blending creative design and strategy with complex media
                    buying. We use strategy to map out which channels are
                    optimal for reaching your objectives, and creative design to
                    move your audience, with your brand.
                  </p>
                </div>

                <div className='tabcontent'>
                  <h3>
                    <a href='webengineering.php'>
                      <mark>WEB DESIGN + DEVELOPMENT</mark>
                    </a>
                  </h3>
                  <p>
                    Websites designed for attention and developed for action. We
                    engage audiences by developing websites designed to
                    encourage action.
                  </p>
                </div>

                <div className='tabcontent'>
                  <h3>
                    <a href='brandingstrategy.php'>
                      <mark>BRANDING + STRATEGY</mark>
                    </a>
                  </h3>
                  <p>
                    Combining data and creativity to enhance consumer
                    experience. We create thoughtful solutions to help you make
                    bold decisions.{' '}
                  </p>
                </div>
              </div>
            </>
          </div>
        </div>

        <div className='triangle-white-grey' />
      </div>
    </div>
  );
}
