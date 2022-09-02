/* eslint-disable @next/next/no-img-element */
import { Box, Button, Container, Heading, HStack, IconButton, Text } from '@chakra-ui/react';
import { Icon } from '@iconify/react';
import { useRouter } from 'next/router'
import React from 'react'

const DetailsView = () => {
  const { query, back } = useRouter();
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
          </HStack>
        </HStack>
        <Heading size="sm">
          About
        </Heading>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris urna elit, tristique dictum sem ac, molestie convallis elit. Sed fermentum urna risus, ac auctor orci pharetra in. Quisque nulla ante, eleifend in nulla quis, dictum bibendum nunc. Nulla elementum nunc in arcu eleifend mattis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel nisl pretium, interdum massa sit amet, rutrum mi. Nullam mi orci, dignissim eu blandit eget, ultricies nec magna. Morbi a egestas quam, sed tempus sem. Phasellus varius orci et ipsum tincidunt ultricies. Phasellus ut finibus magna. Nullam vestibulum tortor nisi, et sodales odio luctus nec.
        </Text>
      </Box>
    </Box>
  )
}

export default DetailsView