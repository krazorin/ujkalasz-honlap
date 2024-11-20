import { FunctionComponent } from "react"
import PageLayout from "src/components/PageLayout/PageLayout"

import styles from "./Kiadvanyok.module.scss"

const Kiadvanyok: FunctionComponent = () => {
  return (
    <PageLayout>
      <div className={styles.container}>
        <p className={styles.title}>Új KALÁSZ</p>
        <p>
          Szövetségünk kéthavonta megjelenõ újságja A/4es méretben, 28 oldalon
          fekete fehér képekkel. Felelõskiadó: Fekésházy Kinga.
        </p>
        <p className={styles.title}>Tarisznya</p>
        <p>
          Szövetségünk egy-egy tagcsoportjának munkája: évente hatszor kínál
          anyagot a csoport összejövetelekhez. Házilagosan, fénymásolással
          készül, csak a csoportvezetők kapják.
        </p>
        <p className={styles.title}>Könyveink:</p>
        <ul>
          <li>Népi játékok</li>
          <li>Betlehemesek, ünnepelünk</li>
          <li>Süssünk-főzzünk (szakácskönyv ) 800 Ft</li>
          <li>
            Tűnődések (Dr. Takátsné Muzsik Mária füzet-sorozata) egyenként 400
            Ft
            <ul>
              <li>A keresztény asszonyi hivatásról</li>
              <li>Az öregkori hivatásról</li>
              <li>Az após-anyós hivatásról</li>
              <li>A keresztény nagykorúságról</li>
            </ul>
          </li>
          <li>Lutzenbacher Rita (a Kalász alapítójának életrajza) 500 Ft</li>
          <li>
            Metzger Gabriella (az újjáalakulás Kalász vezetőjéről való
            emlékezések) 500 Ft
          </li>
          <li>
            Zöld olvasó (a Kalászban megjelent környezetvédelmi írások
            gyűjteménye) 1200 Ft{" "}
          </li>
          <li>
            KALÁSZ - fohász (Cselei Gáborné Marikának, a Tápiógyörgyei KALÁSZ
            tagjának versei) 800 Ft
          </li>
        </ul>
        <p className={styles.title}>Egyéb:</p>
        <ul>
          <li>
            <strong>CD</strong> - Aranyhajú gyermekek címmel magyar népmesék (a
            Kalász által rendezett mesemondó verseny győzteseink) 800 Ft
          </li>
          <li>
            <strong>CD</strong> - Országos Kalász fesztivál, Pannonhalma 2010
          </li>
        </ul>
      </div>
    </PageLayout>
  )
}

export default Kiadvanyok
