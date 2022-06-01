import Image from "next/image";
import styles from "../styles/pizzacard.module.css";
import Link from 'next/link'

const PizzaCard = () => {
  return (
     <div className={styles.container}>
        <Link href="/product/1">
          <a>
          
            <Image src="/images/pizzaa3.png" alt="" width="500" height="500" />
            <h1 className={styles.title}>FIORI DI ZUCCA</h1>
            <span className={styles.price}>$19.90</span>
            <p className={styles.desc}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          
        </a>
      </Link>
     </div>
  );
};

export default PizzaCard;
