import { ChakraProvider, Box, Alert, AlertIcon, AlertTitle, Stack } from "@chakra-ui/react";

import Nav from "@components/Nav";
import Footer from "@components/Footer";

import theme from "../../theme";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ChakraProvider theme={theme}>
        <Box minH="100vh">
          <Alert status='warning'>
            <Stack direction="row" mx="auto">
              <AlertIcon />
              <AlertTitle>¡Esta no es la web oficial de mercado libre !</AlertTitle>
            </Stack>
          </Alert>
          <Nav />
            {children}
          <Footer />
          <Alert status='error'>
            <Stack direction="row" mx="auto">
              <AlertIcon />
              <AlertTitle>¡Esta no es la web oficial de mercado libre !</AlertTitle>
            </Stack>
          </Alert>
        </Box>
      </ChakraProvider>
    </>

  );
}
