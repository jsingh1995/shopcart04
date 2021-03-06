import React from 'react';
import { Link } from 'react-router-dom'
 const Navbar = ()=>{
    return(
            <nav className="nav-wrapper">
                <div className="container">
                    <Link to="/" className="brand-logo">SINGH ELECTRONICS / 317-531-7484  </Link>
                    
                    <ul className="right">
                        <li><Link to="/">Shop</Link></li>
                        <li><Link to="/cart">My Cart</Link></li>
                        <li><Link to="/cart">Check Out</Link></li>
                    </ul>
                </div>
            </nav>
   
        
    )
}

export default Navbar;