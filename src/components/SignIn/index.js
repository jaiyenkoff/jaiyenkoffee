import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom'
import { emailSignInStart, googleSignInStart, facebookSignInStart} from './../../redux/User/user.actions'

import './styles.scss';
import Buttons from './../forms/Button'


import FormInput from './../forms/FormInput';
import Button from './../forms/Button';
import AuthWrapper from './../AuthWrapper';

const mapState = ({ user }) => ({
   currentUser: user.currentUser
});

const SignIn = props => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { currentUser } =useSelector(mapState);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

useEffect(() => {
 if (currentUser) {
  resetForm();
  history.push('/');
 }

}, [currentUser]);


const resetForm = () => {
    setEmail('');
    setPassword('');
} 

const handleSubmit = e => {
    e.preventDefault(); 
    dispatch(emailSignInStart({ email, password }));
  }

const handleGoogleSignin = () => {
    dispatch(googleSignInStart());
}

const handleFacebookSignin = () => {
    dispatch(facebookSignInStart());
}

    const configAuthWrapper = {
        headline: 'LogIn'
    }

    return (
       <AuthWrapper {...configAuthWrapper}>
                <div className="formWrap">
                <form onSubmit={handleSubmit}>
                   <FormInput 
                   type="email"
                   name="email"
                   value={email}
                   placeholder="Email"
                   handleChange={e => setEmail(e.target.value)}
                   />
                  <FormInput 
                   type="password"
                   name="password"
                   value={password}
                   placeholder="Password"
                   handleChange={e => setPassword(e.target.value)}
                   />
                   
                   <Button type="submit">
                       LogIn
                   </Button>
                   
                    <div className="socialSignin">
                            <Buttons onClick={handleGoogleSignin}>
                                Sign In With Google
                            </Buttons>
                            </div>
                            <div className="socialSignin">
                            <Buttons onClick={handleFacebookSignin}>
                                Sign In With Facebook
                            </Buttons>
                    </div>
                    <div className="links">
                    <Link to="/recovery">
                        Reset Password
                    </Link>
                    </div>
                </form>
                </div>
       </AuthWrapper> 
    );
}

export default SignIn;