import { FunctionComponent } from "react"
import PageLayout from "src/components/PageLayout/PageLayout"

import styles from "./Tortenetunk.module.scss"

const Tortenetunk: FunctionComponent = () => {
  return (
    <PageLayout>
      <div className={styles.tortenetunk}>
        <h1 className="title">
          <center>A Kalász</center>
        </h1>
        <p>
          <center>írta Székely Andrea</center>
        </p>
        <p>
          <center>Tartalomjegyzék</center>
        </p>
        <div className={styles.contentsTable}>
          <ul>
            <li>
              <a href="#1">I. Előzmények</a>
            </li>
            <li>
              <a href="#2">II. Az alapítás</a>
            </li>
            <li>
              <a href="#3">III. Szervezet és szervezőmunka</a>
            </li>
            <li>
              <a href="#4">IV. Nemzeti érzésükben öntudatos ...</a>
            </li>
            <li>
              <a href="#5">V. A munka jellemzői és célkitűzése</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#6">VI. Hitükben erős, erkölcsükben tiszta...</a>
            </li>
            <li>
              <a href="#7">VII. Kiadványok, egyenruha, jelvény, zászló</a>
            </li>
            <li>
              <a href="#8">VIII. Kislánykörök</a>
            </li>
            <li>
              <a href="#9">IX. Egyházközségi lánycsoportok</a>
            </li>
            <li>
              <a href="#10">X. Az ötvenedik évforduló</a>
            </li>
          </ul>
        </div>
        <a id="1"></a>
        <p className={styles.paragraphTitle}>Előzmények</p>
        <p>
          Magyarországon az első világháború után szinte nem volt család, amely
          ne siratott volna apát, fiút vagy testvért. Az ország helyzetét
          súlyosbította a Trianoni béke, amely területének csaknem kétharmadát
          elszakította, teljesen magyarlakta területeket is. A húszas évek végén
          kirobbant világgazdasági válság még nehezebbé tette a lakosság
          helyzetét, annál is inkább, mert számtalan menekült számára kellett
          munkaalkalmat, otthont teremteni. Ezek nagy része Erdélyből érkezett,
          ahol üldöztetésben, megaláztatásban volt részük, életüket, kenyerüket
          nem látták biztosítva.
        </p>
        <p>
          A háború más téren is változást hozott. Különösen a falvakban volt
          szembetűnő, hogy a hagyományok ereje megtört. A faluközösségek, a
          parasztcsaládok összetartó erői fokozatosan fellazultak. Sok fiatal
          kitört a szoros családi kötelékből, hogy a maga útját járja. Az
          asszonyok szerepe is megváltozott, hisz a háborús években a férfiak
          helyett is dolgoztak; felelősségük, de öntudatuk is megnőtt. A
          közgondolkodás, az erkölcsök megváltozása szembetűnő volt az egész
          országban. A háború romboló hatása valláserkölcsi téren is
          megmutatkozott.
        </p>
        <p>
          Az 1920-as, 30-as években a magyar értelmiség legjobbjainak figyelme
          egyre jobban a falu felé fordult. Az első lépéseket már korábban a
          népdalgyűjtők tették meg (Vikár Béla, majd főleg Bartók és Kodály);
          mások a népmeséket gyűjtötték. A népi íróknak is nagyon jelentős
          szerepük volt a falu felé fordulásban. Ennek kettős célja volt.
          Egyrészt a még fellelhető hagyományokat összegyűjteni, s mint közös
          kultúrkincset visszaadni a falunak. Másrészt: felemelni a
          parasztságot, főleg gazdasági vonatkozásban, hogy jobb
          életkörülményeket teremthessen magának. Mindkét cél magában foglalta
          azt a meggyőződést, hogy a magyarság fenntartó ereje a parasztság.
        </p>
        <p>
          A falu lányai, asszonyai még a férfiaknál is jobban rászorultak a
          vélük való törődésre, hisz a férfiaknak - ha igényelték - megvolt a
          lehetőségük a művelődésre a különböző olvasókörökben. A nőknek a
          templomon kívül csak a munka jutott - hajnaltól estig. Művelődésükre,
          szórakozásukra nem volt mód, erre a parasztcsaládok nem áldoztak. A
          régebben szokásos falusi összejövetelek (fonó, tollfosztó) már
          kimentek a divatból, mert nem volt rájuk szükség. A vallás gyakorlata
          is kevéssé volt tudatos, inkább csak külsőségek jellemezték.
        </p>
        <p>
          Erdélyben is megtörtént a falu felé fordulás. Az akkor még járható út
          a különböző vallásos társulások létrehozása volt; ezek próbáltak erőt
          adni, segítséget nyújtani azok számára, akik nem menekültek el
          szülőföldjükről. Az Erdélyi Katolikus Nőszövetség tömöríteni kezdte a
          katolikus - főleg értelmiségi- asszonyokat és lányokat. A Nőszövetség
          elnök asszonya, a nagyváradi Horváth Árpádné gondolt először arra,
          hogy munkájuknak a falusi lányok felé is irányulnia kellene. Az első
          kísérletre a Bihar megyei Székelyhidát szemelték ki, ahol megfelelő
          előkészítés után szervező előadást tartottak az összegyűlt édesanyák
          és leányok számára. A lelkesen megalakult leányegyesület vezetésével
          Stettner Andreát bízták meg, akinek. munkája csakhamar túlnőtt
          szülőfaluján. Megindult a szervezőmunka, főleg a székely falvakban,
          ahonnan az addig nyugat felé igyekvő, munkát kereső lányok a magyar
          határ lezárása miatt kénytelenek voltak kelet felé, a nagy román
          városokba menni szolgálni; hogy szüleik szűkös anyagi helyzetén bérük
          hazaküldésével segítsenek.
        </p>
        <p>
          1925-től 33-ig dolgozott Stettner Andrea az Erdélyi Nőszövetség
          munkatársaként, mint a lánykörök szervezője; mint előadó, és mint a
          Katolikus Nőmozgalom lapjának munkatársa. Tevékenységének központja
          csakhamar Bukarest lett, mert a székely lányok nagy része ott keresett
          munkát. Részükre leányotthon létesült, munkaalkalmat teremtettek
          számukra, sok esetben megvédték őket a leánykereskedők, ügynökeitől. A
          Nőszövetség munkatársai otthon, a falvakban is felkeresték a lányokat,
          és hitük, nemzeti hagyományaik megtartására, műveltségük gyarapítására
          lelkesítették őket. A vezetőképző tanfolyamokon felkészült katolikus
          magyar tanítónők - és más vezetők - komoly vasárnapi foglalkozást és
          megfelelő szórakozást biztosítottak számukra. Az "Ezer székely lányok
          napja" elnevezésű, nyaranként Csíksomlyón, Sarlós Boldogasszony napján
          megrendezett ünnepség pedig az egész Székelyföld fiatalságának
          szentmisével, közös áldozással egybekötött seregszemléje volt.
        </p>
        <p>
          A szervezőmunkában oroszlánrésze volt Domokos Pál Péter
          kántortanítónak, aki zenei tanulmányait Magyarországon egészítette ki,
          magáévá tette Kodály tanítását, s hazatérve magával hozta a Szent vagy
          Uram! énekeskönyvet. Életét a székely zenei hagyományok felkutatásának
          és tanításának szentelte. Moldvába is kiment, hogy a madéfalvi
          veszedelem idején oda kimenekült székelyek között kutasson szokásaik,
          népzenei hagyományaik után. (A Magyar Televízió 1986 július 1-én
          sugárzott 45 perces műsort életéről, munkásságáról 85. születésnapja
          alkalmából) '
        </p>
        <p>
          A lányegyleti szervezőmunka kiterjedt a háziipari és a népművészeti
          munka újraélesztésére is. Ezekben a törekvésekben együtt dolgoztak az
          Erdély területén működő katolikus, református és unitárius
          nőszövetségek, pl. közösen rendeztek népművészeti kiállításokat.
        </p>
        <a id="2"></a>
        <p className={styles.paragraphTitle}>Az alapítás</p>
        <p>
          Nyolcévi erdélyi és bukaresti szervezőmunka után Stettner Andrea
          átjött Magyarországra, hogy ismereteit, gyakorlati tudását különböző
          tanfolyamokon bővítse, közben a fiatal magyar értelmiségiek egyre
          nyugtalanabbul sürgették, hogy végre tenni kell valamit a falvak
          érdekében. 1934-ben, az esztergomi nyári egyetemen történt: A
          részvevők egy csoportja arról beszélgetett, vitázott, hogy a falusi
          lányok nevelésével senki sem törődik. Itt-ott néhány lelkes pap
          alakított ugyan különböző egyesületeket (pl. Mária Kongregációt), de
          ezek a próbálkozások általában nem voltak hosszú életűek. Nem feleltek
          meg a falusi viszonyoknak, nem a parasztlányok érdeklődését, igényeit
          tartották szem előtt. Megkezdte már működését a KALOT, a legényegylet
          - mondották -, de éppen ilyen fontos vagy még fontosabb lenne a lányok
          tanítása, nevelése. Hiszen tőlük függ, milyen lesz a jövendő magyar
          család. A lelkes csoport középpontja hamarosan Luczenbacher Rita lett,
          aki édesapja pettendi birtokán már megpróbálta összegyűjteni a
          lányokat, és énekelt, kézimunkázott velük. A beszélgetők másik
          központi alakja Stettner Andrea volt, aki az Erdély Nőszövetség
          megbízottjaként vett részt a tanfolyamon. Odaáti tapasztalatait,
          szervező munkájáról szóló beszámolóját nagy érdeklődéssel hallgatták.
          Az Alföld képviseletében pedig lllésy Mária lett a csoport egyik
          leglelkesebb tagja.
        </p>
        <p>
          Még 1934-ben, röviddel a nyári egyetem befejezése után a Katolikus
          Nőszövetség a falusi lányifjúsági csoportok számára vezetőképző
          tanfolyamot hirdetett Pécelen. Akkor még mindössze néhány lelkes
          tanítónő gyűlt össze, de amikor 1935-ben újból meghirdették a
          tanfolyamot, az érdeklődés sokkal nagyobb volt. Részt vett rajta
          Luczenbacher Rita mint hallgató, Stettner Andrea mint előadó, akit az
          elnök asszony, Zichy Ráfáelné hívott meg. Ekkor alakult ki kettőjükben
          a terv, hogy el kell kezdeni - egyelőre a Nőszövetség keretében - a
          katolikus falusi lányok tanítását, nevelését. Ekkor fogalmazódott meg
          a mindvégig megtartott célkitűzés: hitükben erős, erkölcsükben tiszta,
          nemzeti érzésükben öntudatos és gazdaságilag képzett családanyákat
          nevelni a falu fiatal leányaiból. A kezdő tőkét Luczenbacher Rita
          biztosította, s felkérte Stettner Andreát, legyen segítségére a
          szervezésben. Igenlő válasza után együtt jelentkeztek az Actio
          Catholica igazgatójánál, dr. Mihalovics Zsigmondnál.
        </p>
        <p>
          1935 augusztusában először a péceli tanfolyamon részvett vezetőket
          látogatták meg, és a Jurányi utca 9. alatt megnyitották a Katolikus
          Nőszövetség Faluszervező Irodáját. Decemberben már napvilágot látott
          az első sokszorosított körlevél, a lányköri vezetők számára készült
          Tarisznya. A szervező munka a székesfehérvári egyházmegyében indult
          Shvoy Lajos püspök engedélyével 1936 január l9-éri, mégpedig
          Martonvásáron. Ezután az egyházmegyét faluról falura bejárták,
          ismertették a munka célját, s örömmel tapasztalták, hogy kialakul az
          eszméért lelkesedők népes csoportja a plébánosok, tanítónők, valamint
          a falusi lányok és édesanyák körében. Velük egy időben elkezdte
          alföldi szervező munkáját Illésy Mária is.
        </p>
        <p>
          Az irányító munka nagy jártasságot követelt a központi vezetőségtől.
          Ezért tapasztalatcserére utaztak Németországba, majd Belgiumba, és
          több alkalommal is Rómába. A német parasztkongresszuson
          megállapították, hogy ezt az utat semmiképpen nem követik. Sokat
          tanultak viszont a belga katolikus ifjúsági mozgalomtól, amely
          gyakorlati módszereiben már teljesen kiforrott volt. Rómából - többek
          között a katekizmusversenyek gondolatát hozták magukkal.
        </p>
        <p>
          1935 decemberétől havonta jelentették meg a Tarisznyát, színvonalas
          anyagot adva ezzel a vasárnapi lányköri foglalkozásokhoz. 1936. június
          21-én megrendezték az első Lánynapot Székesfehérvárott. Még ugyanezen
          a nyáron lelkigyakorlattal egybekötött vezetőképző tanfolyam volt
          ugyancsak Székesfehérvárott, de a részvevők az ország legkülönbözőbb
          vidékeiről jöttek. Ezen a tanfolyamon alakult meg az a vezetői gárda,
          amely a mozgalmat az egész országban elterjesztette. A Székesfehérvári
          egyházmegye, Nógrád megye és az alföldi megyék után megindult a
          szervezőmunka a Győri egyházmegyében is, majd 1937 tavaszán a
          szombathelyiben. Luczenbacher Rita házat vásárol Budapesten, a Pagony
          u. 3. alatt, a központ oda tette át székhelyét és mindvégig ott is
          maradt. Otthont adott a munkával ismerkedni akaró vezetőknek, az
          átutazó szervezőknek, végezte az irányítással együtt járó
          adminisztrációt, és szerkesztette a kiadványokat.
        </p>
        <p>
          1936 novemberében az A. C. igazgatója felkérte a központot, hogy
          vállalja országosan a falusi lányok szervezését és irányítását. Az
          egész Dunántúlon az Alföldön, Észak-Magyarországon virágba borultak a
          falvak: megindult a lányköri élet. 1938-ban, a felejthetetlen szépségű
          Eucharisztikus Kongresszuson mutatkozott be legelőször a mozgalom a
          nagy nyilvánosság előtt. Háromezer lelkes, boldogságtól sugárzó leány
          jött fel ez alkalommal Pestre ősi népviseletben vagy szép
          egyenruhában. Örömmel látták, hogy milyen sokan vannak. A kicsi
          mustármagból terebélyes fa nőtt ki. Szükségessé vált, hogy mint önálló
          szervezet dolgozzék tovább, külön alapszabállyal, ügyrenddel. A
          Katolikus Nőszövetség Faluszervező Irodája helyett Felvette a
          Katolikus Lánykörök Szövetsége - a KALÁSZ - nevet, s az alapszabályt
          először a Hercegprímás, majd a belügyminiszter 1940-ben jóváhagyta,
          miután a Szövetség 1939 febr. 12-én tartott alakuló közgyűlésén
          kimondta önállóságát. Ekkor a mozgalom már 100 egyesületben 6000 tagot
          számlált.
        </p>
        <a id="3"></a>
        <p className={styles.paragraphTitle}>Szervezet és szervezőmunka</p>
        <p>
          Magyarországon a két világháború között jó néhány ifjúsági mozgalom
          létezett, de mind budapesti központi szervezésben működött, és
          általában egy-egy szerzetesrend irányításával. Egyedül a KALÁSZ-munka
          volt ezektől független, és ugyanakkor decentralizált. A KALÁSZ
          egyházmegyénként szerveződött, olyan titkár vezetésével, aki annak a
          földnek a szülötte, neveltje volt, aki mint a tenyerét ismerte a
          területet, s akit a papok, tanítónők, lányok családtagként fogadtak
          el. A titkár egyaránt volt a KALÁSZ-központ munkatársa és az
          egyházmegyei hivatalé. Beszámolási kötelezettsége volt mindkét
          irányban, segítséget is mindkét helyről kapott, de megvolt a szükséges
          önállósága. A KALÁSZ-központ segítette, nem pedig gátolta a sajátos
          feladatok megoldását. Így szinte minden egyházmegyei munkának megvolt
          a maga sajátos színe, arca.
        </p>
        <p>
          Az egyházmegyei titkárokat a központ előterjesztésére a megyéspüspök
          nevezte ki. Feladata volt az egyházmegye leányköreinek szervezése,
          látogatása, levelezéssel történő irányítása, egyházmegyei és
          espereskerületi lánynapok, lelkigyakorlatok, tanfolyamok szervezése.
          Az egyházmegyei titkárok mellett az Egyház irányító és ellenőrző
          szerepét gyakorolták az egyházmegyei lelki igazgatók, akiket a központ
          felkérése alapján szintén a megyéspüspökök neveztek ki. Munkájukat
          segítették az espereskerületi lelkiigazgatók: elnököltek a
          katekizmus-versenyeken, vezették a lelkigyakorlatokat, látogatták a
          lányköröket. Ugyanakkor az egyházmegyei titkárok munkáját az
          espereskerületi vezetők segítették szervezéssel, látogatással,
          tanácsokkal.
        </p>
        <p>
          A KALÁSZ szervezete tehát teljesen megfelelt a magyar katolikus egyház
          szervezetének; annak hierarchiájára épült. Sehol nem indult
          szervezőmunka a megyéspüspök engedélye nélkül, nem jöhetett létre
          lánykör az egyházközség plébánosának hozzájárulása nélkül, s a helyi
          lányköri vezető megbízása a plébános ajánlására történt. A KALÁSZ-nak
          a szerzetesrendek többségével jó kapcsolata volt, így a női rendek
          tagjai sok-sok egyházközségben vezettek lánykört, és rendszeresen
          részt vettek a vezetőképző tanfolyamokon. Számtalan előadást,
          lelkigyakorlatot vezettek a KALÁSZ-ban a pannonhalmi bencések (főleg
          Blazovich Jákó, Békés Gellért), de a mozgalom soha nem került függő
          helyzetbe egyik szerzetesrendtől sem.
        </p>
        <p>
          Hogyan történt a lánykörök szervezése? Az egyik egyházmegyei titkár
          így számol be róla: "Az egyházmegyei hatóság körlevélben szólította
          fel a lelkipásztorokat, hogy fogadják szívesen és segítsék a KALÁSZ
          megbízottját, aki az egyházmegye leányifjúsági titkára. Érkezésemről
          levélben értesítettem a plébánost, aki azt a templomban kihirdette.
          Oda érkezve a plébános által ajánlott tanítónőt tájékoztattam a KALÁSZ
          céljáról, feladatairól, eszközeiről, és irodalmat - a központ
          kiadványait - adtam neki. Ezután került sor az első közösen tartott
          lányköri foglalkozásra. Itt is elmondtam a tudnivalókat, most már a
          lányok nyelvén, az ő érdeklődési körüknek megfelelően. Közös
          népdalénekléssel, hangulatosan fejeződött be az első találkozás, amely
          a lányok számára kedvcsináló volt, a vezető tanítónő számára pedig
          bemutató tanításnak nevezhető foglalkozás.
        </p>
        <p>
          A lánykörbe jelentkezők először jelöltként jártak a gyűlésekre, majd -
          próbaidő után - ünnepélyes tagfelvételen lettek a KALÁSZ tagjai. A
          felvételt a templomban rendezték a szülők és a többi hívek előtt. A
          KALÁSZ-ban nem volt tagdíj. A szegényebb lányok nem tudták volna
          megfizetni, a jobb módú parasztcsaládokban nem áldoztak ilyen
          kiadásra. A lánykörnek azonban volt bizonyos bevétele, pl. műsoros
          estekből. A legtöbb lánykör - nem kötelezően - segítette anyagiakkal a
          KALÁSZ-központot, amely csaknem egész működése alatt gondokkal
          küzdött, Luczenbacher Rita vagyona - az induló tőke - csakhamar
          elfogyott; s a központ önellátó lett: kiadványaiból tartotta fenn
          magát. Időnként kapott jólelkű adományokat is magánosoktól és
          intézményektől. A felajánlott állami dotációt azonban soha, semmi
          körülmények között nem fogadta el, hogy megőrizze függetlenségét. A
          felszólítást, hogy egyesüljön a Lány-levente mozgalommal, úgy
          hárította el, hogy elfogadhatatlan feltételeket szabott. (Többek
          között azt kívánta, hogy a Lány-levente valóságos valláserkölcsi
          nevelést adjon a lányoknak).
        </p>
        <a id="4"></a>
        <p className={styles.paragraphTitle}>
          Nemzeti érzésükben öntudatos, gazdaságilag képzett...
        </p>
        <p>
          A KALÁSZ munkájában jelentős szerepet kapott a hazafias nevelés. Nem
          elégedtek meg azonban az akkoriban szokásos, dagályos szónoklatokkal,
          a nemzetiszínű, nacionalista kijelentésekkel. Ehelyett összegyűjtötték
          és elterjesztették a falvakban a már-már kivesző népi hagyományokat,
          több kötetre való népdalt tanítottak meg, népi táncokat, s ami egészen
          új volt: népi játékokra tanították a lányokat. Elterjesztették a
          különböző népi kézimunkákat; háncskészítő és egyéb háziipari
          tanfolyamokat szerveztek. Visszaadták a falunak a népi kultúra értékes
          elemét: a népmesét. A lányköri foglalkozásokon (a Tarisznya anyagából)
          sok-sok népmesét hallottak a lányok. Ezeket otthon elmondták, s
          valószínű, hogy minél többször hangzott el, annál többet változott.
          Így lett a falu számára valóban visszakapott kultúrkinccsé. Amikor az
          1970-es, 80-as években divatba jöttek az ún. Páva-körös (népi
          hagyományokat gyűjtő, ápoló mozgalom), nagyon sok volt KALÁSZ-vezető
          felismerte azokat a népdalokat, népi táncokat, játékokat, népmeséket,
          amelyeket annak idején ő tanított a lányoknak. A KALÁSZ elhatárolta
          magát a soviniszta eszméktől; a sváb vagy szlovák nemzetiségű
          lánykörök saját népdalaikat énekelhették; az egyenruha is vidékenként
          más és más volt, a hagyományoknak megfelelően.
        </p>
        <p>
          Amikor a KALÁSZ létrejött és működött, ritkaságszámba ment, hogy egy
          falusi lány elhagyja otthonát, és kenyérkereső foglalkozást válasszon,
          (hacsak nem kellett cselédnek állnia). Annak a kornak az ideálja a
          családjáért élő nő volt, s így természetes, hogy a KALÁSZ nagy teret
          szentelt a háziasszonyi erények kifejlesztésére, a háztartási
          ismeretek oktatására. Szerepelt a tananyagban: a rendszeretet,
          beosztás, takarékosság, az egyéni és a családi higiénia, az egészséges
          táplálkozás, a kertkultúra, az állatok nevelése. Ennek eszközei
          voltak: a lányköri gyűlések ilyen témái; a népfőiskolai és egyéb
          tanfolyamok; a KALÁSZ folyóiratainak ilyen tanácsai; a KALÁSZ
          szakácskönyve. Tapasztalat szerint sok-sok KALÁSZ-lányból vált
          ésszerűen gazdálkodó, kitűnő háziasszony.
        </p>
        <a id="5"></a>
        <p className={styles.paragraphTitle}>
          A munka jellemzői és célkitűzése
        </p>
        <p>
          Évtizedék távolából visszatekintve is meglepő az a siker, amely a
          mozgalom útját kísérte. Vajon mi volt a KALÁSZ titka? Talán így
          foglalhatnánk össze:
        </p>
        <p className={styles.list}>
          - Az Egyház hűséges gyermeke volt, tagjait tudatosan és tervszerűen
          nevelte lelkiéletre, de nem csupán vallásos nevelést adott. Az egész
          embert érintette, a lányok egész személyiségét nevelte.
        </p>
        <p className={styles.list}>
          - A magyarság hivatását abban látta, hogy a tiszta kereszténységet
          fenntartsa Kelet és Nyugat között. Ilyen alapon nevelte lányait
          tevékeny hazaszeretetre.
        </p>
        <p className={styles.list}>
          - Összegyűjtötte, felélesztette a magyar falu legjobb hagyományait,
          ugyanakkor harcolt a helytelen nézetek, hagyományok ellen.
        </p>
        <p className={styles.list}>
          - Hangvétele nem népieskedő volt, hanem valóban népi, valóban magyar,
          mélységes tisztelettel felnézve a becsületes munkát végző
          parasztságra.
        </p>
        <p className={styles.list}>
          - A vezetők nem "lehajoltak" a lányokhoz, hanem testvérként
          irányították, nevelték őket.
        </p>
        <p className={styles.list}>
          - Felismerte annak szükségességét, hogy a falu lányait - a társadalom
          elhanyagolt rétegét - nevelni kell, műveltségüket emelni, tudatosítva
          bennük a női hivatás szépségét, fontosságát.
        </p>
        <p className={styles.list}>
          - Nem forradalmi eszmékre nevelt, hanem oktató-nevelő munkájával
          segítette a falu lányait, asszonyait, hogy családjuknak jobb
          életkörülményeket teremtsenek.
        </p>
        <p className={styles.list}>
          - Abban az időben, amikor a falusi lányok számára szinte semmi
          szórakozási lehetőség nem volt, vasárnap délután összegyűjtötte őket,
          hogy az időt kellemesen és hasznosan töltsék.
        </p>
        <a id="6"></a>
        <p className={styles.paragraphTitle}>
          Hitükben erős, erkölcsükben tiszta...
        </p>
        <p>
          Bár a KALÁSZ a lányok egész személyiségét nevelte, hangsúlyosan
          vallásos egyesület volt. Már az alapítás is abból a tapasztalatból
          indult ki, hogy népünk - bár vallásosnak látszik - nem ismeri és nem
          éli vallását. Amihez ragaszkodik, annak jó része csupán külsőség. A
          vallási öntudat hiányát minden módon igyekezett pótolni a KALÁSZ. Így
          az akkoriban kibontakozó liturgikus mozgalom szellemében megtanította
          a lányokat a szentmisén való aktív részvételre, és gyakori
          szentáldozásra szoktatta. Kezükbe adta a Szentmise állandó részeit
          tartalmazó füzetet, amelyben az Egyház reggeli és esti zsolozsmájának
          részletei is benne voltak; ezeket lelkigyakorlatok, tanfolyamok
          alkalmával hangosan, együtt imádkozták. Tanácsolta a KALÁSZ a misszálé
          használatát. Nagy gondot fordított arra, hogy a lányok szépen és
          szívesen énekeljenek. Az épp elterjedőben lévő Szent vagy Uram!
          énekeit rendszeresen gyakorolták lányköri gyűléseken és tanfolyamokon.
          A KALÁSZ-nak oroszlánrésze volt ennek az énekeskönyvnek az
          elterjesztésében.
        </p>
        <p>
          Az iskolai hittankönyvekre épült az "Út, igazság, élet" c. könyv:
          Kérdések és gondolatok a KALÁSZ katekizmustanításához. (Német János
          plébános, Győr egyházmegyei lelkiigazgató munkája). Feldolgozása a
          lányköri gyűléseken közvetlen beszélgetés formájában történt. A könyv
          alapján készültek fel a lánykörök az évenként tartott
          katekizmusversenyekre (helyi, espereskerületi, egyházmegyei keretben,
          majd országos szinten). Ezekre a versenyekre nagy kedvvel készültek a
          lányok, s remélhető volt, hogy aki hitét jól ismeri, az életével sem
          fogja megcáfolni tudását.
        </p>
        <p>
          A Szűzanya iránti tiszteletet, gyengéd szeretetet is igyekezett a
          lányok szívébe csöpögtetni a KALÁSZ. Védasszonya a Jótanács Anyja
          volt, benne bízva, őt segítségül kérve végezték a vezetők lányköri
          munkájukat. Ugyancsak igyekeztek elmélyíteni a magyar szentek iránti
          tiszteletet, követésükre buzdítva őket. Nagy gondot fordítottak a
          lányok tudatos és tervszerű jellemnevelésére. Beszélgettek a követendő
          erényekről, a nők gyakori hibáiról, a hibák elleni küzdelem
          gyakorlatáról. Nagyon szerették a lányok az életből vett tanulságos
          történeteket, amelyeket otthon elmeséltek.
        </p>
        <p>
          A KALÁSZ-vezetők gondosan végezték a lányok felkészítését női
          hivatásuk betöltésére, amelyet így fogalmaztak meg: szolgáló szeretet.
          Ezt nem szűkítették le a családra, hanem kibővítették, beleértve a
          szerzetesnői hivatást, a tanítónők munkáját és a társadalom más
          területén dolgozókét. Természetesen legtöbbet a családban betöltött
          hivatással foglalkoztak, megvilágítva a nők szerepét a házasságban, az
          anyaságban. Csillogó szemmel hallgatták a nagylányok-kislányok, milyen
          fontos az ő szerepük. Minden módon erősítette, táplálta a KALÁSZ a
          lányok öntudatát, s az öntudattal együtt felelősségérzetüket: a nőktől
          függ, milyen a család és milyen az egész nemzet.
        </p>
        <p>
          Nagy hangsúlyt kapott a lányok nevelésében erkölcsi tisztaságuk
          megőrzése. Így ír erről a mozgalom Vezérkönyve: "A vallási öntudat
          hiányából következik az erkölcsi élet lazasága. Nekünk tehát minden
          erőnkkel azon kell dolgoznunk, hogy tiszta nemzedéket neveljünk a ránk
          bízottakból, mert csak így remélhetjük Isten áldását, és csak így
          tudjuk építeni és továbbfejleszteni az egészséges magyar nemzetet." A
          lányköri foglalkozásokon fontos helyet kapott a szerelem témaköre, a
          lányok egészségügyi felkészítése; tanácsokat kaptak ahhoz is, hogyan
          őrizhetik meg tiszta lányságukat.
        </p>
        <a id="7"></a>
        <p className={styles.paragraphTitle}>
          Kiadványok, egyenruha, jelvény, zászló
        </p>
        <p>
          A vezetők munkájának megkönnyítésére, az egyesületi élet állandó
          táplálására és a munka egységességének biztosítására a központ
          Tarisznya címmel évenként nyolcszor, októbertől májusig havonta
          munkaanyag-gyűjteményt adott ki. Ez tartalmazott 4 előadásvázlatot a 4
          vasárnapra, egyházi és világi éneket kottával, mesét, szavalásra
          alkalmas költeményeket, játék és táncleírást, valamint
          kézimunkamintát. Bevezető körlevelét a KALÁSZ alapítója, Luczenbacher
          Rita írta, így tartva fenn a kapcsolatot az ország lányköri
          vezetőivel, Az ő üzeneteit az egyházmegyei titkárok hírei, üzenetei
          követték. A mozgalom Vezérkönyve tartalmazta a munkára vonatkozó
          alapvető tudnivalókat 4 fejezetben: a mozgalom, a vezető, a munka és a
          szórakozás cím alatt. Vetésforgó címmel kiadták a vezetők részére a
          három első Tarisznyaévfolyam jellemképző előadásait. A Tulipántos Láda
          a KALÁSZ-lányok kedvelt képes folyóirata volt. Kéthetenként jelent
          meg, szeptembertől júniusig. Szórakoztatva tanította a lányokat,
          tartalmazott körlevelet, híreket a különböző lánykörökből, közölte
          leányoknak a központba írt leveleit, esküvői híreket fényképekkel,
          leánycsoportok fényképeit, történeteket, meséket, verseket,
          ételrecepteket, tréfákat, találós kérdéseket. Ugyancsak a KALÁSZ
          kiadásában jelent meg dr. Sáfrán Györgyi Üzenet c könyve, amely
          elbeszélések keretében a falusi lányok erkölcsi kérdéseit dolgozza
          fel. Süssünk-főzzünk címmel szakácskönyvet is adott ki a központ,
          hasznos tanácsokkal és jól bevált receptekkel. Néhány színdarab
          egészítette ki a KALÁSZ-kiadványok sorát. Foglalkozott a központ
          szentképek, karácsonyi, húsvéti lapok és jelvényes levelezőlapok
          kiadásával is
        </p>
        <p>
          Azon lánykörök számára, ahol a falu ősi népviselete már kiveszett, a
          fiatalság akkori igényének megfelelő egyenruhát terveztetett a
          KALÁSZ-központ. A Néprajzi Múzeumban tanulmányozták az ország
          különböző vidékeinek népviseleti emlékeit, s ezek díszítő elemeit
          átvitték a területi egységek számára tervezett egyenruhákra. A szabás
          egységes volt: húzott, bő szoknya, fehér ingváll, zsinórdíszes mellény
          és kötény más-más szín és minta szerint. - A mozgalom jelvényét a
          vezetők is, a lányköri tagok is hordták. Középpontjában szív, ebből
          kereszt alakban szétágazó búzakalász, fehér mezőben négy betű: IHSV In
          hoc signo vinces. A legtöbb lánykörnek saját zászlója volt, fehér
          selyemből. Egyik oldalán a jelvény nagyítva, fölötte a lánykör neve
          (az egyházközség megnevezése) és a megalakulás éve. A zászló másik
          oldalán a Szűzanya képe a kis Jézussal. Felírása: Jótanács Anyja,
          könyörögj érettünk. - A központ fenntartott az akkori Margit körúton
          egy háziipari boltot, amely árusította a lánykörök háziipari termékeit
          és ellátta egyenruhaanyaggal a lányköröket.
        </p>
        <a id="8"></a>
        <p className={styles.paragraphTitle}>Kislánykörök</p>
        <p>
          A KALASZ-lánykörbe az iskolahagyott nagylányok jártak, általában 15-16
          éves koruktól addig, míg férjhez nem mentek. (Néhányan 4 polgári,
          mások 6 elemi után, a többség 6 elemi után). A második világháborút
          követő években jelentkezett az az igény, hogy össze kell gyűjteni az
          ennél fiatalabb lányokat is, a 12-14 éveseket. "Nem lesznek
          nagylányaink, ha elveszítjük a serdülőket" - alakult ki a meggyőződés
          azokban, akik felelősséget éreztek a magyar katolikus leányifjúságért.
          A megoldást nemcsak helyeselték, de sürgették a szülők, akik
          gyermekeiket továbbra is valláserkölcsi alapon óhajtották nevelni. A
          tanítónők ezt a plusz feladatot már nem mindenütt tudták vállalni;
          rábízták a kislányokat a lánykör legértelmesebb, példás életét élő, s
          ehhez a munkához kedvet is érző nagylányára. Így alakult ki a
          KALÁSZ-mozgalomban egy nagyon sajátos, nagyon értékes réteg: a
          kislányvezetőké. Lelkigyakorlattal egybekötött vezetői tanfolyamot
          szerveztek részükre, s 1947-ben megindították a kislányvezetőknek
          szánt folyóiratot. Ez a sokszorosított körlevél az akkor már betiltott
          Tarisznya mintájára készült, de a serdülő kislányok érdeklődési
          körének felelt meg. Szentek regényes életrajza, magyar nagyasszonyok
          élettörténete, tanulságos, érdekes történetek, versek, mesék,
          népdalszövegek, népi játékok, népszokások adtak anyagot a kislányköri
          foglalkozásokhoz.
        </p>
        <p>
          A kislányvezető - természetesen - állandó kapcsolatban volt a
          nagylánykör vezetőjével, de személyes kapcsolatban volt az
          egyházmegyei titkárral is. A kislánymozgalom a csanádi és a váradi
          egyházmegyében indult el, majd - mint tavasszal a virágba boruló
          kertek - az egész országban kibontakozott. Az előrelátás akkor hozta
          meg igazán gyümölcsét, amikor 1948-ban az iskolákat államosították, s
          lányköröket vezető tanítónők állami státusba kerültek. Nem volt tehát
          vezetőjük a lányköröknek, és nem volt lehetőség vasárnap délutánonként
          az iskolában összegyűlni. A Ťstafétabototť a kislányvezetők vették át,
          akik még 2-3 éven át összegyűjtötték házaknál lányköri társaikat is, a
          kicsinyeket is. Sok kislányvezető annyira élethivatásának tekintette a
          velük való foglalkozást, hogy életüket továbbra is figyelemmel
          kísérte. Egyéni beszélgetésekkel, tanácsokkal, imával akkor is
          mellettük állt, amikor más lehetőség már semmiképpen nem volt a velük
          való foglalkozásra.
        </p>
        <a id="9"></a>
        <p className={styles.paragraphTitle}>Egyházközségi lánycsoportok</p>
        <p>
          1946 nyarán a KALÁSZ-mozgalom működési engedélyét bevonták, a központi
          iroda hivatalosan nem működhetett tovább, a bodajki és a szadai
          népfőiskola kénytelen volt megszüntetni tanfolyamait. A 11 éven
          keresztül megjelent Tarisznya és a Tulipántos Láda sem tölthette be a
          továbbiakban hivatását. A lányok azonban megvoltak, és a vezetők is
          kitartottak az iskolák államosításáig. Csak a KALÁSZ elnevezés szűnt
          meg, Voltak lánybúcsúk és lelkigyakorlatok, és voltak sokszorosított
          körlevelek. A keret megszűnt, de a lényeg megmaradt: a lányok
          összetartása és a velük való foglalkozás. Egyházközségi lánycsoport
          néven egészen az 50-es évekig folyt ez a munka; utána már "csak" a
          lányokért mondott ima maradt. Több lányköri vezető életét ajánlotta
          Istennek áldozatul a falusi leányifjúságért.
        </p>
        <a id="10"></a>
        <p className={styles.paragraphTitle}>Az ötvenedik évforduló</p>
        <p>
          1986 áprilisában, a XXIII. János Szeretetotthon kápolnájában tartott
          hálaadó szentmisén hangzott el. "Mennyei Atyánk! Fogadd hálánkat
          azért, hogy 50 évvel ezelőtt kiválasztottál és küldtél bennünket a
          KALÁSZ-mozgalom munkájára. Hallgasd meg most könyörgő imánkat, és
          segíts továbbra is, vezess bennünket és árassz el mindenható
          kegyelmeddel, hogy bárhol vagyunk, és bármit teszünk, hűségesek
          maradjunk KALÁSZ-hivatásunkhoz. Krisztus, a mi Urunk által. Ámen."
        </p>
        <p>
          A szentmisén részt vett a két alapító: Luczenbacher Rita és Stettner
          Andrea, valamint legközelebbi munkatársaik. Mind megőszültek,
          megöregedtek, de mindnyájan fiatalos lelkesedéssel énekelték a
          mozgalom Jeligéjét:
        </p>
        <p className={styles.signature}>
          Sík Sándor verse, Gidófalvy Ilona zenéje
        </p>
        <div className={styles.musicSheet}>
          <img
            src="/assets/images/vezerkonyv/jelige.gif"
            alt="A Kalász jelige"
            height="150"
          />
        </div>
      </div>
    </PageLayout>
  )
}

export default Tortenetunk
