import { Box, SimpleGrid, Stack } from "@chakra-ui/react";
import Image from "next/image";
import { PurchaseDetail } from "../../interfaces";

function dateFormatter(date: string) {
    const baseDate = new Date(date);
    const options:any = { month: 'long', day: 'numeric' };
    return baseDate.toLocaleDateString('es-ES', options)
}

export default function PurchaseCard({ purchase_detail, name }: { purchase_detail: PurchaseDetail | null, name: string}) {

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
            {dateFormatter(purchase_detail?.fecha || '')}
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
              <Box w="25%" alignContent="left">
                <Image src={ purchase_detail?.imagen || '' } width="100%" height="100%" /> 
              </Box>
              <Box w="25%" alignContent="left">
                { purchase_detail?.titulo || '' }
              </Box>
              <Box w="50%" alignContent="left">
                {name}
              </Box>
              <Box alignContent="left">
                { purchase_detail?.id_compra || '' }
              </Box>
            </SimpleGrid>
        </Stack>
        </> 
  );
}



