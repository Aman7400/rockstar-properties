import { ChakraProvider } from '@chakra-ui/react'
import Layout from '../components/layout/Layout'
import { AuthContextProvider } from '../contexts/AuthContext'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <AuthContextProvider>
      <ChakraProvider resetCSS>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </AuthContextProvider>

  )
}

export default MyApp
