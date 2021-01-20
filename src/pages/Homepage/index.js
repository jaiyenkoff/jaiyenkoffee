import React from 'react';
import LandingPage from './../../components/LandingPage';
import './styles.scss';

const Homepage = props => {
    return (
     <div className="homepage">
     <div>
         <LandingPage />
     </div>
     <div>
        <h2 className="welcometxt">Welcome to Jaiyen Koffee</h2>
    </div>
    <div className="story">
        <h4>OUR STORY</h4>
        <p>An afforadble premium coffee we'd like to offer. With 100% specially selected Arabica beans creates various option that matches with your taste and style </p>
     </div>
     </div>
    );
};

export default Homepage