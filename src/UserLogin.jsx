import React, { useState } from 'react';
import SignIn from './SignIn';
import SignUp from './SignUp';

function UserLogin() {

    const [isSignIn, setIsSignIn] = useState(true);

    const handleSignIn = (data) => {
        console.log('Signing in with:', data);
        // Perform sign-in logic
    };

    const handleSignUp = (data) => {
        console.log('Signing up with:', data);
        // Perform sign-up logic
    };
    return (
        <div>
            {isSignIn ? (
                <SignIn onSignIn={handleSignIn} />
            ) : (
                <SignUp onSignUp={handleSignUp} />
            )}
            <button className={isSignIn ? 'signin-btn' : 'signup-btn'} onClick={() => setIsSignIn(!isSignIn)}>
                {isSignIn ? 'Sign Up' : 'Sign In'}
            </button>

        </div>
    )
}

export default UserLogin