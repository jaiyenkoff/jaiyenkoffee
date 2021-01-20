import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { signOutUserStart } from './../../redux/User/user.actions'
import './styles.scss';
import { Link } from 'react-router-dom';

import Logo from './../../assets/jaiyen-logo-thmb.png';

const mapState = ({ user }) => ({
   currentUser: user.currentUser
});

const Header = props => {
   const dispatch = useDispatch();
    const { currentUser } = useSelector(mapState);
    
const signOut = () => {
   dispatch(signOutUserStart());
};

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
        <span onClick={() => signOut()}>
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