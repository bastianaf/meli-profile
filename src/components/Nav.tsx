import { MdKeyboardArrowDown } from "react-icons/md";
import { GoLocation } from "react-icons/go";
import { BsCart2 } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { useUser } from "../hooks/useUser";
import Error from "next/error";

import {
  Box,
  Container,
  Icon,
  Input,
  Image,
  Stack,
  FormControl,
  StackDivider,
  Text,
  Skeleton,
} from "@chakra-ui/react";

export default function Nav() {

  const { userProfile, errorProfileFetch } = useUser();
  const userName: string | null = userProfile?.nombre ? `${userProfile?.nombre.toString()}` : null;
  if (errorProfileFetch) {
    console.log("ERROR:",errorProfileFetch)
     return <Error statusCode={500} />

  } 
  return (
    <Stack paddingY={0}>
      <Box backgroundColor="primary.500" boxShadow="sm" paddingY={2}>
        <Container maxWidth="container.xl" paddingX={0}>
          <Stack spacing={3}>
            <Stack direction="row" justifyContent="space-between">
              <Stack direction="row" flex={1} spacing={12}>
                <Link href="/">
                  <a>
                    <Image
                      height={34}
                      alt="meli-logo"
                      objectFit="contain"
                      src="/img/logo.png"
                      width={134}
                    />
                  </a>
                </Link>
                <FormControl>
                  <form >
                    <Stack
                      alignItems="center"
                      backgroundColor="white"
                      borderRadius="sm"
                      boxShadow="sm"
                      direction="row"
                      divider={<StackDivider />}
                      maxWidth={600}
                      padding={2}
                      rounded="sm"
                      width="100%"
                    >
                      <Input
                        _placeholder={{ color: "gray.400" }}
                        paddingX={2}
                        placeholder="Buscar productos, marcas y más..."
                        px={2}
                        variant="unstyled"
                      />
                      <Icon
                        as={AiOutlineSearch}
                        color="gray.400"
                        height={5}
                        width={5}
                      />
                    </Stack>
                  </form>
                </FormControl>
              </Stack>
              <Stack alignItems="center" direction="row">
                <Image height={10} src="https://http2.mlstatic.com/D_NQ_894106-MLA50803501735_072022-OO.webp" width={340} />
              </Stack>
            </Stack>
            <Stack
              alignItems="baseline"
              direction="row"
              justifyContent="space-between"
            >
              <Stack alignItems="baseline" direction="row" spacing={12}>
                <Stack
                  alignItems="center"
                  direction="row"
                  spacing={1}
                  width={150}
                >
                  <Icon
                    as={GoLocation}
                    color="blackAlpha.600"
                    height={6}
                    width={5}
                  />
                  <Stack spacing={0}>
                    <Text
                      color="blackAlpha.700"
                      fontSize="xs"
                      lineHeight="shorter"
                    >
                      Enviar a
                    </Text>
                    <Text fontSize="sm" lineHeight="shorter">
                      Valparaiso
                    </Text>
                  </Stack>
                </Stack>
                <Stack
                  color="blackAlpha.700"
                  direction="row"
                  fontSize="sm"
                spacing={5}
                >
                  <Text cursor="pointer"> Categorias
                  </Text>
                  <Text cursor="pointer">Ofertas</Text>
                  <Text cursor="pointer">Historial</Text>
                  <Text cursor="pointer">Supermercado</Text>
                  <Text cursor="pointer">Moda</Text>
                  <Text cursor="pointer">Vender</Text>
                  <Text cursor="pointer">Ayuda</Text>
                </Stack>
              </Stack>
              <Stack direction="row" fontSize="sm" spacing={6}>

                {
                  userName ? <Link href={`/profile`}> 
                  <a>{ userName }</a>
                </Link> :  
                <Skeleton height="25px" width="65px" /> 
                }
                
                <Text cursor="pointer">
                <Link href={`/purchases`}> 
                  Mis Compras 
                </Link>
                </Text>
                <Text cursor="pointer">Favoritos</Text>
                <Icon
                  as={BsCart2}
                  color="blackAlpha.700"
                  height={5}
                  spacing={3}
                  width={5}
                />
              </Stack>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </Stack>
  );
}