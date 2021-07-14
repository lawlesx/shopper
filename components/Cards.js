import styles from '../styles/Cards.module.css';
import Image from 'next/image';

const Cards = ({name, image, rating, price}) => {
  return ( 
    <div className={styles.container}>
      <div className={styles.cardTop}>
        <div className={styles.image}>
          <Image src={image} height={247} width={265} />
        </div>
        <div className={styles.details}>
          <h2>{name}</h2>
          <h3>Rating: {rating}</h3>
          <h1>{price}</h1>
        </div>
      </div>
      <div className={styles.cardBot}>
        <button onClick={() => console.log('remove')} className={styles.box}>
          <div className={styles.remove}></div>
        </button>
        <h1>Add to Cart</h1>
        <button onClick={() => console.log('add')} className={styles.box}>
          <div className={styles.add}></div>
          <div className={styles.addv}></div>
        </button>
      </div>
    </div>
   );
}
 

export default Cards;