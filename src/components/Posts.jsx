import React, {useState, useEffect} from "react"
import useFetch from "../hooks/useFetch"

const Posts = ({posts}) => {
  return (
    <ul>
      {
        posts.map(({id, title}) => (
          <li key={id}>{title}</li>
        ))
      }
    </ul>
  )
}

export default Posts
