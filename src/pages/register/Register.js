import React, { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'
import SocialLogin from '../Login/SocialLogin';

const Register = () => {

const [agree, setAgree]=useState(false);

    const nameRef = useRef('');
    const emailRef = useRef('');
    const passWordRef = useRef('');


    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification:true});
    const [updateProfile, updating, nameerror] = useUpdateProfile(auth);

    const navigate = useNavigate();


    if (user) {
        console.log('user', user);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const passWord = passWordRef.current.value;

        // console.log(name, email, passWord);
        
        await createUserWithEmailAndPassword(email, passWord);
        await updateProfile({ displayName : name });
          alert('Updated profile');
    }


    return (
        <div className='mt-5 container w-50 mx-auto'>
            <div className='border rounded-3 p-5 shadow'>
                <h2 className='text-primary text-center'>Please Register</h2>
                <Form  >
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control ref={nameRef} type="text" placeholder="Enter Your Name" required />
                        <Form.Text className="text-muted">
                            We'll never share your name with anyone else.
                        </Form.Text>
                    </Form.Group>
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
                    <Form.Group onClick={()=>setAgree(!agree)} className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check className={agree? 'ps-2 text-primary' : 'ps-2 text-danger'} type="checkbox" label="Agree with Genious Cars terms and conditions" />
                    </Form.Group>
                    <Button onClick={handleSubmit} className='' variant="primary" type="submit">
                        Submit
                    </Button>
                    
                    <p>Already have an account? <Link to='/login' className='text-danger pe-auto text-decoration-none' >Please Login</Link > </p>

                    <SocialLogin />
                </Form>
            </div>
        </div>
    );
};

export default Register;