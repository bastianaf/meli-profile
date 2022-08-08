import { Box, Button, SimpleGrid, Stack, Text } from "@chakra-ui/react"
import Image from "next/image"
import { PurchaseDetail } from "../../interfaces"
import Link from "next/link"
import currencyFormat from "../../helpers/currencyFormat"
import dateFormatter from "../../helpers/dateFormat"

export default function PurchaseCard({
  purchase_detail,
}: {
  purchase_detail: PurchaseDetail | null
}) {
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
        <Box
          maxW="100%"
          alignContent="left"
          borderBottom={"1px"}
          borderBottomColor={"gray.300"}
          overflow="hidden"
          p={3}
        >
          {dateFormatter(purchase_detail?.fecha || "")}
        </Box>

        <SimpleGrid
          columns={3}
          spacing={2}
          borderRadius="md"
          flex={1}
          h="250px"
          rounded="5"
          overflow="hidden"
          p={4}
        >
          <Box alignContent="left">            
              <Image
                src={purchase_detail?.imagen || ""}
                width="100%"
                height="100%"
              />
            <Box fontSize="sm" alignContent="left">
              {purchase_detail?.titulo || ""}
            </Box>
          </Box>
          <Box alignContent="left">
            <Text>id: {purchase_detail?.id_compra || ""}</Text>
            <Text>Precio: { currencyFormat(purchase_detail?.precio.total || 0, purchase_detail?.precio.moneda) || ""}</Text>
            <Text>Cantidad: {purchase_detail?.cantidad || ""}</Text>
          </Box>
          <Box alignContent="left">
            <Link href={`/purchases/${purchase_detail?.id_compra}`}>
              <a>
                <Button colorScheme='messenger' w="100%">Ver Compra</Button>
              </a>
            </Link>
          </Box>
        </SimpleGrid>
      </Stack>
    </>
  )
}
