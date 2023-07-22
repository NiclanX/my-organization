import React, { useState } from 'react'
import './App.css'

export const SignIn = () => {
  const [name, setName] = useState("")
  
  function handleSubmit(e) {
    e.preventDefault()
    
  }

  function nameInput(e){
    setName(e.target.value)
    
  }

  function logIn(){
    if (name == "") {
      alert('Please Type Your Name');

    } else {
      console.log(name + ' is eligible for log in')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
        <h1>Welcome Back!</h1>
        <input type="text" id='name' autoComplete='off' value={ name } onChange={(e) => nameInput(e)}/><br />
        <label htmlFor="name">Only enter your first name***</label><br />
        <button className='signIn-btn' onClick={logIn}>Sign In</button>
    </form>
  )
}
