import { useEffect, useState } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      console.log('fetching data', url)
      const response = await fetch(url)
      const data = await response.json()

      setData(data)
    }

    fetchData()
  }, [])


  return {data}
}

export default useFetch
