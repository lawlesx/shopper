import '../styles/globals.css'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import { useRouter } from 'next/router'


function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return <>
    <Header />
    <Component {...pageProps} />
    {
      router.pathname!='/' ? <Navbar/> : <div></div> 
    }
    
  </>
}

export default MyApp
