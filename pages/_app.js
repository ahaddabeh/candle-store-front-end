// import '../styles/globals.css'
import Layout from "../src/components/layout/layout"
import { AppContextProvider } from "../src/contexts/ApplicationContext"
function MyApp({ Component, pageProps }) {
  return (
    // Wrapping all of the pages with our context
    <AppContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppContextProvider>
  )
}

export default MyApp
