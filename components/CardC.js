import styles from '../styles/Cards.module.css';
import Image from 'next/image';
import Tshirt from '../public/Tshirt.jpg';
import Shirts from '../public/Shirts.jpg';
import Shorts from '../public/Shorts.jpg';
import Joggers from '../public/Joggers.jpg';
import Jeans from '../public/Jeans.jpg';
import Blazer from '../public/Blazer.jpg';
import Tie from '../public/Tie.jpg';
import Suit2 from '../public/Suit 2-Piece.jpg';
import Suit3 from '../public/Suit 3-Piece.jpg';
import Half from '../public/Half Sleves.jpg';

const images = [Tshirt,Shirts,Shorts,Jeans,Joggers,Half,Suit2,Suit3,Blazer,Tie];

const Cards = ({ pid, name, price , qty}) => {
  

  return ( 
    <div className={styles.container}>
      <div className={styles.cardTop}>
        <div className={styles.image}>
          <Image src={images[pid-1]} height={247} width={265} />
        </div>
        <div className={styles.details}>
          <h2>{name}</h2>
          <h1>{'₹'+price}</h1>
        </div>
      </div>
      <div className={styles.cardBot}>
        <h1>{qty}</h1>
      </div>
    </div>
   );
}
 

export default Cards;