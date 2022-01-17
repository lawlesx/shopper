import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Cards from '../components/Cards'
import useSWR from 'swr'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

const fetcher = async(path) => {
  const res = await fetch(path);
  
  return res.json();
}


export default function Home() {

  const { data, error } = useSWR('http://localhost:8000/home', fetcher);
  // console.log('home data error:',error);
  const [ items, setItems ] = useState({});
  console.log(items);
  const router = useRouter();
  const { query } = router;
  const email = query.email;
  console.log('Email',email);

  useEffect(()=>{
    fetch('http://localhost:8000/home',{
      method : 'POST',
      headers: { 'Content-type': 'application/json'},
      body: JSON.stringify(items)
    }).then(res => console.log(res));
    console.log('Use Effect Cards',items);
  },[items])


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
      { 
        data!=undefined ? data.map( item => (
          <Cards key={item.pid} pid={item.pid} name={item.pname} price={item.price} setItems={setItems}/>
        )) 
        : 
        <h1>Loading...</h1>
      }

    </div>
  )
}
