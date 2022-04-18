import React from 'react';

const Register = () => {
    return (
        <div className='container '>
            <h1 className='text-center py-5'>Let's Create a new Account</h1>
            <form className='w-50 mx-auto'>
                <div className="mb-3">
                    <label htmlFor="exampleInputText" className="form-label">Full Name</label>
                    <input type="text" className="form-control" id="exampleInputText" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" required />
                </div>
                <button type="submit" className="btn btn-outline-primary d-block w-100 btn-lg">Log In</button>
            </form>
            <button type="submit" className="btn btn-outline-primary d-block btn-lg w-50 mx-auto my-4">Join With Google</button>
        </div>
    );
};

export default Register;