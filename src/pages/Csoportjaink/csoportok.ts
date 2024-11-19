export interface Fejezet {
  cim: string
  szoveg: string[]
}

export interface Csoport {
  sorszam: number
  id: string
  nev: string
  vezetoKep?: string
  csoportKepek?: string[]
  osszefoglalo: string
  tartalom: Fejezet[]
}

const csoportok: Csoport[] = [
  {
    sorszam: 1,
    id: "bp_krisztus_kiraly",
    nev: "Budapesti Krisztus Király csoport",
    osszefoglalo:
      "A <strong>budapesti Krisztus Király Kalászcsoport</strong> 1988 óta működik, 2006 óta hivatalosan bejegyzett KALÁSZ csoport. Keddenként találkoznak a Rózsadombi Krisztus Király templom közösségi házában. Céljuk hálás szívvel minél közelebb lenni a Jóistenhez, fürkészni a szavait, neki tetsző élettel, imádságos háttérként az Egyház élő tagjai lenni, békében és szeretetben. Vezetőjük: Gabi néni.",
    tartalom: [
      {
        cim: "Csoportvezető rövid bemutatkozása",
        szoveg: [
          "Nényei Gáborné, röviden Gabi néni vagyok. A Kalász őstörténetében minden vezetőt néninek szólítottak, életkorától függetlenül. Nekem még megadatott, hogy a 60-as években, az egyházüldözés idején egyiküknek titokban tanítványa lehettem (Illésy Mária), többekkel meg együtt dolgozhattam az újjáéledés után több mint egy évtizedig. Ezért szeretem a néni megszólítást, amire már a koromnál fogva is rászolgáltam. Tanárként mentem nyugdíjba, 54 éves házasok vagyunk férjemmel, 7 gyerekünk és 33 unokánk van.",
        ],
      },
      {
        cim: "Mióta létezik és hogyan működik a csoportunk?",
        szoveg: [
          "1988 óta, tehát már 33 éve, régebb óta, mint ahogy a Kalász újjáéledt. Tapasztaltam, hogy elsőáldozásra szívesen elhozzák a jó szándékú szülők gyerekeiket, de maguk képzetlenek, gyökértelenek, elárvultak az Egyházban. Így aztán az elsőáldozás után „leáldozik” az egyházzal való kapcsolatuk nekik is, gyerekeiknek is. Ezért a felkészítő hittanórával egy időben a közösségi ház egy másik szobácskájában kezdtünk összegyűlni az elsőáldozási hittanórával egy időben, egész tanéven át. Kerestük a Jóistennel való kapcsolatot, egymás örömét, küzdelmeit megosztottuk egymással, a következő vasárnap szentírási részeit együtt olvastuk, meg is beszéltük, s szinte várták a vasárnapi szentmisét, amire egyébként többek közülük nemigen jártak. Sok család így épült be a templomi közösségbe, s lettek aktív tagjai az Egyháznak gyerekeikkel együtt. Ebből a közösségből nőtt ki, s rövid megszakítással mindmáig él a csoport, ami 2006-ban lett hivatalosan bejegyzett Kalász csoport. Mára megváltozott az arculatunk: szülőkből nagyszülők, dédszülők lettünk, s más hasonló korú asszonytársak is csatlakoztak hozzánk, miközben fájó búcsút veszünk azoktól, akiket elszólít a Jóisten.",
          "Továbbra is hetente találkozunk tanévben, minden kedden 4-től ½ 6-ig, jelenleg 10-en, a közösségi ház alsó termében. Célunk továbbra is hálás szívvel minél közelebb lenni a Jóistenhez, fürkészni a szavait, neki tetsző élettel, imádságos háttérként az Egyház élő tagjai lenni, békében és szeretetben családon belül is, kívül is.",
          "A csoport találkozóin túl ki-ki az egészségi állapotának megfelelően szolgálja a közösséget: templom rendben tartása, takarítása, kert gondozása, oltár felvirágozása, liturgikus öltözékek, terítők mosása, vasalása, ünnepek előkészítése, a süteménykészítést nem is említve. Egyik tagunk a Kalász központi titkára.",
        ],
      },
      {
        cim: "Mit üzenünk az érdeklődő nőtársaknak?",
        szoveg: [
          "Szeretettel várjuk a hasonló korú társainkat, hogy egymással megosztva könnyebb legyen a terheinket hordozni, s hogy örömünk megsokszorozódjék egymás szívében. Üzenem mindazt az életértéket, amit az Új Kalász újságban a hosszú évek során megírtam, s a Szent Gellért Kiadó könyv alakban megjelentetett. (A család születése, 2017; Útkereső 2019)",
        ],
      },
      {
        cim: "Csatlakozási lehetőség:",
        szoveg: [
          'Nényei Gáborné, <a href="mailto:nenyei.gabriella@gmail.com">nenyei.gabriella@gmail.com</a><br/><span style="margin-left: 7rem">Telefon: 06 30 472 2065</span><br/>Találkozás helyszíne: 1024 Budapest, Keleti Károly utca 39.<br/><span style="margin-left: 9rem">Rózsadombi Krisztus Király templom közösségi háza</span>',
        ],
      },
    ],
  },
  {
    sorszam: 2,
    id: "papa",
    nev: "Pápai csoport",
    vezetoKep: "2_Maria.jpg",
    csoportKepek: ["2_csoportkep.jpg"],
    osszefoglalo:
      "A <strong>pápai KALÁSZ csoport</strong> a Szent Anna Plébánián 1993 óta működik. Minden hónap első hétfőjén találkoznak. Csoportjukat a szeretetközösség, az egymásra figyelés és egymás segítése, bátorítása jellemzi. Vezetőjük: Pataki Ani.",
    tartalom: [
      {
        cim: "Csoportvezető bemutatkozása",
        szoveg: [
          "Pataki Mátyásné (Anna Mária) Ani vagyok Pápáról. 40 éve élek itt férjemmel. Két fiunk van, két menyünk, és 4 unokánk, két iskolás, és két óvodás. Hála Istennek mindkét család itt él Pápán, külön vagyunk, de mégis helyben, így tudunk segíteni egymáson. Az idősebbik fiaméknál 3 unoka van, a fiatalabbnál 1, még mindannyian várakozunk a kistestvérre/testvérekre.",
          "Férjemmel mindketten nyugdíjasok vagyunk. Amikor nem az unokákra vigyázunk, akkor a házi munka mellett szívesen olvasok, kertészkedem, kézimunkázom, kreatív dolgokkal foglalkozom, továbbá, egy kis sporttal és gyógyfürdő látogatással segítünk az egészségünket megőrizni.",
        ],
      },
      {
        cim: "Mióta létezik a csoport? Milyen gyakran, mikor és hol találkozik a csoport?",
        szoveg: [
          "1993 óta működik Plébániánkon a csoport. Első vezetőnk 11 évig rendkívüli rátermettséggel vezette, majd ezután javasolt engem erre a feladatra. Akkor úgy gondolta, hogy ő már kifogyott az ötletekből és fiatalítani kell.  Most pedig pontosan én gondolom így 17 év távlatából. A rátermett kiszemelt utódot már megtaláltam, de még egy kis időt kért.",
          "A foglalkozásokat minden hónap első hétfőjén tartjuk 17-19-ig. Előre szoktunk készíteni éves munkatervet, persze a “műsorváltozás jogát” fenntartjuk, mert hát ember tervez, Isten végez.",
        ],
      },
      {
        cim: "Hány tagja van a csoportnak? Milyen korosztály?",
        szoveg: [
          "Jelenleg 23 bejegyzett tagunk van. Ebből általában 13-an szoktunk részt venni a foglalkozásokon.",
          "Az életkort tekintve, vegyes korosztályú a csoport, zömében nyugdíjasok alkotják, a fiatalok 40 és 50 közöttiek.",
        ],
      },
      {
        cim: "Mi jellemzi a csoportotokat, a találkozóitokat?",
        szoveg: [
          "A szeretetközösség, az egymásra figyelés és egymás segítése, bátorítása.",
          "Megemlékezünk csoporton belül az egyházi ünnepeinkről, nemzeti ünnepeinkről.",
          "Tartunk kézműves foglalkozást, helyi értékekről ismeretterjesztést, irodalmi, történelmi előadást meghívott előadóval, egészségünk védelmében orvosi, gyógyszerészi és dietetikus szakember által nyújtott előadásokat hallgathattunk. Többször volt már arra példa, hogy valamelyik társunk meghívására az otthonába mentünk, és ott elkészítettünk egy-egy szezonális ételt, vagy új finomsággal ismertettük meg a csoportot. Egyik év márciusában a foglalkozásra viszont otthon elkészített reformkori ételeket vittünk, hogy megismertessük a csoportot Petőfiék gasztronómiájával.",
          "Szeretünk énekelni, imádkozni, ez sosem marad el a foglalkozásainkról.  Az, hogy vannak idős és idősebb tagjaink, nagyon sokat jelent nekünk, tőlük tapasztalatokat gyűjtünk, és a régi hagyományokról is hallunk. Szoktunk csak beszélgetős összejövetelt is tartani, amit úgy hívunk: “Csak ülök és mesélek”, amikor gondjainkat, örömeinket osztjuk meg. Többen vannak egyedülállók a csoportban és nagyon szívesen jönnek a közösségünkbe. Többször hallottam tőlük, olyan jó valahova tartozni.",
        ],
      },
      {
        cim: "A csoporttalálkozókon kívül mit csinál még a közösség?",
        szoveg: [
          "Nekünk úgymond két templomunk van, ugyanis a Szent Anna Plébániához tartozik egy újabban épült templom is, ahol gondozzuk a Lourdes-i Szűz Anya barlangot, a virágosítást a templom kertben.",
          "A Plébánia által szervezett alkalmakon segítünk a vendéglátásban, tálalásban, sütemény sütésben.",
          "Vállaltuk azt is, hogy keresztelő, vagy gyászmise alkalmával, ha szükséges segítséget nyújtunk a kevésbé jártas embertársainknak a liturgián való részvételben.",
          "Elhunyt KALÁSZ társaink sírhelyét közösen, évente egy alkalommal felkeressük.",
        ],
      },
      {
        cim: "Mit üzensz az érdeklődő nőtársainknak?",
        szoveg: [
          "Szeretetközösségben együtt haladva, hitünket megőrizve, a mai kesze-kusza világunkban is úgy gondolom, hogy talajt érezhetünk a lábunk alatt.  Megerősítenek bennünket az ima alkalmak, a keresztút, a májusi, októberi litániák, a lelkigyakorlatok, a havonkénti szentségimádás.",
        ],
      },
    ],
  },
  {
    sorszam: 3,
    id: "egerbatak",
    nev: "Egerbaktai csoport",
    osszefoglalo:
      "Az <strong>egerbaktai KALÁSZ csoport</strong> 1994-ben alakult. Minden hónap első hétfőjén találkoznak. Céljuk, hogy a hétköznapok dolgaiból kilépve egymást erősítsék és segítsék, hitüket próbálják kicsit mélyebben megélni. Vezetőjük: Bogárné Márti.",
    tartalom: [
      {
        cim: "",
        szoveg: [
          "Bogár Németh Lászlóné vagyok, Egerbaktán élek férjemmel. Két felnőtt fiunk van, Ármin 34 éves Budapesten él családjával, Arnold 31 éves Angliában él, neki még nincs családja.",
          "Egri Főegyházmegyénél dolgozom könyvelőként. Szabadidőmet- ha lehetőség van rá - kis unokámmal, Áronnal, aki 5 éves töltöm. Szeretek kertészkedni, az egész napos ülőmunka után jól esik a kertben dolgozni.",
          "KALÁSZ csoportunk 1994-ben alakult Purszki Zoltán atya kezdeményezésére. A csoportunk minden hónap első hétfőjén szokott találkozni a plébánián.",
          "Jelenleg 15 tagunk van, ebből 5 fő KALÁSZ-tag, a többi pártoló tag. Az átlag életkor 60 év körüli, jellemzően nagymamák vagyunk.",
          "A csoportunk célja, hogy a hétköznapok dolgaiból kilépve egymást erősítsük, segítsük, hitünket próbáljuk kicsit mélyebben megélni. A csoport foglalkozásokat úgy építjük fel, hogy legyen egy kis lelki tartalom is, amikor szentírási részekről elmélkedünk. Természetesen az aktuális feladatokat is megszoktuk beszélni.",
          "A közösségünk a csoporttalálkozókon kívül is gyakran találkozik, más csoportoknak is tagjai vagyunk gondolok itt Oltáregylet, Rózsafűzér, Karitász, Cursilló.",
          "Templom takarításban veszünk részt, rózsafűzért imádkozunk a Szent István Rádióba is szoktunk menni rózsafűzérimádkozásra.",
          "A plébániai programok szervezésében, lebonyolításában aktívan részt veszünk. Gyalogos zarándok utakat is szervezünk Egerbe és Egerszalókra.",
          "A mai világban nagy szükség van katolikus  női csoportra amikor az értékrendek kezdenek megváltozni. Nagyon szeretnénk fiatalítani a csoportunk életkorán, mert látjuk és érezzük, hogy a mai világban milyen fontos a nő szerepe a családban.",
          "A csoportunk nyitott, bárkit szívesen látunk, aki csatlakozni szeretne hozzánk.",
          'Elérhetőségem: <a href="mailto:bogarnemeth@gmail.com">bogarnemeth@gmail.com</a> vagy a 06-30-527-2321 telefonszámon.',
        ],
      },
    ],
  },
  {
    sorszam: 4,
    id: "szeged",
    nev: "Szegedi csoport",
    vezetoKep: "4_Kiki.jpg",
    csoportKepek: ["4_szegedi_csopi2.jpg"],
    osszefoglalo:
      "A <strong>szegedi KALÁSZ csoport</strong> 2019 óta működik és havonta tartja találkozóit. A csoport vallja, hogy nőnek lenni kegyelem és ajándék, Isten különleges feladatot bízott ránk. Vezetőjük: Tóth Krisztina, Kiki.",
    tartalom: [
      {
        cim: "Csoportvezető bemutatkozása:",
        szoveg: [
          "Tóth Krisztina vagyok, Szegeden élek a családommal. Bence fiam 20, Levente fiam 16, Réka lányom 14 éves. Bölcsész végzettségem van, és egészségfejlesztő mentálhigiénikus vagyok, valamint hittanár-nevelőtanár. A Szegedi Keresztény Roma Szakkollégiumban dolgozom, cigány egyetemistáknak szervezek tréningeket, képzéseket és mentorálom is őket.",
        ],
      },
      {
        cim: "Mióta létezik a csoport, milyen gyakran, mikor és hol találkozik a csoport?",
        szoveg: [
          "A csoport 2019-ben jött létre. Találkozóink havonta vannak, főként nálunk, a lakásunkban, az utóbbi időben a vírushelyzet miatt online.",
        ],
      },
      {
        cim: "Hány tagja van a csoportnak és milyen korosztály?",
        szoveg: [
          "Jelenleg 10 tagja van a csoportnak, ebből ketten vagyunk Kalász tagok. Életkori megoszlásban fiatal, kisgyermekes anyukák, középkorú nők és fiatalos, vagány nyugdíjasok is vannak a csoportunkban.",
        ],
      },
      {
        cim: "Mi jellemzi a csoportotokat, találkozóitokat?",
        szoveg: [
          "Találkozóinkon imádkozunk, éneklünk, beszélgetünk nőiségünket érintő témakörökről, társadalmi kérdésekről, olvassuk és értelmezzük az evangéliumot és a Bibliát. Fontos megosztó körök vannak, amikor mindenkinek van alkalma mesélni arról, mik járnak a fejében, mi aggasztja, vagy éppen minek örül.",
        ],
      },
      {
        cim: "A csoporttalálkozókon kívül mit csinál még a közösség?",
        szoveg: [
          "Szerveztünk már Farsangi Mulatságot, Mikulás-várást, tökfaragást, Majálist, Családi pihenős hétvégét. Emellett segítünk a Kalász táborok és a KAMASZ táborok megvalósításában – csoportvezetéssel, palacsintasütéssel, játékok vezetésével és még sok egyébbel – mikor mire van szükség.",
        ],
      },
      {
        cim: "Mit üzensz nőtársainknak?",
        szoveg: [
          "Nőnek lenni kegyelem és ajándék. Isten különleges feladatot bízott ránk: harmóniateremtők, gyógyítók, segítők, elfogadók, támogatók és alkotók vagyunk. Egy női csoportban ezek a létező energiák megsokszorozódnak! Ebben a bizalmi légkörben Te is kibontakoztathatod önmagad!",
        ],
      },
      {
        cim: "Csatlakozási lehetőség:",
        szoveg: [
          'Tóth Krisztina – 06207753426; <a href="mailto:tothkrisztina075@gmail.com">tothkrisztina075@gmail.com</a>',
        ],
      },
    ],
  },
  {
    sorszam: 5,
    id: "bp_sashalom",
    nev: "Budapesti Sashalmi Keresztény Női Kör",
    vezetoKep: "5_Bori.jpg",
    csoportKepek: ["5_csoportkep1.jpg"],
    osszefoglalo:
      "A <strong>budapesti Sashalmi Keresztény Női Kör alakuló KALÁSZ csoport</strong>, 2020 szeptembere óta működik. Célja, hogy egymást erősítve női közösséget építsen, ahol a tagok megoszthatják tapasztalataikat és együtt haladhatnak keresztény útjukon. Vezetőjük: Csehné Vadnai Bori.",
    tartalom: [
      {
        cim: "Csoportvezető bemutatkozása:",
        szoveg: [
          "Csehné Vadnai Borbála vagyok, Budapesten, Sashalmon élek férjemmel és két kisfiunkkal, Gyuszival és Jancsival. Nemzetközi kapcsolatok szakon végzett közgazdász vagyok.",
        ],
      },
      {
        cim: "Mióta létezik a csoport? Milyen gyakran, mikor és hol találkozik a csoport?",
        szoveg: [
          "2020 szeptemberében indítottuk el a Sashalmi Keresztény Női Kört, elsősorban a Sashalmi Krisztus Király Plébánia hívei számára, de máshonnan is érkeztek hozzánk tagok. Kéthetente hétfőnként délután 6-tól fél 8-ig tartanak az alkalmak plébániánk közösségi házában. Plébános atya kérésére, bármilyen jól is érezzük magunkat együtt, mindig szigorúan betartjuk, hogy fél 8-kor visszatérünk a családjainkhoz, nehogy hiányoljanak minket otthon.",
        ],
      },
      {
        cim: "Hány tagja van a csoportnak? Milyen korosztály?",
        szoveg: [
          "Jelenleg 60 tagunk van, ebből csak én vagyok KALÁSZ-tag. A találkozókra 25-30 tag szokott eljönni. Érdekes módon az átlagéletkor nagyjából az én életkorom, tehát 40 év körüli, jellemzően kisebb – nagyobb gyerekes anyukák vagyunk. De van néhány fiatalos nyugdíjas tagunk is.",
        ],
      },
      {
        cim: "Mi jellemzi a csoportotokat, a találkozóitokat?",
        szoveg: [
          "A Női Kör kimondott célja, hogy egymást erősítve női közösséget építsünk, ahol megosztjuk az életünk számos területével kapcsolatos tapasztalatainkat és együtt haladjunk keresztény utunkon. A csoportban teljes az egymás elfogadása, nem kritizáljuk egymást, nem osztunk kéretlen tanácsokat, hanem szeretettel és figyelemmel fordulunk egymás felé. Gyakran hívunk vendégelőadókat minket érdeklő témákban. Találkozóinkon éneklünk, imádkozunk és különböző keresztény női létünkkel kapcsolatos témákról beszélgetünk.",
        ],
      },
      {
        cim: "A csoporttalálkozókon kívül mit csinál még a közösség?",
        szoveg: [
          "Anya-ima csoportot hoztunk létre. Évente egyszer lelki napot és egyszer elvonulást szervezünk. Aktívan bekapcsolódunk plébániánk életébe.",
        ],
      },
      {
        cim: "Mit üzensz az érdeklődő nőtársainknak?",
        szoveg: [
          "Keresztény, katolikus nőnek lenni a mai világban egy modern és radikális út, amin csodálatos egymást erősítve együtt haladni. Hiszem, hogy óriási erő és áldás van egy ilyen női közösségen, mint amilyen a miénk, és nagy öröm és kaland női kört vezetni, ezért mindenkit bíztatnék, hogy ha érzi a hívást, akkor bátran vágjon bele és kezdjen el új női kört életre hívni. Ehhez a KALÁSZ minden segítséget megad.",
        ],
      },
      {
        cim: "Csatlakozási lehetőség:",
        szoveg: [
          'Egyéni megbeszélés alapján: <a href="mailto:vadnai.borbala@gmail.com">vadnai.borbala@gmail.com</a> vagy 06-30-9228531',
          "Mi már tapasztaljuk a női kisközösség támogató erejét és szívesen vesszük új érdeklődők jelentkezését.",
        ],
      },
    ],
  },
  {
    sorszam: 6,
    id: "szombathely",
    nev: "Szombathelyi csoport",
    csoportKepek: ["6_kep_1.jpg", "6_kep_2.jpg"],
    osszefoglalo:
      "A <strong>szombathelyi KALÁSZ csoport</strong> 2013-ban alakult, 16 felavatott tagja és gyermekcsoportja is van. Sportosak, szeretnek kirándulni és nordic walkingozni is. Vezetőik: Pados Györgyi és Kiss Andrea.",
    tartalom: [
      {
        cim: "A csoportvezető bemutatkozása",
        szoveg: [
          "Pados Györgyi vagyok, Szombathelyen nyugdíjas közgazdászként, boldog nagymamaként élek. Két unokám van. Az önkéntességet nem csak a Kalászban, hanem városunk emblematikus Víztornyának megmentésénél is gyakorlom, ahol egyesületet vezetek. A Kalász munkában kezdettől segítségemre van Kiss Andrea, nyugdíjas matematika tanárnő.",
        ],
      },
      {
        cim: "Mióta létezik a csoport?",
        szoveg: [
          "2013. jan. 12-én alakultunk a Székesegyház Főplébánián. Városunkban nem volt addig ilyen csoport, tehát úttörők lettünk.",
          "Eleinte 2-hetente találkoztunk, de már jó ideje inkább valami fontos feladat megoldására gyűlünk össze, akár hetente is.",
        ],
      },
      {
        cim: "Hány tagja van a csoportnak, és milyen korosztály?",
        szoveg: [
          "16 felavatott tagunk van. Az eltelt 8 év alatt sajnos többen megözvegyültek, és idős korba léptek, így csak 9 aktív tagunk maradt. Ingadozó létszámú gyermekcsoportunk is van.",
        ],
      },
      {
        cim: "Mi jellemzi a csoportot, találkozóinkat?",
        szoveg: [
          "Találkozóinkon sokszor együtt vagyunk a gyerekekkel, pl. kiránduláson, táborban, farsangon, sütemény készítésen... Más alkalmaink közül kiemelkedik az adventi ill. húsvéti adomány-gyűjtésre való kézműves termékek készítése. Ilyenkor mi, az asszony-csoport tagjai 3-5 héten keresztül mindig egy-egy napon összegyűlünk, és a munkát elosztva dolgozunk, és közben beszélgetünk. Ugyanígy a nyári tábor előkészítésénél is sokat vagyunk együtt. A légkör barátságos, sőt szeretetteljes, egymás baját nem csak meghallgatjuk, hanem igyekszünk segíteni is.",
        ],
      },
      {
        cim: "Mit csinálunk a csoporttalálkozókon kívül?",
        szoveg: [
          "Részt veszünk Egyházunk kiemelkedő eseményein, pl. a Missziós Kereszt érkezésén.",
          "2020. februártól kezdeményezésünkre a városban egy kis közösség alakult, amely a Mária Országa Imaközösséggel első péntekenként imádkozik hazánk lelki megújulásáért.",
          "Mindenki nagyon szeret kirándulni, ezért évente többször is útra kelünk néhány autóval egy közeli szép helyre.",
          "Höveji csipke-készítő szakkörünk, főzőtanfolyamunk volt, míg nem jött a járvány. Újra indult a Fitt-nagyi programunk, azaz, naponta többen is nordic walkingoznak együtt, mely előtt bemelegítésként egy tánctanárnő mozgatja meg a társaságot. Amikor sikerült pályázaton pénzt szerezni, akkor a mi kisnyugdíjasainkat és más rászorulókat különböző gyümölcsökkel segítettük a „Szedd magad” -lehetőségeket kihasználva.",
        ],
      },
      {
        cim: "Mit üzensz az érdeklődő nőtársaidnak?",
        szoveg: [
          "Amerre járunk, mindenkinek mesélünk a fenti tevékenységeinkről, és megszólítjuk azokat, akikről látjuk, hogy hiányzik nekik egy jó közösség. Már újra vannak jelentkezők.",
        ],
      },
      {
        cim: "Csatlakozási lehetőség:",
        szoveg: [
          '<a href="mailto:gy.pados1948@gmail.com">gy.pados1948@gmail.com</a> ill. <a href="mailto:kissandi53@gmail.com">kissandi53@gmail.com</a>',
        ],
      },
    ],
  },
  {
    sorszam: 7,
    id: "valko",
    nev: "Valkói csoport",
    vezetoKep: "7_vezeto.jpg",
    csoportKepek: ["7_csoport.jpg"],
    osszefoglalo:
      "A <strong>valkói KALÁSZ csoport</strong> minden első vasárnap találkozik a valkói plébánián. Találkozóikat a közös ima jellemzi és a lelki adoptáláshoz is csatlakoztak. Minél több gyereket és fiatalt szeretnének bevonni a jövő érdekében. Vezetőjük: Valkó Jánosné, Kati",
    tartalom: [
      {
        cim: "Csoportvezető bemutatkozása:",
        szoveg: [
          "Vári Jánosné Katinak hívnak. 1999 április 22-én költöztünk Budapestről Valkóra. Viszonylag hamar befogadtak a falu lakói. Dull Géza atya és a segítője Baloghné Ica felkértek 2002 decemberben a Szent Erzsébet házba családsegítőként dolgozni. Ezidő alatt ismerkedtem meg a KALÁSZ csoporttal. 2005-ben lettem felavatott tag.",
        ],
      },
      {
        cim: "Mióta létezik a csoport? Milyen gyakran, mikor és hol találkozik a csoport?",
        szoveg: [
          "1994-ben alakult újjá a csoport Juhász Andrásné vezetésével. 2004-ben Bene Sándornét választották csoportvezetőnek. 2016 szeptemberében Bene Sándorné korára való tekintettel lemondott a vezetésről és akkor engem szavaztak meg. Azóta minden első vasárnap találkozunk a Plébánián.",
        ],
      },
      {
        cim: "Hány tagja van a csoportnak? Milyen korosztály?",
        szoveg: [
          "Jelenleg 18 tagunk van és 20 pártoló tag. Sajnos elidősödött a csoport így egyre kevesebben leszünk.",
        ],
      },
      {
        cim: "Mi jellemzi a csoportotokat, a találkozóitokat?",
        szoveg: [
          "A közös ima, többen részt veszünk a vándor evangélium csoportban, Szeretet Láng imacsoportból több tag részt vesz és a Lelki Adoptálókhoz is csatlakoztunk. Sekrestyésünk is, Vargáné Rózsika is KALÁSZ tag.",
        ],
      },
      {
        cim: "A csoporttalálkozón kívül mit csinál még a közösség?",
        szoveg: [
          "Ha lehetséges zarándokutat is szervezek, 1-2 alkalommal 1 évben. Covid előtt néhány kislánnyal összegyűltünk kéthetente közös imára, sütögetésre, játékra.",
        ],
      },
      {
        cim: "Mit üzensz az érdeklődő nőtársainknak?",
        szoveg: [
          "Minél több gyereket és fiatalt be kell vonni a jövő érdekében, hogy fennmaradhasson a KALÁSZ.",
        ],
      },
      {
        cim: "Csatlakozási lehetőség",
        szoveg: [
          'Egyéni megbeszélés alapján <a href="mailto:kati4934@gmail.com">kati4934@gmail.com</a> vagy 06304511734',
        ],
      },
    ],
  },
  {
    sorszam: 8,
    id: "pannonhalma",
    nev: "Pannonhalmi csoport",
    vezetoKep: "8_vezeto.jpg",
    csoportKepek: ["8_csoport_1.jpg", "8_csoport_2.jpg", "8_csoport_3.jpg"],
    osszefoglalo:
      "A <strong>pannonhalmi KALÁSZ csoport</strong> legfőbb feladatának tartja a keresztény értékek közvetítését az ifjúság felé. Kéthetente megrendezett foglalkozásaikon a katolikus keresztény erkölcs szellemében készítik fel a lányokat és fiúkat sajátos családanyai és családapai hivatásukra. Vezetőjük: Szűcs Mária",
    tartalom: [
      {
        cim: "Csoportvezető bemutatkozása:",
        szoveg: [
          "Szücs Mária vagyok. Pannonhalmán élek születésem óta. A munkám Győrhöz köt, ügyvédként tevékenykedek.",
        ],
      },
      {
        cim: "Mióta létezik a csoport? Milyen gyakran, mikor és hol találkozik a csoport?",
        szoveg: [
          "1990 óta létezik a csoportunk, Koczka Józsefné Ági néni kezdte a működtetését 1990-ben. Az újjászervezéshez nagy segítséget nyújtott akkori helyi plébánosunk, Virgil atya és József atya is. Kéthetente szombaton délután 3 órakor tartjuk a foglalkozásokat a pannonhalmi Boldogasszony Házban. A csoportunk annyiban speciálisan működő csoport a többi KALÁSZ-csoporthoz képest, hogy minden tagunk – a kezdetektől – pártoló, a mai szabályok szerint tiszteletbeli tagja a KALÁSZ-nak.",
        ],
      },
      {
        cim: "Hány tagja van a csoportnak? Milyen korosztály?",
        szoveg: [
          "A csoportban 7 felnőtt tevékenykedik. Gyerekekkel foglalkozunk, akiknek a létszáma változó az egyes foglalkozásokat és programokat tekintve – 10 főtől 40 főig bezárólag vannak jelen.",
        ],
      },
      {
        cim: "Mi jellemzi a csoportotokat, a találkozóitokat?",
        szoveg: [
          "Csoportunk legfőbb feladata a keresztény értékek közvetítése az ifjúság felé. Kéthetente megrendezett foglalkozásainkon a katolikus keresztény erkölcs szellemében készítjük fel a lányokat és fiúkat sajátos családanyai és családapai hivatásukra. Kézműves foglalkozások segítségével kézügyességüket, szépérzéküket, kreativitásukat, kitartásukat és türelmüket próbáljuk fejleszteni.",
        ],
      },
      {
        cim: "A csoporttalálkozókon kívül mit csinál még a közösség?",
        szoveg: [
          "Az egyházi év aktualitásaihoz kapcsolódóan kis műsorokat adunk elő - pl. passió, Anyák napi műsor, karácsonyi pásztorjáték. Egyéb módon is részt veszünk az egyházi évhez kapcsolódó liturgikus cselekményekben – pl. Úrnapján oltárt készítünk. Túrákat, kirándulásokat, zarándoklatokat (pl. Csatka), táborokat szervezünk, amelyeken keresztül Magyarország más- és más nemzeti, vagy vallási értékeit ismertetjük meg a gyerekekkel. Ezen tevékenységünkkel a gyerekek nemzeti és vallási identitását próbáljuk erősíteni. Hagyományőrző tevékenységünk keretében igyekszünk szűkebb közösségünkhöz kapcsolódó hagyományokat megőrizni, illetve „újraéleszteni”, ennek keretében 2017. év Adventjében egy 1930-as évekből származó szöveg alapján kántálást, majd azt követően Vízkereszthez kapcsolódóan ugyancsak 1930-as évekből származó szöveg alapján Háromkirályjárást szerveztünk, amelyet igyekszünk azóta is minden évben megszervezni.",
        ],
      },
      {
        cim: "Mit üzensz az érdeklődő nőtársainknak?",
        szoveg: [
          "Katolikus nőként a mai, a hagyományokat kevésbé tisztelő világban fontos feladat a jövő nemzedéke, a gyerekek hagyományőrző, hagyománytisztelő, szilárd vallási, erkölcsi alapot nyújtó nevelése. Ezt a KALÁSZ négyes célkitűzése a mai napig is tökéletesen lefedi, ennek követése, a gyerekek számára történő átadása, közvetítése szilárd alapot ad a jövő nemzedéke számára, ne sajnáljuk energiánkat ebbe fektetni!",
        ],
      },
      {
        cim: "Csatlakozási lehetőség:",
        szoveg: [
          'Egyeztetés alapján: <a href="mailto:mszucs79@gmail.com">mszucs79@gmail.com</a>, vagy +36308530365',
        ],
      },
    ],
  },
  {
    sorszam: 9,
    id: "mogyorod",
    nev: "Mogyoródi csoport",
    vezetoKep: "9_kiskalasz_vezeto_rozsika.jpg",
    csoportKepek: [
      "9_2020_templom.jpg",
      "9_elso_kalaszavatas.jpg",
      "9_kalasz_lanyok.jpg",
      "9_Pettenden.jpg",
      "9_Toma_juli_vezeto.png",
      "9_ujjaalakulas.jpg",
    ],
    osszefoglalo:
      "A <strong>mogyoródi KALÁSZ csoport</strong> hívja és várja hivő nőtestvéreinket - mindegy, hogy idős vagy fiatal, lány, asszony esetleg özvegy – kiscsoportukba, vallásos, de egyben vidám összejöveteleikre. Vezetőjük: Toma Julianna. 2014 óta Mogyoródon kiskalász lánycsoport is működik. Vezetőjük: Juhász Károlyné, Rózsika.",
    tartalom: [
      {
        cim: "",
        szoveg: [
          "Toma Julianna vagyok, Mogyoródon élek felnőtt lányommal Andreával és fiammal Alberttel. A fiam családos apa egy fiúgyermekkel (Péter 3 éves) áldotta meg az ég. Aktív nyugdíjas vagyok, naponta 4 órát dolgozom egy helyi Kft-nél, valamint tagja vagyok már 20 éve a helyi népdalkörnek.",
          "Mogyoródon nagymúltú a KALÁSZ 1940-41-ben alakult, vezetője Mattyasovszky Ilona tanitónő volt, falunk szülötte. Rövid idő alatt 80 tag lett. 1946-ban betiltották.",
        ],
      },
      {
        cim: "",
        szoveg: [
          "1990. januárban 2 napos lelkigyakorlat után, amelyen az akkori KALÁSZ központ vezetői is részt vettek (Metzger Gabriella, Zöldi Pálné, Terlanday Sándorné Rózsika néni és Blanka néni) az országban először újraindult a KALÁSZ. Ekkor 50-60-an voltunk. Máthé György plébános atya segített és szorgalmazta az újraindulást. Első évben Kovács Józsefné Marika néni vezette, de családi okok miatt átadta a csoport vezetését Kertész Lajosné Ella néninek. Én 2017. évben vettem át a csoport vezetését. Három alkalommal rendeztünk 10 falu egy asztal találkozót.",
          "Napjainkban már csak 10 tagunk van. A legfiatalabb 61 éves és 91 éves a legidősebb, két tagunk is az idén tölti be ezt a szép kort.",
          "Általában minden hónap első vasárnapján délután jövünk össze a helybeli Don Bosco nővérek házában. Beszélgetünk az aznapi evangéliumról, megbeszéljük az elmúlt hónapban történteket az egyházközségünk életében, majd a következő időszak feladatait és terveit. Mária énekeket énekelünk és felolvasunk Csaba testvér könyvéből, persze a vicc olvasás sem maradhat el.",
          "Segítünk a plébánia, a templom és a templomkert rendbetételében, takarításában. Egész napos szentségimádáskor beosztjuk az órákat, hogy mindig legyen valaki a templomban. Szegényeknek történő adománygyűjtéskor mindig viszünk tartós élelmiszert. A hagyományos kántorostya sütésben is aktívan részt veszünk. Nemzeti ünnepeinken koszorúzunk. Közeli zarándokhelyeket felkeressük, valamint látogatjuk a betegeket.",
          "Gyertek közénk, beszélgessünk együtt a mindennapokról, a feladatokról esetleges problémákról. Segítsük együtt egymást és az egyházközségünk életét. Őrizzük meg katolikus hitünket nagyanyáink örökségét.",
          'Elérhetőség: <a href="mailto:tomajulianna@gmail.com">tomajulianna@gmail.com</a> vagy 06-30-7332231',
          "Hívjuk és várjuk hivő nőtestvéreinket mindegy, hogy idős vagy fiatal, lány, asszony esetleg özvegy kiscsoportunkba, vallásos, de egyben vidám összejöveteleinkre.",
        ],
      },
      {
        cim: "",
        szoveg: [
          "Kiskalász lányok, a mogyoródi fiatal katolikus lányok csoportja A Kalász mozgalommal együtt 1989-ben szerveződött 8-17 éves katolikus lányoknak Juhász Károlyné, Rózsika Kalászvezető segítségével, hogy illemtudó katolikusként tiszta erkölcsű tagjai legyenek a magyar társadalomnak. Újból alakult 2014 nyarán Tóth J. Miklós atya ösztönzésére, melynek célja a Szűz Mária tisztelet imádságos lelkülettel való elmélyítése, a népi hagyományok újra élesztése Mogyoródon.",
          "Feladata az egyházközség nagy ünnepein, a kiemelkedő Mária ünnepeken és előtte segédkezni. Valamint Máriatartó lányként a Szűz Mária szobrot zászlóval kísérik és a vállukon viszik.",
          "Ismerkednek a falu katolikus hagyományával, a karácsony előtti ostyahordástól a bölcsőskézésig. A fiatalok szívből és boldogan viselik Mogyoród népviseletét a neves rendezvényeken, így megőrizve a nagyanyáink örökségét és magyarságunkat itt Mogyoródon. A nagyobb lányok segítséget nyújtanak a faluban kulturális rendezvények szervezésében, előadások tartásánál, jótékonysági vásároknál. Egyházközségi bálok családi napok tevékeny szereplői és a plébániai agapék fiatal háziasszonyai ők.",
          "A gyerekek találkozói minden hónap első vasárnapján, délután 4 órakor kezdődnek a hittan teremben.",
          "Énekes, imádságos köszöntés után játékokkal, rejtvényekkel tarkítva ismerkednek a lányok a hétköznapi életben szükséges ismeretekkel. Például öltözködés, divat, kézügyességet igénylő tojásfestés, rajzolás, hímzés, horgolás, ajándékkészítés, közben verselés; sütés, főzés, vendéglátási ismeretek a témája a rövid találkozóknak. Vidám kirándulásokat és zarándoklatokat, nyári táborokat tervezünk a környék nevezetes helyeire, hogy jól tájékozódó, ügyes, értelmes, illemtudó felnőttekké váljanak a lányaink.",
          "Várjuk az érdeklődő szülőket gyermekeikkel.",
        ],
      },
    ],
  },
  {
    sorszam: 10,
    id: "nagykata",
    nev: "Nagykátai csoport",
    vezetoKep: "10_Margo.jpg",
    osszefoglalo:
      "A <strong>nagykátai KALÁSZ csoport</strong> 1992-ben alakult, jelenleg 20 tagja van. Összejöveteleiket a hónap első szombatján tartják a Plébánia Közösségi házában. A csoport a legfontosabb feladatának-az elmúlt 29 év alatt - a hitük erősítését tartotta. Vezetőjük: Kelemen Lászlóné, Margó.",
    tartalom: [
      {
        cim: "",
        szoveg: [
          "Kelemen Lászlóné /Margó/ 71 éves vagyok.  Nagykátán élek egyedül.<br/>Férjem 3 éve meghalt. 2 lányom van /48 és 46 évesek/, vallásos családban élnek.<br/>4 unokám van, 2 főiskolás és 2 gimnazista.<br/>2007-től nyugdíjas vagyok. 1994-től vezetem a nagykátai Kalász csoportot.<br/>2006-tól 2021-ig a Kalász Ellenőrző Bizottság tagja, majd később elnöke voltam.",
        ],
      },
      {
        cim: "",
        szoveg: [
          "Egyéb feladataim:<br/>1993-tól vezetem a nagykátai Karitász csoportot, jelenleg 17 fővel. A nagykátai Szent György Alapítvány titkári feladatait 1997-től látom el. Az egyházközség életében is kiveszem a részem, évközi oltárterítők cseréje, mosása, vasalása, templomi nagytakarítás, közösségi ház rendben tartása. Szabadidőmben szeretek olvasni, valamint unokák kérését teljesíteni. /sütemény sütés/ Nyári hittantáborba a gyermekek részére étkezés biztosítása, beszerzések.",
          "A csoportunk 1992.junius 20-án alakult 12 fővel, majd később új tagokkal bővült. Jelenleg 20 fő van. A csoport az összejöveteleket a hónap első szombatján tartunk a Plébánia Közösségi házban. Itt mindig van ima, biblia olvasás, ének, továbbá az aktuális feladatok megbeszélése.",
          "A csoport átlag életkora 71 év. 1 fő kivételével nyugdíjas tagok. Csak sajnos 8 főnek különböző betegsége van, ami miatt már kevésbé tud részt venni a csoport feladataiban. Ez az ima háttér.",
          "A csoport a legfontosabb feladatnak az elmúlt 29 év alatt a hitünk erősítését tartotta.<br/>Ezt szolgálták:   évente 2 alkalommal lelkigyakorlat, templomi szentségimádások, felnőtt hittanon való részvétel, zarándoklatok.<br/>A szomszéd községben lévő Kalász csoportokkal is jó kapcsolatot ápolunk, közös templom búcsúk, közös kirándulás szervezés. /Pannonhalma, Lakitelek, Martonvásár /<br/>A csoport részéről kiemelném a már 2010-től évente megszervezett jubiláló házasok miséjét, valamint a farsangi katolikus bál szervezését.",
          "A Kalász közösségünknek az elmúlt évek során a Jó Isten sok kegyelmet adott, és a szeretet útján segített bennünket a Kalász testvéri közösségben.",
          '<span style="margin-left: 1rem">„A szeretet szívedből indul ki és valahová irányul</span><br/><span style="margin-left: 1rem">Ha megpróbálod bilincsbe verni, akkor elveszíted.</span><br/><span style="margin-left: 3rem">Ha bölcs vagy, akkor jól felhasználod.</span><br/><span style="margin-left: 7rem">A szeretet élet.”</span>',
          "E gondolatok kísérjék az utánunk jövő fiatal kalász tagokat.",
          '<span style="margin-left: 20rem">Kelemen Lászlóné</span><br/><span style="margin-left: 21rem">Kalász vezető</san>',
        ],
      },
    ],
  },
]

export default csoportok
