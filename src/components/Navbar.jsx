import React from 'react';
import {Link} from 'react-router-dom';
function Navbar() {
    return (
        <>
        <div>
            <Link to='/'><h2>Home</h2></Link>
            <Link to='/contact'><h2>Contact</h2></Link>
            <Link to='/blog'><h2>Blog</h2></Link>
            
        </div>
        </>
    )
}

export default Navbar
