import { Box, Container, HStack } from '@chakra-ui/react'
import React from 'react'
import FilterBox from '../filter/Filter'
import Appbar from './Appbar'
import Footer from './Footer'

const Layout = ({ children }) => {
    return (
        <Container maxW="container.xl" minHeight={"100vh"}>
            {/* Appbar */}
            <Appbar />
            <HStack flex={1}>
                {/* Filter */}
                <FilterBox />
                <Box >
                    {children}
                </Box>
            </HStack>
            <Footer />
        </Container>
    )
}

export default Layout












