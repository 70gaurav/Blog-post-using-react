import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
  const navigate = useNavigate()
  const [user,setuser] = useState("")
  const [password,setpassword] = useState("")
  function submithandler(e) {
    e.preventDefault()
    const storeddata = JSON.parse(localStorage.getItem("userdetails"))
    console.log(storeddata)
    const filtereddata = storeddata.filter(data => data.username === user && data.password === password)
    if(filtereddata){
     alert( )
     navigate("/")
    }
    else{
      alert("you have entered wrong credentials check your username or password or you should register first")
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