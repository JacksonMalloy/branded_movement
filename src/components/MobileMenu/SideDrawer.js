import React from 'react';
import { Link } from 'react-router-dom';

export default function SideDrawer() {
  return (
    <nav className='side-drawer'>
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
  );
}
