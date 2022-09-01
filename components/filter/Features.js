import { Box, Checkbox, CheckboxGroup, Grid, GridItem, Heading } from "@chakra-ui/react";

export function Features() {

    return (
        <Box>
            <Heading size="xs" mb={1}>
                Features
            </Heading>

            <CheckboxGroup colorScheme='purple' defaultValue={['Clubhouse']}>
                <Grid w="100%" mb={4} templateColumns='repeat(2, 1fr)' gap={2}>
                    {
                        ["AC & Heating", "Clubhouse", "Dishwasher", "Spa", "Balcony", "Pool", "Fitness Center", "Valet Parking"].map((feature, i) =>
                            <GridItem key={i}>

                                <Checkbox size='md' colorScheme='purple' value={feature} colSpan={1} >{feature}</Checkbox>

                            </GridItem>)
                    }
                </Grid>
            </CheckboxGroup>
        </Box>
    )

}