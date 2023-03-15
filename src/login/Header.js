import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='Header'>
        <h1>Blogs</h1>
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/About'>About</Link></li>
            <li><Link to='/Login'>Login</Link></li>
            <li><Link to='/Register'>Register</Link></li>
        </ul>
    </div>
  )
}

export default Header