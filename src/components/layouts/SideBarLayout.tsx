import {
  Box,
  useBreakpointValue,
  Grid,
  GridItem,
  VStack,
  Button,
  Center,
  Text,
  Link,
} from "@chakra-ui/react"

export default function SideBarLayout({
  children,
}: {
  children: React.ReactElement
}) {
  return (
    <>
      <Grid
        templateAreas={`"nav main"
                          "nav main"`}
        gridTemplateRows={"50px 1fr 30px"}
        gridTemplateColumns={"300px 1fr"}
        minH="100vh"
        gap="1"
        w="full"
        h="full"
        fontWeight="bold"
      >
        <GridItem px="2" pt="5" bg="white" area={"nav"}>
          <Box>
            <VStack>
              <Button w="100%">
                  Compras
              </Button>
              <Button w="100%"> 
                Mi Perfil 
              </Button>
              <Button w="100%">Configuracion</Button>
            </VStack>
          </Box>
        </GridItem>

        <GridItem pt={5} /*  bg="green.300" */ area={"main"}>
          <Box maxWidth="container.md" mx="auto">
            {children}
          </Box>
        </GridItem>
      </Grid>
    </>
  )
}
