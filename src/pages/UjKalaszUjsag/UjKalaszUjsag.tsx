import { FunctionComponent } from "react"
import PageLayout from "src/components/PageLayout/PageLayout"

import styles from "./UjKalaszUjsag.module.scss"

const UjKalaszUjsag: FunctionComponent = () => {
  return (
    <PageLayout>
      <div className={styles.container}>szoveg</div>
    </PageLayout>
  )
}

export default UjKalaszUjsag
