import React from 'react';
import { useState } from 'react';
import '../style/sign.css'
export default function Signup() {

  const onChangeName = (event) =>{setName(event.target.value)}
  const onChangeCnic = (event) =>{setCnic(event.target.value)}
  const onChangeDOB = (event) =>{setDOB(event.target.value)}
  const onChangeEmail = (event) =>{setEmail(event.target.value)}
  const onChangePass = (event) =>{setPass(event.target.value)}

  const [name, setName] = useState('');
  const [cnic, setCnic] = useState('');
  const [dob, setDOB] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Send the form data to the PHP API using fetch
    fetch('http://http://localhost/phpmyadmin/index.php?route=/database/structure&db=evoting/sign_up_php.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        name: name,
        cnic: cnic,
        dob: dob,
        email: email,
        password: pass,
      }),
    })
      .then((response) => response.text())
      .then((data) => {
        console.log(data); // Handle the response from the API as needed
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  // Rest of the component remains the same...

  return (
    <div>
      <div className="sign-up">
        <form action="Sign_up_php.php" method="post">
        <div className="sign-up-input">
          <label htmlFor="text1">Name</label><br />
          <input type="text" name='text1' id='text1' value={name} onChange={onChangeName} size={25}/> <br /><br />

          <label htmlFor="text2">CNIC</label><br />
          <input type="text" name='text2' id='text2' value={cnic} onChange={onChangeCnic} size={25}/> <br /> <br />

          <label htmlFor="text3">Date of Birth</label><br />
          <input type="text" name='text3' id='text3' value={dob} onChange={onChangeDOB} size={25}/><br /><br />

          <label htmlFor="text4">Email Address</label><br />
          <input type="text" name='text4' id='text4' value={email} onChange={onChangeEmail} size={25}/><br /><br />

          <label htmlFor="text5">Password</label><br />
          <input type="password" name='text5' id='text5' value={pass} onChange={onChangePass} size={25}/><br /><br />

          <button type="submit" className='btn1' name='text6' value="">Sign up</button>
        </div>
        </form>
      </div>
    </div>
  )
}
