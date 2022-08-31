import { Button } from '@chakra-ui/react'
import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Rockstar Properties</title>
        <meta name="description" content="One Stop Solution for all real estate needs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Button>
        Get Started
      </Button>

    </div>
  )
}
