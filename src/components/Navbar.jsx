import React, { Component } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import Email from '@material-ui/icons/Email';
import { Phone } from '@material-ui/icons';
const logo = require('assets/images/company-logo-white.png');

const Navbar = (props) => {
    return ( 
        <nav className="main-nav">
            <img src={logo} alt="logo"/>
            <ul>
                <li> <Phone fontSize="small" className="mx-2 mb-2" /><a href="tel:+212538050800"> <span>+212 538 050800</span> </a></li>
                <li className="mb-0"> <Email fontSize="small" className="mx-2" /><a href="mailto:reservations.rabat@story-hotels.com">reservations.rabat@story-hotels.com</a> </li>
            </ul>
        </nav>
     );
}
 
export default Navbar;