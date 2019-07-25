import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div className='mainwrapper'>
      <footer className='fgrid'>
        <div className='item-1'>
          <ul>
            <li className='li-head'>Company</li>
            <Link to='/'>
              <li className='hvr-bounce-to-right'>Home</li>
            </Link>
            <Link to='/about'>
              <li className='hvr-bounce-to-right'>About</li>
            </Link>
            {/* <Link to='/work'>
              <li className='hvr-bounce-to-right'>Work</li>
            </Link> */}
            <Link to='/blog'>
              <li className='hvr-bounce-to-right'>Blog</li>
            </Link>
            <Link to='/contact'>
              <li className='hvr-bounce-to-right'>Contact</li>
            </Link>
          </ul>
        </div>
        <div className='item-2'>
          <ul>
            {/*fix spacing issue*/}
            <li className='li-head' />
            <li className='hvr-bounce-to-right' />
            <li className='hvr-bounce-to-right' />
            <li className='hvr-bounce-to-right' />
          </ul>
        </div>
        <div className='item-3'>
          <ul>
            <li className='li-head'>Contact Info</li>
            <li>vancouver@brandedmovement.com</li>
            <li>604-505-9772</li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
