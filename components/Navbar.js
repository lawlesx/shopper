import styles from '../styles/Navbar.module.css';
import Link from 'next/link';

const Navbar = () => {
  return ( 
    <div className={styles.navbar}>
      <Link href='#'>
        <div>
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 0C1.46957 0 0.96086 0.210714 0.585787 0.585787C0.210714 0.96086 0 1.46957 0 2C0 2.53043 0.210714 3.03914 0.585787 3.41421C0.96086 3.78929 1.46957 4 2 4H2.984C3.41829 4.00075 3.84052 4.14284 4.18691 4.4048C4.5333 4.66675 4.78501 5.03433 4.904 5.452L11.248 27.652C11.6068 28.9048 12.3638 30.0068 13.4044 30.7912C14.4451 31.5757 15.7128 32 17.016 32H35.292C36.4914 32.0002 37.6633 31.6409 38.6565 30.9686C39.6497 30.2962 40.4186 29.3416 40.864 28.228L46.76 13.484C47.0024 12.8773 47.0925 12.2205 47.0224 11.5709C46.9523 10.9214 46.7242 10.2989 46.358 9.75784C45.9918 9.2168 45.4986 8.7737 44.9216 8.46728C44.3446 8.16085 43.7013 8.00041 43.048 8H9.792L8.748 4.352C8.3901 3.09909 7.63406 1.99674 6.59416 1.21159C5.55426 0.426427 4.28702 0.00113747 2.984 0H2Z" fill="#3D3D3D"/>
            <path d="M18 48C18.7879 48 19.5681 47.8448 20.2961 47.5433C21.0241 47.2417 21.6855 46.7998 22.2426 46.2426C22.7998 45.6855 23.2417 45.0241 23.5433 44.2961C23.8448 43.5681 24 42.7879 24 42C24 41.2121 23.8448 40.4319 23.5433 39.7039C23.2417 38.9759 22.7998 38.3145 22.2426 37.7574C21.6855 37.2002 21.0241 36.7583 20.2961 36.4567C19.5681 36.1552 18.7879 36 18 36C16.4087 36 14.8826 36.6321 13.7574 37.7574C12.6321 38.8826 12 40.4087 12 42C12 43.5913 12.6321 45.1174 13.7574 46.2426C14.8826 47.3679 16.4087 48 18 48Z" fill="#3D3D3D"/>
            <path d="M34 48C34.7879 48 35.5681 47.8448 36.2961 47.5433C37.0241 47.2417 37.6855 46.7998 38.2426 46.2426C38.7998 45.6855 39.2417 45.0241 39.5433 44.2961C39.8448 43.5681 40 42.7879 40 42C40 41.2121 39.8448 40.4319 39.5433 39.7039C39.2417 38.9759 38.7998 38.3145 38.2426 37.7574C37.6855 37.2002 37.0241 36.7583 36.2961 36.4567C35.5681 36.1552 34.7879 36 34 36C32.4087 36 30.8826 36.6321 29.7574 37.7574C28.6321 38.8826 28 40.4087 28 42C28 43.5913 28.6321 45.1174 29.7574 46.2426C30.8826 47.3679 32.4087 48 34 48Z" fill="#3D3D3D"/>
          </svg>
        </div>
      </Link>
      <Link href='#'>
        <div>
          <svg width="50" height="51" viewBox="0 0 53 54" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M49.8281 46.5077V27.9559C49.8282 26.6653 49.5648 25.3881 49.0541 24.2028C48.5434 23.0174 47.796 21.9488 46.8578 21.0625L29.3799 4.54465C28.4997 3.71242 27.3342 3.24872 26.1228 3.24872C24.9114 3.24872 23.746 3.71242 22.8657 4.54465L5.38785 21.0625C4.44966 21.9488 3.7023 23.0174 3.19156 24.2028C2.68082 25.3881 2.41745 26.6653 2.41759 27.9559V46.5077C2.41759 47.7651 2.91709 48.971 3.80621 49.8601C4.69533 50.7492 5.90123 51.2487 7.15864 51.2487H45.087C46.3444 51.2487 47.5503 50.7492 48.4394 49.8601C49.3286 48.971 49.8281 47.7651 49.8281 46.5077Z" stroke="#3D3D3D" strokeWidth="4.71648" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </Link>
      <Link href='#'>
        <div>
          <svg width="45" height="50" viewBox="0 0 49 54" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M24.3333 24.3333C21.5044 24.3333 18.7913 23.2095 16.7909 21.2091C14.7905 19.2088 13.6667 16.4956 13.6667 13.6667C13.6667 10.8377 14.7905 8.12458 16.7909 6.12419C18.7913 4.12381 21.5044 3 24.3333 3C27.1623 3 29.8754 4.12381 31.8758 6.12419C33.8762 8.12458 35 10.8377 35 13.6667C35 16.4956 33.8762 19.2088 31.8758 21.2091C29.8754 23.2095 27.1623 24.3333 24.3333 24.3333Z" stroke="#3D3D3D" strokeWidth="5.33333" strokeLinecap="round"/>
            <path d="M3.00001 51V48.3333C3.00001 44.0899 4.68572 40.0202 7.6863 37.0196C10.6869 34.0191 14.7565 32.3333 19 32.3333H29.6667C33.9101 32.3333 37.9798 34.0191 40.9804 37.0196C43.981 40.0202 45.6667 44.0899 45.6667 48.3333V51" stroke="#3D3D3D" strokeWidth="5.33333" strokeLinecap="round"/>
          </svg>
        </div>
      </Link>

    </div>
   );
}
 
export default Navbar;