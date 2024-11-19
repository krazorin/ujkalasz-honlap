import { FunctionComponent } from "react"

import PageLayout from "src/components/PageLayout/PageLayout"

import styles from "./VaciKalaszHazArak.module.scss"

const VaciKalaszHazArak: FunctionComponent = () => {
  return (
    <PageLayout>
      <div className={styles.container}>szoveg</div>
    </PageLayout>
  )
}

export default VaciKalaszHazArak
