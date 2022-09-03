import { Button, Container, Heading } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import React from 'react'
import { AuthContext } from '../../contexts/AuthContext'

const Login = () => {
    const { setIsLoggedIn } = React.useContext(AuthContext)
    const router = useRouter()
    return (
        <Container>
            <Heading>
                Welcome Back
            </Heading>
            <Button onClick={() => {
                setIsLoggedIn(true);
                // router.push("/")
            }}>
                Login
            </Button>
        </Container>
    )

}

export default Login