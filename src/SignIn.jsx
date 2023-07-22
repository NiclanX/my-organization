import React from 'react'
import './App.css'

export const SignIn = () => {
  return (
    <form action="GET">
        <h1>Welcom back!</h1>
        <input type="text" placeholder='First name' id='name' autoComplete='off'/><br />
        <label htmlFor="name">Only enter your first name***</label><br />
        <button className='signIn-btn'>Sign In</button>
    </form>
  )
}
