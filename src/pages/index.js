import Head from 'next/head'
import Navbar from '@/components/navbar/navbar'
import Subtitle from '@/components/tipography/subtitle/subtitle'
import Container from '@/components/container/container'
import SaleCard from '@/components/cards/saleCard/caleCard'
import Gamecard from '@/components/cards/gamecard/gamecard'

import styles from '@/styles/index.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>DevSteam: A sua loja online de games</title>
        <meta name="description" content="DevSteam: A sua loja online de games" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Navbar/>
        <Container>
          <div className={styles.session}>
            <Subtitle>Promoções</Subtitle>
            <div className={styles.salecontainer}>
              <SaleCard/>
              <SaleCard/>
              <SaleCard/>
            </div>
          </div>
          <div className={styles.session}>
            <Subtitle>Outros Jogos</Subtitle> 
            <div className={styles.gamecontainer}>
              <Gamecard/>
              <Gamecard/>
              <Gamecard/>
            </div>           
          </div>
        </Container>
      </div>
    </>
  )
}
