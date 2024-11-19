import { FunctionComponent } from "react"

import PageLayout from "src/components/PageLayout/PageLayout"

import styles from "./VaciKalaszHazKepek.module.scss"

const VaciKalaszHazKepek: FunctionComponent = () => {
  return (
    <PageLayout>
      <div className={styles.container}>szoveg</div>
    </PageLayout>
  )
}

export default VaciKalaszHazKepek
