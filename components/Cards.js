import styles from '../styles/Cards.module.css';
import Image from 'next/image';

const Cards = () => {
  return ( 
    <div className={styles.container}>
      <div className={styles.cardTop}>
        {/* <Image src='/Suit.jpeg' layout='fill' className={styles.image} /> */}
      </div>
      <div className={styles.cardBot}>

      </div>
    </div>
   );
}
 

export default Cards;