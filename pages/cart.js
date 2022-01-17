import styles from '../styles/Home.module.css'
import CardC from '../components/CardC'
import useSWR from 'swr'
import router from 'next/router'


const fetcher = async(path) => {
  const res = await fetch(path);
  
  return res.json();
}


const Cart = () => {
  
  const handleOrder = () => {
    router.push('/thank');
  }

  const { data, error } = useSWR('http://localhost:8000/cart', fetcher);

  return ( 
    <div className={styles.Hcontainer}>
      <button className={styles.Bigbutton} onClick={()=> handleOrder()}>Place Order</button>
      { 
        data!=undefined ? data.map( item => (
          <CardC key={item.pid} pid={item.pid} name={item.pname} price={item.price} qty={item.qty}/>
        )) 
        : 
        <h1>Loading...</h1>
      }
    </div>
   );
}
 
export default Cart;