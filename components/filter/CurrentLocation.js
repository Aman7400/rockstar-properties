import { Box, Heading, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { Icon } from "@iconify/react";

export default function CurrentLocation() {
    return (
        <Box w="100%" mb={4}>
            <Heading size="xs" mb={1}>
                Location
            </Heading>
            <InputGroup>
                <InputLeftElement>
                    <Icon icon={"carbon:location-heart-filled"} />
                </InputLeftElement>
                <Input variant="filled" size="md" placeholder="New York" />
            </InputGroup>
        </Box>
    )
}