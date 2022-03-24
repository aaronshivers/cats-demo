import {useEffect, useState} from "react"
import useLocalStorage from "./useLocalStorage"

const useFetch = (url) => {
  const [data, setData] = useState([])
  const [value, setValue] = useState([])
  
  useEffect(() => {    
    const fetchData = async () => {
      console.log('fetching data', url)
      const response = await fetch(url)
      const data = await response.json()  
   
      setData(data)
      setValue('users', data)
    }

    fetchData()
  }, [])

  
  return {data}
}

export default useFetch