import React, { Component } from 'react';
import './styles.scss';
import Buttons from './../forms/Button'
import { signInWithFacebook, signInWithGoogle, auth } from './../../firebase/utils'

import { Link } from 'react-router-dom'
import FormInput from './../forms/FormInput';
import Button from './../forms/Button';
import AuthWrapper from './../AuthWrapper';

const initialState ={
    email: '',
    password: '',

}

class SignIn extends Component {
constructor(props) {
    super(props);
    this.state = {
        ...initialState
    };

    this.handelChange = this.handelChange.bind(this);
}

handelChange(e) {
     const { name,value } = e.target;
     this.setState({
         [name]:value
     });
}

handleSubmit = async e => {
    e.preventDefault();
    const { email, password } = this.state;

    try {
        await auth.signInWithEmailAndPassword(email, password);
        this.setState({
            ...initialState
        })
    } catch(err) {
        // console.log(err)
    };
}

render() {
    const { email, password} = this.state;

    const configAuthWrapper = {
        headline: 'LogIn'
    }

    return (
       <AuthWrapper {...configAuthWrapper}>
                <div className="formWrap">
                <form onSubmit={this.handleSubmit}>
                   <FormInput 
                   type="email"
                   name="email"
                   value={email}
                   placeholder="Email"
                   handleChange={this.handelChange}
                   />
                  <FormInput 
                   type="password"
                   name="password"
                   value={password}
                   placeholder="Password"
                   handleChange={this.handelChange}
                   />
                   
                   <Button type="submit">
                       LogIn
                   </Button>
                   
                    <div className="socialSignin">
                            <Buttons onClick={signInWithGoogle}>
                                Sign In With Google
                            </Buttons>
                            </div>
                            <div className="socialSignin">
                            <Buttons onClick={signInWithFacebook}>
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
}

export default SignIn;