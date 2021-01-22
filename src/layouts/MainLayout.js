import React from 'react';
import Header from './../components/Header';
import Footer from './../components/Footer';

const MainLayout = props => {
    return (   
        <div className="mainLayout">
        <div className="fullheight">
        <div className="hero2">
        <Header {...props} />
        </div>
            <div className="content">
                {props.children}
            </div>
        </div>
            <Footer />
        </div>
    );
};

export default MainLayout;