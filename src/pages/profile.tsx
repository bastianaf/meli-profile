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

const Profile: NextPageWithLayout = () => {
  const { userProfile } = useUser()

  return (
    <>

      <Text fontSize="3xl"> Mi Perfil </Text>
      
      <Stack pt="5" spacing={2}>
        <Text fontSize="xl"> Datos de cuenta </Text>
      </Stack>

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
            <DataPill name={"Usuario"} value={userProfile?.id_usuario}/>
            <DataPill name={"Nivel"} value={userProfile?.nivel}/>
          </Stack>
        </VStack>
      </Stack>
      
      <Stack pt="5" spacing={2}>
        <Text fontSize="xl"> Datos Personales </Text>
      </Stack>

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
            <DataPill name={"Nombre"} value={userProfile?.nombre}/>
            <DataPill name={"Apellido"} value={userProfile?.apellido}/>
          </Stack>
        </VStack>
      </Stack>


    </>
  )
}

Profile.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <Layout>
      <SidebarLayout>{page}</SidebarLayout>
    </Layout>
  )
}

export default Profile
