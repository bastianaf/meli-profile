import type { NextPageWithLayout } from "../pages/_app"
import SidebarLayout from "@components/layouts/SideBarLayout"
import Layout from "@components/layouts/Layout"
import DataPill from "@components/DataPill"
import { useUser } from "../hooks/useUser"
import {
  SimpleGrid,
  Button,
  Grid,
  GridItem,
  Stack,
  VStack,
  Box,
  Text,
} from "@chakra-ui/react"

const Purchases: NextPageWithLayout = () => {
 /*  const { userProfile } = useUser() */

  return (
    <>

      <Text fontSize="3xl"> Compras </Text>
      

      <Stack pt="5" spacing={3}>
        <VStack direction="row">
          <Stack
            bg="white"
            justifyContent="space-between"
            p="4"
            w="100%"
            rounded="md"
            color="blackAlpha.700"
            fontSize="md"
          >
            <DataPill name={"Detalle"} value="Compra A"/>
            <DataPill name={"Detalle"} value="Compra B"/>
          </Stack>
        </VStack>
      </Stack>


    </>
  )
}

Purchases.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <Layout>
      <SidebarLayout>{page}</SidebarLayout>
    </Layout>
  )
}

export default Purchases
