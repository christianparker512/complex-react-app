import React, { useEffect } from "react"

function ProfilePosts() {
  return (
    <div class="list-group">
    <a href="#" class="list-group-item list-group-item-action">
      <img class="avatar-tiny" src="https://gravatar.com/avatar/b9408a09298632b5151200f3449434ef?s=128" /> <strong>Example Post #1</strong>
      <span class="text-muted small">on 2/10/2020 </span>
    </a>
    <a href="#" class="list-group-item list-group-item-action">
      <img class="avatar-tiny" src="https://gravatar.com/avatar/b9408a09298632b5151200f3449434ef?s=128" /> <strong>Example Post #2</strong>
      <span class="text-muted small">on 2/10/2020 </span>
    </a>
    <a href="#" class="list-group-item list-group-item-action">
      <img class="avatar-tiny" src="https://gravatar.com/avatar/b9408a09298632b5151200f3449434ef?s=128" /> <strong>Example Post #3</strong>
      <span class="text-muted small">on 2/10/2020 </span>
    </a>
  </div>
  )
}

export default ProfilePosts
