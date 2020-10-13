import React from 'react';
import './Login.css';
import login__logo1 from './login__logo1.png';
import svgImg from './Facebook-Logo.wine.svg';
import { Button } from '@material-ui/core';
import { auth, provider } from './firebase';
import { actionTypes } from './reducer';
import { useStateValue } from './StateProvider';

function Login() {
    const [state, dispatch] = useStateValue();
    const signIn = () => {
        // sign in...
        auth.signInWithPopup(provider)
        .then(result => {
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            })
        })
        .catch(error => alert(error.message));
    };
    return (
        <div className="login">
            <div className="login__logo">
                <img src={login__logo1} alt="" />
                <img src={svgImg} alt="" />
            </div>
            <Button type="submit" onClick={signIn}>
                Sign In
            </Button>
        </div>
    )
}

export default Login;
