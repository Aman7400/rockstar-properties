/* eslint-disable @next/next/no-img-element */
import { Box, Button, Container, Heading, HStack, IconButton, Tag, TagLabel, TagLeftIcon, Text } from '@chakra-ui/react';
import { Icon } from '@iconify/react';
import { useRouter } from 'next/router'
import React from 'react'
import { allFeatures } from '../../data/features';

const DetailsView = () => {
  const { query, back, push } = useRouter();
  return (
    <Box w={"100%"} p={4} height={"600px"} overflowY="scroll" >
      <HStack w={"100%"} position="relative">
        <IconButton position="absolute" top="36px" left="36px" isRound icon={<Icon icon={"eva:arrow-back-outline"} />} onClick={() => back()} />
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
            Property #{query.propertyId}
          </Heading>
          <HStack spacing={2}>
            <IconButton isRound icon={<Icon icon={"bxs:like"} />} />
            <IconButton isRound icon={<Icon icon={"fluent:call-28-filled"} />} />
            <IconButton isRound icon={<Icon icon={"clarity:share-solid"} />} />
            <IconButton onClick={() => push("https://www.google.co.in/maps")} isRound icon={<Icon icon={"fa6-solid:map-location-dot"} />} />
          </HStack>
        </HStack>
        <Heading size="sm">
          About
        </Heading>
        <Text fontSize="xs" color={"gray.600"}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris urna elit, tristique dictum sem ac, molestie convallis elit. Sed fermentum urna risus, ac auctor orci pharetra in. Quisque nulla ante, eleifend in nulla quis, dictum bibendum nunc. Nulla elementum nunc in arcu eleifend mattis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel nisl pretium, interdum massa sit amet, rutrum mi. Nullam mi orci, dignissim eu blandit eget, ultricies nec magna. Morbi a egestas quam, sed tempus sem. Phasellus varius orci et ipsum tincidunt ultricies. Phasellus ut finibus magna. Nullam vestibulum tortor nisi, et sodales odio luctus nec.
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