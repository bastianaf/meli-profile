import type { NextPage } from 'next'
import { Stack, StackDivider, Text, Image } from "@chakra-ui/react";
import Carousel from '@components/Carousel';
import ProductsBlock from '@components/Products/ProductsBlock';
import HomeSlideImg from '@data/home-slide-images';
import Offers from "@data/offers"
import Recomendations from "@data/last-visit-recomendations";

const Home: NextPage = () => {
  return (
    <Stack pb="112px" spacing={10}>
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
          <Stack borderRadius="md" flex={1} h="250px" overflow="hidden">
            <Image src="https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/hbo/widget/hbo-max-mla-mco-mlc@2x.jpg" />
          </Stack>
          <Stack borderRadius="md" flex={1} h="250px" overflow="hidden">
            <Image src="https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/paramount/mla/widget/paramount-widget-mla@2x.jpg" />
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default Home
