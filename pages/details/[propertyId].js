import { Container } from '@chakra-ui/react';
import { useRouter } from 'next/router'
import React from 'react'

const DetailsView = () => {
    const {query} = useRouter();
  return (
    <Container p={4}>DetailsView {query.propertyId}</Container>
  )
}

export default DetailsView