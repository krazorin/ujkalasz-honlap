import { FunctionComponent } from "react"

import PageLayout from "src/components/PageLayout/PageLayout"

import styles from "./Kapcsolataink.module.scss"

const Kapcsolataink: FunctionComponent = () => {
  return (
    <PageLayout>
      <div className={styles.kapcsolataink}>
        <p className={styles.noMargin}>
          A <b>Magyar Katolikus Püspöki Konferencia (MKPK)</b> felügyelete alá
          tartozó, katolikus országos egyesület vagyunk.
        </p>
        <h3 className={styles.sectionTitle}>Belföldi kapcsolataink</h3>
        <ul className={styles.noMargin}>
          <li>
            <a
              href="http://www.halo.hu"
              target="_blank"
              rel="noopener noreferrer"
            >
              HÁLÓ Katolikus Közösségek Hálózata
            </a>
          </li>
          <li>
            <a
              href="http://www.kalot.hu"
              target="_blank"
              rel="noopener noreferrer"
            >
              KALOT
            </a>
          </li>
          <li>
            <a
              href="http://www.szentmonika.hu"
              target="_blank"
              rel="noopener noreferrer"
            >
              Szent Mónika Keresztény Édesanyák Közössége
            </a>
          </li>
          <li>
            <a
              href="http://www.meot.hu"
              target="_blank"
              rel="noopener noreferrer"
            >
              Magyarországi egyházak Ökunemikus Tanácsa
            </a>
          </li>
          <li>
            <a
              href="http://www.karitasz.hu"
              target="_blank"
              rel="noopener noreferrer"
            >
              Katolikus Karitász
            </a>
          </li>
          <li>
            <a
              href="http://www.asszonyszovetseg.hu"
              target="_blank"
              rel="noopener noreferrer"
            >
              Magyar Asszonyok Érdekszövetsége
            </a>
          </li>
        </ul>
        <h3 className={styles.sectionTitle}>Külföldi kapcsolataink</h3>
        <a
          href="http://www.wucwo.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className={styles.cim}>
            <b>
              WUCWO World Union of Catholic Women's Organisations <br />
              &nbsp;&nbsp;&nbsp;&nbsp;(Katolikus Nõi Szervezetek
              Világszövetsége)
            </b>
            <br />
            Egyesületünk a WUCWO teljes jogú tagja.
            <br />
            Budai Mária tagja a WUCWO vezetõségi testületének.
            <br />
            Képviselõink rendszeresen vesznek részt a WUCWO által rendezett
            nemzetközi konferenciákon, találkozókon.
          </p>
        </a>
        <a
          href="http://www.icra-agrimissio.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className={styles.cim}>
            <b>
              ICRA International Catholic Rural Association <br />
              &nbsp;&nbsp;&nbsp;&nbsp;(Katolikus Falusi Világszövetség)
            </b>
            <br />
            Egyesületünk az ICRA teljes jogú tagja.
          </p>
        </a>
        <a
          href="http://www.fiacifca.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className={styles.cim}>
            <b>Actio Catholica</b>
            <br />
            Egyesületünk az Actio Catholica Nemzetközi Fórumával rendszeres
            kapcsolatot tart.
          </p>
        </a>
        <a
          href="http://www.vmpe.org.rs/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className={styles.cim}>
            <b>Vajdasági Magyar Pedagógusok Egyesülete</b>
          </p>
        </a>
        <br />
        <br />
        <br />
      </div>
    </PageLayout>
  )
}

export default Kapcsolataink
