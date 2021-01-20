import React from 'react';
import './styles.scss';

const CloseButtons = ({ children, ...otherProps }) => {
    return (
        <button className="clsbtn" {...otherProps}>
            {children}
        </button>
    );
};

export default CloseButtons;