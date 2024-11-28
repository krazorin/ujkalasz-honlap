import { FunctionComponent } from "react"
import PageLayout from "src/components/PageLayout/PageLayout"
import csoportok, { Csoport as CsoportType } from "src/data/csoportok"

import styles from "./Csoportjaink.module.scss"

const renderGroupIntroduction = (csoport: CsoportType) => {
  return (
    <div className={styles.csoportOsszefoglalo} key={csoport.id}>
      <p dangerouslySetInnerHTML={{ __html: csoport.osszefoglalo }} />
      <a href={`/csoportjaink/${csoport.id}`} className="button smallButton">
        Tovább
      </a>
    </div>
  )
}

const Csoportjaink: FunctionComponent = () => {
  return (
    <PageLayout>
      <div className={styles.container}>
        <h3>KALÁSZ csoportok bemutatkozása</h3>
        <div className={styles.csoportBemutatkozasok}>
          {csoportok.map((csoport) => renderGroupIntroduction(csoport))}
        </div>
        <div className={styles.csoportLista}>
          <h3>
            <center>KALÁSZ tagok, csoportok</center>
          </h3>
          <b>Bács-Kiskun megye:</b> Baja, Madaras
          <br />
          <b>Békés megye:</b> Újkígyós
          <br />
          <b>Borsod-Abaúj-Zemplén:</b> Sárospatak <br />
          <b>Csongrád megye:</b> Hódmezővásárhely
          <br />
          <b>Fejér megye:</b> Csákvár, Martonvásár, Székesfehérvár
          <br />
          <b>Győr-Sopron megye:</b> Darnózseli, Pannonhalma(2 csoport),
          Szerecseny
          <br />
          <b>Hajdú-Bihar megye:</b> Nyíradony
          <br />
          <b>Heves megye:</b> Boldog, Egerbakta, Karcag <br />
          <b>Jász-Nagykun-Szolnok megye:</b> Törökszentmiklós, Zagyvarékas{" "}
          <br />
          <b>Komárom-Esztergom megye:</b> Tatabánya
          <br />
          <b>Nógrád megye:</b> Drégelypalánk, Érsekvadkert(2 csoport), Patak
          <br />
          <b>Pest megye:</b> Budapest(2 csoport), Kerepes, Kistarcsa, Kóspallag,
          Máriabesenyő, Mogyoród, Nagykáta(3 csoport), Perbál, Solymár, Szada,
          Szentendre, Szilasliget, Tápióbicske, Tápiógyörgye, Tápiószecső,
          Tápiószentmárton, Valkó, Vác, Veresegyház
          <br />
          <b>Szabolcs-Szatmár-Bereg megye:</b> Kótaj
          <br />
          <b>Vas megye:</b> Szombathely
          <br />
          <b>Veszprém megye:</b> Nemeshany, Pápa, Sümegprága, Veszprém
          <br />
          <b>Zala:</b> Bazsi, Hévíz, Sümegcsehi, Vindornyaszőlős
          <br />
          <br />
          <p>
            Ha hívást érzel, hogy életre hívj egy új női kisközösséget, akkor
            jelentkezz nálunk és a KALÁSZ minden segítséget meg fog neked ehhez
            adni. A női kisközösségeknek óriási ereje van, vezetésük pedig
            hivatás, élmény és kaland. <br />
            Jelentkezés: Telefon/fax: +361/356-4534, E-mail:{" "}
            <a href="mailto:kalasz@kalasz.t-online.hu">
              kalasz@kalasz.t-online.hu
            </a>
          </p>
        </div>
      </div>
    </PageLayout>
  )
}

export default Csoportjaink
