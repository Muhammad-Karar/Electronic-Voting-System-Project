import React from 'react';
import '../style/sign.css'
export default function Signup() {
  return (
    <div>
      <div className="sign-up">
        <form action="/" method="post">
        <div className="sign-up-input">
          <label htmlFor="text1">Name</label><br />
          <input type="text" name='text1' id='text1' value="" size={25}/> <br /><br />

          <label htmlFor="text2">CNIC</label><br />
          <input type="text" name='text2' id='text2' value="" size={25}/> <br /> <br />

          <label htmlFor="text3">Date of Birth</label><br />
          <input type="text" name='text3' id='text3' value="" size={25}/><br /><br />

          <label htmlFor="text4">Email Address</label><br />
          <input type="text" name='text4' id='text4' value="" size={25}/><br /><br />

          <label htmlFor="text5">Password</label><br />
          <input type="password" name='text5' id='text5' value="" size={25}/><br /><br />

          <button type="submit" className='btn1' name='text6' value="">Sign up</button>
        </div>
        </form>
      </div>
    </div>
  )
}
