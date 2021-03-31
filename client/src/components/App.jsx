import React, { useState } from 'react';

export default function Login () {

  const [input, setInput] = useState({});
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const handleInput = (e) => {
    const {name, value} = e.target;
    const updatedState = {...input};

    updatedState[name] = value;
    setInput(updatedState);
  }

  const validateInput = (e) => {
    e.preventDefault()

    // input object
    // const {email, password} = input;

    let emailRegex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/
    const errors = {};
    let isValid = true;


    if (!email || !emailRegex.test(email)) {
      errors['email'] = 'Please enter valid email';
      isValid = false;
    }
    if (!password) {
      errors['password'] = 'Please enter valid password';
      isValid = false;
    }
    setErrors(errors);
    return isValid;
  }

  // below is using separate state of email and password

  return (
    <div className='App'>
      <h2 className='header'>Login Below</h2>
      <form>
        <input name='email' placeholder='Email' onChange={(e) => setEmail(e.target.value)} value={email}/>
        <div className='text-warning'>{errors.email}</div>
        <input type='password' name='password' placeholder='Password' onChange={(e) => setPassword(e.target.value)} value={password}/>
        <div className='text-warning'>{errors.password}</div>
        <button type='submit' onClick={(e) => { validateInput(e); setEmail(''); setPassword(''); }}>Login</button>
      </form>
      <button className='signup'>Sign Up</button>
    </div >
  )

  // below is using input object state

  // return (
  //   <div className='App'>
  //     <h2 className='header'>Login Below</h2>
  //     <form>
  //       <input name='email' placeholder='Email' onChange={(e) => handleInput(e)} value={input.email}/>
  //       <div className='text-warning'>{errors.email}</div>
  //       <input type='password' name='password' placeholder='Password' onChange={(e) => handleInput(e)} value={input.password}/>
  //       <div className='text-warning'>{errors.password}</div>
  //       <button type='submit' onClick={(e) => validateInput(e)}>Login</button>
  //     </form>
  //     <button className='signup'>Sign Up</button>
  //   </div >
  // )
};