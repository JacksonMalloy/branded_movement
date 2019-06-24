import React from 'react'
import TabsA from './Subcomponents/TabsA';

export default function ServiceList() {
  return ( 

    <div className="mainwrapper">
    
    <TabsA />

    
    <div className="mobile-tabs-about">
        <div className="page-column">
          <h2>Advertising</h2>
          <div className="splitbox">

            <div className="split-left">
              <h3>DIGITAL</h3>
              <ul>
                <li>Display Network</li>
                <li>Facebook</li>
                <li>Instagram</li>
                <li>LinkedIn</li>
                <li>Twitch</li>
                <li>Pinterest</li>
                <li>Reddit</li>
                <li>Search Network</li>
                <li>Snapchat</li>
                <li>Twitter</li>
                <li>Yelp</li>
                <li>Youtube</li>
              </ul>
              <button>Learn More</button>
            </div>

            <div className="split-right">
              <h3>TRADITIONAL</h3>
              <ul>
                <li>Billboards</li> 
                <li>Broadcast TV</li>
                <li>Bus Shelter</li>
                <li>Cable TV</li>
                <li>Direct Mail</li>
                <li>Grocery Store</li>
                <li>In-Store Displays</li>
                <li>Magazines</li>
                <li>Newspapers</li> 
                <li>Radio</li>
                <li>Shopping Malls</li>
              </ul>
              <button>Learn More</button>
            </div>
          </div>
          <h2>Branding + Strategy</h2>
          <div className="splitbox">
            <div className="split-left">
              <h3>BRANDING</h3>
              <ul>
                <li>Brand Audit</li>
                <li>Brand Equity Assessment</li>
                <li>Mantra Development</li>
                <li>POP & POD Assessment</li>
                <li>Messaging</li>
                <li>Brand Identity</li>
              </ul>
              <button>Learn More</button>
            </div>
            <div className="split-right">
              <h3>STRATEGY</h3>
              <ul>
                <li>Competitive Analysis</li>
                <li>Content Strategy</li>
                <li>Go-to-market Strategy</li>
                <li>Hollistic Strategy</li>
                <li>Mix Assessment</li>
                <li>Porter's Five Forces</li>
                <li>Industry Research and Analysis</li>
                <li>SWOT Analysis</li>
                <li>Trend Forecasting</li>  
              </ul>
              <button>Learn More</button>
            </div>
          </div>
          <h2>Design + Development</h2>
          <div className="splitbox">
            <div className="split-left">
              <h3>UI DEVELOPMENT</h3>
              <ul>
                <li>Blog Setup</li> 
                <li>Email Setup</li>
                <li>Landing Page Design</li>
                <li>Logo Design</li>
                <li>Newsletter Design</li>
                <li>Online Store Setup</li>
                <li>Responsive Design</li>
                <li>Search Engine Optimization</li>
                <li>Wordpress Design</li>
              </ul>
              <button>Learn More</button>
            </div>
            <div className="split-right">
              <h3>MAINTENANCE</h3>
              <ul>
                <li>Analytics Setup</li>
                <li>Browser Testing</li>   
                <li>Blog-Content Brainstorming</li>  
                <li>Email Campaigns</li>
                <li>Remarketing Setup</li>
                <li>Social Media Brainstorming</li>
                <li>Speed Testing</li>
              </ul>
              <button>Learn More</button>
            </div>
          </div>
        </div>
      </div>

    <div className="greybox">

    </div>
  </div>
  );
}





