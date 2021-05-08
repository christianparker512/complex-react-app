import React, { useEffect, useState} from "react"
import Axios from "axios"
import {useParam, Link} from 'react=router-dom'
import LoadingDotsIcon from './LoadingDotsIcon'

function ProfilePosts() {
  const[isLoading, setIsLoading] = useState(true)
  const [posts, setPosts]=useState([])

  useEffect(() => {
    async function fetchPosts() {
      try {
          const response = await Axios.get('/profile./${username}/posts')
          setPosts(response.data)
          setIsLoading(false)
        } catch(e) {
        console.log("There was a problem.")
      }
    }
    fetchPosts()
  }, [])
  if (isLoading) return 
  <LoadingDotsIcon />
  return (
    <div class="list-group">
    {posts.map(post =>{
      const date = new Date(post.createdDate)
      const dateFormatted = `${date.getMonth() +1}/${date.getDate()}/${date.getFullYear}`
      return (
        <Link key ={post._id} to={`/post/${post._id}`} class="list-group-item list-group-item-action">
      <img class="avatar-tiny" src={post.author.avatar} /> <strong>{post.title}</strong>{" "}
      <span class="text-muted small">on {dateFormatted} </span>
    </Link>
      )
    })}
  </div>
  )
}

export default ProfilePosts
