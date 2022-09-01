import { Box, Heading, RangeSlider, RangeSliderFilledTrack, RangeSliderThumb, RangeSliderTrack } from "@chakra-ui/react";

export default function PriceSlider() {
    return (
        <Box w="100%" mb={4}>
            <Heading size="xs" mb={1}>
                Price Range
            </Heading>
            <RangeSlider defaultValue={[10, 30]}>
                <RangeSliderTrack bg='purple.100'>
                    <RangeSliderFilledTrack bg='purple.400' />
                </RangeSliderTrack>
                <RangeSliderThumb index={0} />
                <RangeSliderThumb index={1} />
            </RangeSlider>
        </Box>
    )
}