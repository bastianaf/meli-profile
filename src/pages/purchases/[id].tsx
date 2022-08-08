import type { NextPageWithLayout } from "../_app";
import SidebarLayout from "@components/layouts/SideBarLayout";
import Layout from "@components/layouts/Layout";
import PurchaseCard from "@components/Purchases/PurchaseCard";
import { usePurchase } from "../../hooks/usePurchase";
import { useUser } from "src/hooks/useUser";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router'
import { PurchaseDetail } from "../../interfaces";

import {
  Stack,
  VStack,
  Text,
} from "@chakra-ui/react"

const UserPurchaseDetail: NextPageWithLayout = () => {
  
  const { userProfile } = useUser()
  const { userPurchases } = usePurchase()

  const INITIAL_STATE: PurchaseDetail = ({} as any) as PurchaseDetail 
  const [ purchaseDetailState, setPurchaseDetail ] = useState(INITIAL_STATE)
  
  const router = useRouter()
  const { id } = router.query

  const fetchPurchaseDetail = async () => {
    if(id && userProfile){
      await fetch(`http://localhost:4000/purchase/${userProfile?.id_usuario}/${id}`, {
        method: "GET",
      }).then( async (res) =>{
        if (res.ok) {
          const result = await (res.json())
          console.log("result: " + JSON.stringify(result))
          setPurchaseDetail(result)
        }
      }).catch((error) => {
        console.error(error)
      })
    }
  } 

  

  useEffect( () => {

    console.log("use effect | current state: ", purchaseDetailState)

    setPurchaseDetail ((state): PurchaseDetail => {
      return userPurchases?.find( purchase => purchase.id_compra === id) || state
    })

    if(!purchaseDetailState.id_compra){
      console.log("use effect call fetch purchase detail | current state: ", purchaseDetailState)
      fetchPurchaseDetail()
    }else {

    }

  }, [id, userProfile]);



  if(!purchaseDetailState.id_compra) {
    return (
      <>
        <p>
           LOADING ... 
        </p>

      </>
    )
  } else {
    return (
      <p>
        {purchaseDetailState?.id_compra || 'a'} {purchaseDetailState?.id_envio}
      </p>
    )
  }
}

UserPurchaseDetail.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <Layout>
      <SidebarLayout>{page}</SidebarLayout>
    </Layout>
  )
}

export default UserPurchaseDetail
