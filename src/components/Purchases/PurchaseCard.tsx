import { Box, SimpleGrid, Stack } from "@chakra-ui/react";

export default function PurchaseCard({ name,  value }: { name: string,  value: any }) {

  return (
        <>
        <Stack
            bg="white"
            justifyContent="space-between"
            w="100%"
            rounded="md"
            color="blackAlpha.700"
            fontSize="md"
          >
              
        <Box maxW="100%" alignContent="left" borderBottom={"1px"}
        borderBottomColor={"gray.300"} overflow='hidden' pl={4}>
            Fecha de compra
        </Box>
        
        <SimpleGrid
              columns={3}
              spacing={12}
              borderRadius="md"
              flex={1}
              h="250px"
              rounded="5"
              overflow="hidden"
              p={4}
            >
              <Box w="100%" alignContent="left">
               Producto
              </Box>
              <Box w="50%" alignContent="left">
                {name}
              </Box>
              <Box alignContent="left">{value || ''}</Box>
            </SimpleGrid>
        </Stack>
        </> 
  );
}



