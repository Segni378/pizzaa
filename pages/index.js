import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Featured from '../components/featured'
import PizzaList from '../components/pizzalist'
import Footer from '../components/footer'
export default function Home() {
  return (
    <div className={styles.container}>
      <Featured />
      <PizzaList/>
    </div>
  )
}
