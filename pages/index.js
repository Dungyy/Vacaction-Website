import Head from 'next/head'
import styled from 'styled-components'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home Page</title>
        <link href='./Home'  />
      </Head>
      <Hero>
        <Heading>Home</Heading>
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