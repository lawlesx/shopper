import styles from '../styles/Account.module.css';
import { useRouter } from 'next/router';
import useSWR from 'swr'

const fetcher = async(path) => {
  const res = await fetch(path);
  if (!res.ok) {
    throw new Error('An error occurred while fetching the data.')
  }
  return res.json();
}


const Account = () => {

  const { data, error } = useSWR('http://localhost:8000/account', fetcher);
  console.log(data);
  const router = useRouter();
  return ( 
    <div className={styles.container}>
      {
        data!=undefined ?
          <div className={styles.left}>
            <h1>Customer name: {data[0].cname}</h1>
            <p>Email: {data[0].email}</p>
            <p>Address: {data[0].address}</p>
            <p>Phone No. : {data[0].phoneNo}</p>
          </div>
        :
        <div>Loading</div>
      }
      
      <div>
        <button onClick={()=>{router.replace('/')}} className={styles.Bigbutton}>Sign Out</button>
      </div>
    </div>
   );
}
 
export default Account;