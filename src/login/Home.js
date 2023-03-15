import axios from 'axios'
import React, { useEffect,  useContext } from 'react'
import { Link } from 'react-router-dom'
import { blogcontext } from './App'

function Home() {
    const {blog , setBlog ,singleblog,  setsingleblog} = useContext(blogcontext)
    
    function clickhandler (element) {
      setsingleblog(element)
      console.log(singleblog);

    }
   useEffect (() => {
    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then((response) => {
        // console.log(response.data)
        setBlog(response.data)
    })
   } ,[])
  return (
    <div className='blogs'>
        {
          blog.map((element) => {
            return(
                <div className='blog' key={element.id}>
                    <h1><Link to={`/SingleBlog/${element.id}`}>{element.title}</Link></h1>
                    <p>{element.body}</p>
                </div>
            )
          })  
        }
    </div>
  )
}

export default Home