
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import HeaderBar from '../conponent/header.js'

export default function Home() {
  
  return (
    <div className={styles.container}>
      <HeaderBar/>
      <Head>
        <title>Wellcome</title>
      {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          NUMBER ONE
        </h1>

      </main>

      <footer className={styles.footer}>
     
      </footer>
    </div>
  )
}
