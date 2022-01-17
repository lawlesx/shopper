import {useState} from 'react';
import styles from '../styles/Header.module.css';

const Header = () => {

  // const [value, setValue] = useState('');

  // function handleSubmit(event) {
  //   console.log('Search value:',value)
  //   event.preventDefault();
  // }

  function handleChange(event) {
    setValue(event.target.value);
  }

  return ( 
    <div className={styles.container}>
      <h1>Shoppers</h1>
      <div >
      {/* <form onSubmit={handleSubmit}>
          <input className={styles.searchbar} placeholder="Search... What you want" type="text" value={value} onChange={handleChange} />
      </form> */}
      </div>
      {/* <div>
        <svg width="61" height="59" viewBox="0 0 61 59" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M28.0472 4.67742C28.8952 2.44086 32.1043 2.44086 32.955 4.67742L38.4404 19.8723C38.8246 20.8793 39.8025 21.5497 40.8942 21.5497H54.3746C56.8656 21.5497 57.952 24.6502 55.9937 26.1686L46.4009 34.7995C45.9711 35.1299 45.6571 35.5878 45.5038 36.1077C45.3505 36.6276 45.3658 37.1826 45.5476 37.6933L49.0508 52.541C49.9041 54.926 47.1428 56.9744 45.0547 55.5063L32.0248 47.2384C31.5786 46.9248 31.0465 46.7565 30.5011 46.7565C29.9557 46.7565 29.4236 46.9248 28.9774 47.2384L15.9475 55.5063C13.862 56.9744 11.0981 54.9233 11.9514 52.541L15.4546 37.6933C15.6364 37.1826 15.6517 36.6276 15.4984 36.1077C15.3451 35.5878 15.031 35.1299 14.6013 34.7995L5.00848 26.1686C3.04751 24.6502 4.13929 21.5497 6.62496 21.5497H20.1053C20.6361 21.5515 21.1549 21.3921 21.593 21.0925C22.0312 20.793 22.3681 20.3675 22.5592 19.8723L28.0446 4.67742H28.0472Z" stroke="#3D3D3D" strokeWidth="5.99991" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div> */}
    </div>
   );
}
 
export default Header;