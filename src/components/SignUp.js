import React from 'react';
import "./SignUp.css"
import { auth } from '../firebase';
import { Link } from 'react-router-dom';
import { useState } from 'react';

  
const SignUp = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const signIn = e => {
      e.preventDefault();
       auth.signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log('User logged in successfully!');
        // Redirect to the homepage
        window.location.href = '/';
      })
      .catch((error) => {
        console.error('Error logging in:', error);
        alert(error.message);
      });
      
    };


  return (
    <div className='sign-up'>
      <div className='login'>   
      <Link to = "/">
        <img src='data:image/jpeg;base64,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'
         alt='Beats-by Jay Logo' 
         className='login-logo'/>
      </Link>
      <div className='login-container'>
        <h1>Sign-in</h1>
        <form>
          <h5>Email</h5>
          <input type='text' value={email} onChange={e => setEmail(e.target.value)}/>
          <h5>Password</h5>
          <input type='Password'  value={password} onChange={ e => setPassword(e.target.value)}/>
          <button type='submit' className='login-signInButton' onClick={signIn}>Submit</button>
        </form>
        <p>By Signing-in you agree to the Beats By Jay conditions of use and sale.Please see our privacy notice.</p>
        <button className='login-registerButton'>Create your Beats By Jay Account </button>
      </div>      
    </div> 
    </div>
  );
};
  
export default SignUp;