import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
           <NavLink to='/'>Website Name</NavLink>
           <NavLink to='/about'>About</NavLink>
        </div>
    )
}

export default Navbar;