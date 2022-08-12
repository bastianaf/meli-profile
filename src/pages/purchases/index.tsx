import type { NextPageWithLayout } from "../_app";
import SidebarLayout from "@components/layouts/SideBarLayout";
import Layout from "@components/layouts/Layout";
import PurchaseCard from "@components/Purchases/PurchaseCard";
import { usePurchase } from "../../hooks/usePurchase";
import { useEffect } from 'react';
import { Paginate } from "react-paginate-chakra-ui";

import {
  Stack,
  VStack,
  Text,
  Skeleton,
} from "@chakra-ui/react"

const Purchases: NextPageWithLayout = () => {

  const { loading, toggleLoading, userPurchases, fetchUserPurchases, pagination, changePage } = usePurchase() 
  useEffect( () => {
    if(!userPurchases || userPurchases?.length <= 0) {
      fetchUserPurchases(pagination.limit, pagination.offset)
    }
  }, []);

  const handlePageClick = (page: number) => {
    changePage(page)
    toggleLoading()
  };

  if(loading) {
    return (
      <>
        <Text fontSize="3xl"> Mis Compras </Text>
        <Stack justifyContent="center" py="5">
          <Skeleton height="200px" />
          <Skeleton height="200px" />
          <Skeleton height="200px" />
          <Skeleton height="50px" />
        </Stack>
      </>
    )
  } else {
    return (
      <>
        <Text fontSize="3xl"> Mis Compras </Text>
        
        <Stack pt="5" spacing={3}>
          <VStack direction="row">
            {userPurchases?.map((purchase, index) => {
            return (
                <PurchaseCard  key={index} purchase_detail={purchase} />
            );
          })}
          </VStack>
          
        </Stack>
  
        <Paginate
          // required props 👇
          page={pagination.page}
          count={10}
          pageSize={3}
          onPageChange={handlePageClick}
          // optional props 👇
          margin={0}
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
