import React, {  useEffect, useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { blogcontext } from './App';


function Register() {
  const [name, setname] = useState("")
  const [email, setemail] = useState("")
  const [username, setusername] = useState("")
  const [password, setpassword] = useState("")
  const {form, setFormdetails} = useContext(blogcontext);
  const navigate = useNavigate()
  useEffect(()=> {
    localStorage.setItem("userdetails",JSON.stringify(form))
  },[form])

  function submithandler(e) {
    e.preventDefault()
    console.log(name,email,password)
    const userdetails = {
      name:name,
      email:email,
      username:username,
      password:password
    }
    setFormdetails([...form, {...userdetails}])
    navigate("/Login")
  }


  return (
    <div className='register'>
      <form onSubmit={submithandler}>
        <input type="text" placeholder='Enter your Name' required  autoFocus value={name} onChange={(e) => setname(e.target.value)} ></input><br/>
       
        <input type="email" placeholder='Enter your E-mail' required  value={email} onChange={(e) => setemail(e.target.value)}></input><br/>

        <input type="text" placeholder='Enter your Username'  required  value={username} onChange={(e) => setusername(e.target.value)} ></input><br/>

        <input type="password" placeholder='Enter your Password' required  value={password} onChange={(e) => setpassword(e.target.value)} ></input><br/>
        <button type='submit'>Register</button>


      </form>
    </div>
  )
}

export default Register