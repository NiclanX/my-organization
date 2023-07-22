import React from 'react'
import './App.css'

export const SignIn = () => {
  function logIn(e) {
    e.preventDefault()
    
    console.log(' is logged in')
  }
  return (
    <form action="GET">
        <h1>Welcome back!</h1>
        <input type="text" placeholder='First name' id='name' autoComplete='off'/><br />
        <label htmlFor="name">Only enter your first name***</label><br />
        <button className='signIn-btn' onClick={logIn}>Sign In</button>
    </form>
  )
}
