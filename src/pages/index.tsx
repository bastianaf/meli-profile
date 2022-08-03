import type { NextPageWithLayout } from "../pages/_app"

import {
  Stack,
  SimpleGrid,
  StackDivider,
  Text,
  Image,
  Box,
  Spacer,
} from "@chakra-ui/react"
import { useContext, useEffect } from "react"
import { UserContext } from "../context/user/UserContext"
import { User } from "../interfaces"
import Carousel from "@components/Carousel"
import ProductsBlock from "@components/Products/ProductsBlock"
import HomeSlideImg from "@data/home-slide-images"
import Offers from "@data/offers"
import Recomendations from "@data/last-visit-recomendations"
import Layout from "@components/layouts/Layout"
import HomeLayout from "@components/layouts/HomeLayout"
import { useUser } from "../hooks/useUser"

const Home: NextPageWithLayout = () => {

  //const { userState, updateUserProfile } = useContext(UserContext);

  const { fetchUser } = useUser();

  /* const fetchedUser: User = {
    userId: 'id',
    name: 'Jhon',
    nickName: 'Dark Knight',
    email: 'jdoe@fakemail.com'
  }
   */
  useEffect( () => {
    fetchUser()
  },[])

  return (
    <Stack pb="112px" spacing={10}>

      {/* <button onClick={()=> updateUserProfile(fetchedUser) }> LOGIN </button> */}
      <Stack>
        <Carousel slides={HomeSlideImg}></Carousel>
      </Stack>
      <Stack
        bg="white"
        direction="row"
        justifyContent="space-between"
        p="4"
        rounded="md"
      >
        <Stack direction="row">
          <Image
            src="https://http2.mlstatic.com/resources/frontend/homes-korriban/assets/images/payments/credit-card.svg"
            w="48px"
          />
          <Stack justifyContent="center" lineHeight="0.9">
            <Text fontSize="18px">Tarjeta de crédito</Text>
            <Text color="blue.400" fontSize="14px">
              Ver promociones bancarias
            </Text>
          </Stack>
        </Stack>

        <Stack direction="row">
          <Image
            src="https://http2.mlstatic.com/resources/frontend/homes-korriban/assets/images/payments/mercado-creditsv2.svg"
            w="48px"
          />
          <Stack justifyContent="center" lineHeight="0.9">
            <Text fontSize="18px">Cuotas sin tarjeta</Text>
            <Text color="blue.400" fontSize="14px">
              Conoce Mercado Crédito
            </Text>
          </Stack>
        </Stack>

        <Stack direction="row">
          <Image
            src="https://http2.mlstatic.com/resources/frontend/homes-korriban/assets/images/payments/payment-agreement.svg"
            w="48px"
          />
          <Stack justifyContent="center" lineHeight="0.9">
            <Text fontSize="18px">Efectivo</Text>
            <Text color="blue.400" fontSize="14px">
              Ver más
            </Text>
          </Stack>
        </Stack>

        <Stack direction="row">
          <Image
            src="https://http2.mlstatic.com/resources/frontend/homes-korriban/assets/images/payments/credit-card.svg"
            w="48px"
          />
          <Stack justifyContent="center" lineHeight="0.9">
            <Text fontSize="18px">Tarjeta de crédito</Text>
            <Text color="blue.400" fontSize="14px">
              Ver promociones bancarias
            </Text>
          </Stack>
        </Stack>
      </Stack>

      <Stack>
        <Stack alignItems="center" direction="row">
          <Text fontSize="26px">Basado en tu última visita</Text>
          <Text color="blue.400">Ver historial</Text>
        </Stack>
        <ProductsBlock products={Recomendations}></ProductsBlock>
      </Stack>

      <Stack>
        <Stack alignItems="center" direction="row">
          <Text fontSize="26px">Ofertas</Text>
          <Text color="blue.400">Ver todas</Text>
        </Stack>
        <ProductsBlock products={Offers}></ProductsBlock>
      </Stack>

      <Stack>
        <Stack alignItems="center" direction="row">
          <Text fontSize="26px">Beneficios de Mercado Puntos</Text>
          <Text color="blue.400">Ver todos los beneficios</Text>
        </Stack>

        <Stack direction="row">
          <SimpleGrid
            columns={2}
            spacing={12}
            borderRadius="md"
            flex={1}
            h="250px"
            background="#3C034E"
            rounded="5"
            overflow="hidden"
          >
            <Box h="75px" w="50%" p={4} alignContent="center">
              <Image
                rounded="5"
                src="https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/hbomax/logo/logoSquare@2x.png?v=1"
              />
            </Box>
            <Box alignContent="center">
              <Image src="https://http2.mlstatic.com/resources/frontend/statics/loyal/hbo/widget/hbo-max-mla-mlc-mco-v2@2x.jpg" />
            </Box>
          </SimpleGrid>
        </Stack>

        <Spacer />

        <Stack direction="row">
          <SimpleGrid
            columns={1}
            spacing={10}
            borderRadius="md"
            flex={1}
            h="250px"
            background="#FEE600"
            rounded="5"
            overflow="hidden"
          >
            <Box alignContent="center">
              <Image src="https://tpc.googlesyndication.com/simgad/8079837574260526472" />
            </Box>
          </SimpleGrid>
        </Stack>
      </Stack>
    </Stack>
  )
}

Home.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <Layout>
      <HomeLayout>{page}</HomeLayout>
    </Layout>
  )
}

export default Home
