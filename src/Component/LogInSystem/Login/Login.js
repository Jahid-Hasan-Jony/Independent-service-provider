import React from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Auth from '../../../Firebase/Firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(Auth);
    const errorElement;
    const navigate = useNavigate()
    const location = useLocation();
    let from = location.state?.from?.pathname || '/';
    if (user) {
        navigate(from, { replace: true })
    }
    if (error) {
        errorElement = <p className='text-danger'>
            Error : {error?.message}
        </p>
    }

    const handleLogin = (event) => {
        event.preventDefault();
        let email = event.target.email.value;
        let password = event.target.password.value;
        signInWithEmailAndPassword(email, password);
    }
    return (
        <div className='container '>
            <h1 className='text-center py-5'>Let's Login Your Account</h1>
            <form onSubmit={(event) => { handleLogin(event) }} className='w-50 mx-auto'>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" name='email' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" name='password' className="form-control" id="exampleInputPassword1" required />
                </div>
                <Link className='d-block pb-3' to='/register'>Create a new Account? Please Log in</Link>
                <button type="submit" className="btn btn-outline-primary d-block w-100 btn-lg">Log In</button>
                {errorElement}
            </form>
            <SocialLogin />
        </div>
    );
};

export default Login;