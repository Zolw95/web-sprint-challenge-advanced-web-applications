import React, { useState } from 'react';
import axios from 'axios';
const Login = (props) => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  // Form State
  const [form, setForm] = useState({
    credentials: {
      username: '',
      password: '',
    },
  });

  // Destructure State
  const { credentials, username, password } = form;

  // Handle Input Change
  const handleChange = (e) => {
    setForm({
      credentials: {
        ...form.credentials,
        [e.target.name]: e.target.value,
      },
    });
  };

  // Submit Form & Make API Call
  const login = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/login', credentials).then((res) => {
      localStorage.setItem('token', res.data.payload);
      props.history.push('/protected');
    });
  };

  return (
    <div>
      <form onSubmit={login}>
        <h1>Welcome to the Bubble App!</h1>
        <input
          type='text'
          name='username'
          placeholder='Username'
          value={username}
          onChange={handleChange}
          style={{ width: '100%' }}
        />
        <input
          type='text'
          name='password'
          placeholder='Password'
          value={password}
          onChange={handleChange}
          style={{ width: '100%' }}
        />
        <button style={{ width: '100%' }}>Log In</button>
      </form>
    </div>
  );
};

export default Login;
