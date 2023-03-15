import React, { createContext,useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './About'
import Header from './Header'
import Home from './Home'
import Login from './Login'
import Register from './Register'
import './blog.css'
import SingleBlog from './SingleBlog'
export const blogcontext = createContext(null)

function App() {
    const [blog , setBlog] = useState ([])
    const [form , setFormdetails] = useState ({})
    const [singleblog , setsingleblog] = useState ([])
  return (
    <div>
        <blogcontext.Provider value={{ blog, setBlog, form, setFormdetails, singleblog, setsingleblog}}>
        <BrowserRouter>
        <Header />
        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/About' element={<About />}></Route>
            <Route path='/Register' element={<Register />}></Route>
            <Route path='/Login' element={<Login />}></Route>
            <Route path='/SingleBlog/:id' element={<SingleBlog />}></Route>
        </Routes>
        </BrowserRouter>
        </blogcontext.Provider>
    </div>
  )
}

export default App