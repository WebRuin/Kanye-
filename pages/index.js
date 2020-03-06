import React, { useState, useEffect } from "react"
import useFetch from "./utils/getKanya"

const kanye = "https://api.kanye.rest"

const Index = () => {
  let [kanyaQuote, setKanyeQuote] = useState(null)
  let data = useFetch(kanye)

  const getMore = () => {
    setKanyeQuote(useFetch(kanye))
  }

  return (
    <>
      <h1>Welcome to Next.js!</h1>
      <p>Here is a random Kanye West quote:</p>
      {!data ? <div>Loading...</div> : <p>{!kanyaQuote ? data : kanyaQuote}</p>}
      <button onClick={getMore}>Get new quote</button>
    </>
  )
}

export default Index
