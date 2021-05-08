import React, { useEffect, useState} from "react"
import Axios from "axios"
import {useParam} from 'react=router-dom'
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
  if (isLoading) return <div>
    Loading...
  </div>
  return (
    <div class="list-group">
    {posts.map(post =>{
      return (
        <a href="#" class="list-group-item list-group-item-action">
      <img class="avatar-tiny" src="https://gravatar.com/avatar/b9408a09298632b5151200f3449434ef?s=128" /> <strong>Example Post #1</strong>
      <span class="text-muted small">on 2/10/2020 </span>
    </a>
      )
    })}
  </div>
  )
}

export default ProfilePosts
