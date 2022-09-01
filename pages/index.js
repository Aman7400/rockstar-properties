/* eslint-disable @next/next/no-img-element */
import { Box, Button, Grid, GridItem, Heading, Text } from '@chakra-ui/react'
import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Rockstar Properties</title>
        <meta name="description" content="One Stop Solution for all real estate needs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box w={"100%"} p={4} >
        <Heading>
          Showing Defaults
        </Heading>
        <Grid w={"100%"} height={520} overflowY="scroll" my={4} templateColumns='repeat(3, 1fr)' gap={6}>
          {
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18].map((property, index) =>
              <Link key={index} href={`/details/${property}`}>
                <GridItem  cursor="pointer" borderRadius="md" colSpan={1} p={4} shadow="md">
                  <Box overflow={"hidden"} className='hover-zoom' w={"100%"} bgColor="purple.100">
                    <img alt='property' src="/yo.jpeg" style={{
                      maxWidth: "100%",
                      height: "auto",
                      borderRadius: "5px",
                    }} />
                  </Box>
                  <Box p={2}>
                    <Heading size="md" mb={1}>
                      Property  {property}
                    </Heading>
                    <Text>
                      Beverly Hills
                    </Text>
                  </Box>
                </GridItem></Link>
            )
          }
        </Grid>
      </Box>

    </div>
  )
}
