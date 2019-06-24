import React from 'react';
import {Link} from 'react-router-dom';

const sideDrawer = props => (
    <nav className="side-drawer">
        <ul>
            <li><Link to="/About" className="a" >About</Link></li>
            <li><Link to="/Work" className="a" >Work</Link></li>
            <li><Link to="/Blog" className="a" >Blog</Link></li>
            <li><Link to="/Contact" className="a" >Contact</Link></li>
        </ul>     
    </nav>
);

export default sideDrawer;