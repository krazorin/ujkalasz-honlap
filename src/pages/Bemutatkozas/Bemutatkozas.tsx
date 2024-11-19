import { FunctionComponent } from "react"

import PageLayout from "src/components/PageLayout/PageLayout"

import styles from "./Bemutatkozas.module.scss"

const Bemutatkozas: FunctionComponent = () => {
  return (
    <PageLayout>
      <h1 className={styles.mainTitle}>Kalász</h1>
      <p className={styles.subTitle}>
        <strong>K</strong>atolikus <strong>A</strong>sszonyok és{" "}
        <strong>L</strong>ányok <strong>S</strong>zövetsége
      </p>
      <p>
        A KALÁSZ 1936-ban alakult meg. 1946-ban mûködését betiltották, 1990-ben
        alakult újjá.
      </p>

      <p className={styles.paragraphTitle}>Mi a KALÁSZ?</p>
      <p>
        A KALÁSZ jelenleg civil egyesületként működő, a magyar katolikus
        lányokat és asszonyokat összefogó szövetség. Szervezetünk alapegységei a
        KALÁSZ-csoportok.
      </p>

      <p className={styles.paragraphTitle}>Az Egyesület célja</p>
      <ul className={styles.dashList}>
        <li>
          a lányokat és asszonyokat segíteni abban, hogy a katolikus hit és a
          tiszta erkölcs alapján tudják betölteni a sajátos női hivatásukat a
          társadalomban, az egyházban és a családban, mert a hitvesi és
          családanyai szerepre sem a széthullt családok, sem az iskolai oktatás
          nem készít fel.
        </li>
        <li>
          a társadalomban megerősíteni a keresztény-katolikus értékrendet az
          asszonyokon, lányokon, édesanyákon keresztül.
        </li>
        <li>népi, nemzeti kultúránk, hagyományaink ápolása.</li>
      </ul>

      <p className={styles.paragraphTitle}>Feladatunk az Egyházban</p>
      <p>
        A KALÁSZ sajátos feladata, hogy a nőket támogassa női szerepeik örömteli
        megélésében a keresztény értékrendnek megfelelően és közösséget biztosít
        a hozzákapcsolódó nőknek. Továbbá az egyházközségi, plébániai élet
        kiteljesedését szolgálja, ápolja a családok közötti kapcsolatot,
        közösségi megmozdulásokat szervezzen (pl. lelki napok, táborok). Női
        csoportjaink között olyan is van, ami nem plébániához kapcsolódik, hanem
        regionális.
      </p>

      <p className={styles.paragraphTitle}>Feladataink a világegyházban</p>
      <p>
        A KALÁSZ rendes, tevékeny tagja a Katolikus Női Szervezetek
        Világszövetségének (WUCWO). A WUCWO Európai régiójáért felelős alelnöke
        a KALÁSZ tagja.
      </p>

      <br />
      <br />
      <p className={styles.paragraphTitle}>Hogyan mûködik a KALÁSZ?</p>
      <br />

      <p className={styles.paragraphTitle}>Rendszeres csoportfoglalkozások</p>
      <p>
        Egyházközségi csoportokban (fiatal és idősebb asszonyok, nagylányok,
        kislányok), a plébános által jóváhagyott vezetőnőkkel készülnek női
        hivatásukra. Csoportjaink rendszeresen tartják összejöveteleiket, ahol a
        KALÁSZ négyes hitvallása mentén választják témáikat. Csoportjaink
        befogadóak, evangelizálóak, azaz nyitottak az új érdeklődők felé. Célunk
        az egymás gondjait hordozó, igazi közöséggé válás.
      </p>
      <p>Feladatuk többek között az egyházközség sokirányú szolgálata is.</p>

      <p className={styles.paragraphTitle}>Táborok</p>
      <p>
        Nyári táborainkba szeretettel várjuk a kislányokat, illetve a
        fiatalokat, melyeket az ország több településén rendezünk meg.
      </p>

      <p className={styles.paragraphTitle}>Tíz falu-egy asztal</p>
      <p>
        Tervezzük a régi hagyomány felélesztését a{" "}
        <strong>Tíz falu-egy asztal</strong> mozgalmat, amely a Szent István
        által elrendelt tíz falu - egy templom elve alapján jött létre. Egy-egy
        falu meghívja a szomszédos tíz egyházközséget egy napra, ahol az
        oltárasztalnak, majd a terített asztalnak közösségében építik a lelki és
        fizikai közösséget tapasztalatcserével, jó példával, megajándékozva
        egymást szellemi kincseikkel, kulturális programmal.
      </p>

      <p className={styles.paragraphTitle}>Lelkigyakorlatok</p>
      <p>
        Lelki megerősödésünket szolgálja, hogy évente két alkalommal háromnapos
        lelkigyakorlaton vegyünk részt, melyre mindenkit szeretettel várunk.
      </p>

      <p className={styles.paragraphTitle}>Zarándoklatok</p>
      <ul className={styles.dashList}>
        <li>a Kalász történetéhez kapcsolódó településekre</li>
        <li>az egyházi évhez tartozó zarándokhelyekre</li>
      </ul>

      <p className={styles.paragraphTitle}>KALÁSZ hitvallás:</p>
      <ul className={styles.noMarkerList}>
        <li>
          Hit:
          <ul className={styles.dashList}>
            <li>Merjünk élő hittel, gyakorló katolikusként élni</li>
          </ul>
        </li>
        <li>
          Erkölcs:
          <ul className={styles.dashList}>
            <li>Gondolataink, tetteink eszerint működjenek</li>
          </ul>
        </li>
        <li>
          Nemzet:
          <ul className={styles.dashList}>
            <li>
              Tiszteljük, szeressük hagyományainkat, nemzetünket, mert ezek a
              gyökereink
            </li>
          </ul>
        </li>
        <li>
          Hivatás:
          <ul className={styles.dashList}>
            <li>
              Nőies nők legyünk, minden élethelyzetben anyás lelkülettel, két
              lábbal állva a földön jól tájékozódjunk a világban.
            </li>
          </ul>
        </li>
      </ul>

      <p className={styles.paragraphTitle}>KALÁSZ - Tízparancsolat</p>
      <ol>
        <li>Szent vallásom törvényeit ismerem és megtartom.</li>
        <li>Lelkiismeretesen végzem minden munkámat.</li>
        <li>Ahol tudok, szolgálatkész szeretettel segítek.</li>
        <li>Áldozatok árán is részt veszek egyházközségem munkájában.</li>
        <li>Egyszerűen viselkedem, és őszintén beszélek.</li>
        <li>Haragot soha, senkivel nem tartok.</li>
        <li>Embertársaimról vagy jót, vagy semmit nem mondok.</li>
        <li>A jónak, szépnek örülök, ha baj ér, nem panaszkodom.</li>
        <li>
          Közösségemért (csoportomért, egyesületemért) és társaimért felelős
          vagyok.
        </li>
        <li>Keresztény magatartásommal példát mutatok másoknak.</li>
      </ol>

      <br />
      <br />
      <p className={styles.subTitle}>
        A KALÁSZ megalakulásának rövid története
      </p>

      <p>
        Magyarországon az első világháború után szinte nem volt család, amely ne
        siratott volna apát, fiút vagy testvért. Az ország helyzetét
        súlyosbította a Trianoni béke, amely területének csaknem kétharmadát
        elszakította, teljesen magyarlakta területeket is.
      </p>
      <p>
        Különösen a falvakban volt szembetűnő, hogy a hagyományok ereje megtört.
        A faluközösségek, a parasztcsaládok összetartó erői fokozatosan
        fellazultak. Az asszonyok szerepe is megváltozott, hisz a háborús
        években a férfiak helyett is dolgoztak; felelősségük, de öntudatuk is
        megnőtt. A közgondolkodás, az erkölcsök megváltozása szembetűnő volt az
        egész országban. A háború romboló hatása valláserkölcsi téren is
        megmutatkozott.
      </p>
      <p>
        A fiatal magyar értelmiségiek egyre nyugtalanabbul sürgették, hogy végre
        tenni kell valamit a falvak érdekében.
      </p>
      <p>
        Megkezdte már működését a KALOT, a legényegylet de éppen ilyen fontos
        vagy még fontosabb lett volna a lányok tanítása, nevelése. Hiszen tőlük
        függ, milyen lesz a jövendő magyar család. 1934-ben, az esztergomi nyári
        egyetemen a részvevők egy csoportja arról beszélgetett, vitázott, hogy a
        falusi lányok nevelésével senki sem törődik.
      </p>
      <p>
        A lelkes csoport középpontja hamarosan Luczenbacher Rita lett, aki
        édesapja pettendi birtokán már megpróbálta összegyűjteni a lányokat, és
        énekelt, kézimunkázott velük, tanítgatta őket.
      </p>
      <p>
        A beszélgetők másik központi alakja Stettner Andrea volt, aki az Erdély
        Nőszövetség megbízottjaként vett részt a tanfolyamon. Odaáti
        tapasztalatait, szervező munkájáról szóló beszámolóját nagy
        érdeklődéssel hallgatták. Az Alföld képviseletében pedig lllésy Mária
        lett a csoport egyik leglelkesebb tagja.
      </p>
      <p>
        Még 1934-ben, röviddel a nyári egyetem befejezése után a Katolikus
        Nőszövetség a falusi lányifjúsági csoportok számára vezetőképző
        tanfolyamot hirdetett Pécelen. Akkor még mindössze néhány lelkes
        tanítónő gyűlt össze, de amikor 1935-ben újból meghirdették a
        tanfolyamot, az érdeklődés sokkal nagyobb volt. Részt vett rajta
        Luczenbacher Rita mint hallgató, Stettner Andrea mint előadó, akit az
        elnök asszony, Zichy Ráfáelné hívott meg. Ekkor alakult ki kettőjükben a
        terv, hogy el kell kezdeni - egyelőre a Nőszövetség keretében - a
        katolikus falusi lányok tanítását, nevelését. Megfogalmazódott a
        mindvégig megtartott célkitűzés is :{" "}
        <strong>
          hitükben erős, erkölcsükben tiszta, nemzeti érzésükben öntudatos és
          gazdaságilag képzett családanyákat nevelni a falu fiatal leányaiból.
        </strong>
      </p>
      <p>
        Budapesten a Jurányi utca 9. alatt megnyitották a Katolikus Nőszövetség
        Faluszervező Irodáját. Decemberben már napvilágot látott az első
        sokszorosított körlevél, a lányköri vezetők számára készült kiadvány a
        Tarisznya. A szervező munka a székesfehérvári egyházmegyében indult 1936
        január l9-éri, mégpedig Martonvásáron
      </p>
      <p>
        Velük egy időben elkezdte alföldi szervező munkáját Illésy Mária is.
      </p>
      <p>
        Az irányító munka nagy jártasságot követelt a központi vezetőségtől.
        Ezért tapasztalatcserére utaztak Németországba, majd Belgiumba, és több
        alkalommal is Rómába. Nagy lelkesedéssel és sok-sok tudással tértek
        vissza a külföldi útjaikról.
      </p>
      <p>
        1935 decemberétől havonta jelentették meg a Tarisznyát, színvonalas
        anyagot adva ezzel a vasárnapi lányköri foglalkozásokhoz. 1936. június
        21-én megrendezték az első Lánynapot Székesfehérvárott.
      </p>
      <p>
        Nógrád megye és az alföldi megyék után megindult a szervezőmunka a Győri
        egyházmegyében is, majd 1937 tavaszán a szombathelyiben.
      </p>
      <p>
        A kicsi mustármagból terebélyes fa nőtt ki. Szükségessé vált, hogy mint
        önálló szervezet dolgozzék tovább, külön alapszabállyal, ügyrenddel. A
        Katolikus Nőszövetség Faluszervező Irodája helyett Felvette a{" "}
        <strong>Katolikus Lánykörök Szövetsége</strong> - a{" "}
        <strong>KALÁSZ</strong> - nevet, s az alapszabályt először a
        Hercegprímás, majd a belügyminiszter 1940-ben jóváhagyta, miután a
        Szövetség 1939. febr. 12-én tartott alakuló közgyűlésén kimondta
        önállóságát. Ekkor a mozgalom már 100 egyesületben 6000 tagot számlált.
      </p>
      <p>
        A KALÁSZ szervezete teljesen megfelelt a magyar katolikus egyház
        szervezetének; annak hierarchiájára épült. Sehol nem indult
        szervezőmunka a megyéspüspök engedélye nélkül, nem jöhetett létre
        lánykör az egyházközség plébánosának hozzájárulása nélkül, s a helyi
        lányköri vezető megbízása a plébános ajánlására történt.
      </p>
      <p>
        A Szűzanya iránti tiszteletet, gyengéd szeretetet is igyekezett a lányok
        szívébe csöpögtetni a KALÁSZ. Védasszonya a{" "}
        <strong>Jótanács Anyja</strong> volt, benne bízva, őt segítségül kérve
        végezték a vezetők lányköri munkájukat. Ugyancsak igyekeztek elmélyíteni
        a magyar szentek iránti tiszteletet, követésükre buzdítva őket. Minden
        módon erősítette, táplálta a KALÁSZ a lányok öntudatát, s az öntudattal
        együtt felelősségérzetüket, hogy értsék és tudják, a nőktől függ, milyen
        a család és milyen az egész nemzet.
      </p>
      <p>
        KALASZ-lánykörbe az iskolahagyott nagylányok jártak, általában 15-16
        éves koruktól addig, míg férjhez nem mentek. A második világháborút
        követő években jelentkezett az az igény, hogy össze kell gyűjteni a
        fiatalabb lányokat is, a 12-14 éveseket. &quot;Nem lesznek nagylányaink,
        ha elveszítjük a serdülőket”. A kislányokat a lánykör legértelmesebb,
        példás életét élő, s ehhez a munkához kedvet is érző nagylányára bízták
        rá. Így alakult ki a KALÁSZ-mozgalomban egy nagyon sajátos, nagyon
        értékes réteg: a kislányvezetőké.
      </p>
      <p>
        Magyarországon a második világháború után a szovjet megszállás révén
        hatalomra jutó kommunista párt célul tűzte ki az egyházak felszámolását
        a szerzetesrendeket feloszlatták, a vallásos szervezeteket is
        betiltották. 1946 nyarán a KALÁSZ-mozgalom működési engedélyét bevonták,
        a központi iroda hivatalosan nem működhetett tovább. A kiadványok 11
        éven keresztül megjelent Tarisznya és a Tulipántos Láda sem tölthette be
        a továbbiakban hivatását.
      </p>
      <p>
        A keret megszűnt, de a lényeg megmaradt: a lányok összetartása és a
        velük való foglalkozás. Egyházközségi lánycsoport néven egészen az 50-es
        évekig folyt ez a munka; utána már &quot;csak&quot; a lányokért mondott
        ima maradt…
      </p>
      <p>
        1986 áprilisában, a XXIII. János Szeretetotthon kápolnájában tartott
        hálaadó szentmisén, melyen részt vett a két alapító: Luczenbacher Rita
        és Stettner Andrea valamint legközelebbi munkatársaik, hangzott el ez az
        ima mely meghallgatásra talált.
      </p>
      <p>
        &quot;Mennyei Atyánk! Fogadd hálánkat azért, hogy 50 évvel ezelőtt
        kiválasztottál és küldtél bennünket a KALÁSZ-mozgalom munkájára.
        Hallgasd meg most könyörgő imánkat, és segíts továbbra is, vezess
        bennünket és árassz el mindenható kegyelmeddel, hogy bárhol vagyunk, és
        bármit teszünk, hűségesek maradjunk KALÁSZ-hivatásunkhoz. Krisztus, a mi
        Urunk által. Ámen.&quot;
      </p>
      <p>
        1990-ben a politikai helyzet változása lehetővé tette, hogy a KALÁSZ
        újrainduljon. Új csoportok alakultak. Jelenleg a KALÁSZ megújulás és
        megfiatalodás előtt áll.
      </p>
      <br />
    </PageLayout>
  )
}

export default Bemutatkozas
