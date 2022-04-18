import React from 'react';
import Auth from '../../../Firebase/Firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth'
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const [signInWithGoogle, user, error] = useSignInWithGoogle(Auth);
    const navigate = useNavigate();

    if (user) {
        return (
            navigate('/home')
        );
    }
    return (
        <div className='container w-50'>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-dark w-50'></div>
                <p className='p-3'>or</p>
                <div style={{ height: '1px' }} className='bg-dark w-50'></div>
            </div>
            <button onClick={() => signInWithGoogle()} type="submit" className="btn btn-outline-primary d-block btn-lg w-100 mx-auto my-2">Join With Google</button>
        </div>
    );
};

export default SocialLogin;