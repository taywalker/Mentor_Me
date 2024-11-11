// src/pages/SignIn.js
import React, { useState } from 'react';
import '../styles/SignIn.css'; // Adjusted path to the styles folder
import TextInput from '../components/TextInput';

const SignIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  return (
    <div className="container">
      <div className="box">
        <h3>Sign In</h3>
        <p>Don't have an account yet? <b>Sign up here!</b></p>
        <TextInput 
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Your username or email"
        /> 
        <TextInput 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
        />
      </div>
    </div>
  );
};

export default SignIn;
