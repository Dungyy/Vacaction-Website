
import Navbar from './Components/Navbar/Navbar'
import Head from 'next/head'

export default function About() {
  return (
    <>
      <Head>
      <title>About</title>
        <meta name="description" content="Vacation app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <h1>About</h1>
    </>
  )
}