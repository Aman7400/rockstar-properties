/* eslint-disable @next/next/no-img-element */
import { Box, Button, Container, Heading, HStack, IconButton, Tag, TagLabel, TagLeftIcon, Text } from '@chakra-ui/react';
import { Icon } from '@iconify/react';
import { useRouter } from 'next/router'
import React from 'react'
import { allFeatures } from '../../data/features';
import allProperties from '../../data/properties';

const DetailsView = () => {
  const { query, back, push } = useRouter();
  console.log(query.propertyId);
  const property = allProperties.filter(prop => prop.name === query.propertyId)[0]
  console.log(property);
  return (
    <Box w={"100%"} p={4} height={"600px"} overflowY="scroll" >
      <HStack w={"100%"} position="relative">
        <IconButton position="absolute" top="36px" left="36px" isRounded icon={<Icon icon={"eva:arrow-back-outline"} />} onClick={() => back()} />
        <Box w={"100%"}>
          <img alt='property' src="/yo.jpeg" style={{
            width: "100%",
            height: "240px",
            borderRadius: "5px",
            objectFit: "cover",
          }} />
        </Box>
      </HStack>
      <Box p={4}>
        <HStack mb="1" justifyContent="space-between">
          <Heading>
            Property #{property?.name}
          </Heading>
          <HStack spacing={2}>
            <IconButton isRounded icon={<Icon icon={"bxs:like"} />} />
            <IconButton isRounded icon={<Icon icon={"fluent:call-28-filled"} />} />
            <IconButton isRounded icon={<Icon icon={"clarity:share-solid"} />} />
            <IconButton onClick={() => push("https://www.google.co.in/maps")} isRounded icon={<Icon icon={"fa6-solid:map-location-dot"} />} />
          </HStack>
        </HStack>
        <Heading size="sm">
          About
        </Heading>
        <Text fontSize="xs" color={"gray.600"}>
          {property?.description}
        </Text>
      </Box>
      <Box px={4}>
        <Heading size="sm">
          Features
        </Heading>
        <HStack flexWrap={"wrap"} spacing={2}>
          {
            allFeatures.slice(0,4).map((feature, i) =>
              <Tag size={"md"} key={i} variant='subtle' colorScheme='purple'>
                <TagLabel>{feature}</TagLabel>
              </Tag>)
          }
        </HStack>
      </Box>
    </Box>
  )
}

export default DetailsView