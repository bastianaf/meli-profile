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
  
  const INITIAL_STATE: PurchaseDetail  = ({} as any) as PurchaseDetail
  const [ purchaseDetailState, setPurchaseDetail ] = useState(INITIAL_STATE)

  const SHIPMENT_INITIAL_STATE: any  = ({} as any) as any
  const [ shipmentState, setShipmentState ] = useState(SHIPMENT_INITIAL_STATE)

  const TRANSACTION_INITIAL_STATE: any  = ({} as any) as any
  const [ transactionState, setTransactionState ] = useState(TRANSACTION_INITIAL_STATE)

  const { userProfile } = useUser()
  const { userPurchases } = usePurchase()

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

  const fetchShipmnetDetail = async (shipmentId: number | undefined) => {
    if(shipmentId){
      await fetch(`http://localhost:4000/shipment/${shipmentId}`, {
        method: "GET",
      }).then( async (res) =>{
        if (res.ok) {
          const result = await (res.json())
          console.log("SHIPMENT", result);
          setShipmentState(result)
        }
      }).catch((error) => {
        console.error(error)
      })
    }
  } 

  const fetchTransactionDetail = async (paymentId: number | undefined) => {
    if(paymentId){
      await fetch(`http://localhost:4000/payment/${paymentId}`, {
        method: "GET",
      }).then( async (res) =>{
        if (res.ok) {
          const result = await (res.json())
          console.log("TRANSACTION", result);
          setTransactionState(result)
        }
      }).catch((error) => {
        console.error(error)
      })
    }
  } 

  useEffect( () => {
    console.log("use effect | current state: ", purchaseDetailState)
    setPurchaseDetail ((state): any => {
      return { ...state, purchase: userPurchases?.find( purchase => purchase.id_compra === id) || null}
    })
    if(!purchaseDetailState.id_compra){
      console.log("use effect call fetch purchase detail | current state: ", purchaseDetailState)
      fetchPurchaseDetail()
    }
  }, [id, userProfile]);

  useEffect( () => {
    if(purchaseDetailState.id_envio){
      console.log("use effect call fetch SHIPMENT / TRANSACTION detail | current state: ", purchaseDetailState)

      if(!shipmentState.id_envio){
        fetchShipmnetDetail(purchaseDetailState.id_envio)
      }

      if(!transactionState.id_transaccion){
        fetchTransactionDetail(purchaseDetailState.id_transaccion)
      }
    }
  }, [purchaseDetailState]);

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
      <>
        <p>
          {purchaseDetailState?.id_compra || 'a'} {purchaseDetailState?.id_envio}
        </p>
      
        <p>
          {shipmentState.estado ?  shipmentState.estado  : 'cargando datos de envio...'}
        </p>

        <p>
          {transactionState.estado ?  transactionState.estado  : 'cargando datos de la transaccion...'}
        </p>
        
      </>
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
