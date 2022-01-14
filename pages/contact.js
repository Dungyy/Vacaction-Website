
import Navbar from './Components/Navbar/Navbar'
import Head from 'next/head'

export default function Contact() {
  return (
    <>
      <Head>
      <title>Contact</title>
        <meta name="description" content="Vacation app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <h1>Contact</h1>
    </>
  )
}