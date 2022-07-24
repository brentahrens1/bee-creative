import '../styles/_main.scss'
import '../components/Layout'
import Layout from '../components/Layout'
import Script from 'next/script'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script
        strategy="lazyOnload"
        src="https://www.googletagmanager.com/gtag/js?id=G-DJX8PDKMN6"
      />
      <Script 
        id="google-tag"
        strategy="lazyOnload"
      >
        {
          `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-DJX8PDKMN6');
          `
        }
      </Script>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
  
}

export default MyApp
