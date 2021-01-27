import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { signOutUserStart } from './../../redux/User/user.actions'
import {  selectCartItemsCount } from './../../redux/Cart/cart.selectors';
import { Link } from 'react-router-dom';

import './styles.scss';

// Logo
import Logo from './../../assets/Jaiyen-logo.png';

//icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faShoppingBag)

const mapState = (state) => ({
   currentUser: state.user.currentUser,
   totalNumCartItems: selectCartItemsCount(state)
 });

const Header = props => {
   const dispatch = useDispatch();
   const { currentUser, totalNumCartItems } = useSelector(mapState);
    
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

      <ul>
      <li> 
      <Link to="/store">
         Our Menu
      </Link>
      </li>  
      <li>
         <Link to="/bag">
         My Bag
         <span className="icon">
         <FontAwesomeIcon icon="shopping-bag" />
         </span>
         ({totalNumCartItems})
         </Link>
      </li>

      {currentUser && [
      <li>
      <Link to="/dashboard">
         MY ACCOUNT
      </Link>
      </li>,  
      <li>
      <span onClick={() => signOut()}>
         LOGOUT
      </span>
      </li>
         ]}

         {!currentUser && [
              <li>
                 <Link to="/registration">
                    REGISTER
                 </Link>
             </li>,
             <li>
                 <Link to="/login">
                    LOGIN
                 </Link>
             </li>
         ]}
         
         </ul>


         
     </div>
    </div>
    </header>
    );
};

Header.defaultProps = {
    currentUser: null
};

export default Header;