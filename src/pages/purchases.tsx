import type { NextPageWithLayout } from "../pages/_app";
import SidebarLayout from "@components/layouts/SideBarLayout";
import Layout from "@components/layouts/Layout";
import PurchaseCard from "@components/Purchases/PurchaseCard";
import { usePurchase } from "../hooks/usePurchase";
import { useEffect } from 'react';
import { Paginate } from "react-paginate-chakra-ui";

import {
  Stack,
  VStack,
  Text,
} from "@chakra-ui/react"

const Purchases: NextPageWithLayout = () => {

  const { loading, toggleLoading, userPurchases, fetchUserPurchases, pagination, changePage } = usePurchase() 
  useEffect( () => {
    fetchUserPurchases(pagination.limit, pagination.offset)
    console.log("purchases loaded", userPurchases)
  }, []);

  const handlePageClick = (page: number) => {
    console.log("handlePageClick", page)
    changePage(page)
    toggleLoading()
  };

  if(loading) {
    return (
      <>
        <p> LOADING ... </p>
      </>
    )
  } else {
    return (
      <>
        <Text fontSize="3xl"> Compras </Text>
        
        <Stack pt="5" spacing={3}>
          <VStack direction="row">
            {userPurchases?.map((purchase, index) => {
            return (
                <PurchaseCard  key={index} name={"Detalle"} purchase_detail={purchase} />
            );
          })}
          </VStack>
          
        </Stack>
  
        <Paginate
          // required props 👇
          page={pagination.page}
          count={100}
          pageSize={10}
          onPageChange={handlePageClick}
          // optional props 👇
          margin={1}
          shadow="lg"
          fontWeight="blue"
          variant="outline"
          border="2px solid"
          w="full"
        /> 
  
      </>
    )
  }
}

Purchases.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <Layout>
      <SidebarLayout>{page}</SidebarLayout>
    </Layout>
  )
}

export default Purchases
