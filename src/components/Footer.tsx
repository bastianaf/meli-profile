import { Box, SimpleGrid, Stack, Text } from "@chakra-ui/react"

export default function Footer() {
  return (
    <Stack
      borderTop={"1px"}
      borderTopColor={"gray.300"}
      backgroundColor={"white"}
      mx="auto"
      alignContent="center"
      spacing={0}
       direction='row'
    >
      <Box px='7%' py="20px" >
        <Stack direction="row" py="2px" fontSize="13px" spacing={5}>
            <Text>Trabaja con nosotros</Text>
            <Text>Términos y condiciones</Text>
            <Text>Cómo cuidamos tu privacidad</Text>
            <Text>Accesibilidad</Text>
            <Text>Ayuda</Text>
          </Stack>
          <Text color="blackAlpha.600" fontSize="12px">
            Copyright © 1999-2022 MercadoLibre S.R.L.
          </Text>
          <Text color="blackAlpha.600" fontSize="12px">
            Av. Apoquindo 4800, Torre 2, piso 21, Las Condes, Santiago - Chile.
          </Text>
      </Box>
    </Stack>
  )
}
