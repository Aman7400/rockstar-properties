import { Box, Button, HStack, IconButton, Input, InputGroup, InputLeftElement, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure } from "@chakra-ui/react";
import { Icon } from "@iconify/react";

export default function Appbar() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    function handleSearchModal() {
        onOpen();
    }

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
                <IconButton onClick={handleSearchModal} isRound icon={<Icon icon="fa6-solid:magnifying-glass-location" />} />
                <IconButton variant="ghost" icon={<Icon icon="clarity:notification-solid-badged" />} />
            </HStack>
            <SearchModal {...{isOpen, onClose}} />
        </HStack>
    )
}

function SearchModal({isOpen, onClose}) {
    return (
      <>
    
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>
                <InputGroup>
                <InputLeftElement>
                <Icon icon="carbon:airport-location" />
                </InputLeftElement>
                <Input variant={"filled"} placeholder="Search keywords,name.." />
                </InputGroup>
            </ModalHeader>
            <ModalBody>
            </ModalBody>
  
            <ModalFooter>
              <Button size="sm" colorScheme='purple'  onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }