import { Box, Container, HStack, IconButton, Input, InputGroup, InputLeftElement, Text } from '@chakra-ui/react'
import { Icon } from '@iconify/react'
import React from 'react'

const Layout = ({ children }) => {
    return (
        <Container maxW="container.xl" minHeight={"100vh"}>
            {/* Appbar */}
            <Appbar />
            <HStack>
                {/* Filter */}
                <Box>
                    Filter
                </Box>
                <Box>
                    {children}
                </Box>
            </HStack>
            <Footer />
        </Container>
    )
}

export default Layout


function Appbar() {
    return (
        <HStack justifyContent={"space-between"} p={4}>
            {/* Filter */}
            <Box>
                <IconButton icon={<Icon icon="bi:filter-left" />} />
            </Box>
            {/* Brand */}
            <Text>
                Rockstar Properties
            </Text>
            {/* Search & Notification */}
            <HStack >
                <IconButton isRound icon={<Icon icon="fa6-solid:magnifying-glass-location" />} />
                <IconButton variant="ghost" icon={<Icon icon="clarity:notification-solid-badged" />} />
            </HStack>
        </HStack>
    )
}

function Footer() {
    return (
        <Container w="container.xl">
            <Text>
                &copy;  {new Date().getFullYear()}
            </Text>
        </Container>
    )
}