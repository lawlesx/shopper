import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Cards from '../components/Cards'


// export const getServerSideProps = async () => {
//   const res = await fetch('http://localhost:8000/items');
//   const data = await res.json();

//   return {
//     props: { ninjas : data }
//   }
// }

export default function Home({ ninjas }) {
  return (
    <div className={styles.Hcontainer}>
      <Head>
        <title>Shoppers</title>
        <meta name="description" content="E Commerce Website" />
        <link rel="icon" href="/TitleIcon.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true'/>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Raleway:wght@300;400;500;600;700&display=swap" rel="stylesheet"/>
      </Head>
      {/* {ninjas.map( ninja => (
        <div key={ninja.id}>{ninja.name}</div>
      ))} */}
      <Cards/>
      <Cards/>
      <Cards/>
      <Cards/>
      <Cards/>

    </div>
  )
}
