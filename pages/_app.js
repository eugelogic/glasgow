import '../styles/globals.css'
import { CookiesProvider } from 'react-cookie'

const Glasgow = ({ Component, pageProps }) => {
  return (
    <CookiesProvider>
      <Component {...pageProps} />
    </CookiesProvider>
  )
}

export default Glasgow
