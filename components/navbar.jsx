import styles from "../styles/Navbar.module.css"
import Image from 'next/image'

const Navbar = () => {
    return(
        <div className={styles.container}>
            <div className={styles.nav__item}>
                <div className={styles.call__button}>
                    <Image src="/images/telephone.png" width = "50" height = "50" alt="Call us" />
                </div>
                <div className={styles.nav__texts} >
                    <div className={styles.nav__text}>ORDER NOW!</div>
                    <div className={styles.nav__text}>012 343 3434</div>
                </div>
            </div>
            <div className={styles.nav__item}>
                <ul className={styles.list}>
    
                      <li className = {styles.listItem}>Product</li>
                      <li className = {styles.listItem}>Menu</li>
                      <Image src = "/images/logo.png" alt ="log" height = "70" width = "70"/>
                      <li className = {styles.listItem}>Events</li>
                      <li className = {styles.listItem}>Blog</li>
                      <li className = {styles.listItem}>Contact</li>
                    
                </ul>
            </div>
            <div className={styles.nav__item}>
                <div className={styles.cart}>
                    <Image src = "/images/cart.png" alt="cart" height="50" width = "50"/>
                    <div className = {styles.counter}>2</div>
                </div>
            </div>
        </div>
    )
}

export default Navbar