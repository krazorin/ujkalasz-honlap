import { FunctionComponent } from "react"

import styles from "./Footer.module.scss"

const Footer: FunctionComponent = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contact}>
        <p className={styles.phoneNumber}>
          tel.: <a href="tel:+3613564534">+361/356-4534</a>
        </p>
        <p className={styles.email}>
          email:{" "}
          <a href="mailto:kalasz@kalasz.t-online.hu">
            kalasz@kalasz.t-online.hu
          </a>
        </p>
        <p className={styles.address}>
          <a
            href="https://www.google.com/maps/place/Budapest,+Hajn%C3%B3czy+J%C3%B3zsef+u.+10,+1122+Hungary/"
            target="_blank"
          >
            1122 Budapest Hajnóczy utca 10. I/9.
          </a>
        </p>
      </div>
      <div>
        <h5>Támogatóink</h5>
        <ul>
          <li>Nemzeti</li>
          <li>II kerulet</li>
          <li>Hegyvidek</li>
          <li>csaladbarat</li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
