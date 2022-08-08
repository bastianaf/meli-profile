import type { NextPageWithLayout } from "../pages/_app";
import SidebarLayout from "@components/layouts/SideBarLayout";
import Layout from "@components/layouts/Layout";
import PurchaseCard from "@components/Purchases/PurchaseCard";
import  ReactPaginate  from "react-paginate";
import { usePurchase } from "../hooks/usePurchase";
import { useEffect } from 'react';
import { Paginate } from "react-paginate-chakra-ui";

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
//require('../styles/pagination.css')

const Purchases: NextPageWithLayout = () => {

  const { user_purchases, fetchUserPurchases, pagination, changePage } = usePurchase() 
  useEffect( () => {
    fetchUserPurchases(pagination.limit, pagination.offset)
    console.log("purchases loaded", user_purchases)
  }, []);

  const handlePageClick = (page: number) => {
    console.log("handlePageClick", page)
    changePage(page)
  };

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
        
      </Stack>
      {/* <ReactPaginate
          breakLabel="..."
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pagination.total}
          previousLabel="<"
        />
 */}

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

Purchases.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <Layout>
      <SidebarLayout>{page}</SidebarLayout>
    </Layout>
  )
}

export default Purchases
