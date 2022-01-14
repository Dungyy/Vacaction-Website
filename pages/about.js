
import Head from 'next/head'
import styled from 'styled-components'

export default function About() {
  return (
    <>
      <Head>
        <title>About Page</title>
        <link href='./Home'  />
      </Head>
      <Hero>
        <Heading>About</Heading>
      </Hero>
    </>
  )
}

const Hero = styled.div`
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
`

const Heading = styled.h1`
  color: #000;
  font-size: 18rem;
  font-weight: 900;
`