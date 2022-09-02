import { Box, Checkbox, CheckboxGroup, Grid, GridItem, Heading } from "@chakra-ui/react";
import { allFeatures } from "../../data/features";

export function Features() {

    return (
        <Box>
            <Heading size="xs" mb={1}>
                Features
            </Heading>

            <CheckboxGroup colorScheme='purple' defaultValue={['Clubhouse']}>
                <Grid w="100%" mb={4} templateColumns='repeat(2, 1fr)' gap={2}>
                    {
                       allFeatures.map((feature, i) =>
                            <GridItem key={i}>

                                <Checkbox size='md' colorScheme='purple' value={feature} colSpan={1} >{feature}</Checkbox>

                            </GridItem>)
                    }
                </Grid>
            </CheckboxGroup>
        </Box>
    )

}