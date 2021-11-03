import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../hook/useAuth';
import google from '..//..//..//image/google.png'
import './Login.css';

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';


    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
    }

    return (
        <div className="button-section">
            <h2 className="p-3">Login with Google</h2>
            
            <img src={google} width="26px" alt="google-icon" /> <span className="fw-bold"><Button onClick={handleGoogleLogin} variant="outline-info">Google SignIn</Button></span>
        </div>
    );
};

export default Login;