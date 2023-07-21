import React from 'react';
import { useState } from 'react';
import '../style/log.css'
import { Link } from 'react-router-dom';

export default function Login() {
  const onChangeEmail = (event) =>{
    setEmail(event.target.value);
  }
  const onChangePass = (event) =>{
    setPassword(event.target.value);
  }
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  return (
    <div>
      <div className="login">
        <form action="/" method="post">
        <div className="login-input">

          <label htmlFor="text4">Email Address</label><br />
          <input type="text" name='text4' id='text4' value={email} onChange={onChangeEmail} size={25}/><br /><br />

          <label htmlFor="text5">Password</label><br />
          <input type="password" name='text5' id='text5' value={password} onChange={onChangePass} size={25}/><br />
          

          <Link style={{color: "white", marginLeft: "100px" }} to="/Signup">Forgot password?</Link> <br /><br />

          Not registered: <Link style={{color: "white", }} to="/sigup">signup</Link><br /><br />

          <button type="submit" className='btn2' name='text6' value="">Login</button>
        
        </div>
        </form>
      </div>
    </div>
  )
}
