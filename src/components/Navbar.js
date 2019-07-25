import React from 'react';
import { Link } from 'react-router-dom';
import ToggleMenu from '../components/MobileMenu/ToggleMenu';

export default function Navbar(props) {
  return (
    <div className='mainwrapper'>
      <header className='banner'>
        <Link to='/' className='logo hvr-bounce-to-bottom'>
          BRANDED MOVEMENT
        </Link>
        <nav className='slider'>
          <ul>
            <li>
              <Link to='/' className='a'>
                Home
              </Link>
            </li>
            <li>
              <Link to='/about' className='a'>
                About
              </Link>
            </li>

            <li>
              <Link to='/blog' className='a'>
                Blog
              </Link>
            </li>
            <li>
              <Link to='/contact' className='a'>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <div className='menu-toggle'>
          <ToggleMenu />
        </div>
      </header>
    </div>
  );
}
