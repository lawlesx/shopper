import styles from '../styles/Home.module.css'
import router, { useRouter } from 'next/router'
import { useEffect } from 'react';
// import useSWR from 'swr'

// const fetcher = async(path) => {
//   const res = await fetch(path);
  
//   return res.json();
// }

const Thank = () => {

  useEffect(()=>{
    fetch('http://localhost:8000/cart',{
      method : 'POST',
      headers: { 'Content-type': 'application/json'},
      body: JSON.stringify({})
    }).then( res => res.json())
    setTimeout(()=> {
      router.replace('/home');
    },5000)
  },[])

  // const { data, error } = useSWR('http://localhost:8000/thank', fetcher);
  // console.log(data);
  return ( 
    <div className={styles.thank}>
      <h1>Thank You</h1>
      {
        // data!=undefined ? <p>Your Total Price is :</p> : <div></div>
      }
      
      <p>Redirecting to home page</p>
    </div>
   );
}
 
export default Thank;