import React from 'react';
import './styles.scss'
import Logo from './../../assets/jaiyen-logo-thmb.png'
import { Link } from 'react-router-dom'

const Header = props => {
    return (
    <header className="header">
    <div className="wrap">
     <div className="logo">
     <Link to="/"> 
        <img src={Logo} alt="" />
        </Link>   
     </div>
     <div className="callToActions">
         <ul>
             <li>
                 <Link to="/product">
                    PRODUCT
                 </Link>
              </li>   
              <li>
                 <Link to="/registration">
                    REGISTER
                 </Link>
             </li>
         </ul>
     </div>
    </div>
    </header>
    );
};

export default Header;