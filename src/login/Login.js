import React, { useState } from 'react'

function Login() {
  
  const [user,setuser] = useState("")
  const [password,setpassword] = useState("")
  function submithandler(e) {
    e.preventDefault()
    const storeddata = JSON.parse(localStorage.getItem("userdetails"))
    if(storeddata.userdetails.username === user && storeddata.userdetails.password === password){
      alert(`welcome ${storeddata.userdetails.username}`)
    }
    else{
      alert("invalid credentials you should register first or check the credentials you have entered")
    }
  }
  return (
    <div className='register'>
    <form onSubmit={submithandler}>
      <input type="text" placeholder='Enter your Username' required value={user} onChange={(e) => setuser(e.target.value)}></input><br/>
      <input type="password" placeholder='Enter your Password' required value={password} onChange={(e)=>setpassword(e.target.value)}></input><br/>
      <button type='submit'>Log In</button>
    </form>
    </div>
  )
}

export default Login