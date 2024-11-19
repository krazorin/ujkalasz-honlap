import { FunctionComponent } from "react"

import PageLayout from "src/components/PageLayout/PageLayout"

import styles from "./Elerhetosegeink.module.scss"

const Elerhetosegeink: FunctionComponent = () => {
  return (
    <PageLayout>
      <div className={styles.elerhetosegeink}>
        <div className={styles.map}>
          <a
            href="https://www.google.com/maps/place/Budapest,+Maros+utca+26,+1122"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/assets/images/elerhetosegeink/map.svg" alt="terkep" />
          </a>
        </div>
        <div className={styles.details}>
          <p>A KALÁSZ központi irodájának elérhetőségei:</p>
          <p>
            <strong>Honlap:</strong>{" "}
            <a href="www.ujkalasz.hu">www.ujkalasz.hu</a>
          </p>
          <p>
            <strong>Cím:</strong>{" "}
            <a
              href="https://www.google.com/maps/place/Budapest,+Maros+utca+26,+1122"
              target="_blank"
              rel="noopener noreferrer"
            >
              1122 Budapest, Maros utca 26.
            </a>
          </p>
          <p>
            <strong>Telefonszám:</strong>{" "}
            <a href="tel:+3613564534">06-1-356-4534</a>
          </p>
          <p>
            <strong>E-mail:</strong>{" "}
            <a href="mailto:kalasz@ujkalasz.hu">kalasz@ujkalasz.hu</a>
          </p>
          <p>
            <strong>Facebook:</strong>{" "}
            <a
              href="https://www.facebook.com/ujkalasz"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.facebook.com/ujkalasz
            </a>
          </p>
          {/* <p>
            <strong>Adószám:</strong> 19639446-1-43
            <br />
            <strong>Bankszámlaszám:</strong> 11711034-20428109
            <br />
            <strong>IBAN:</strong> HU48 11711034-20428109
          </p> */}
        </div>
      </div>
    </PageLayout>
  )
}

export default Elerhetosegeink
