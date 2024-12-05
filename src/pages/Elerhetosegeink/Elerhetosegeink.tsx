import { FunctionComponent } from "react"
import PageLayout from "src/components/PageLayout/PageLayout"
import elerhetosegek from "src/data/elerhetosegek"

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
            <a href={elerhetosegek.honlap.href}>{elerhetosegek.honlap.ertek}</a>
          </p>
          <p>
            <strong>Cím:</strong>{" "}
            <a
              href={elerhetosegek.postacim.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {elerhetosegek.postacim.ertek}
            </a>
          </p>
          <p>
            <strong>Telefonszám:</strong>{" "}
            <a href={elerhetosegek.telefonSzam.href}>
              {elerhetosegek.telefonSzam.ertek}
            </a>
          </p>
          <p>
            <strong>E-mail:</strong>{" "}
            <a href={elerhetosegek.emailCim.href}>
              {elerhetosegek.emailCim.ertek}
            </a>
          </p>
          <p>
            <strong>Facebook:</strong>{" "}
            <a
              href={elerhetosegek.facebook.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {elerhetosegek.facebook.ertek}
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
