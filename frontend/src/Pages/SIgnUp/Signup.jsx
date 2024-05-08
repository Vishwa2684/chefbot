import React, { useState } from 'react';
import { getAuth,
     createUserWithEmailAndPassword,
      GoogleAuthProvider, 
      signInWithPopup } from "firebase/auth";
import './Signup.css'



export default function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (e) => setEmail(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);

    const handleSignup = async (e) => {
        e.preventDefault();
        const auth = getAuth();
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            // Signed up successfully
            const user = userCredential.user;
            console.log('Signed up successfully:', user);
        } catch (error) {
            console.error('Error signing up:', error);
        }
    };

    const handleGoogleSignup = async () => {
        const auth = getAuth();
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
        <div>
            <h2>Signup</h2>
            <form onSubmit={handleSignup}>
                <input type="email" placeholder="Email" value={email} onChange={handleEmailChange} />
                <input type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
                <button type="submit">Signup with Email/Password</button>
            </form>
            <button onClick={handleGoogleSignup}>Signup with Google</button>
        </div>
    );
}
