import type { NextPageWithLayout } from "../pages/_app"
import SidebarLayout from "@components/layouts/SideBarLayout"
import Layout from "@components/layouts/Layout"
import PurchaseCard from "@components/Purchases/PurchaseCard"
import { usePurchase } from "../hooks/usePurchase"
import { useEffect } from 'react';
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

  const { fetchUserPurchases, user_purchases } = usePurchase() 
  useEffect( () => {
    console.log("purchases initial state",user_purchases)
    fetchUserPurchases()
    console.log("purchases loaded",user_purchases)
  }, []);


  return (
    <>
      <Text fontSize="3xl"> Compras </Text>

      <Stack pt="5" spacing={3}>
        <VStack direction="row">
          {user_purchases?.map((purchase, index) => {
          return (
              <PurchaseCard  key={index} name={"Detalle"} purchase_detail={purchase} />
          );
        })}
          
        </VStack>
        <p>
        </p>
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
