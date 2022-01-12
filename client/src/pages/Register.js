import React, { useState } from 'react';

function Register() {
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  async function registerUser(event) {
    event.preventDefault()

    const response = await fetch('http://localhost:1337/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name, 
        email, 
        pass
      })
    })

    const data = await response.json(); 
    console.log(data);
  }
  
  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={registerUser}>
        <input 
          value={name}
          onChange={(text) => setName(text.target.value)}
          type='text'
          placeholder='Name'
        />
        <br />
        <input 
          value={email}
          onChange={(text) => setEmail(text.target.value)}
          type='text'
          placeholder='Email'
        />
        <br />
        <input 
          value={pass}
          onChange={(text) => setPass(text.target.value)}
          type='password'
          placeholder='Password'
        />
        <br />
        <input type='submit' value={'register'} />
      </form>
    </div>
  );
}

export default Register;
