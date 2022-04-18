import React from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import Auth from '../../../Firebase/Firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(Auth);
    const navigate = useNavigate()
    if (user) {
        navigate('/home')
    }

    const handleRegister = (event) => {
        event.preventDefault();
        let userName = event.target.name.value
        let email = event.target.email.value
        let password = event.target.password.value
        createUserWithEmailAndPassword(email, password)
    }

    return (
        <div className='container '>
            <h1 className='text-center py-5'>Let's Create a new Account</h1>
            <form onSubmit={(event) => { handleRegister(event) }} className='w-50 mx-auto'>
                <div className="mb-3">
                    <label htmlFor="exampleInputText" className="form-label">Full Name</label>
                    <input type="text" className="form-control" name='name' id="exampleInputText" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" name='email' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" name='password' className="form-control" id="exampleInputPassword1" required />
                    </div>
                    <Link className='d-block pb-3' to='/login'>Already have an Account?</Link>
                    <button type="submit" className="btn btn-outline-primary d-block w-100 btn-lg">Sign Up</button>
                </div>
            </form>
            <SocialLogin />
        </div>
    );
};

export default Register;