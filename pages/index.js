import { Box, Button, Grid, GridItem, Heading } from '@chakra-ui/react'
import Head from 'next/head'

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
            [1, 2, 3, 4, 5, 6, 7, 8,9, 10,11,12, 13, 14, 15, 16, 17, 18].map((property, index) =>
              <GridItem cursor="pointer" borderRadius="md" colSpan={1} key={index} p={4} shadow="md">
                <Heading>
                  Property   {property}
                </Heading>
              </GridItem>)
          }
        </Grid>
      </Box>

    </div>
  )
}
