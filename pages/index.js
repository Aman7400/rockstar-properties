/* eslint-disable @next/next/no-img-element */
import { Box, Button, Grid, GridItem, Heading, HStack, Text } from '@chakra-ui/react'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import FilterBox from '../components/filter/Filter'
import { AuthContext } from '../contexts/AuthContext'
import allProperties from '../data/properties'

export default function Home() {





  return (
    <div>
      <Head>
        <title>Rockstar Properties</title>
        <meta name="description" content="One Stop Solution for all real estate needs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HStack flex={1}>
        {/* Filter */}
        <FilterBox />
        <Box w={"70%"} >
          <Box w={"100%"} p={4} >
            <Heading>
              Showing Defaults
            </Heading>
            <Grid w={"100%"} height={520} overflowY="scroll" my={4} templateColumns='repeat(3, 1fr)' gap={6}>
              {
                allProperties.map((property, index) =>
                  <Link key={index} href={`/details/${property.name}`}>
                    <GridItem cursor="pointer" borderRadius="md" colSpan={1} p={4} shadow="md">
                      <Box overflow={"hidden"} className='hover-zoom' w={"100%"} bgColor="purple.100">
                        <img alt='property' src="/yo.jpeg" style={{
                          maxWidth: "100%",
                          height: "auto",
                          borderRadius: "5px",
                        }} />
                      </Box>
                      <Box p={2}>
                        <Heading size="md" mb={1}>
                          Property  {property.name}
                        </Heading>
                        <Text>
                          {property.description.slice(0, 25) + '...'}
                        </Text>
                      </Box>
                    </GridItem></Link>
                )
              }
            </Grid>
          </Box>
        </Box>
      </HStack>



    </div>
  )
}
