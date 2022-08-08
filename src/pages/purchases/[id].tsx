import type { NextPageWithLayout } from "../_app"
import SidebarLayout from "@components/layouts/SideBarLayout"
import Layout from "@components/layouts/Layout"
import PurchaseDetailHeader from "@components/Purchases/PurchaseDetailHeader"
import { usePurchase } from "../../hooks/usePurchase"
import { useUser } from "src/hooks/useUser"
import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import { PurchaseDetail } from "../../interfaces"
import dateFormatter from "../../helpers/dateFormat"
import {
  Stack,
  VStack,
  Text,
  Button,
  Image,
  CircularProgress,
  Center,
  Badge,
  Box,
  SimpleGrid,
  Skeleton,
} from "@chakra-ui/react"
import { StarIcon } from "@chakra-ui/icons"
import currencyFormat from "../../helpers/currencyFormat"

const UserPurchaseDetail: NextPageWithLayout = () => {
  /* Local State */
  const INITIAL_STATE: PurchaseDetail = {} as any as PurchaseDetail
  const [purchaseDetailState, setPurchaseDetail] = useState(INITIAL_STATE)

  const SHIPMENT_INITIAL_STATE: any = {} as any as any
  const [shipmentState, setShipmentState] = useState(SHIPMENT_INITIAL_STATE)

  const TRANSACTION_INITIAL_STATE: any = {} as any as any
  const [transactionState, setTransactionState] = useState(
    TRANSACTION_INITIAL_STATE
  )

  /* Global State */
  const { userProfile } = useUser()
  const { userPurchases } = usePurchase()

  /* Router */
  const router = useRouter()
  const { id } = router.query

  const fetchPurchaseDetail = async () => {
    if (id && userProfile) {
      await fetch(
        `http://localhost:4000/purchase/${userProfile?.id_usuario}/${id}`,
        {
          method: "GET",
        }
      )
        .then(async (res) => {
          if (res.ok) {
            const result = await res.json()
            //console.log("result: " + JSON.stringify(result))
            setPurchaseDetail(result)
          }
        })
        .catch((error) => {
          console.error(error)
        })
    }
  }

  const fetchShipmnetDetail = async (shipmentId: number | undefined) => {
    if (shipmentId) {
      await fetch(`http://localhost:4000/shipment/${shipmentId}`, {
        method: "GET",
      })
        .then(async (res) => {
          if (res.ok) {
            const result = await res.json()
            //console.log("SHIPMENT", result);
            setShipmentState(result)
          }
        })
        .catch((error) => {
          console.error(error)
        })
    }
  }

  const fetchTransactionDetail = async (paymentId: number | undefined) => {
    if (paymentId) {
      await fetch(`http://localhost:4000/payment/${paymentId}`, {
        method: "GET",
      })
        .then(async (res) => {
          if (res.ok) {
            const result = await res.json()
            //console.log("TRANSACTION", result);
            setTransactionState(result)
          }
        })
        .catch((error) => {
          console.error(error)
        })
    }
  }

  useEffect(() => {
    setPurchaseDetail((state): any => {
      return {
        ...state,
        purchase:
          userPurchases?.find((purchase) => purchase.id_compra === id) || null,
      }
    }) 
    if (!purchaseDetailState.id_compra) {
      fetchPurchaseDetail()
    }
  }, [id, userProfile])

  useEffect(() => {
    if (purchaseDetailState.id_envio) {
      if (!shipmentState.id_envio) {
        fetchShipmnetDetail(purchaseDetailState.id_envio)
      }
      if (!transactionState.id_transaccion) {
        fetchTransactionDetail(purchaseDetailState.id_transaccion)
      }
    }
  }, [purchaseDetailState])

  if (!purchaseDetailState.id_compra) {
    return (
      <>
        <PurchaseDetailHeader />
        <Stack justifyContent="center" py="5">
          <Skeleton height="250px" />
          <Skeleton height="50px" />
          <Skeleton height="50px" />
          <Skeleton height="50px" />
        </Stack>
      </>
    )
  } else {
    return (
      <>
        <PurchaseDetailHeader />
        <Box bg="white" borderWidth="1px" borderRadius="lg" overflow="hidden">
          <Center borderBottom="1px" borderBottomColor="gray.300">
            <Image
              maxW="full"
              src={purchaseDetailState?.imagen || ""}
              alt="purchase"
            />
          </Center>

          <Box p="3">
            <Box alignItems="" pb="3">
              <Badge
                fontSize="md"
                fontWeight="semibold"
                borderRadius="full"
                px="2"
                colorScheme="yellow"
              >
                <Text>{purchaseDetailState?.id_compra || ""} </Text>
              </Badge>
              &nbsp;&nbsp;
              <Badge
                fontSize="xs"
                fontWeight="semibold"
                borderRadius="full"
                px="2"
                colorScheme="green"
              >
                <Text>{dateFormatter(purchaseDetailState?.fecha) || ""} </Text>
              </Badge>
            </Box>

            <Box fontSize="xl" pb="5">
              {purchaseDetailState.titulo}
            </Box>

            <SimpleGrid
              columns={2}
              spacing={12}
              borderRadius="md"
              flex={1}
              h="100px"
              rounded="5"
              overflow="hidden"
              pb={3}
            >
              {/* left box  */}
              <Box>
                <Box>
                  Cantidad:{" "}
                  <Box as="span" color="gray.600" fontSize="md">
                    {purchaseDetailState?.cantidad || ""}
                  </Box>
                </Box>
                <Box>
                  <Box as="span" color="gray.600" fontSize="md">
                    {currencyFormat(
                      purchaseDetailState?.precio.total || 0,
                      purchaseDetailState?.precio.moneda
                    ) || ""}
                  </Box>
                </Box>

                <Box>
                  Transacción:{" "}
                  <Box as="span" color="gray.600" fontSize="md">
                    {transactionState.estado ? (
                      transactionState.estado
                    ) : (
                      <Skeleton height="10px" width="80px" />
                    )}
                  </Box>
                </Box>
              </Box>

              {/* rigth box */}

              <Box>
                <Box>
                  Envío:&nbsp;{" "}
                  <Box as="span" color="gray.600" fontSize="md">
                    #
                    {shipmentState.id_envio ? (
                      shipmentState.id_envio
                    ) : (
                      <Skeleton height="10px" width="80px" />
                    )}
                    &nbsp;
                    /
                    &nbsp;
                     {shipmentState.estado ? (
                      shipmentState.estado
                    ) : (
                      <Skeleton height="10px" width="80px" />
                    )}
                  </Box>
                </Box>

                <Box>
                  {" "}
                  <Box as="span" color="gray.600" fontSize="md">
                    
                  </Box>
                </Box>

                <Box display="flex" alignItems="center">
                  Vendedor:&nbsp;
                  <Box as="span" ml="2" color="gray.600" fontSize="sm">
                    {purchaseDetailState?.vendedor?.id} /{" "}
                    {purchaseDetailState?.vendedor?.nickname}
                  </Box>
                </Box>
              </Box>
            </SimpleGrid>

            <Box display="flex" alignItems="center">
              {Array(5)
                .fill("")
                .map((_, i) => (
                  <StarIcon key={i} color={i < 0 ? "teal.500" : "gray.300"} />
                ))}
              <Box as="span" ml="2" color="gray.600" fontSize="sm">
                {} reviews
              </Box>
            </Box>
          </Box>
        </Box>
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
