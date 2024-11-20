import { FunctionComponent } from "react"
import PageLayout from "src/components/PageLayout/PageLayout"

import styles from "./Template.module.scss"

const Template: FunctionComponent = () => {
  return (
    <PageLayout>
      <div className={styles.container}>szoveg</div>
    </PageLayout>
  )
}

export default Template
