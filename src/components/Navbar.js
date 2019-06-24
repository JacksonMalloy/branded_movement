import React, { Component } from 'react'
import {Link} from 'react-router-dom'

import DrawerToggleButton from '../components/MobileMenu/DrawerToggleButton';

export default class Navbar extends Component {

    render() {
        return (
            <div className="mainwrapper">
                <header className="banner">  
                    <Link to="/" className="logo hvr-bounce-to-bottom">BRANDED MOVEMENT</Link>
                    <nav className="slider">

                        <ul>
                            <li><Link to="/About" className="a">About</Link></li>
                            <li><Link to="/Work" className="a">Work</Link></li>
                            <li><Link to="/Blog" className="a">Blog</Link></li>
                            <li><Link to="/Contact" className="a">Contact</Link></li>
                        </ul>    

                    </nav>
                    <div className="menu-toggle">
                        <DrawerToggleButton click={this.props.drawerClickHandler} />
                    </div>
                </header>
            </div>
        );
    }
}

