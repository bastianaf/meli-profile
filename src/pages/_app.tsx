import type { AppProps } from "next/app";
import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'

import Head from "next/head";
import { ChakraProvider, Box, Alert, AlertIcon, AlertTitle, Stack } from "@chakra-ui/react";

import theme from "../theme";
import '../styles/globals.css';

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {

  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page)

  return getLayout(
    <>
      <Head>
          <title>Mercadolibre</title>
          <meta content="initial-scale=1.0, width=device-width" name="viewport" />
      </Head>

      <Component {...pageProps} />
    </>
  );
}


export default MyApp


{/* <Box minH="100vh">
<Alert status='warning'>
  <Stack direction="row" mx="auto">
    <AlertIcon />
     <AlertTitle>¡Esta no es la web oficial de mercado libre !</AlertTitle>
  </Stack>
</Alert>
<Nav />
<Box maxWidth="container.xl" mx="auto" mb="28px">
  {children}
</Box>
<Footer />
<Alert status='error'>
  <Stack direction="row" mx="auto">
    <AlertIcon />
     <AlertTitle>¡Esta no es la web oficial de mercado libre !</AlertTitle>
  </Stack>
</Alert>
</Box> */}