import React, { useRef } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Auth from '../../../Firebase/Firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
    // for getting input value
    const emailRf = useRef('')
    const passwordRf = useRef('')

    // using react router hook for sign in with email and pass
    const [
        signInWithEmailAndPassword,
        user,
        error,
    ] = useSignInWithEmailAndPassword(Auth);
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(Auth);

    // for storing error massage
    let errorElement;
    const navigate = useNavigate()
    const location = useLocation();
    let from = location.state?.from?.pathname || '/';

    // if user have
    if (user) {
        navigate(from, { replace: true })
    }
    // if any Error happening
    if (error) {
        errorElement = <p className='py-3 text-danger'>
            Error : {error?.message}
        </p>
    }
    // while submit login form
    const handleLogin = (event) => {
        event.preventDefault();
        let email = emailRf.current.value;
        let password = passwordRf.current.value;
        signInWithEmailAndPassword(email, password);
    }
    // for reset password
    const resetPassword = async () => {
        let email = emailRf.current.value;
        await sendPasswordResetEmail(email)
        if (email) { toast("Send Email") }
        else { alert("PLease Enter Email") }
    }
    return (
        <div className='container '>
            <h1 className='text-center py-5'>Let's Login Your Account</h1>
            <form onSubmit={(event) => { handleLogin(event) }} className='w-50 mx-auto'>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" ref={emailRf} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" ref={passwordRf} className="form-control" id="exampleInputPassword1" required />
                </div>
                {errorElement}
                <button type="submit" className="btn btn-outline-primary d-block w-100 btn-lg">Log In</button>
                <p className='py-3'>Create a new Account?
                    <Link to='/register'> Please Log in</Link></p>
                <p>Forget Password?
                    <Link onClick={resetPassword} to='/login'> Reset Now</Link></p>
            </form>
            <SocialLogin />
            <ToastContainer />
        </div>
    );
};

export default Login;