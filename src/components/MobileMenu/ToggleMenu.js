import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSpring, animated as anim } from 'react-spring';

const ToggleMenu = () => {
  const [isToggled, setToggle] = useState(true);
  const fade = useSpring({
    display: isToggled ? 'none' : 'block'
  });

  return (
    <>
      <div className='toggle-button' onClick={() => setToggle(!isToggled)}>
        <div className='toggle-button__line' />
        <div className='toggle-button__line' />
        <div className='toggle-button__line' />
      </div>
      <anim.nav className='side-drawer' style={fade}>
        <ul>
          <li onClick={() => setToggle(!isToggled)}>
            <Link to='/' className='a'>
              Home
            </Link>
          </li>
          <li onClick={() => setToggle(!isToggled)}>
            <Link to='/about' className='a'>
              About
            </Link>
          </li>

          <li onClick={() => setToggle(!isToggled)}>
            <Link to='/blog' className='a'>
              Blog
            </Link>
          </li>
          <li onClick={() => setToggle(!isToggled)}>
            <Link to='/contact' className='a'>
              Contact
            </Link>
          </li>
        </ul>
      </anim.nav>
    </>
  );
};

export default ToggleMenu;
