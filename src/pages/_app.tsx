import type { AppProps } from "next/app"
import {
  ReactElement,
  ReactNode,
} from "react"
import type { NextPage } from "next"
import { UserProvider } from "../context/user/UserProvider"
import { PurchaseProvider } from "../context/purchases/PurchaseProvider"
import FetchUser from "@components/FetchUser"
import "../styles/globals.css"
import Head from "next/head"

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {

  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page)

  return (
    <>
      <UserProvider>
        <PurchaseProvider>
          <Head>
          <title>Mercadolibre</title>
              <meta
                content="initial-scale=1.0, width=device-width"
                name="viewport"
            />
          </Head>
          {getLayout(<Component {...pageProps} />)}
        </PurchaseProvider>
        <FetchUser/>
      </UserProvider>
    </>
  )
}

export default MyApp


