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
            rel="noopener noreferrer"
          >
            1122 Budapest Hajnóczy utca 10. I/9.
          </a>
        </p>
      </div>
      <div className={styles.supporters}>
        <p className={styles.title}>Támogatóink</p>
        <div className={styles.supporterLogos}>
          <a
            href="https://kormany.hu/miniszterelnokseg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className={styles.withBackground}
              src="/assets/images/supporters/miniszterelnokseg.png"
            />
          </a>
          <a
            href="https://bgazrt.hu/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className={styles.withBackground}
              src="/assets/images/supporters/bethlen_gabor_alapkezelo.png"
            />
          </a>
          <a
            href="https://civil.info.hu/nea/kezdolap/bemutatkozas/index.html"
            target="_blank"
          >
            <img src="/assets/images/supporters/NEA_2813.png" />
          </a>
          <a
            href="https://csalad.hu/rolunk/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              alt="CSBO-logo_szines.jpg"
              src="/assets/images/supporters/CSBO-logo_szines.jpg"
            />
          </a>
          <a
            href="https://katolikus.hu/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/assets/images/supporters/magyar_katolikus_puspokkari_konferencia.jpg" />
          </a>
          <a
            href="https://www.wucwo.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/assets/images/supporters/wucwo.png" />
          </a>
          <a
            href="https://www.nepfolakitelek.hu/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/assets/images/supporters/lakitelek_nepfoiskola.jpg" />
          </a>
          <a
            href="http://www.szentkiraly.hu/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className={styles.withBackground}
              src="/assets/images/supporters/szentkiraly_kozseg.jpg"
            />
          </a>
          <a
            href="http://kapolnasnyek.hu/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className={styles.withBackground}
              src="/assets/images/supporters/kapolnasnyek.png"
            />
          </a>
          <a
            href="http://www.masodikkerulet.hu/fooldal"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              alt="budapest_2_ker.bmp"
              src="/assets/images/supporters/budapest_2_ker.bmp"
            />
          </a>
          <a
            href="https://www.hegyvidek.hu/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              alt="budapest_12_ker.bmp"
              src="/assets/images/supporters/budapest_12_ker.bmp"
            />
          </a>
          <a
            href="https://www.varosmajoriplebania.hu/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className={styles.withBackground}
              src="/assets/images/supporters/varosmajor.bmp"
            />
          </a>
          <a
            href="https://orszagutiferencesek.hu/elerhetoseg-kapcsolat/filiak/krisztus-kiraly-filia/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/assets/images/supporters/krisztus_kiraly_templomigazgatosag.bmp" />
          </a>
        </div>
        {/* <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul> */}
      </div>
    </div>
  )
}

export default Footer
