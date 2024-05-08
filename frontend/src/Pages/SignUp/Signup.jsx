import React, { useState,useRef } from 'react';

import { createUserWithEmailAndPassword ,
    GoogleAuthProvider,signInWithPopup} from 'firebase/auth';
import {auth} from '../../config/config.js'

import './Signup.css'
import { toast,ToastContainer } from 'react-toastify';


export default function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');



    const handleEmailChange = (e) => setEmail(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);

    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            // Signed up successfully
            const user = userCredential.user;
            console.log('Signed up successfully:', user);
            toast('Signed up successfully')
        } catch (error) {
            console.error('Error signing up:', error);
            toast.error('Fill the details')
        }
    };

    const handleGoogleSignup = async () => {
        const provider = new GoogleAuthProvider();
        try {
            const userCredential = await signInWithPopup(auth, provider);
            // Signed up with Google successfully
            const user = userCredential.user;
            console.log('Signed up with Google successfully:', user);
        } catch (error) {
            console.error('Error signing up with Google:', error);
        }
    };

    return (
        <div className='container'>

            <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
            transition: Bounce
            />
            
            <h2>Log In</h2>
            <form onSubmit={handleSignup} className='form-group'>
                <input type="email" placeholder="Email" value={email} onChange={handleEmailChange} className='email' id='email'/>
                <input type="password" placeholder="Password" value={password} onChange={handlePasswordChange} className='password' id='password'/>
                <button className='btn-group' type="submit">Signup with Email/Password</button>
            </form>
            <button className='google-btn' onClick={handleGoogleSignup}>Signup with Google</button>
        </div>
    );
}