import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const TabsB = () => {
  return (
    <Tabs className='services-tabs'>
      <TabList>
        <Tab className='tab'>
          <button className='tablinks btn-2 shrt'>
            <span>ADVERTISING</span>
          </button>
        </Tab>
        <Tab className='tab'>
          <button className='tablinks btn-2 med'>
            <span>BRANDING + STRATEGY</span>
          </button>
        </Tab>
        <Tab className='tab'>
          <button className='tablinks btn-2 long'>
            <span>WEB DESIGN + DEVELOPMENT</span>
          </button>
        </Tab>
      </TabList>

      <div className='tabcontent'>
        <TabPanel>
          <h3>
            <a href='advertising.php'>
              <mark>ADVERTISING</mark>
            </a>
          </h3>
          <p>
            Blending creative design and strategy with complex media buying. We
            use strategy to map out which channels are optimal for reaching your
            objectives, and creative design to move your audience, with your
            brand.
          </p>
        </TabPanel>
        <TabPanel>
          <h3>
            <a href='brandingstrategy.php'>
              <mark>BRANDING + STRATEGY</mark>
            </a>
          </h3>
          <p>
            Combining data and creativity to enhance consumer experience. We
            create thoughtful solutions to help you make bold decisions.
          </p>
        </TabPanel>
        <TabPanel>
          <h3>
            <a href='webengineering.php'>
              <mark>WEB DESIGN + DEVELOPMENT</mark>
            </a>
          </h3>
          <p>
            Websites designed for attention and developed for action. We engage
            audiences by developing websites designed to encourage action.
          </p>
        </TabPanel>
      </div>
    </Tabs>
  );
};

export default TabsB;
