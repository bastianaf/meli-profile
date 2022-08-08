import { Box, Button, SimpleGrid, Stack, Text } from "@chakra-ui/react"
import { ArrowBackIcon } from "@chakra-ui/icons"

import { useRouter } from 'next/router'

export default function PurchaseDetailHeader () {
  const router = useRouter()

  return (
    <>
    <Stack py="5"  spacing={3}>
    <SimpleGrid
          columns={3}
          spacing={10}
          borderRadius="md"
          flex={1}
          h="100px"
          rounded="5"
          overflow="hidden"
          pb={3}
        >

        <Box alignContent='left' w="50%">
          <Button onClick={() => router.back() } variant='outline' colorScheme='messenger' size="md" >
          <ArrowBackIcon/>
          </Button>
        </Box>

        <Box alignContent='rigth'>
          <Text fontSize='2xl'> Detalle de compra </Text>
        </Box>
        <Box alignContent='rigth'>
          
        </Box>
      
       
      </SimpleGrid>
    </Stack>

    </>
  )
}


