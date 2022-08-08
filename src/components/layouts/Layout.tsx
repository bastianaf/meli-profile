import { ChakraProvider, Box, Alert, AlertIcon, AlertTitle, Stack } from "@chakra-ui/react";

import Nav from "@components/Nav";
import Footer from "@components/Footer";

import theme from "../../theme";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ChakraProvider theme={theme}>
        <Box minH="100vh">
          <Nav />
            {children}
          <Footer />
        </Box>
      </ChakraProvider>
    </>
  );
}
