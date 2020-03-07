import React, { useState } from "react"

const useFetch = url => {
  const [data, setData] = useState(null)

  const doFetch = () => {
    async function fetchData() {
      const response = await fetch(url)
      const json = await response.json()
      console.log(json.quote)
      setData(json.quote)
    }
    fetchData()
  }
  return { data, doFetch }
}

export default useFetch
