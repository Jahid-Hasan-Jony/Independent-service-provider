import React from 'react';

const Blog = () => {
    return (
        <div className='container'>
            <h1 className='text-center py-3'>Question And Answer</h1>
            <h2 className='py-2'>Differece Between Authorization and Authentication</h2>
            <p>
                Authentication is the process to verifies who the user is. and the other hand Authorization determines what resources a user can access the application. Authentication is visible to and partially changeable by the users. Authorization isn't visible to or changeable by the users.Authorization always takes place after authentication and Authentication is the first step of a good identity and access management process.
            </p>
            <h2 className='py-2'>Why you using Firebase? what other options do you have to implement authentication?</h2>
            <p>
                I am using firebase for making web site login sysytem and its easy and more secure for the sequrity purpose. we can implement many thing by the authentication . Those are : Password Requirements,Transferring the Data, Hashing Passwords etc
            </p>
            <h2 className='py-2'>What others Services does firebase Provide other then authentication?</h2>
            <p>
                There are many services which Firebase provides, Most useful of them are:<br />
                1. Cloud Firestore<br />
                2. Cloud Functions<br />
                3. Hosting<br />
                4. Cloud Storage<br />
                5. Google Analytics<br />
                6. Predictions<br />
                7. Cloud Messaging<br />
                8. Dynamic Links<br />
                9. Remote Config
            </p>
        </div>
    );
};

export default Blog;