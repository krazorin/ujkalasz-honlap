import { FunctionComponent } from "react"
import Hirek from "src/components/Hirek/Hirek"
import PageLayout from "src/components/PageLayout/PageLayout"

import styles from "./Programok.module.scss"

const Programok: FunctionComponent = () => {
  return (
    <PageLayout>
      <div className={styles.programok}>
        <Hirek />
      </div>
    </PageLayout>
  )
}

export default Programok
