import React from 'react';
import './styles.scss';


const Footer = props => {
    return (
        <footer className="footer">
            <div className="wrap">
                <h4>- Don't Hurry, Drink Coffee -</h4>
                <div className="social">
                    Follow Us
                    <ul class="social-icons">
                    <li><a href="https://www.facebook.com/Jaiyen.koff"><img src="https://i.pinimg.com/originals/b3/26/b5/b326b5f8d23cd1e0f18df4c9265416f7.png" alt="" /></a></li>
                    <li><a href="https://www.instagram.com/jaiyen.koff/"><img src="https://i.pinimg.com/originals/e8/8b/a5/e88ba54a1be984fc2eb030b6b602ed27.png" alt="" /></a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;