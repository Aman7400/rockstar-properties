import { Box, Checkbox, CheckboxGroup, Grid, GridItem, Heading } from "@chakra-ui/react";

export default function PlaceTypes() {
    return (
        <Box>

            <Heading size="xs" mb={1}>
                Type of Place
            </Heading>

            <CheckboxGroup colorScheme='green' defaultValue={['Office']}>
                <Grid w="100%" mb={4} templateColumns='repeat(2, 1fr)' gap={2}>
                    {
                        ["All", "Office", "Building", "Shop", "Apartment", "House"].map((type, i) =>
                            <GridItem key={i}>

                                <Checkbox size='md' colorScheme='purple' value={type} colSpan={1} >{type}</Checkbox>

                            </GridItem>)
                    }
                </Grid>
            </CheckboxGroup>
        </Box>
    )
}