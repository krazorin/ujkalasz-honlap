import { FunctionComponent, ReactNode } from "react";

import Header from "src/components/Header/Header";
import Footer from "src/components/Footer/Footer";

import styles from "./PageLayout.module.scss";

interface Props {
  children: ReactNode | ReactNode[];
}

const PageLayout: FunctionComponent<Props> = ({ children }) => {
  return (
    <div className={styles.pageLayoutContainer}>
      <Header />
      <div className={styles.content}>{children}</div>
      <Footer />
    </div>
  );
};

export default PageLayout;
