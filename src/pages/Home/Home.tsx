import { FunctionComponent } from "react"

import PageLayout from "src/components/PageLayout/PageLayout"
import Hirek from "src/components/Hirek/Hirek"

import styles from "./Home.module.scss"

const Home: FunctionComponent = () => {
  return (
    <PageLayout>
      <div className={styles.homePage}>
        <h1 className={styles.pageTitle}>Isten hozta a Kalászban!</h1>
        <Hirek />
      </div>
    </PageLayout>
  )
}

export default Home
