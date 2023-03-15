import React, { useContext, useEffect } from 'react'
import { blogcontext } from './App'
import { useParams } from 'react-router-dom'
import axios from 'axios'



function SingleBlog() {
  const { id } = useParams()
  const { singleblog, setsingleblog } = useContext(blogcontext)

  useEffect(() => {
    async function fetchData() {
      const result = await axios.get("https://jsonplaceholder.typicode.com/posts/" + id)
      setsingleblog(result.data)
    }
    fetchData()
  }, [id])


  return (
    <div>

      <h2>{singleblog.title}</h2>
      <p>{singleblog.body}</p>

    </div>
  )
}

export default SingleBlog