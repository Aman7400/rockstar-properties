import { Container, Text } from "@chakra-ui/react";

export default function Footer() {
    return (
        <Container w="container.xl">
            <Text>
                &copy;  {new Date().getFullYear()}
            </Text>
        </Container>
    )
}
