import { Box, Button, Heading, HStack, IconButton, Input, InputGroup, InputLeftElement, ListItem, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, UnorderedList, useDisclosure } from "@chakra-ui/react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import React from "react";
import allProperties from "../../data/properties";

export default function Appbar() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    function handleSearchModal() {
        onOpen();
    }

    function handleCloseModal() {
        setSearch("");
        onClose();
    }

    const [search, setSearch] = React.useState("");

    const filterProperties = allProperties.filter(prop => prop.name.includes(search.toLowerCase()))




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
                <IconButton onClick={handleSearchModal} isRounded icon={<Icon icon="fa6-solid:magnifying-glass-location" />} />
                <IconButton variant="ghost" icon={<Icon icon="clarity:notification-solid-badged" />} />
            </HStack>
            <SearchModal {...{ isOpen, onClose: handleCloseModal, search, setSearch, filterProperties }} />
        </HStack>
    )
}

function SearchModal({ isOpen, onClose, search, setSearch, filterProperties }) {



    return (
        <>


            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>
                        <InputGroup>
                            <InputLeftElement>
                                <Icon icon="fa6-solid:building-user" />
                            </InputLeftElement>
                            <Input value={search} onChange={(e) => setSearch(e.target.value)} variant={"filled"} placeholder="Search keywords,name.." />
                        </InputGroup>
                    </ModalHeader>
                    <ModalBody>
                        <UnorderedList>
                            {
                                filterProperties.map((p, i) =>
                                    <ListItem mb={1} key={i}>
                                        <Link href={`/details/${p.name}`}>
                                            {p.name}
                                        </Link>
                                    </ListItem>)
                            }
                        </UnorderedList>

                    </ModalBody>

                    <ModalFooter>
                        <Button size="sm" colorScheme='purple' onClick={onClose}>
                            Close
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}