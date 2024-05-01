import React from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './SignUp.css'; // Make sure to update the CSS file name if needed

// Import any necessary functions or modules for API requests

// Define the Yup schema for form validation
const schema = yup.object().shape({
  email: yup.string().email('Enter valid email address').required('Email is required'),
  password: yup.string().required('Password is required').min(6,'Password must contain 6 to 15 characters').max(12,'Password must contain 6 to 15 characters')
}).required();

function SignIn({ onSignIn }) {
  // Destructure the useForm hook to access form methods and state
  const {register,handleSubmit,formState: { errors, isValid }} = useForm(
    {
      resolver: yupResolver(schema)
    }
  );

  // Define the submit handler function
  const onSubmit = async (data) => {
    try {
      // Make a POST request to your backend API to authenticate the user
      const response = await fetch('http://localhost:3000/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      // Parse the response
      const responseData = await response.json();

      // Check if the authentication was successful
      if (response.ok) {
        // Call the onSignIn callback function to handle successful sign-in
        onSignIn(responseData);
      } else {
        // Handle authentication failure (e.g., display error message)
        console.error('Authentication failed:', responseData.message);
      }
    } catch (error) {
      // Handle any network or server errors
      console.error('Error signing in:', error);
    }
  };

  // Render the component UI
  return (
    <div className="container">
      <div className='sign-card'>
        <h1 className='title'>Sign In</h1>
        <form className='form-container' onSubmit={handleSubmit(onSubmit)} >
          <label className='label'>Email</label>
          <input
            type="email"
            className='input-box'
            placeholder="Email"
            {...register('email')}
          />
          <p className="errorMsg">{errors.email?.message}</p>

          <label className='label'>Password</label>
          <input
            type="password"
            className='input-box' 
            placeholder="Password"
            {...register('password')}
          />
          <p className="errorMsg">{errors.password?.message}</p>

          {/* Use the type="submit" button */}
          {/* Conditionally render the Link only if the form is valid */}
          {isValid ? <Link to="/userPage" className='btn'>Sign In</Link> :  <button className='btn' type="submit">Sign In</button>}
        </form>
      </div>
    </div>
  );
}

export default SignIn;
