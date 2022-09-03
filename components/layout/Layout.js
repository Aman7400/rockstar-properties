import { Box, Container, Heading, HStack, IconButton, Text } from '@chakra-ui/react'
import { Icon } from '@iconify/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { AuthContext } from '../../contexts/AuthContext'
import FilterBox from '../filter/Filter'
import Appbar from './Appbar'
import Footer from './Footer'

const Layout = ({ children }) => {
    const { isLoggedIn } = React.useContext(AuthContext)

    const router = useRouter()

    React.useEffect(() => {
        if (!isLoggedIn) {
            router.push("/auth/login")
        }

    }, [isLoggedIn, router])

    return (
        <Container maxW="container.xl" position="relative" minHeight={"100vh"}>
            {/* Appbar */}
            <Appbar />
            <ChatWithUs />
            {children}
            <Footer />
        </Container>
    )
}

function ChatWithUs() {
    const [isHovering, setIsHovering] = React.useState(false)
    return (
        <HStack transition={"ease-in-out"} transitionDuration="800ms" p={3} cursor={"pointer"} borderRadius="100" bgColor="green.100" position="fixed" right="36px" bottom="36px" onMouseOver={() => setIsHovering(true)} onMouseOut={() => setIsHovering(false)}>
            <Icon style={{
                fontSize: 24
            }} icon={"logos:whatsapp-icon"} />
            {isHovering &&
                <Heading size="sm" color={"green.500"}>
                    <Link href={"https://wa.me/6283534495"}>
                        Chat with Us
                    </Link>
                </Heading>}
        </HStack>
    )
}

export default Layout












