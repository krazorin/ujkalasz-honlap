import { FunctionComponent, ReactNode } from "react"
import Footer from "src/components/Footer/Footer"
import Header from "src/components/Header/Header"

import styles from "./PageLayout.module.scss"

interface Props {
  children: ReactNode | ReactNode[]
}

const PageLayout: FunctionComponent<Props> = ({ children }) => {
  return (
    <div className={styles.pageLayoutContainer}>
      <Header />
      <div className={styles.contentContainer}>
        <div className={styles.content}>{children}</div>
      </div>
      <Footer />
    </div>
  )
}

export default PageLayout
