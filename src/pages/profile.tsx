import type { NextPageWithLayout } from "../pages/_app"
import SidebarLayout from "@components/layouts/SideBarLayout"
import Layout from "@components/layouts/Layout"
import DataPill from "@components/DataPill"
import ImageProfile from "@components/Profile/ImageProfile"
import { useUser } from "../hooks/useUser"
import { useState, useEffect } from "react"
import {
  SimpleGrid,
  Button,
  Grid,
  GridItem,
  Stack,
  VStack,
  Box,
  Text,
  Avatar,
  Wrap,
  WrapItem,
  CircularProgress,
  Center
} from "@chakra-ui/react"

const Profile: NextPageWithLayout = () => {
  const { userProfile } = useUser()

  const LEVEL_INITIAL_STATE: any  = ({} as any) as any
  const [ levelState, setLevelState ] = useState(LEVEL_INITIAL_STATE)

  const RESTRICTIONS_INITIAL_STATE: any  = ({} as any) as any
  const [ restrictionState, setRestrictionState ] = useState(RESTRICTIONS_INITIAL_STATE)

  const fetchRestrictionsDetail = async () => {
    if(userProfile?.id_usuario){
      await fetch(`http://localhost:4000/user/restrictions/${userProfile?.id_usuario}`, {
        method: "GET",
      }).then( async (res) =>{
        if (res.ok) {
          const result = await (res.json());
          console.log("restrictions result: " + JSON.stringify(result))
          setRestrictionState(result[0])
        }
      }).catch((error) => {
        console.error(error)
      })
    }
  } 

  const fetchLevelDetail = async () => {
    if(userProfile?.nivel){
      await fetch(`http://localhost:4000/level/${userProfile?.nivel}`, {
        method: "GET",
      }).then( async (res) =>{
        if (res.ok) {
          const result = await (res.json());
          console.log("level result: " + JSON.stringify(result))
          setLevelState(result)
        }
      }).catch((error) => {
        console.error(error)
      })
    }
  } 

  useEffect( () => {
    fetchRestrictionsDetail()
    fetchLevelDetail()
  }, [userProfile]);

  return (
    <>

      <Text fontSize="3xl"> Mi Perfil </Text>

      <Stack pt="5" spacing={2}>
          <SimpleGrid
                  columns={2}
                  spacing={4}
                  borderRadius="md"
                  flex={1}
                  h="100px"
                  rounded="5"
                  overflow="hidden"
                  pb={3}
                >

                  <Box w="50%" alignContent="left">
                    <ImageProfile name={userProfile?.nombre || ''} image={userProfile?.imagen || ''} />
                  </Box>
                  <Box alignContent="left">
                    <Text  pt="5">
                        {userProfile?.nombre} {userProfile?.apellido}
                    </Text>
                  </Box>
          </SimpleGrid>
      </Stack>

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
            <DataPill name={"Nivel"} value={ levelState.id_nivel ? `(${ levelState?.id_nivel }) ${levelState?.descripción}` : 'cargando...'}/>
            <DataPill name={"Restricciones"} value={restrictionState?.mensaje ? restrictionState?.mensaje : "cargando..."}/>
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
