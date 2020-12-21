import React from 'react';
import Directory from './../../components/Directory';
import './styles.scss';

const Homepage = props => {
    return (
     <div className="homepage">
     <div className="banner">
     </div>
     <div className="bannertxt-container">
     <h2 className="bannertxt">Don't hurry, Drink coffee</h2>
     </div>
     <div>
        <Directory />
     </div>
     <span className="welcometxt">
      <p>Welcome to Jaiyen Koffee</p>
      </span>
     </div>
    );
};

export default Homepage