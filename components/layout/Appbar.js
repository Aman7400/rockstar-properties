import { Box, HStack, IconButton, Text } from "@chakra-ui/react";
import { Icon } from "@iconify/react";

export default function Appbar() {
    return (
        <HStack justifyContent={"space-between"} p={4}>
            {/* Filter */}
            <Box>
                <IconButton icon={<Icon icon="bi:filter-left" />} />
            </Box>
            {/* Brand */}
            <Text>
                Rockstar Properties
            </Text>
            {/* Search & Notification */}
            <HStack >
                <IconButton isRound icon={<Icon icon="fa6-solid:magnifying-glass-location" />} />
                <IconButton variant="ghost" icon={<Icon icon="clarity:notification-solid-badged" />} />
            </HStack>
        </HStack>
    )
}