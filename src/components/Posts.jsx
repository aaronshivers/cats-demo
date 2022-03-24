import React, {useState, useEffect} from "react"
import useFetch from "../hooks/useFetch"


const url = 'https://jsonplaceholder.typicode.com/posts'

const Users = () => {
  const {data} = useFetch(url)

  return (
    <ul>
      {
        data.map(({id, title}) => (
          <li key={id}>{title}</li>
        ))
      }
    </ul>
  )
}

export default Users
