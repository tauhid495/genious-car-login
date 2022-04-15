import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import SocialLogin from './SocialLogin';

const Login = () => {
    const emailRef = useRef('');
    const passWordRef = useRef('');
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    const navigate = useNavigate();

    if (user) {
        navigate(from, { replace: true });
    }

    const resetPassword = async () => {
        const email = emailRef.current.value;
        await sendPasswordResetEmail(email);
        alert('Sent email');
    }



    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const passWord = passWordRef.current.value;

        signInWithEmailAndPassword(email, passWord);
    }



    return (
        <div className='mt-5 container w-50 mx-auto'>
            <div className='border rounded-3 p-5 shadow'>
                <h2 className='text-primary text-center'>Please Login</h2>
                <Form onClick={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control ref={passWordRef} type="password" placeholder="Password" required />
                    </Form.Group>

                    <Button className='d-block mx-auto px-5' variant="primary" type="submit">
                        Login
                    </Button>
                    <p>New to Genious Car? <Link to='/register' className='text-danger pe-auto text-decoration-none' >Please Register</Link > </p>
                    <p>Forget your password? <Link to='/home' onClick={resetPassword} className='text-danger pe-auto text-decoration-none' >Reset Password</Link > </p>

                    <SocialLogin />
                </Form>
            </div>
        </div >
    );
};

export default Login;