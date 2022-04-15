import React from 'react';
import google from '../../images/google.png'
import facebook from '../../images/facebook.png'
import github from '../../images/github.png'
import auth from '../../firebase.init';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);


    const navigate = useNavigate();
    let errorMsg;
    let loading2;

    if (error || error1) {
        errorMsg = <div>
            <p className='text-danger'>Error: {error?.message}{error1?.message}</p>
        </div>
    }
    if (loading || loading1) {
        loading2 = <p>Loading...</p>;
    }
    if (user || user1) {
        navigate('/');
    }



    return (
        <div>
            <div className='d-flex items-center justify-content-center'>
                <div className='border-primary  border-t-2 w-2/5'></div>
                <p className='mx-3 mt-2'>Or</p>
                <div className='border-t-2 border-primary  w-2/5'></div>
            </div>
            {errorMsg} {loading2}
            <div>
                <button
                    onClick={() => signInWithGoogle()}
                    className=' d-block mx-auto btn btn-primary w-50 d-flex justify-center'>
                    <img className='mx-3' src={google} alt="" />
                    Google LogIn</button>
            </div>
            <div>
                <button

                    className='my-2 d-block mx-auto btn btn-primary w-50 d-flex justify-center'>
                    <img className='mx-3' src={facebook} alt="" />
                    Facebook LogIn</button>
            </div>
            <div>
                <button
                    onClick={() => signInWithGithub()}
                    className=' d-block mx-auto btn btn-primary w-50 d-flex justify-center'>
                    <img className='mx-3' src={github} alt="" />
                    GitHub LogIn</button>
            </div>
        </div>
    );
};

export default SocialLogin;