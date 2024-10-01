import { FunctionComponent } from "react"

import PageLayout from "src/components/PageLayout/PageLayout"

import styles from "./Home.module.scss"
import Hirek from "src/components/Hirek/Hirek"

const Home: FunctionComponent = () => {
  return (
    <PageLayout>
      <div className={styles.homePage}>
        <h1>Isten hozta a Kalászban!</h1>
        <Hirek />
      </div>
    </PageLayout>
  )
}

export default Home
