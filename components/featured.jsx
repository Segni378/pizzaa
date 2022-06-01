import styles from "../styles/Featured.module.css"
import Image from 'next/image'
import {useState } from 'react'

const Featured = () => {
    const [index, setIndex] = useState(0);
    const images = [
        {
        img: "/images/pizza.png",
        heading: "Best Pizza in the city",
        desc: "Come and taste!"
        },
        {
            img: "/images/pizzaa3.png",
            heading: "Best quality!",
            desc: "Our customers testify!"
        },
        {
            img: "/images/pizza.png",
            heading: "Fair price!",
            desc: "All in one place!"
        }
    ];

    const handleArrow = (direction) =>{
        if(direction==="l"){
            setIndex(index !== 0 ? index-1 : 2)
        }
        if(direction==="r"){
            setIndex(index !== 2 ? index+1 : 0)
        }
    }

    return(
          <div className={styles.container}>
                <div className={styles.arrowContainer} style={{ left: 0 }} onClick={()=>handleArrow("l")}>
                    <Image src="/images/arrowl.png" alt="" layout="fill" objectFit="contain"/>
                </div>
                <div className={styles.wrapper} style={{transform:`translateX(${-100*index}vw)`}}>
                    {images.map((img, i) => (
                    <div className={styles.imgContainer} key={i}>
                        <Image src={img.img} alt="" layout="fill" objectFit="contain" />
                        <div className = {styles.promo}>
                            <h3 className = {styles.heading}>{img.heading}</h3>
                            <small className= {styles.desc}>{img.desc}</small>
                        </div>

                    </div>
                    ))}
                </div>
                <div className={styles.arrowContainer} style={{ right: 0 }} onClick={()=>handleArrow("r")}>
                    <Image src="/images/arrowr.png" layout="fill" alt="" objectFit="contain"/>
                </div>
         </div>
    )
}

export default Featured