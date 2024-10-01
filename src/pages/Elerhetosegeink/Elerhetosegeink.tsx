import { FunctionComponent } from "react"

import PageLayout from "src/components/PageLayout/PageLayout"

import styles from "./Elerhetosegeink.module.scss"

const Elerhetosegeink: FunctionComponent = () => {
  return (
    <PageLayout>
      <div className={styles.elerhetosegeink}>
        <div className={styles.map}>
          <a
            href="https://www.google.com/maps/place/Budapest,+Hajn%C3%B3czy+J%C3%B3zsef+u.+10,+1122+Hungary/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/assets/images/elerhetosegeink/map.svg" alt="terkep" />
          </a>
        </div>
        <div className={styles.details}>
          <p>
            KALÁSZ országos elnöke Fekésházy Kinga, alelnöke Tóth Krisztina,
            titkára Vlasitsné Párkányi Györgyi.
          </p>
          <p>
            <strong>A Kalász Központ címe:</strong>{" "}
            <a
              href="https://www.google.com/maps/place/Budapest,+Hajn%C3%B3czy+J%C3%B3zsef+u.+10,+1122+Hungary/"
              target="_blank"
              rel="noopener noreferrer"
            >
              1122 Budapest Hajnóczy utca 10. I/9.
            </a>
            <br />
            <strong>E-mail:</strong>{" "}
            <a href="mailto:kalasz@kalasz.t-online.hu">
              kalasz@kalasz.t-online.hu
            </a>
          </p>
          <p>
            <strong>Adószám:</strong> 19639446-1-43
            <br />
            <strong>Bankszámlaszám:</strong> 11711034-20428109
            <br />
            <strong>IBAN:</strong> HU48 11711034-20428109
          </p>
        </div>
      </div>
    </PageLayout>
  )
}

export default Elerhetosegeink
