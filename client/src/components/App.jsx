import React, { useState } from 'react';

export default function Login () {

  const [input, setInput] = useState({});
  const [errors, setErrors] = useState({});
  const emailRegex = new RegExp('^([a-z\d\.-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$');

  const handleInput = (e) => {
    const {name, value} = e.target;
    const updatedState = {...input};

    updatedState[name] = value;
    setInput(updatedState);
  }
  const validateInput = () => {
    const {email, password} = input;
    const errors = {};
    let isValid = true;

    if (!email || !emailRegex(email)) {
      errors['email'] = 'Please enter valid email';
      isValid = false;
    } else if (!password) {
      errors['password'] = 'Please enter valid email';
      isValid = false;
    }
    setErrors(errors);
    return isValid;
  }

  return (
    <div className='App'>
      <h2 className='header'>Login Below</h2>
      <form onSubmit={() => validateInput()}>
        <input type='text' name='email' placeholder='Email' onChange={(e) => handleInput(e)} />
        <input type='password' name='password' placeholder='Password' onChange={(e) => handleInput(e)}/>
        <button type='submit'>Login</button>
      </form>
      <button className='signup'>Sign Up</button>
    </div >
  )
};