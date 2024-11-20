import { FunctionComponent } from "react"
import kalaszLogo from "src/assets/kalasz-logo.svg"
import PageLayout from "src/components/PageLayout/PageLayout"

import styles from "./VaciKalaszHazArak.module.scss"

const VaciKalaszHazArak: FunctionComponent = () => {
  return (
    <PageLayout>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.headerLogo}>
            <img src={kalaszLogo} alt="Kalász logo" />
          </div>
          <div className={styles.headerText}>
            <h2>
              TÁJÉKOZTATÁS vendégeinknek a Váci KALÁSZ-HÁZ működését segítő{" "}
              <strong>hozzájárulás</strong>okról
            </h2>
          </div>
        </div>
        <div className={styles.content}>
          <p className={styles.intro}>
            Kedves Vendégeink! Szeretettel fogadjuk Önöket Házunkban a KALÁSZ
            szellemében történő foglalkozásokra, találkozókra, táborokra,
            családi eseményekre! Házunk működése csak az Önök anyagi
            támogatásával lehetséges, ezért kérjük, fogadják megértéssel
            tájékoztató jellegű kérésünket.
          </p>
          <p className={styles.title}>Szállóvendégeknek</p>
          <table className={styles.priceTable}>
            <tr>
              <td />
              <td>NYÁR</td>
              <td>FŰTÉSI SZEZON</td>
            </tr>
            <tr>
              <td>Felnőtteknek:</td>
              <td>2.800 Ft/éj/fő</td>
              <td>3.400 Ft/éj/fő</td>
            </tr>
            <tr>
              <td>Gyerekeknek 10 év alatt:</td>
              <td>1.000 Ft/éj/fő</td>
              <td>1.500 Ft/éj/fő</td>
            </tr>
          </table>
          <p className={styles.title}>
            Alkalmi vendégeknek, csoportoknak, tanfolyamoknak éjszakai szállás
            nélkül
          </p>
          <table className={styles.priceTable}>
            <tr>
              <td />
              <td>NYÁR</td>
              <td>FŰTÉSI SZEZON</td>
            </tr>
            <tr>
              <td />
              <td>500 Ft/fő/óra,</td>
              <td>1.000 Ft/fő/óra,</td>
            </tr>
            <tr>
              <td>de legalább</td>
              <td>2.500 Ft/csoport/óra</td>
              <td>3.000 Ft/csoport/óra</td>
            </tr>
            <tr>
              <td>illetve</td>
              <td>20.000 Ft/csoport/nap/15 fő</td>
              <td>28.000 Ft/csoport/nap/15 fő</td>
            </tr>
          </table>
          <p>
            Az összeget átutalással kérjük <strong>„ADOMÁNY”</strong>{" "}
            közleménnyel a CIB Banknál vezetett számlánkra:
          </p>
          <h3>
            <strong>
              Katolikus Asszonyok-Lányok Szövetsége
              <br />
              10700598-66798741-51100005
            </strong>
          </h3>
          <p className={styles.signature}>
            <i>
              <u>A Kalász tagjainak kedvezményt biztosítunk!</u>
            </i>
            <br />
            Köszönettel minden jó ügy érdekében: a KALÁSZ
          </p>
        </div>
      </div>
    </PageLayout>
  )
}

export default VaciKalaszHazArak
