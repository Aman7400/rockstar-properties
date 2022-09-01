import { Box, Button, Heading, HStack, VStack } from "@chakra-ui/react";
import { Icon } from "@iconify/react";
import CurrentLocation from "./CurrentLocation";
import { Features } from "./Features";
import PlaceTypes from "./PlaceTypes";
import PriceSlider from "./PriceSlider";
import PropertyStyles from "./PropertyStyles";

export default function FilterBox() {
    return (
        <VStack w={"30%"} p={6} shadow="lg" borderRadius={"md"}>
            <HStack w="100%" justifyContent="space-between">
                <Heading size={"md"}>Filters</Heading>
                <Button isRound size="sm" rightIcon={<Icon icon="ic:baseline-clear" />}>
                    Clear All
                </Button>
            </HStack>
            <Box w="100%">
                <CurrentLocation />
                <PlaceTypes />
                <PriceSlider />
                <Features />
                <PropertyStyles />
            </Box>
            <HStack w="100%" justifyContent="flex-end" >
                <Button >
                    Save
                </Button>
                <Button colorScheme="purple">
                    Apply
                </Button>
            </HStack>
        </VStack>
    )
}
