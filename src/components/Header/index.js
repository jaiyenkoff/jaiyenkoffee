import React from 'react';
import './styles.scss'
import Logo from './../../assets/jaiyen-logo-thmb.png'
import { auth } from './../../firebase/utils'
import { Link } from 'react-router-dom'

const Header = props => {
    const { currentUser } = props;
    return (
    <header className="header">
    <div className="wrap">
     <div className="logo">
     <Link to="/"> 
        <img src={Logo} alt="" />
        </Link>   
     </div>
     <div className="callToActions">
         {currentUser &&(
        <ul>
        <li>
        <span onClick={() => auth.signOut()}>
        LOGOUT
        </span>
        </li>
        </ul>
         )}
         {!currentUser && (
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
             <li>
                 <Link to="/login">
                    LOGIN
                 </Link>
             </li>
         </ul>
         )}
     </div>
    </div>
    </header>
    );
};

Header.defaultProps = {
    currentUser: null
};

export default Header;