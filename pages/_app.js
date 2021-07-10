import '../styles/globals.css'
import Navbar from '../components/Navbar'
import Header from '../components/Header'



function MyApp({ Component, pageProps }) {
  return <>
    <Header />
    <Component {...pageProps} />
    <Navbar/>
  </>
}

export default MyApp
