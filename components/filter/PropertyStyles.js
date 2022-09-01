import { Box, Checkbox, CheckboxGroup, Grid, GridItem, Heading } from "@chakra-ui/react";

export default function PropertyStyles() {
    return (
        <Box>

            <Heading size="xs" mb={1}>
                Styles
            </Heading>

            <CheckboxGroup colorScheme='green' defaultValue={['Aframe']}>
                <Grid w="100%" mb={4} templateColumns='repeat(2, 1fr)' gap={2}>
                    {
                        ["Aframe", "Dome", "Cottage", "Spanish"].map((type, i) =>
                            <GridItem key={i}>

                                <Checkbox size='md' colorScheme='purple' value={type} colSpan={1} >{type}</Checkbox>

                            </GridItem>)
                    }
                </Grid>
            </CheckboxGroup>
        </Box>
    )
}