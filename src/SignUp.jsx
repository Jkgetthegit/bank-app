// import React from 'react';
// import { useForm } from "react-hook-form";
// import { yupResolver } from '@hookform/resolvers/yup';
// import * as yup from "yup";
// import './SignUp.css';

// const schema = yup.object().shape({
//   fullName: yup.string().required('FullName is required'),
//   email: yup.string().email().required('Enter valid email address'),
//   accountNumber: yup.number('Numbers only allowed').typeError('Account Number must be a number').positive().required('Account number is required'),
//   password: yup.string().required('Password is required').min(6, 'Password must contain 6 to 15 characters').max(12, 'Password must contain 6 to 15 characters').matches(
//     /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9]).*$/,
//     'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character'
//   )
// }).required();

// function SignUp({ onSignUp }) {
//   const { register, handleSubmit, formState: { errors } } = useForm(
//     {
//       resolver: yupResolver(schema)
//     }
//   );

//   const onSubmit = async (data) => {
//     try {
//       const orderedData = JSON.stringify({
//         email_id: data.email,
//         password: data.password,
//         full_Name: data.fullName,
//         account_Number: data.accountNumber
//       });

//       console.log(orderedData); // Output the ordered data

//       // Perform sign-up logic here
//       onSignUp(data);
//     } catch (error) {
//       console.error('Error signing up:', error);
//     }
//   };

//   return (
//     <div className='container'>
//       <div className="sign-card">
//         <h1 className='title'>Sign Up</h1>
//         <form onSubmit={handleSubmit(onSubmit)} className='form-container'>

//           <label className='label'>Email</label>
//           <input
//             type="email"
//             className='input-box'
//             placeholder="Email"
//             {...register("email")}
//           />
//           <p className="errorMsg">{errors.email?.message}</p>


//           <label className='label'>Password</label>
//           <input
//             type="password"
//             className='input-box'
//             placeholder="Password"
//             {...register("password")}
//           />
//           <p className="errorMsg">{errors.password?.message}</p>

//           <label className='label'>Fullname</label>
//           <input
//             type="text"
//             className='input-box'
//             placeholder="Full Name"
//             {...register("fullName")}
//           />
//           <p className="errorMsg">{errors.fullName?.message}</p>


//           <label className='label'>Account number</label>
//           <input
//             type="number"
//             className='input-box'
//             placeholder="Account Number"
//             {...register("accountNumber")}
//           />
//           <p className="errorMsg">{errors.accountNumber?.message}</p>


//           <button type="submit" className='btn' >Sign Up</button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default SignUp;




import React from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import './SignUp.css';

const schema = yup.object().shape({
  fullName: yup.string().required('FullName is required'),
  email: yup.string().email().required('Enter valid email address'),
  accountNumber: yup.number('Numbers only allowed').typeError('Account Number must be a number').positive().required('Account number is required'),
  password: yup.string().required('Password is required').min(6, 'Password must contain 6 to 15 characters').max(12, 'Password must contain 6 to 15 characters').matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9]).*$/,
    'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character'
  )
}).required();

function SignUp({ onSignUp }) {
  const { register, handleSubmit, formState: { errors } } = useForm(
    {
      resolver: yupResolver(schema)
    }
  );

  const onSubmit = async (data) => {
    try {
      const response = await fetch('http://localhost:3000/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email_id: data.email,
          password: data.password,
          full_name: data.fullName,
          account_number: data.accountNumber
        })
      });

      if (!response.ok) {
        throw new Error('Sign up failed');
      }

      const responseData = await response.json();
      console.log('User registered successfully:', responseData);
      // Pass any necessary data to the parent component
      onSignUp(responseData);
    } catch (error) {
      console.error('Error signing up:', error);
    }
  };

  return (
    <div className='container'>
      <div className="sign-card">
        <h1 className='title'>Sign Up</h1>
        <form onSubmit={handleSubmit(onSubmit)} className='form-container'>

          <label className='label'>Email</label>
          <input
            type="email"
            className='input-box'
            placeholder="Email"
            {...register("email")}
          />
          <p className="errorMsg">{errors.email?.message}</p>


          <label className='label'>Password</label>
          <input
            type="password"
            className='input-box'
            placeholder="Password"
            {...register("password")}
          />
          <p className="errorMsg">{errors.password?.message}</p>

          <label className='label'>Fullname</label>
          <input
            type="text"
            className='input-box'
            placeholder="Full Name"
            {...register("fullName")}
          />
          <p className="errorMsg">{errors.fullName?.message}</p>


          <label className='label'>Account number</label>
          <input
            type="number"
            className='input-box'
            placeholder="Account Number"
            {...register("accountNumber")}
          />
          <p className="errorMsg">{errors.accountNumber?.message}</p>


          <button type="submit" className='btn' >Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
