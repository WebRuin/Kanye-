import React, { useState, useEffect } from "react"
import useFetch from "../utils/getKanya"
import styled from "styled-components"

import Button from "../components/Button"
import Footer from "../components/Footer"

const H1 = styled.h1`
  color: #0365e3;
  font-size: 5rem;
  margin-bottom: 3rem;
`

const QuoteWrapper = styled.div`
  height: 145px;
  display: grid;
  justify-content: center;
  align-items: center;
`

const P = styled.p`
  color: #c7e303;
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
`

const Index = () => {
  const kanye = "https://api.kanye.rest"
  const { data, doFetch } = useFetch(kanye)

  useEffect(() => {
    doFetch()
  }, [])

  const getMore = () => {
    doFetch()
  }
  return (
    <>
      <H1>Random Kanye West Quotes</H1>
      <QuoteWrapper>{!data ? <P>Loading...</P> : <P>{data}</P>}</QuoteWrapper>
      <Button getMore={getMore} />
      <Footer />
    </>
  )
}

export default Index
