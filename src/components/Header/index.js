import React from 'react';
import { useSelector } from 'react-redux';
import './styles.scss';
import { auth } from './../../firebase/utils';
import { Link } from 'react-router-dom';

import Logo from './../../assets/jaiyen-logo-thmb.png';

const mapState = ({ user }) => ({
   currentUser: user.currentUser
});

const Header = props => {
    const { currentUser } = useSelector(mapState);
    
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
                 <Link to="/product">
                    PRODUCT
                 </Link>
              </li>   
              <li>
                 <Link to="/dashboard">
                    MY ACCOUNT
                 </Link>
              </li>  
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