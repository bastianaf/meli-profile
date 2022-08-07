import { Box, SimpleGrid } from "@chakra-ui/react";

export default function DataPill({ name,  value }: { name: string,  value: any }) {

  return (
        <>
        <SimpleGrid
              columns={2}
              spacing={12}
              borderRadius="md"
              flex={1}
              h="250px"
              rounded="5"
              overflow="hidden"
            >
              <Box w="50%" alignContent="left">
                {name}
              </Box>
              <Box alignContent="left">{value || ''}</Box>
            </SimpleGrid>
        </>
  );
}



