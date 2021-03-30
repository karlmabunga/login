import React from 'react';

export default function Login () {


  return (
    <div className='App'>
      <h2 className='header'>Login Below</h2>
      <form>
        <input type='text' name='email' placeHolder='Email'></input>
        <input type='password' name='password' placeHolder='Password' />
      </form>
      <button className='signup'>Sign Up</button>
    </div >
  )
}