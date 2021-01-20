import React from 'react';
import Header from './../components/Header';
import Footer from './../components/Footer';

const HomepageLayout = props => {
  return (
    <div className="homeLayout">
    <div className="fullHeight">
      <Header {...props} />
      <div className="content">
      {props.children}
      </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomepageLayout;