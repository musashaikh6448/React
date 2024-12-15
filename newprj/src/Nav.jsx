import { Link } from 'react-router-dom';

import './assets/css/Nav.css';

const Nav = () => {
    return (
            <div className='nav-link  nav-list' >
                
                <img src=" " alt="Tekisky Logo" className="logo" />
                            <Link to="/" >Home</Link>
                           <Link to="/services">Services</Link>
                            <Link to="/contact" >Contact</Link>
                               <Link to="/aboutus" >About Us</Link>
              
            </div>
    )
};

export default Nav;