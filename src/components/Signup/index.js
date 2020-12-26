import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import './styles.scss';

import { auth, handleUserProfile } from './../../firebase/utils';

import AuthWrapper from './../../components/AuthWrapper';
import FormInput from './../forms/FormInput';
import Button from './../forms/Button';


const Signup = props => {
    const [displayName, setDisplayName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErros] = useState('');

    const reset = () => {
        setDisplayName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        setErros([]);
    };

    const handleFormSubmit = async event => {
        event.preventDefault();

        if (password !== confirmPassword) {
            const err = ['Password don\'t match'];
            setErros(err);
            return;
        }
    
    try {
        const { user } = await auth.createUserWithEmailAndPassword(email, password);

        await handleUserProfile(user, { displayName });
       reset();
        props.history.push('/');
    } catch(err) {
        //console.log(err);
    }

    }
        const configAuthWrapper = {
            headline: 'Registration'
        };

        return (
            <AuthWrapper {...configAuthWrapper}>
                <div className="formWrap">                    
                                       {errors.length > 0 && (
                       <ul>
                           {errors.map((err, index) => {
                               return (
                                   <li key={index}>
                                       {err}
                                   </li>
                               )
                           })}
                       </ul>
                   )} 

                    <form onSubmit={handleFormSubmit}>
                <FormInput
                 type="text"
                 name="displayName"
                 value={displayName}
                 placeholder="Full Name"
                 handleChange={e => setDisplayName(e.target.value)}
                />
                <FormInput
                 type="email"
                 name="email"
                 value={email}
                 placeholder="email@example.com"
                 handleChange={e => setEmail(e.target.value)}
                />
                <FormInput
                 type="password"
                 name="password"
                 value={password}
                 placeholder="Password"
                 handleChange={e => setPassword(e.target.value)}
                />
                <FormInput
                 type="password"
                 name="confirmPassword"
                 value={confirmPassword}
                 placeholder="Cconfirm Password"
                 handleChange={e => setConfirmPassword(e.target.value)}
                />             

                <Button type="submit">
                    Register
                </Button>

                    </form>
                </div>
                </AuthWrapper> 
        );
    }

export default withRouter(Signup);
