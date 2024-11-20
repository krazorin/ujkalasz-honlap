import { FunctionComponent } from "react"
import PageLayout from "src/components/PageLayout/PageLayout"

import styles from "./VaciKalaszHaz.module.scss"

const VaciKalaszHaz: FunctionComponent = () => {
  return (
    <PageLayout>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.headerImageContainer}>
            <img
              src="/assets/images/vaci_haz/1.KALÁSZ HÁZ.jpg"
              alt="1.KALÁSZ HÁZ.jpg"
            />
          </div>
          <div className={styles.headerText}>
            <h3>
              Várja vendégeit a<br />
              KALÁSZ-HÁZ
              <br />
              Vác, Hattyú utca 9.
            </h3>
          </div>
          <div className={styles.headerImageContainer}>
            <img
              src="/assets/images/vaci_haz/2.KALÁSZ HÁZ kert.jpg"
              alt="2.KALÁSZ HÁZ kert.jpg"
            />
          </div>
        </div>
        <div className={styles.content}>
          <center>
            <p>
              <strong>Hit, erkölcs, nemzet, hivatás</strong>
              <br /> - ez a KALÁSZ Katolikus Asszonyok-Lányok Szövetsége létének
              négy alappillére alapítása (1936) óta.
            </p>
            <p>
              A 40 évi tetszhalál után, 1990-ben újra megalakult országos
              egyesület ugyanezen alapokon hivatott
              <br />
              <br />
              <strong>SZOLGÁLNI A CSALÁDOKAT ÉS AZ EGYHÁZAT</strong>
              <br />s ezt szolgálja az egyesülettől egykor elvett népfőiskola
              kártérítéséből létrejött
              <br />
              KALÁSZ-HÁZ
            </p>
          </center>
          <p>
            <strong>
              Szállást, illetve helyet tudunk adni egyházi vagy Kalász
              ajánlással
            </strong>
          </p>
          <ul>
            <li>hitéleti céllal Vácra érkező látogatóknak</li>
            <li>kisebb csoportoknak, zarándokoknak</li>
            <li>baba-mama kluboknak</li>
            <li>tanfolyamoknak</li>
            <li>lelkigyakorlatoknak</li>
            <li>nyaralásra, üdülésre vágyó családoknak</li>
            <li>ifjúsági táboroknak</li>
            <li>családi találkozóknak, ünnepeknek</li>
          </ul>
          <p>- s amire még igény lehet a Kalász szellemében</p>
          <p>
            Szállás emeletes ágyakon 10 fő részére, hozzá tágas, sok férőhelyes
            matracszállás. Lepedő és huzat, vagy hálózsák szükséges, takarók,
            párnák vannak.
          </p>
          <center>
            <strong>
              <p>
                Barátságos, tágas ház, jól felszerelt nappalival egybekötött
                konyha, két szoba valamint egy nagy közösségi terem fürdőszoba,
                zuhanyozók.
              </p>
              <p>
                Csendes, biztonságos, szépen ápolt, nagy, füves belső kert,
                hozzá betonozott udvar, szabadtéri tűzhely, Vác központjában, a
                Székesegyház közelében, nem messze a Dunától és a váci strandtól
              </p>
            </strong>
          </center>
          <p>
            <i>Érdeklődés, jelentkezés:</i>
            <br />
            Bénik Borbála, <a href="tel:+36307806924">06 30 780 6924</a>,{" "}
            <a href="mailto:benikbori@gmail.com">benikbori@gmail.com</a>
            <br />
            Nényei Gáborné ügyintéző{" "}
            <a href="tel:+36304722065">06 30 472 2065</a>,{" "}
            <a href="mailto:nenyei.gabriella@gmail.com">
              nenyei.gabriella@gmail.com
            </a>
            <br />
          </p>
          <p>
            További részletek (2023 februártól):{" "}
            <a href="www.ujkalasz.hu">www.ujkalasz.hu</a>
            <br />
            Facebook:{" "}
            <a
              href="https://www.facebook.com/ujkalasz"
              target="_blank"
              rel="noopener noreferrer"
            >
              Katolikus Asszonyok-Lányok Szövetsége
            </a>
          </p>
        </div>
      </div>
    </PageLayout>
  )
}

export default VaciKalaszHaz
