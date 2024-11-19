import { FunctionComponent } from "react"
import { v4 as uuidv4 } from "uuid"

import styles from "./Hirek.module.scss"

interface NewsItem {
  id: string
  type: "image" | "text" | "mixed"
  title: string
  date: string
  text?: string
  imageUrl?: string
  imageSide?: "right" | "left"
}

const newsItems: NewsItem[] = [
  {
    id: "0097",
    type: "image",
    title: "Székely János",
    date: "2023. szeptember 22.",
    imageUrl: "0097-szekely_jános_online.png",
  },

  {
    id: "0096",
    title: "Süvege Gergő",
    date: "2023. augusztus 21.",
    type: "image",
    imageUrl: "0096-suveges_gergo.png",
  },
  {
    id: "0095",
    title: "Őszi hétvége tini lányoknak",
    date: "2023. július 12.",
    type: "image",
    imageUrl: "0095-oszi-tabor-2023.jpg",
  },
  {
    id: "0094",
    title: "A nő férfiszemmel - Kunszabó Zoltán diakónus előadása",
    date: " 2023. július 3.",
    type: "image",
    imageUrl: "0094_a_no_ferfiszemmel_kunszabo_zoltan_diakonus_eloadasa.png",
  },
  {
    id: "0093",
    title: "A nő férfiszemmel - dr. Papp Miklós atya előadása",
    date: " 2023. június 5.",
    type: "image",
    imageUrl: "0093_a_no_ferfiszemmel_dr_papp_miklos_atya_eloadasa.jpg",
  },
  {
    id: "0092",
    title: "Igenemberek; Nyári KALÁSZ tábor",
    date: "2023. május 14.",
    type: "image",
    imageUrl: "0092_igenemberek.jpg",
  },
  {
    id: "0091",
    title: "A nő férfiszemmel; Görföl Tibor előadása",
    date: "2023. április 12.",
    type: "image",
    imageUrl: "0091_noi-teologusok-ferfi-szemmel.png",
  },
  {
    id: "0090",
    title: "Honnan tudjam? Tavaszi Tini tábor",
    date: "2023. március 20.",
    type: "image",
    imageUrl: "0090_2023-kalasz-tini-tabor.jpg",
  },
  {
    id: "0089",
    title: "A nő férfi szemmel Böjte Csaba atya előadása",
    date: "2023. március 1.",
    type: "image",
    imageUrl: "0089_a-no-ferfi-szemmel-bojte-csaba-atya.jpg",
  },
  {
    id: "0088",
    title: "A nő férfi szemmel Bese Gergő atya előadása",
    date: "2023. február 6.",
    type: "image",
    imageUrl: "0088_a-no-ferfiszemmel-bese-gergo-atya-eloadasa.jpg",
  },
  {
    id: "0087",
    title: "Közgyűlési meghívó",
    date: "2023. február 5.",
    type: "image",
    imageUrl: "0087_kozgyulesi-meghivo.png",
  },
  {
    id: "0086",
    title: "A nő férfi szemmel online sorozat",
    date: "2023. január 16.",
    type: "image",
    imageUrl: "0086_a-no-ferfiszemmel-online-sorozat.jpg",
  },
  {
    id: "0085",
    title: "Hálaadás 2022",
    date: "2022. december 1.",
    type: "image",
    imageUrl: "0085_halaadas_2022.png",
  },
  {
    id: "0084",
    title: "Rubovszky Rita előadása",
    date: "2022. szeptember 7.",
    type: "image",
    imageUrl: "0084_rubovszky_rita.jpg",
  },
  {
    id: "0083",
    title: "Pettendi Piknik",
    date: "2022. július 8.",
    type: "image",
    imageUrl: "0083_pettendi_piknik_2022.png",
  },
  {
    id: "0082",
    title: "Nyári tábor",
    date: "2022. május 9.",
    type: "image",
    imageUrl: "0082_nyaritabor_2022.png",
  },
  {
    id: "0081",
    title: "Tavaszi tábor",
    date: "2022. március 10.",
    type: "image",
    imageUrl: "0081_tavaszi_tabor_2022.jpg",
  },
  {
    id: "0080",
    title: "Közgyűlési meghívó",
    date: "2022. március 4.",
    type: "image",
    imageUrl: "0080_2022_04_09_kozgyulesi_meghivo.png",
  },
  {
    id: "0079",
    title: "MEGHÍVÓ - KALÁSZ program-sorozatra",
    date: "2022. március 16.",
    type: "text",
    text: '<p>Kedves Lányok és Asszonyok!<br/><br/><strong>A Katolikus Asszonyok és Lányok Szövetsége (KALÁSZ) online beszélgetés-sorozatot indít „A XXI. századi katolikus egyház hívő nők szemével” címmel</strong><br/><br/><strong>Meghívó:</strong><br/><br/>A KALÁSZ küldetése a lányokat és asszonyokat segíteni abban, hogy a katolikus hit alapján tudják betölteni a sajátos női hivatásukat a társadalomban, az egyházban és a családban. Ezt a küldetést szem előtt tartva <strong>egy rendkívül változatos és izgalmas tematikájú online beszélgetés-sorozatot állítottunk össze, neves szakemberek meghívásával, amire szeretettel hívjuk minden érdeklődő nőtársunkat. Továbbá a program-sorozat része egy lelki nap is áprilisban, személyes jelenléttel.</strong><br/><br/><strong>A programok időpontja és témája:</strong><br/><br/>2022. március 31. 18 óra Somogyiné dr. Petik Krisztina tanszékvezető főiskolai docens - online workshop a helyes önszeretetről, a női önbecsülésről<br/><br/>2022. április 30. 10.30 KALÁSZ Lelki Nap a Jótanács Anyja ünnepéhez kapcsolódóan a Verbum Dei Missziós Testvéri Közösség tagjaival a Városmajori templomban és közösségi házban<br/><br/>2022. május 5. 18 óra Bartha Angéla szociális testvér, online előadás és beszélgetés a női szentekről és különösképp Máriáról<br/><br/>2022. június 9. 18 óra Tornay Krisztina Phd M.Petra SSND iskolanővér, tanár, szupervízor online előadás és beszélgetés a keresztény női spiritualitásról<br/><br/>2022. július 7. 18 óra Uzsalyné dr. Pécsi Rita neveléskutató, főiskolai docens, online előadás és beszélgetés a nők szerepéről a családban, gyermeknevelésben<br/><br/>2022. augusztus 6. Pettendi Piknik - a KALÁSZ búcsúja, meghívott vendég: Elekné Román Katalin<br/><br/>2022. szeptember 29. 18 óra Rubovszky Rita a Patrona Hungariae Iskolaközpont vezetője, online előadás és beszélgetés a generációk közötti párbeszédről<br/><br/><br/><strong>A részvétel ingyenes, de regisztrációhoz kötött. Ne maradj le, csatlakozz és regisztrálj most:</strong><br/><br/><a style="text-decoration: underline" href="https://docs.google.com/forms/d/e/1FAIpQLSdbmqj8Bn3grTe4KJTdlCcQYAf_pVqGxJ22c2dkl7I23MJCaA/viewform?fbclid=IwAR1iGNPyUIOy3kysCvj_5cXoTi7dPpPcpAIOyrDb0BqQvYINQsf0QdgH5hU" target="_blank">https://docs.google.com/forms/d/e/1FAIpQLSdbmqj8Bn3grTe4KJTdlCcQYAf_pVqGxJ22c2dkl7I23MJCaA/viewform?fbclid=IwAR1iGNPyUIOy3kysCvj_5cXoTi7dPpPcpAIOyrDb0BqQvYINQsf0QdgH5hU</a><br/><br/>Szeretettel hívunk és várunk!<br/><br/>Kapcsolattartó: Csehné Vadnai Bori, 06309228531, <a href="mailto:vadnai.borbala@gmail.com">vadnai.borbala@gmail.com</a></p><div><img style="width: 100%; margin-top: 10px;" src="/assets/images/hirek/0079_plakat_KALASZ_02.jpg"></div>',
  },
  {
    id: "0078",
    title: "A Hálaadás 2021 meghívója",
    date: "2021. november 8.",
    type: "image",
    imageUrl: "0078_meghivo_12.28.jpg",
  },
  {
    id: "0077",
    title: "Őszi tábor beszámoló",
    date: "2021. október 28.",
    type: "text",
    text: '<p style="text-align: center;"><b>Külső-belső női szépség</b></p><br/><p style="text-align: center;"><b>Őszi KALÁSZ tábor tini lányoknak</b></p><br/><p>Október 22 és 24 között Mártélyon került megrendezésre a KALÁSZ őszi lánytábora. Szolnokról, Szegedről, Hódmezővásárhelyről és Mártélyról érkeztek kamasz lányok a programunkra, összesen nyolcan.</p><br/><p>A gyönyörű, napsütéses októberi hétvégén beszélgettünk a női test különleges működéséről és a teremtés csodájába való belekapcsolódási lehetőségünkről – részt vettünk a Ciklus-show-n, (hivatalosan: MFM-Projekt Ciklus-show®) egy kiskamasz lányoknak szóló, drámapedagógiai jellegű felvilágosító foglalkozáson Tóth Johanna tréner vezetésével. Ahogy a program mottója is mondja: “Csak arra vigyázok, amit értékesnek tartok!” A lányok jobban megértették  saját testük működését és pozitívabban viszonyulnak nőiségükhöz. Mindez alapjaiban meghatározhatja, hogyan élik meg a serdülőkor éveit, a testi-lelki változásokat, a nővé válást – miközben erősíti az önértékelést és a lelki egészséget. Akár abban is támogathatja őket, hogy a következő éveiket, a kamaszkori szerelmeket tudatosabban és felelősségteljesebben éljék meg.</p><br/><p>Ezen fontos téma mellett foglalkoztunk még a női példaképekkel – beszélgettünk arról, hogy ki milyen női mintákat ismer a család nőtagjai (édesanyák, nagymamák, nagynénik, stb.) hatására; mit mutat nekünk a világ a nőiségről – modellek, színésznők, influenszerek világán keresztül; kiket tartanak különleges nőnek a férfiak és ezek a csodálatos nők milyen tulajdonságokkal rendelkeznek; valamint – mi milyen nővé szeretnénk válni? A legfontosabb értékek, amiket a lányok összegyűjtöttek, minket is megleptek mélységükkel és komolyságukkal: odafigyelő, önzetlen, őszinte, pozitív, intelligens, kitartó, motiváló.</p><br/><p>Mindkét programot nagyszerűnek és értékesnek találták a lányok, aktívan bekapcsolódtak, megosztották a gondolataikat, nehézségeiket.</p><br/><p>A tartalmas beszélgetések mellett sor került Mártély megismerésére és a helyi művészekkel való beszélgetésre is – akadályverseny formájában, csapatokban.</p><br/><p>A tábor vezetői voltak: Tatárné Kapus Éva, Tóth Krisztina, Lőrincz Zsuzsanna és Fekésházy Kinga.</p><br/><p>A tavaszi szünetben folytatjuk!</p><br/><p style="text-align: right; margin-right: 30px"><i>Tóth Krisztina</i></p><br/>',
  },
  {
    id: "0076",
    title: "Őszi Tini hétvége",
    date: "2021. szeptember 7.",
    type: "image",
    imageUrl: "0076_oszi_tini_hetvege.jpg",
  },
  {
    id: "0075",
    title: "Nemezkészítő tanfolyam",
    date: "2021. szeptember 6.",
    type: "image",
    imageUrl: "0075_NEMEZ_2021.jpg",
  },
  {
    id: "0074",
    title: "Biztos út képzésről",
    date: "2021. szeptember 5.",
    type: "text",
    text: '<p style="text-align: center"><b>Beszámoló a KALÁSZ Biztos út-képzéséről</b></p><br/><div><img style="width: 150px; margin-right: 10px;" src="/assets/images/hirek/0074_biztos_ut.png"><p clear="left" style="text-indent: 20px;">A KALÁSZ fontos feladatának tekinti a fiatal lányok, a jövőbeli családanyák nevelését. A KALÁSZ hitvallása szerint „Merjünk hittel, gyakorló katolikusként élni, gondolataink, tetteink eszerint működjenek!” Ezzel összhangban nyár elején meghívtuk a KALÁSZ csoportvezetőit egy olyan képzésre, ami során elsajátíthatják azt, hogy hogyan érdemes lányokkal a szerelemről, szexualitásról, tisztaságról, jegyességről és házasságról korszerűen beszélgetni. 14-en jelentkeztek a felhívásra. A képzés alapját Tomka Feri atya csodálatos könyve adta: Biztos út – szerelemről, szexualitásról értelmesen. A könyvhöz tartozik egy hitoktatói segédfüzet, amit mindenki megkapott elektronikusan. A képzés célja, hogy a résztvevők képessé váljanak egy 8 alkalmas beszélgetéssorozatot tartani lányoknak ebben a témában. A képzést 2021. augusztus 28-án személyesen a könyv írója (és az én lelkivezetőm) Tomka Feri atya tartotta.</p><p style="text-indent: 20px;">Ezt az alkalmat megelőzte a résztvevők közös felkészülése a képzésre. Hetente egy fejezetet olvastunk el, amit aztán röviden átbeszélgettünk hétfő esténként. Mivel sokfele lakunk az országban (Székesfehérvár, Dinnyés, Szeged, Mártély, Budapest stb.), így mind a beszélgetések, mind maga a képzés csak online módon vált lehetségessé. A felkészítő beszélgetések során egyrészt a résztvevők jobban megismerték egymást: kiderült, hogy többségünk sok (4-6-7) gyermekes édesanya másrészt szép megosztásokra is sor került a témában. Mindannyian szívünkön viseljük a lányok sorsát és szeretnénk egy – a világ által kínált méltatlan út helyett – egy sokkal szebb, jobb és nem mellesleg egyházunk által tanított utat mutatni nekik.</p><p style="text-indent: 20px;">A képzés 9-től 12-ig tartott két rövid szünettel Zoom-on. Feri atya remekül bemutatta nekünk a könyv fő gondolatait, tanításait, valamint, hogy hogyan építsük fel az alkalmakat, milyen kérdések köré építsük a kiscsoportos beszélgetéseket. Fontos pedagógiai szempontot tanultunk: a beszélgetés vezetőjének nem az a feladata, hogy kiselőadást tartson, hanem hogy a résztvevők a kérdések által maguk jöjjenek rá és mondják ki a tanulságokat és így akár több ismétlés által az szinte bevésődjön. Így a fiatalok nem csak maguk megértik a lényeget, hanem képesek lesznek beszélni is róla. Kiemelten fontos, hogy az értelemre is hatva tudjunk a szexualitásról beszélni. Nagyon izgalmas rész a hormonok működését bemutató fejezet: megértjük, hogy a Jóisten úgy alkotta meg a testünket és a különböző hormonokat, hogy erős, összetartó, boldog házasságra készítsenek fel. Szíve mélyén minden fiatal jó házasságra vágyik, még ha talán nincs is róla tapasztalata és a 8 beszélgetés során kirajzolódik számukra, hogy mi az ehhez vezető „biztos út”. A tisztaság nem valamiféle külső tilalomból kell eredjen, hanem egy mélyen megértett és felvállalt döntésből. Ez azonban mégiscsak egy forradalmi, radikális út a mai világban. Feri atya kiemelte a közösségek, csoportok megtartó erejét az ezen az úton járó fiatalok számára, mert egyedül szinte lehetetlen ezen az úton járni, elsodor a világ hatása.</p><p style="text-indent: 20px;">A képzés végén megvitattuk, hogy hogyan használjuk majd fel az itt tanultakat. A KALÁSZ táboraiban mindenképp beépítésre fog kerülni a tematikába és a kiskalász csoportjaink számára is hasznos lehet. A képzés végén büszkék lehettünk rá, hogy Biztos út trénerek lettünk és van eszköz a kezünkben, hogy az „élet kultúráját” adjuk tovább a fiataloknak. Kívánom, hogy sok szép házasság szülessen, amihez kicsit talán mi is hozzá tudunk járulni. Hálásan köszönjük Feri atyának a könyvet és a képzést!</p><br/><p style="text-align: right; margin-right: 30px; margin-bottom: 10px;"><i>Csehné Vadnai Bori</i></p></div>',
  },
  {
    id: "0073",
    title: "Pettendi Piknik beszámoló: Pettenden ünnepeltünk",
    date: "2021. augusztus 17.",
    type: "text",
    text: '<p><b>Pettenden ünnepeltük a 85 éves KALÁSZ-t</b></p><br/><p style="text-indent: 20px;">A KALÁSZ bölcsőjénél, Pettenden ünnepeltük megalakulásunk 85 éves évforduólját, egybekötve aa kápolna búcsúnapjával, Urunk színeváltozása ünnepével.</p><p style="text-indent: 20px;">A kis kápolna nem tudta befogadni az ünnepi szentmisére érkező Kalász- zarándokok sokaságát, akik 21 településről érkeztek hálát adni a múltért, és Isten segítségét kérni a jövőbeni helytállásért. A körülötte levő kis erdő adott hát otthont a szabadtéri oltárnak és a jubileumi eseményeknek. A rekkenő augusztusi hőségben nem sajnálta a fáradságot Máthé György atya, aki Érsakvadkertről utazott a Dunántúlra, hogy megerősítsen bennünket a szentmise kegyelmeivel, a KALÁSZ-hoz fűződő lelkesítő emlékeivel és biztatásaival a jövő iránt. Az ő beszédét idézzük most föl, bár lelkesedését nem tudjuk visszaadni nyomtatott szavakkal. Elmondta, hogy pappá szentelése a kommunizmus szorongatásában történt, szokva volt hozzá, hogy nem gyülekezhetnek a hívek feltűnő közösségben, hogy mindenütt fenyegetett a megfigyelők vizsla tekintete. Ám Szent II. János Pál pápa első lengyelországi látogatására mégis sikerült kijutnia a 80-as évek elején. Először ott, aztán 1989-ben Mogyoródon, a szétszóratás utáni első KALÁSZ-találkozón élte át a csodát: Isten sokat szenvedett népe euforikus örömben találkozott újra. Ő akkor káplán volt Mogyoródon, és tanúja lehetett ennek az örömnek, az újjászületés csodájának, ami életre szóló lelkesedéssel töltötte őt el a KALÁSZ iránt. (Ennek a lelkesedésnek gyümölcseit sokan élvezhettük – váci jubileumok, egyházmegyei találkozók, lelki napok Kiskunfélegyházán, majd Szolnokon összekapcsolt minket a Katolikus Agrármisszióval, hatalmas lendületet adva nekünk a jövő útjának irányában.)</p><p style="text-indent: 20px;">Biztatott miket: a KALÁSZ küldetése, mind a négy célkitűzése, különösen fontos: felmutatni Isten bölcs rendjét, kiállni az Ő igazsága mellett, mint női hivatásukat hittel vállaló asszonyoknak és lányoknak. Mert a világ megzavarodott. A szabadság félreértelmezésével sok zavart okoznak, életveszélyes propagandát folytatnak. Egy példa: már a gyerekekre is olyan erkölcsi terheket tukmálnak, amit nem bírnak elviselni. Ugye, pár hónapos gyereknek nem adhatunk töltött káposztát, mert nem bírja megemészteni. Két éves gyerekkel nem cipeltet az édesapja ötven kilós cementes zsákot, mert belerokkan. A szexualitás rendes és természetellenes kérdéseivel sem terhelhetjük őket idő előtt, mert abba is belerokkannak. Fel kell mutatnunk, hogy az Isten igazsága: a természeti törvények, a biológia törvényei, erkölcsi törvények igazsága meg kell, hogy előzze a szabadságot. Nem csak gyermekeink iránt, hanem a női – és férfi – élethivatás kérdésében is. Nagy érték, hogy ma Magyarországon kiállhatunk az isteni igazság mellett, ki kell használnunk ezt az időt. Talán bizony Pio atya látomása Magyarországgal kapcsolatban most teljesülhet be, amikor az egész világ előtt megvallhatjuk az Isten igazságába vetett hitünket. Szokatlan volt fülünknek hallani György atyától: dolgozzatok, szenvedjetek az Isten igazságáért! Igen, meg kell érte szenvednünk. A KALÁSZ ezt vállalja, bizonyítja az is, hogy két új asszonytársunk tett a szentmisében fogadalmat, s lett a KALÁSZ tagja.</p><p style="text-indent: 20px;">A szentmise után Keresztes Ilona bemutatta az Együtt az Életért Egyesület magzatmentő munkáját, életet szolgáló tanfolyamait, felkínálva az együttműködés lehetőségét. Ez is kiállás az élet, Isten igazsága mellett. Miután egymást kínálgattuk a hazaiból, a valkói csoport humoros dalcsokorral vidámított mindnyájunkat. Többen is hozták kézműves alkotásaikat, köztük a legnagyobb sikert a tápióbicskei Csikós Györgyné Erzsike aratta művészi gyöngyfűzéseivel. Hazafelé már sokan az ő csodálatos nyakláncaiban utazhattak.</p><p style="text-indent: 20px;">Köszönetet mondunk a helybélieknek, akik a körülmények – asztalok, padok, sátrak, erősítők, kántori szolgálat és még sok más által lehetőséget teremtettek ehhez a felemelő ünnephez.</p><p style="text-indent: 20px;">Megragadjuk az alkalmat, hogy Máthé György atyát hálával köszöntsük 70 éves születésnapja alkalmából, s kérjük Isten áldását életére, szolgálatára.</p><br/><p style="text-align: right; margin-right: 30px; margin-bottom: 10px;"><i>Nényei Gáborné</i></p>',
  },
  {
    id: "0072",
    title: "Tarts velünk! Beszámoló: Kalász Tábor 2021",
    date: "2021. augusztus 5.",
    type: "text",
    text: '<p style="text-align: center"><b>Irány a boldogság! Kalász Tábor 2021</b></p><br/><p>A boldogságkeresés jegyében zajlott a KALÁSZ 2021. évi nyári lánytábora Vácon a Kalász Házban. A táborban 12 kamasz lány vett részt, az ország több pontjáról: Mártély, Verőce, Szeged, Hernádvécse, Hollóháza, Sátoraljaújhely, Érsekvadkert.</p><br/><p>A táborban beindítottuk a személyes GPS-t a kamaszok életéhez, napról napra egy-egy olyan témakörrel foglalkoztunk, ami segíti a résztvevőket abban, hogy jól bánjanak az életükkel, önmagukkal, másokkal (család, barátok, tanárok, szerelem). Délelőttönként zajlottak az elgondolkodtató és lelkileg mindenkit megmozgató foglalkozások, délutánonként pedig valamilyen kalandba vetettük bele magunkat: strandoltunk, kézműveskedtünk, kirándultunk, sárkányhajóztunk, sorversenyeztünk, kerti moziztunk, tábortűznél énekeltünk.</p><br/><p>A kézműves foglalkozást Kalmár Zita tartotta, kipróbálhattuk a körmönfonást, a kötélverést és szép karkötők, láncok készültek színes fagyöngyökből. Sárkányhajóból kétszer is, de a Kálvária dombról is megcsodáltuk a naplementét. Katalinpusztán kipróbáltuk milyen az icipici Hangyavasúton utazni, függőhídon áthaladni és hogyan válik legyőzhetővé egy túl hosszúnak hitt túraútvonal.</p><br/><p>Finom ételek és sütemények is készültek a résztvevő lányok jóvoltából és szorgalmának köszönhetően. A tábort a KALÁSZ KI MIT TUD? koronázta meg, ahol minden egyes táborlakó felcsillantotta tehetségét az alábbi kategóriákban: ének, sport, szépségipar, fejtörő játékok, sütés-főzés, irodalom, cserkészet-tűzrakás.</p><br/><p>A lelkes és folyamatos gyakorlásnak köszönhetően elkészült a Jerusalema tánckihívás KALÁSZ TINI változata izgalmas környezetben, váci látképpel a videó hátterében.</p><br/><p>A táborlakók a búcsúesten egy-egy fűfejet kaptak ajándékba azzal az üzenettel, hogy mindenki ugyanazokat a magocskákat, üzeneteket, tudást kapta a táborban – a magocskák gondozása, fűszállá növelése már mindenkinek egyéni, otthoni és folyamatos feladat.</p><br/><p>A tábort Tóth Krisztina, Tatárné Kapus Éva, Károlyi Ildikó és Fekésházy Kinga vezették.</p><br/><p style="text-align: right; margin-right: 30px; margin-bottom: 10px;"><i>Tóth Krisztina</i></p>',
  },
  {
    id: "0071",
    title: "Tarts velünk! Nyári tábor",
    date: "2021. július 10.",
    type: "image",
    imageUrl: "tarts-velunk-2021.jpg",
  },
  {
    id: "0070",
    title: "Pettendi Piknik",
    date: "2021. július 7.",
    type: "image",
    imageUrl: "0071_pettendi-piknik-plakat-2021.jpg",
  },
  {
    id: "0069",
    title: "Csodapatika Tábor Beszámoló",
    date: "2021. május 20.",
    type: "text",
    text: '<p style="font-weight: bold; font-size: 1.5rem; margin-bottom: 1rem;">Csodapatika tábor</p><p style="text-indent: 1rem;">Vácon, a Kalász Házban került megrendezésre a Csodapatika tábor 2021. május 7–9-ig a Kalász szervezésében. A táborba 11 tizenéves lány jött az ország minden részéről. A lányok a hosszú bezártság miatt nagyon élvezték a napsütést, a várost, a közös játékokat és a jó hangulatú tábortüzet.</p><p style="text-indent: 1rem;">Pénteken egész délután és este vidám csapatjátékokban vettek részt nagy lelkesedéssel. Volt tojásdobálás, vízfacsarás, csoki evés késsel-villával, csipeszgyűjtés és csacsifarok tűzés bekötött szemmel, de a logikai és nyelvi játékok sem maradtak el. Nagy örömünkre a lányok maguk is javasoltak játék-ötleteket, úgyhogy egészen késő estig folyt a móka.</p><p style="text-indent: 1rem;">Szombaton délelőtt a Csodapatikába látogattunk, ahol – hála Lázár Ervin csodálatos meséjének –,megtudhattuk, hogy mennyire fontos a saját önnevelésünk, a saját hibáink, lelki bajaink felismerése</p><p style="text-indent: 1rem;">és gyógyítása, holott mások hibáit észrevenni sokkal egyszerűbb, és másoknak mindig kiváló tanácsokat tudunk adni. Ezt a tudást az evangéliumban is felleltük; Jézus ugyanis így tanított minket: <em>Miért látod meg a szálkát embertársad szemében, amikor a magadéban a gerendát sem veszed észre? Hogy mondhatod embertársadnak, hogy hadd vegyem ki a szemedből a szálkát, amikor a magad szemében gerenda van? Képmutató! Előbb vedd ki a gerendát a saját szemedből, s akkor hozzáláthatsz ahhoz, hogy kivedd a szálkát embertársad szeméből! (Mt 7,3–5)</em></p><p style="text-indent: 1rem;">A lelki kalandozás után vonattal útnak indultunk Veresegyházára a Medveotthonba. Gyönyörű napsütésben sétáltunk el a vasútállomástól a Parkig, ahol a csoportvezetőnk már várt minket. Sok-sok érdekességet tudtunk meg a farkasokról, az oroszlánokról, a medvékről és erről a csodálatos parkról. Érdeklődve hallgattuk az egyes állatok történetét, és figyeltük viselkedésüket. Minden állat nagyon élénk és jól megfigyelhető volt a szép tavaszi időben. Este fáradtan tértünk vissza Vácra, de ez nem akadályozott meg minket abban, hogy egy csodás, éneklős, csillagnézős tábortűzön vegyünk részt.</p><p style="text-indent: 1rem;">Vasárnap szentmise látogatás után a búcsúzásé lett a főszerep. A lányokkal megbeszéltük, hogy – mivel ők már több Kalász táborban is részt vettek – rájuk a nyári táborban mint szervező-segédekre számítunk. Minden kis Kalász Lányunk kapott olyan talentumot, amivel tudja majd a nyári táborozók örömét szolgálni – van énekesünk, táncosunk, kiváló szakácsunk, tűzrakónk, játékmesterünk is. Könnyek között búcsúztunk, de két hónap múlva találkozunk a nyári táborban!</p><p style="text-indent: 1rem;">Hálás és imádságos köszönet a tábor szervezőinek és vezetőinek: Tatárné Kapus Évának, Tóth Krisztinának, Károlyi Ildikónak, Fekésházy Kingának.</p><p style="text-align: center; margin-left: 70%; margin-top: 1.5rem;">Tóth Krisztina</p>',
  },
  {
    id: "0068",
    title: "Tavaszi Tini Hétvége",
    date: "2021. április 07.",
    type: "image",
    imageUrl: "csodapatika-plakat-210507.jpg",
  },
  {
    id: "0067",
    title: "Közgyűlési meghívó",
    date: "2021. március 18.",
    type: "text",
    text: '<p style="text-align: right; margin-bottom: 1rem;">Ikt.sz.: 25/2021</p><p style="text-align: center; font-weight: bold">MEGHÍVÓ</p><p style="text-align: center; font-weight: bold">a KALÁSZ Szövetség 5 évenkénti rendes tisztújító közgyűlésére<br/>minden rendes Kalász-tag részére</p><p style="text-align: right; font-style: italic; margin-top: 1rem; margin-bottom: 1rem;">Jótanács Anyja könyörögj érettünk!</p><p style="text-align: center"><strong>Helyszín: Városmajori Kistemplom</strong><br/>Bp. XII. ker. Csaba u. 5. a Széll Kálmán tér közelében, a Hajnóczy utca torkolatánál<br/><strong>Időpont: 2021. június 5. szombat 10 órától</strong></p><p style="text-align: center; font-weight: bold; margin: 1.5rem 0;">NAPIREND</p><p>9 - 10<span style="width: 2.75rem;display: inline-block;"></span>Gyülekezés, jelenléti ívek aláírása, szavazócédulák átvétele </br><span style="margin-left: 5rem;">(gyónási lehetőség)</span><br/>10 -<span style="width: 3.45rem;display: inline-block;"></span>Szentmise, melyet dr. Racs Csaba atya mutat be<br/>10:45 - 11<span style="width: 1rem;display: inline-block;"></span>Rövid étkezés tarisznyából<br/><br/>11:00-tól<span style="width: 1.5rem;display: inline-block;"></span><strong>KÖZGYŰLÉS</strong></p><p style="margin-left: 5rem;">- Elnöki megnyitó (Fekésházy Kinga)<br /> - A határozatképesség megállapítása (+)<br/> - A jegyzőkönyvvezető és hitelesítők, valamint a szavazatszámlálók felkérése és elfogadása.<br/><br/><strong>Beszámolók a 2020-as évről</strong><br/> - Titkári beszámoló (Vlasitsné Párkányi Györgyi)<br/> - Gazdasági beszámoló (Dr Gombos Miklósné)<br/> - Ellenőrző bizottsági beszámoló (Kelemen Lászlóné)<br/> - Nemzetközi kapcsolatok (Gyulay Sarolta)<br/><br/><strong>Tisztújítás</strong><br/> - Tisztségviselők lemondása<br/> - Új jelöltek bemutatkozása, jelölések elfogadása, titkos szavazás<br/> - A megválasztott új vezetőség köszöntése, a régiek búcsúztatása<br/><br/><strong>Tervek a 2021-es évre</strong><br/> - A 2021-os munkaterv és költségvetés ismertetése és elfogadása<br/>- táborok, 10 falu találkozók, stb. időpontjának és helyének bejelentése<br/><br/><strong>További beszámolók:</strong><br/>- Új KALÁSZ újság<br/>- Tarisznya<br/><br/><strong>Egyéb</strong> – hozzászólások<br/><br/><strong>Befejező imádság</strong></p><br/><p>Budapest, 2021. április 16.</p><br/><br/><p style="text-align: center; margin-left: 70%">Fekésházy Kinga<br/>elnök</p><p style="margin-top: 1rem; font-size: 0.9rem">(+) Esetleges határozatképtelenség esetén a magismételt közgyűlés ugyanazon a napon 11: 15-kor ugyanazon helyszínen kezdődik az eredeti napirendi pontokkal, s a megjelentek számára való tekintet nélkül határozatképes!</p>',
  },
  {
    id: "0066",
    title: "Hálaadás, év végi üzenet - képernyőn",
    date: "2021. január 06.",
    type: "text",
    text: '<p style="text-indent: 25px;">Az év végi hálaadás idén a vírushelyzet miatt csak a közösségi médián keresztül valósulhatott meg. Ezúttal Racs Csaba atya plébániájának Facebook oldala nyújtott segítséget az ünnepléshez. Egerbaktán volt a szentmise, de mindannyian követhettük a képernyőn, ha sikerült hozzáférést szereznünk.</p><p style="text-indent: 25px;">A szentbeszédben Csaba atya szólt az Aprószentekről. Nekik nem volt lehetőségük saját döntésre, ártatlan haláluk mégis vértanúkká emelte őket. Ma is sok az ilyen áldozat. Az élet a fogantatásától kezdve szent, és akit nem engednek megszületni, hasonlóképp vértanúvá válik. (Ráadásul ez komoly, orvoslást igénylő teherré válik mindazoknak, akik közreműködtek az élet kioltásában.)</p><p style="text-indent: 25px;">Sokan mondják „Jézus követője vagyok”. Vannak azonban olyan alapvető kérdések, melyek rávilágítanak hitünk milyenségére. A születendő gyermek elfogadása is ilyenre adott válasz: az élet oldalán állok! Ha azt mondjuk, közösségben vagyunk Istennel, de – akár ebben a kérdéskörben, akár az emberi élet egyéb dolgait illetően – sötétség uralkodik a világszemléletünkben, akkor hazudunk.</p><p style="text-indent: 25px;">Nem lesz gyümölcsöző az élete annak, aki szabadjára engedi a gyűlöletét, vagy azt állítja magáról, hogy neki nincs is bűne. (Ezt csak Jézus mondhatta magáról, ezt csak a Szűzanyában tiszteljük.) Nem lehet úgy keresztény életet élni, hogy a gonosz másik világnak is dolgozunk. Mindig igazítsuk újra helyes irányba az életünket! A világjárvány nehézségei, a válsághelyzet előhozta belőlünk, milyenek is vagyunk valójában. Aki megpróbált helyes úton járni, az még jobban elmélyült, aki pedig kettős életet élt, inkább az Istennel való szembenállást választotta. Sokan azt várták, hogy tömegek jönnek majd a templomokba, de nem így történt. A megtéréshez ugyanis kevés a félelem, ahhoz Isten-élményre van szükség.</p><p style="text-indent: 25px;">Imádkoznunk kell az Istentől távol járókért, hogy felismerjék tetteik következményeit, fel tudjanak ébredni. Döbbenjenek rá, hogy eddigi életük milyen károkat okozott szeretteiknek, de a környezetükben élőknek is. Hadd tudják megbánni bűneiket. A megtérésnek ez fő eleme, egyben az Úristen ajándéka.</p><p style="text-indent: 25px;">Ezért a megajándékozottságért imádkozzunk, és hogy mi magunk is egyre erősebben tudjunk az Isten oldalán élni!</p><p style="text-align: right; margin-right: 25px"><strong>Fekésházy Kinga</strong></p>',
  },
  {
    id: "0065",
    title: "HÁLAADÁS 2020",
    date: " 2020. december 02.",
    type: "text",
    text: '<p style="text-indent: 25px;">Közös év végi hálaadásunk idén egészen rendhagyó lesz. Miután nem tudunk személyesen találkozni, mást kellett kitalálnunk. dr.Racs Csaba atya elvállalta, hogy Egerbaktán tart egy hálaadó szentmisét nekünk, kalászosoknak, <strong>december 28-án 11 órakor</strong>. Ezen a szentmisén a facebook segítségével vehetünk részt, maszk nélkül!</p><p style="text-indent: 25px;">A link, ahol elérjük ezt az alkalmat: <a target="blank" href="https://www.facebook.com/egerbakta.plebania/">https://www.facebook.com/egerbakta.plebania/</a></p><p style="text-indent: 25px;">Van még idő addig, szervezzük meg magunknak, hogy együtt imádkozhassunk az internet segítségével.</p>',
  },
  {
    id: "0064",
    title: "Őszi Tini Hétvége",
    date: " 2020. szeptember 23.",
    type: "image",
    imageUrl: "2020 KALÁSZ Őszi Hétvége Tiszaföldvár.jpg",
  },
  {
    id: "0063",
    title: "Pettendi meghívó",
    date: "2020. július 10.",
    type: "image",
    imageUrl: "kalasz_30_Pettend_2020_logokkal.jpg",
  },
  {
    id: "0062",
    title: "2020 Olimpia Tábor",
    date: "2020. május 19.",
    type: "image",
    imageUrl: "2020_olimpiai_tabor.jpg",
  },
  {
    id: "0061",
    title: "KALÁSZ tábor 2019",
    date: "2019. május 15.",
    type: "text",
    text: '<p><center><strong>Kárpát - medencei KALÁSZ tábor<br/>2019. július 7-12-ig, Vácon<br/>10-18 éves korú lányok számára<br/><br/>SZABÁLYOS SZABADSÁG<br/>címmel <br/><br/>Táborunk a Kalász-házban lesz<br/>Címe: 2600 Vác, Hattyú utca 9.</strong></center></p><p>(A Székesegyház jobboldaláról nyíló Gasparik Kázmér utca mintegy 100 méter után egy kis terecskén ipszilon alakban kettéválik, s annak bal szára a Hattyú utca. Autóval a Földváry tér felől, vagy a Kosd felől jövő útról jó jönni, mert a Székesegyház felől behajtani tilos.)</p> <p style="text-align: right;"><i>Az igazság szabaddá tesz benneteket (Jn8, 32)</i></p><p style="text-indent: 35px;">Mi is a szabadság, amire mindnyájan vágyakozunk? Mire valók a szabályok? Hol a határa a szabadságnak, hol kezdődik az önzés, a szabadosság? Ezeket a komoly, nehéz kérdéseket vitatjuk meg együtt színi-játékokkal, filmek segítségével, sokféle tevékenységgel. Természetesen nem marad el a kirándulás, strandolás, kézművesség, ének és tánc sem. A búcsúestén szokás szerint szeretteinknek bemutatjuk közös alkotásunkat, a színjátékot is mint egyhetes táborunk gyümölcsét.</p>  <p style="text-indent: 35px;">Ha vannak hasonló korú fiú érdeklődők, akkor az együtt töltendő napokra a Piarista kollégiumban keresünk számukra szállást férfi pedagógus kíséretével.</p><p style="text-indent: 35px; margin-top: 15px;"><strong>A tábor menete</strong></p><p><strong>Minden nap 7 órakor</strong> kelnek az aznapi konyhai segítők, a többiek legkésőbb ½8-kor<br/> <strong>8-kor</strong> reggeli <strong>imádság</strong> (zsolozsma), vezeti: Földváry Zsófia Sára<br/><strong>1/29-kor reggeli</strong> (kedden útravaló készítés is) a házban. Felelős: Híves Boglárka<br/><strong>½ 10-kor beszélgetés</strong> hit és erkölcs témájában Vezeti: Nényei Pál tanár úr<br/><strong>10-12-ig</strong> színjátszás a Szabályos szabadság témájában, több csoportban. Vezeti: Szabó Borbála (mint a korábbi hasonló táborokban is) <br/><strong>½ 1-kor ebéd</strong> az Apor Vilmos Főiskolán. <br/> <strong>Utána</strong> (hétfőn és szerdán) váci séta, ill. csendes pihenés, ki-ki szüksége szerint<br/><strong>3-tól</strong> programok <strong> „forgása" </strong> koordinálja Nényei Ilonka, benne<br/><span style="margin-left: 35px;">sport (Szabó Borbála) </span><br/> <span style="margin-left: 35px;">ének (Híves Borlárka) <br/><span style="margin-left: 35px;">hangszeres zene, zenekar (Nényei Klári) <br/> <span style="margin-left: 35px;">játék, tánc, kézművesség (N. Kata) <br/> <span style="margin-left: 15px;">- közben uzsonna</span><br/><strong>7 órakor vacsora</strong> (Felelős Híves Boglárka) <br/>utána társasjáték, beszélgetés, kedves meséink, novellák felolvasása, tisztálkodás<br/><strong>½ 10-kor</strong> közös <strong>imádság (zsolozsma) </strong> vez. F.S.Zs.</p><p style="margin-top: 15px; text-indent: 35px;"><strong>Egyéb programok</strong></p> <p><strong>július 7. (vasárnap) </strong></p> <p style="text-indent: 35px;">Délután 3 órától gyülekezés a Kalász-házban, elrendeződés. 6 órakor szentmise a Székesegyházban azok számára, akik nem jutottak aznap szentmisére. A többieknek séta a városban. Este bemutatkozás, játék, közös imádság.</p><p style="margin-left: 35px; text-indent: -35px;"><strong>július 8. (hétfő) és 10. (szerda) a vacsora 6 órakor</strong> lesz, utána <strong>filmvetítés</strong> (h. A néma forradalom, sz. Donizetti Szerelmi bájital), majd beszélgetés, vezeti Nényei Pál tanár úr</p><p><strong>július 9. (kedd) </strong> reggeli után egész napra elemózsia készítés, majd irány a vasút. Egész napos kirándulás Zebegényből kiindulva az ország legszebb kilátású vidékén, a Dunakanyarban.</p><p><strong>július 11. (csütörtök) </strong> A reggeli ima helyett szentmise, majd az előző napok lelki előkészülete alapján a gyónásban lelki újjászületés, délután testi felüdülés a váci strandon.</p><p><strong>július 12. ( péntek) </strong> táborunk befejező napja. Készülődés a délutáni előadásra, vendégvárás.</p> <p style="text-indent: 35px; margin-top: 15px;"><strong>Délután 4</strong> - órakor <strong> „Hála-gála" </strong> – tábor-záró előadás, bemutató a szülőknek,<br/> <span style="margin-left: 250px;">vendégeknek. <strong>Várjuk őket szeretettel!!! </strong></span></p> <p style="margin-top: 15px;"><strong>Mi szükséges? </strong></p><p>A szokásos ruházaton, tisztálkodási eszközökön, esetleges gyógyszereken túl<br/>- diákigazolvány és TAJ-kártya másolat (egészségbiztosítási szám) egészségi orvosi igazolás („közösségbe mehet") <br/>- egy kisebb háti, vagy oldalzsák napi vándorlásainkhoz (elemózsia, pulcsi, stb. vitelére) <br/>- eső ellen köpeny vagy szélkabát<br/>- kisebb méretű pille palack úti-itókának<br/> - szép, illendő hosszúságú ruha a szentmiséhez, (nem nadrág, nem pucér vesék) <br/>- <u>hálózsák</u>, (vagy huzat, lepedő, mert valamennyi takarót, párnát tudunk adni) <br/>- laticel matrac (nem kell mindenkinek, ágyunk, szivacsmatracunk is van néhány!) <br/>- első napra hideg élelem, innivaló<br/>- Biblia (ha van kicsi) <br/>- <strong>hangszerek, kották,</strong> aki csak teheti, hozzon magával! <br/> - játékok, amit bent lehet játszani, meg amit szabadban<br/>- fürdőruha, fürdősapka, törülköző, napsapka, napvédő</p><p><strong>Ami nem szükséges:</strong> mobiltelefon, zsebpénz. <br/> A közösbe beadott pénzösszeg minden kiadást fedez. A kapcsolatot pedig a vezető megadott számán keresztül lehet tartani. Kérjük, vegyétek komolyan, tapasztalataink szerint a gyerekek javát ez szolgálja. <br/><strong>Köszönettel vesszük idén is, ha hazait tudtok hozni, pl. süteményt, tartós élelmiszert, kolbász-félét, lekvárt, mézet, savanyúságot, zöldfélét, stb.</strong></p> <p style="margin-top: 15px;">Ne feledjük: <strong>ennivalót nem hagyunk a táskánkban,</strong> nem tartunk a szobában, csak a hűtőszekrényben, ill. erre kijelölt helyen, mert nem etetjük a hangyákat!<br/> Az étkezések mindig közösek: reggeli, ebéd, uzsonna, vacsora. Nassolás nincs.</p><p style="margin-top: 15px;"><strong>Költség: Várhatóan 15 000 Ft</strong> kiadás jut <strong>egy főre,</strong> mely összeg a tábor kezdetekor fizetendő. <strong><i>Senki se maradjon távol anyagi okokból! Összefogással mindent meg lehet oldani!</i> Többlet befizetést ennek érdekében köszönettel elfogadunk.</strong></p><p style="font-size:20px; margin-top: 15px;"><strong>Várjuk a jelentkezéseket</strong></p> <p style="margin-left: 35px;">a KALÁSZ címén (1122 Bp. Hajnóczy utca 10.)  <a href="mailto:kalasz@kalasz.t-online.hu">kalasz@kalasz.t-online.hu</a><br/>illetve a szervező, Nényei Gáborné címén <a href="mailto:nenyei.gabriella@gmail.com">nenyei.gabriella@gmail.com</a> </br><span style="margin-left: 270px;">tel: <a href="tel:0036304722065">+36 30 472 2065</a></span></p>',
  },
]

const renderNewsItem = (item: NewsItem) => {
  if (item.type === "image") {
    return (
      <div className={styles.imageNewsContainer} key={uuidv4()}>
        <img
          alt={item.imageUrl}
          src={`/assets/images/hirek/${item.imageUrl}`}
        />
      </div>
    )
  }

  return (
    <div className={styles.textNewsContainer} key={uuidv4()}>
      <div className={styles.textNewsContent}>
        <div className={styles.textNewsHeader}>
          <p className={styles.textNewsHeaderTitle}>{item.title}</p>
          <p className={styles.textNewsHeaderDate}>{item.date}</p>
        </div>{" "}
        <div
          dangerouslySetInnerHTML={{ __html: item.text as TrustedHTML }}
        ></div>{" "}
      </div>
    </div>
  )
}

const Hirek: FunctionComponent = () => {
  return (
    <div className={styles.container}>
      {newsItems.map((item) => renderNewsItem(item))}
    </div>
  )
}

export default Hirek
