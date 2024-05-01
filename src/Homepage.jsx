// import React from 'react'
// import  './HomePage.css'

// function Homepage() {
//   return (
//     <div className='home-container'>
//         {/* <img src="" alt="" /> */}
//         <div className="login-options">
//             <p className='admin-option'>Admin Login</p><hr />
//             <p className='user-option'>User Login</p>
//         </div>
//     </div>
//   )
// }

// export default Homepage


import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './HomePage.css';

function Homepage() {
  return (
    <div className='home-container'>
      {/* <img src="" alt="" /> */}
      <div className="login-options">
        <p className='admin-option'>Admin Login</p><hr />
        {/* Use Link to navigate to the User Login page */}
        <Link to="/user-login" className='user-option'>User Login</Link>
      </div>
    </div>
  );
}

export default Homepage;
