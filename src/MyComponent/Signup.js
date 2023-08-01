import React, { useState } from 'react';
import {  createAccount } from '../service/api';
import '../style/sign.css';

export default function Signup() {
  const initialUserData = {
    name: "",
    cnic: "",
    dob: "",
    email: "",
    pass: ""
  };

  const [userData, setUserData] = useState(initialUserData);

  const onChangeHandle = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createAccount(userData);
    setUserData(initialUserData); // Clear the form after submission
  };

  return (
    <div>
      <div className="sign-up">
        <form onSubmit={handleSubmit}>
          <div className="sign-up-input">
            <label htmlFor="name">Name</label><br />
            <input type="text" name="name" id="name" value={userData.name} onChange={onChangeHandle} size={25} /><br /><br />

            <label htmlFor="cnic">CNIC</label><br />
            <input type="text" name="cnic" id="cnic" value={userData.cnic} onChange={onChangeHandle} size={25} /><br /><br />

            <label htmlFor="dob">Date of Birth</label><br />
            <input type="text" name="dob" id="dob" value={userData.dob} onChange={onChangeHandle} size={25} /><br /><br />

            <label htmlFor="email">Email Address</label><br />
            <input type="text" name="email" id="email" value={userData.email} onChange={onChangeHandle} size={25} /><br /><br />

            <label htmlFor="pass">Password</label><br />
            <input type="password" name="pass" id="pass" value={userData.pass} onChange={onChangeHandle} size={25} /><br /><br />

            <button type="submit" className='btn1'>Sign up</button>
          </div>
        </form>
      </div>
    </div>
  );
}
