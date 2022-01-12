import React, { useState } from 'react';

function Login() {
  
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  async function loginUser(event) {
    event.preventDefault()

    const response = await fetch('http://localhost:1337/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email, 
        pass
      })
    })

    const data = await response.json(); 

    if (data.user) {
      alert('Login succesfull')
      window.location.href = '/dashboard'
    } else {
      alert('Pl check your id/pass')
    }

    console.log(data);
  }
  
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={loginUser}>
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

export default Login;
