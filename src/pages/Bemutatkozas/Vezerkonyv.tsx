import { FunctionComponent } from "react"

import PageLayout from "src/components/PageLayout/PageLayout"

import styles from "./Vezerkonyv.module.scss"

const Vezerkonyv: FunctionComponent = () => {
  return (
    <PageLayout>
      <div className={styles.vezerkonyv}>
        <p>
          A <strong>Vezérkönyv</strong> tananyagnak készült a Vezetőképző
          résztvevői számára. A betiltás idején nagy részét eldugdosták,
          elégették. Szerencsénkre néhány példány megmaradt a II. kiadásból. Ezt
          1939-ben írták, és az egyházi jóváhagyások megszerzése után, 1942-ben
          adták ki.
        </p>
        <p>
          Mivel tartalmának nagy része ma is aktuális, érdemes megismerkedni
          vele.
        </p>

        <div className={styles.tartalomjegyzek}>
          <ul className={styles.tartalomjegyzekFejezet}>
            <li>
              <a href="#1">I. MOZGALOM</a>
              <ul>
                <li>
                  <a href="#2">A mozgalom története</a>
                  <ul>
                    <li>
                      <a href="#3">I. Lánynap</a>
                    </li>
                    <li>
                      <a href="#4">I. Tanfolyam</a>
                    </li>
                    <li>
                      <a href="#5">Pettendi Katolikus Lányotthon</a>
                    </li>
                    <li>
                      <a href="#6">Eucharisztikus kongresszus</a>
                    </li>
                    <li>
                      <a href="#7">Kalász</a>
                    </li>
                    <li>
                      <a href="#8">Népfőiskola</a>
                    </li>
                    <li>
                      <a href="#9">Vezérkönyv II. kiadása</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#10">A mozgalom célja</a>
                </li>
                <li>
                  <a href="#11">A mozgalom szervezete</a>
                  <ul>
                    <li>
                      <a href="#12">A központ</a>
                      <ul>
                        <li>
                          <a href="#13">&#8222;Falu&#34; háziipari bolt</a>
                        </li>
                        <li>
                          <a href="#14">Egyházmegyei titkárok,...</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#15">A Lánykör</a>
                      <ul>
                        <li>
                          <a href="#16">Szervező beszéd</a>
                        </li>
                        <li>
                          <a href="#17">Féligzárt lelkigyakorlatok</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#18">A mozgalom jeligéje és imái</a>
                </li>
                <li>
                  <a href="#19">A mozgalom jelvénye és zászlója</a>
                </li>
              </ul>
            </li>
          </ul>
          <ul className={styles.tartalomjegyzekFejezet}>
            <li>
              <a href="#20">II. A VEZETŐ</a>
              <ul>
                <li>
                  <a href="#21">Milyen legyen a vezető?</a>
                </li>
                <li>
                  <a href="#22">A vezető lelki és szellemi felkészültsége</a>
                  <ul>
                    <li>
                      <a href="#23">Lelki felkészültség</a>
                    </li>
                    <li>
                      <a href="#24">Szellemi felkészültség</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#25">Külső segédeszközök</a>
                </li>
                <li>
                  <a href="#26">Belső segédeszközök</a>
                </li>
                <li>
                  <a href="#27">Hogyan készüljünk előadásra?</a>
                  <ul>
                    <li>
                      <a href="#28">A &#8222;drukk&#34;</a>
                    </li>
                    <li>
                      <a href="#29">Hogyan segíthetek nekik?</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
          <ul className={styles.tartalomjegyzekFejezet}>
            <li>
              <a href="#30">III. A MUNKA</a>
              <ul>
                <li>
                  <a href="#31">Összejövetelek</a>
                </li>
                <li>
                  <a href="#32">Katekizmus versenyek</a>
                </li>
                <li>
                  <a href="#33">Tanítások</a>
                  <ul>
                    <li>
                      <a href="#34">Minta-tanítások</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#35">A mese szerepe a Lánykörben</a>
                </li>
                <li>
                  <a href="#36">Ének</a>
                  <ul>
                    <li>
                      <a href="#37">Egyházi ének</a>
                    </li>
                    <li>
                      <a href="#38">Világi ének</a>
                    </li>
                    <li>
                      <a href="#39">Énekkar</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#40">Miért van szükség játékra és milyenre?</a>
                </li>
                <li>
                  <a href="#41">A tánc szerepe az ifjúság nevelésében</a>
                </li>
                <li>
                  <a href="#42">Komoly rendezések</a>
                </li>
                <li>
                  <a href="#43">Színdarabok, komoly rendezések</a>
                </li>
                <li>
                  <a href="#44">Tanfolyamok</a>
                </li>
              </ul>
            </li>
          </ul>
          <ul className={styles.tartalomjegyzekFejezet}>
            <li>
              <a href="#45">IV. A SZÓRAKOZÁS</a>
              <ul>
                <li>
                  <a href="#46">Testvéregyesületek látogatása</a>
                </li>
                <li>
                  <a href="#47">Kirándulás</a>
                </li>
                <li>
                  <a href="#48">Ozsonna a Lánykörben</a>
                </li>
                <li>
                  <a href="#49">Bál a Lánykörben</a>
                </li>
              </ul>
            </li>
          </ul>
          <ul className={styles.tartalomjegyzekFejezet}>
            <li>
              <a href="#50">
                Függelék: a Katolikus Lánykörök Szövetségének alapszabálya
              </a>
            </li>
          </ul>
        </div>
        <div className={styles.tartalom}>
          <p className={styles.cim2}>VEZÉRKÖNYV</p>
          <p className={styles.cim3}>
            KATOLIKUS FALUSI LÁNYKÖRÖK
            <br />
            VEZETŐI SZÁMÁRA
          </p>
          <div className="ajanlo-sorok">
            <p className={styles.cim4}>AJÁNLÓ SOROK</p>
            <i>
              <p className={styles.torzs}>
                Az Actio Catholica országos központja nagy reményeket táplált a
                KALÁSz-hoz, mindjárt születése pillanatában. Ma pedig őszintén
                örül, hogy a mozgalom hiánytalanul betöltötte a hoz-záfűzött
                várakozásokat.
              </p>
              <p className={styles.torzs}>
                Ami nem is csoda, hiszen a falu lányainak őszinte szeretete
                hozta a világ rá, az áldozatkészség növelte nagyra, a hozzáértő
                vezetés pedig oly tényezővé fejlesztette, amelyet ma már senki
                sem hagyhat számításon kívül.
              </p>
              <p className={styles.torzs}>
                A KALÁSz-ban, a falu vonallá, egyik leghatalmasabb és
                legeredményesebb szervezetünket látjuk. Belőle hősi lelkű,
                tisztaszívű magyar anyák lépnek elő, olyanok, amilyeneket e
                válságos időkben Egyház és haza egyaránt kíván.
              </p>
              <p className={styles.torzs}>
                Nagy katolikus kincsünk a KALÁSz, mint ilyet ajánljuk az
                illetékesek fegyelmébe és féltő gondjába. Ragaszkodjunk hozzá a
                végsőkig. Lelt, hogy idők jönnek, amikor olyan nehézségekkel
                kell megküzdenie, amilyenekkel eddig nem kellett számolnia.
                Változzanak azonban a viszonyok akárhogyan; KALÁSz-unkat nem
                hagyjuk. Sem meghalni, sem béklyóba verni. Álljunk készen minden
                eshetőségre, talán nagyobb áldozatokra de mindenesetre szívós és
                kitartó munkálkodásra. Hősi lelkű apostoli vezetőkön fordul meg
                minden. Ha a vezetőréteg nem törik meg, még csak meg sem hajol,
                akkor a KALÁSz az marad, ami ma: a falu apostoli mozgalma
                Krisztus Király országáért.
              </p>
            </i>
            <i>
              <p className={styles.alairas}>
                MIHALOVICS ZSIGMOND
                <br />
                prelátus-kanonok,
                <br />
                az A. C. országos igazgatója
                <br />
              </p>
            </i>
          </div>
          <div className="deo-gratias">
            <p className={styles.cim4}>DEO GRATIAS</p>
            <img
              className={`${styles.vezerkonyvKep} ${styles.balSzovegIllusztracio}`}
              src="/assets/images/vezerkonyv/deo_gratias.jpg"
              alt="deo_gratias.jog"
            />
            <i>
              <p className={styles.torzs}>
                Ha a Vezérkönyv I. kiadásánál hálát adtunk a jóságos Istennek,
                hogy egy egészséges, kegyelemteljes mozgalom megindítóivá
                kiválasztott, most öt év áldozatos apostoli munkája után, amikor
                a Vezérkönyv II. kiadását indítjuk útra, még alázatosabb, még
                bensőségesebb hálával telik el a lelkünk a jó Isten kegyelme
                iránt, mellyel oly bőségesen megáldotta a Kalász mozgalmat.
              </p>
              <p className={styles.torzs}>
                Most már megállapíthatjuk, hogy a Kalász eltalálta a hangot a
                falusi leányok szívéhez. A 400 Lánykörből mára 1400 Lánykör
                lett. Amit a leányoknak mond, az komoly, praktikus és
                életbevágó. Senki más nem tud így beszélni a falusi leányokkal.
                Mindenfelé talált komoly vezetőket, azokat meg tudta nyerni az
                áldozatos apostoli munkának. Különös súlyt helyez a vezetők
                egységes szellemére és szellemi irányítására. Ezért rendez
                éveként annyi vezető kurzust, ezért rendezi a színes és
                tanulságos Lánynapokat. A Vezérkönyv ez újabb kiadása is ezért
                vált szükségessé. Egyházias lelkületével nemcsak az A. C.
                szervezetébe és programorjába illeszke-dett bele teljesen és
                komolyan, hanem kezdettől fogva őszintén kereste és keresi a
                kapcsolatot a papság lelkipásztori munkájával. Ezért
                szervezkedik egyházmegyénként és esperes kerületenként. Szervező
                munkájának betetőzéseképpen a Lánykörök jelentősadományával
                Bodajkon Népfőiskolát nyitott, melyben a falusi lányok legjavát
                neveli ki a Kalász célkifűzései szerint: hitben erős, erkölcsben
                tiszta, nemzeti érzésben öntudatos magyar, gazdaságilag képzett
                családanyákká.
              </p>
              <p className={styles.torzs}>
                Deo gratias. Hála legyen mindezekért a jó Istennek, ki így
                megáldotta jószáradékunkat.
              </p>
              <p className={styles.torzs}>
                De nem ez a csodálatos eredmény az, amiért elvállaltam, hogy pár
                sort írok az új Vezérkönyvbe. Ha az Úr Isten úgy akarja, ez mind
                egy nap alatt összeomolhat. Ami engem a Kalászhoz fűz és amiért
                azt a hasonló mozgalmak közt a legtöbbre értékelem, az a mély
                lelkiség, az a komoly vallásos és egészséges hazafias szellem,
                amellyel a Kalász kitűnik az összes testvérmozgalmak között.
                Csendben, szerényen, több imádsággal és áldozattal, mint
                reklámmal és propagandával dolgozik. Vannak ügyes üzleti
                vállalkozásai, vannak lelkes munkatársai és igaz jóakarói, de
                legnagyobb értéke, legféltettebb kincse: evangéliumi szelleme,
                melyet féltő gonddal ápol és mindennél többre értékel.
              </p>
              <p className={styles.torzs}>
                Ezért merem a Kalászt minden komoly magyar ember figyelmébe és
                szeretetébe ajánlani. S ezért kérek mindenkit, támogassa lelkes
                szeretettel ezt a nagyra hivatott mozgalmat.
              </p>
              <p className={styles.torzs}>
                A Kalász vezérkarát, az espereskerületi és plébániai vezetőket s
                a Kalász minden egyes leánytagját arra kérem, hogy erre a komoly
                szellemre, erre a finom és mélyen vallásos lelkületre még az
                eddiginél is nagyobb gonddal vigyázzanak, mert ez a Kalász igazi
                értéke, Isten előtt is drága kincse.
              </p>
              <p className={styles.torzs}>
                Székesfehérvár, 1941 boromei szent Károly ünnepén.
              </p>
            </i>
            <div className={styles.alairas}>
              <div>
                <img
                  className={styles.vezerkonyvKep}
                  src="/assets/images/vezerkonyv/fehervari_puspok.gif"
                  alt="fehervari_puspok.gif"
                />
                <p>A székesfehérvári püspök aláírása</p>
              </div>
            </div>

            <p>
              <center>MINDAZOKNAK,</center>
            </p>
            <p className={styles.torzs}>
              akik ezt a könyvet érdeklődéssel és szeretettel forgatni fogják!
            </p>
            <p className={styles.torzs}>
              Ezt a könyvet szeretetből, segíteni akarásból és őszinte szívből
              testvértelkeknek írtuk, azoknak, akik szerte az országban, annak
              sok kis falujában vagy elhagyott tanyáján szociális
              felelősségérzettől áthatva megfogták a falusi leányok segítségre
              váró kezét. Mikor írtuk, az a sok kedves tanító néni és más
              intelligens vezető-néni állt szemünk előtt, akiket levelezés
              közben, utazásaink alkalmával, vagy tanfolyamokon megismertünk.
              Nekik írtuk ezt a könyvet, ugyanazon a meleg családi hangon,
              amelyet előbb megütöttünk, és amelyre úgy tapasztaltuk, hogy
              minden testvérszív megnyílt.
            </p>
            <p className={styles.torzs}>
              Ennek a barátságnak megpecsételése, emlékben tartása, az ott
              megbeszéltek lerögzítése akar lenni ez a könyv a régi ismerősök
              számára. Az ezután jövőknek pedig barátságos kapunyitás: Tessék
              hozzánk jönni, a baráti szív melegéből; segíteni akarásából;
              tapasztalatából meríteni és így a befektetett munkának könnyen
              százszázalékos eredményét látni. Ha pedig nehézség van, akkor is{" "}
              <b>j ő j e t e k &nbsp;&nbsp;i d e!</b> Ezt a központot az Úristen
              olyan csodálatosan tágítja lelkileg is, fizikailag is, hogy
              először csak 38 vezető fért a szívébe, most 1260, három év múlva
              ki tudja mennyi? Isten szeretete az, ami a központ szívét
              kitágítja, ezért tud adni és ezért tudnak belőle meríteni olyan
              sokan. Itt a kapu minden jóakaratú ember számára egyformán nyitva
              van és mindenki ügyét egyforma szeretettel és buzgósággal intézik.
            </p>
            <p className={styles.torzs}>
              Csak a hivatalos hangot ne keresse ebben a könyvben senki, mert
              testvér a testvérhez hivatalos hangon szólni nem tud. Ha valaki
              kívül álló veszi kezébe, ne vegye zokon annak családias hangját,
              hanem olvassa úgy, mint két jó barátnak egymáshoz írt levelét.
            </p>
            <div className={styles.alairas}>
              <div>
                <img
                  className={styles.vezerkonyvKep}
                  src="/assets/images/vezerkonyv/rita.jpg"
                  alt="rita.jpg"
                />
                <p>Luczenbacher Rita aláírása</p>
              </div>
            </div>
          </div>
          <div className="fejezet-mozgalom">
            <a id="1"></a>
            <p className={styles.cim1}>I. A MOZGALOM</p>
            <a id="2"></a>
            <p className={styles.alcim1}>A mozgalom története</p>
            <img
              src="/assets/images/vezerkonyv/maria.jpg"
              alt="maria.jpg"
              className={`${styles.vezerkonyvKep} ${styles.jobbSzovegIllusztracio}`}
            />
            <p className={styles.torzs}>
              Jóval mielőtt a falu divatba jött, a Magyar Katolikus
              Nőegyesületek Országos Szövetsége megérezte az idők sürgető
              kívánságát, és segítő kezét a falu fiatal leányai felé nyújtotta.
              Teljesen új kezdeményezésként 1934 nyarán tanfolyamot hirdetett a
              falusi leányegyesületek vezetői számára. Nyári pihenőjüket
              feláldozva néhány lelkes tanító néni gyűlt össze, akikben
              felébredt a felelősség-tudat. A Nőszövetség következő nyáron újra
              megrendezte tanfolyamát Pécelen, ahova az Isten a falumunkának élő
              gyakorlati előadót és több komoly érdeklődött vezérelt. Ott
              történt, hogy a Fejér-megyét képviselő két vezetőnek is kinyílt a
              szeme. Bajok vannak a falujukban, a környékükön, a megyéjükben,
              ezt látták eddig is, de nem ilyen világosan. És még kevésbé látták
              a segítség módjait. De most, hogy hallották, milyen szívósan és
              mennyi odaadással dolgoznak ugyanezen célért megszállt területen,
              elnyomás, üldözés nehézségek közepette, elszégyellték magukat és
              kétszeresen akartak dolgozni. Az alkalom kínálkozott: Stettner
              Andrea, aki 8 évet dolgozott ebben a munkában, kérésükre
              irányítóul, segítőül melléjük szegődött. El kellett indulni:
              minden jel azt mutatta, hogy Isten is úgy akarja. Ha pedig nem
              akarja, majd megmutatja.{" "}
            </p>
            <p className={styles.torzs}>
              Az Isten akarta. Minden odakészített, minden akadályt elhárított,
              minden imát kétszer meghallgatott.
            </p>
            <p className={styles.alcim1}>Megindulás</p>
            <p className={styles.torzs}>
              Egy névtelen jótevő egy évi munkához szükséges összeget
              rendelkezésre bocsátott. Megindultak a tervezgetések és mire a
              munka képe némileg kialakult, elmentünk az Actio Cathoticába,
              minthogy minden katolikus munkának, ha az tényleg katolikus, onnét
              kell kiindulnia. Itt a székesfehérvári egyházmegyét jelölték ki
              munkaterületül. Ebben is mennyi gondviselés volt! Shvoy Lajos
              püspökatyához kerültünk, aki meleg atyai szeretetébe fogadta a
              munkát és már akkor, mikor a legtöbben csak játéknak, hiúság
              ambíciónak, úri passziónak tartották, megérezte, hogy az Istennek
              tervei vannak vele. Maga írta meg a leveleket, maga nyugtatta meg
              az aggódó plébános atyákat, hogy nem lesz semmi baj; csak engedjék
              be falujukba a szervezőket!
            </p>
            <p className={styles.alcim1}>Szervezés</p>
            <p className={styles.torzs}>
              A munka ekkor már tető alá került. Volt egy fél irodája, egy
              íróasztala, egy iratszekrénye, egy ülőkéje, egy írógépasztala és
              egy írógépe és az iroda mellett egy lakószobája. Innen indultunk
              el
            </p>
            <p className={styles.torzs}>
              1936. jan. 19-én az első eperesikerületbe szervező körútra.
              Szokatlan volt, bosszankodtak egyesek, megbotránkoztak, mások,
              hogy mit keres két fiatal leány télvíz idején sárban-hóban a
              falvakon; voltalt, akik a munkatöbbletet megsejtve megijedtek és
              voltak, akik áldozatos szeretettel, megértéssel fogadtak. De egy
              mindig biztos volt: a leányok, mikor elmondtuk nekik, milyen nagy
              hivatás vár rájuk, mennyire elő kell rá készülniük, milyen könnyű
              lesz ez a Lánykörön keresztül, mindig szívvel-lélekkel benne
              voltak. S az Isten Lelke ott fú, ahol akar: a kezdetben
              aggodalmaskodók is lassan nekilendültek és lelkesen dolgoznak már
              a szebb jö-vőért.{" "}
            </p>
            <p className={styles.torzs}>
              Az 1936-os évben beutaztuk a székesfehérvári egyházmegye csaknem
              valamennyi plébániáját, kerestünk vezetőt, elindítottuk gondolatot
              és ragályterjesztőnek mindenütt otthagytuk a "Tarisznyát". Mire
              hazaértünk, sorba kaptuk a híreket: itt is, ott is tényleg
              megalakult a Lánykör, dolgoznak, foglakoznak a leányokkal. Ezen
              felbuzdulva 1936. jún. 21.-re összehívtuk a leányokat az első
              székesfehérvári Lánynapra.
            </p>
            <a id="3"></a>
            <p className={styles.alcim1}>I. Lánynap</p>
            <p className={styles.torzs}>
              Az Isten ezt is akarta. Verőfényes reggel hozták a vonatok,
              autóbuszok, szekerek az egyházmegye minden tájáról a 960 leányt,
              csoportjuk vezetőjével, sokszor a falu plébánosával és sok
              érdeklődővel. Püspök Atyánk maga celebrálta az ünnepi szentmisét,
              könnyekig megható volt a 960 leány együttes éneke, imája;
              gyönyörű, felemelő volt 960 leány közös, testvéri egyesülése a
              szentségi Úr Jézusban. A város szeretetreggelije, a felvonulás a
              városon keresztül, az egyszerű, naiv, de lélekből fakadt
              szabadtéri bemutató mind egy-egy felejthetetlen kedves kép erről a
              napról. Ezer kedves emlékkel telve mentek haza a leányok és
              heteken át mesélték otthon mindazt, ami velük történt.{" "}
            </p>
            <a id="4"></a>
            <p className={styles.alcim1}>I. Tanfolyam</p>
            <p className={styles.torzs}>
              Július 1-10-ig pedig az egyházmegye Lánykör-vezetői gyűltek össze
              Székesfehérvárott 1 heti komoly munkára. A tanfolyam előtt 3 napos
              zárt lelkigyakorlatot tartottunk, hogy a komoly munkához Istenben
              megerősödött tétekkel foghassunk. Öröm volt látni azt a sok komoly
              lelkes tanító nénit és vezetőt akik együtt hallgattak, együtt
              imádkozlak és énekelték, azután minden tudásukat összeadva
              dolgoztak, iskolás gyermekként, padba ülve, énekelve, táncolva,
              játékokat tanulva, ahogy a napirend megkívánta. Püspök Atyánk két
              előadásával, többszöri látogatásával megmutatta, hogy komolynak
              tartja munkánkat, sokat vár tőlünk és mi valamennyien nagyon
              igyekeztünk, hogy ennek a várakozásnak némi kép meg tudjunk
              felelni.
            </p>
            <p className={styles.alcim1}>Győregyházmegyei munka</p>
            <p className={styles.torzs}>
              Augusztusban a Nőszövetség megtartotta szokásos Vác-egyházmegyei
              tanfolyamát, amelynek szellemi irányítását ránk bízta. Ennek a
              tanfolyamnak egy kedves, komoly, egy előadást sem mulasztó
              hallgatója volt a győri egyházmegye A. C, igazgatója, ft. Németh
              János püspöki tanácsos, aki otthon is meg akarta indítani a munkát
              és ezért jött el a tanfolyamra, magával hozva a leendő szervezőt.
              Minden hallhatót meghallgattak, minden érdekeset megjegyeztek és
              ősztől kezdve a győri egyházmegyében is megindult a szervezés.
            </p>
            <p className={styles.alcim1}>Kerületi gyűlések</p>
            <p className={styles.torzs}>
              Az ősszel megindult munkaév már nagyobb készültségben találta a
              központot. A két állandó munkáshoz még egy harmadik is szegődött
              áldozatosan, szeretetből s akkor még nem álmodott róla, hogy
              egyszer a váci egyházmegye szervezésének súlyos gondja lesz rajta.
              Azon kívül hol egyik, hol másik kedves ismerős jött fel
              délutánonként, hogy segítsen a munkában. A székesfehérvári
              egyházmegyében az esperes kerületenként választott kerületi
              vezetők osztották meg velünk gondjainkat. A tanítógyűlések idejére
              tett kerületi gyűléseken ők adták tovább a vezetőknek a központ
              kéréseit, irányítását és a helyi nehézségeket családi körben
              igyekeztek megoldani.{" "}
            </p>
            <p className={styles.alcim1}>Tulipános Láda</p>
            <img
              src="/assets/images/vezerkonyv/tulipanos_lada.jpg"
              alt="tulipanos_lada.jpg"
              className={`${styles.vezerkonyvKep} ${styles.jobbSzovegIllusztracio}`}
            />
            <p className={styles.torzs}>
              1936 októberében közkívánatra megindítottuk a falusi leányok
              számára kis képes havi folyóiratunkat, a Tulipántos Ládát, mely az
              első ilyen irányú kezdemé-nyezés volt. Bizony nehezen alakult ki a
              hang, nehezen értük el, hogy mindazt a sok szépet és jót, amit
              benne adtunk, a leányok is szépnek és jónak tartsák. Az év
              folyamán a kiküldött példányszám kb. 1600-ra emelkedett, ami
              tekintve a lap újszerűségét és a propaganda csekélységét,
              örven-detesnek mondható. Még örvendetesebb, hogy a lapra, annak
              évi egy pengős előfizetési díja mellett sem volt ráfizetés, ami
              életképességének legjobb bizonyítéka. A szerkesztés gondjaitól
              hamarosan teljesen mentesítette a központot Wickenburg Mária
              grófnő, aki egész lélekkel fogott ehhez a sokszor előre nem
              látható problémákat felvető munkához és áldozatos szeretettel
              folytatja azt ma is.
            </p>
            <a id="5"></a>
            <p className={styles.alcim1}>Pettendi katolikus Lányotthon</p>
            <p className={styles.torzs}>
              1936. nov. 5-én nyitottuk meg Pettenden sok aggódó szeretettel kis
              Lányotthonunkat, ahol 3 hónapos bentlakásos tanfolyamokon 12-12
              leányt igyekeztünk minta lánnyá nevelni. Szerény körülmények
              között kezdődött meg ez a munka, de a jó Isten áldása volt rajta,
              mert láthattuk az Ő atyai gondoskodását és sok jóakarónk nem
              remélt áldozatkészségét munkánkkal szemben. Később megnyílt
              Népfőiskolánknak egészen 1941-ig ez a kis Otthon volt a sok
              gonddal, nehézséggel küzdő, sok áldozatot magában foglaló
              "gyermekszobája".
            </p>
            <p className={styles.alcim1}>Az A. C. megbízása</p>
            <p className={styles.torzs}>
              A székesfehérvári egyházmegye vezetőinek áldozatos és szép
              eredményeket elért munkája meggyőzte az Actio Catholica Központját
              arról, hogy munkánk életképes és célravezető. Ezért 1936.
              novemberében Mihalovics Zsigmond kanonok, országos Igazgató úr
              felkért, hogy központunk vállalja országosan a falusi lányok
              szervezését és irányítását. Gyarló erőink szerint igyekszünk ennek
              a felszólításnak eleget tenni.
            </p>
            <p className={styles.torzs}>
              1937 tavaszán Szombathelyen tanfolyamon, a kalocsai egyházmegyében
              pedig espereskerületi A. C. napokon ismertettük munkánk célját és
              eszközeit.
            </p>
            <p className={styles.alcim1}>Kerületi Lánynapok</p>
            <p className={styles.torzs}>
              Kezdeményezésünkre Fejér-megyében, május hó folyamán, több helyen
              tartottak kerületi Lánynapot, melyen egy-egy kézponti fekvésű
              faluban összejöttek a leányok és vagy egész napot együtt
              töltöttek, közösen hallgatva szentmisét és közösen járulva
              szentáldozáshoz, vagy csak délután érkeztek és kölcsönösen
              megismerkedve minden Lánykör bemutatta a saját tudományát. 1937.
              jún. 6-án pedig megrendeztük a II. székesfehérvári Lánynapot, az
              egy-házmegyei lányköri tagok lelkes részvételével. Ugyanezen a
              nyáron tartottuk meg II. vezetőképző tanfolyamunkat, melynek
              kedves vendége volt több más egyházmegyébe tartozó vezető-testvér.
            </p>
            <p className={styles.torzs}>
              1937 őszén nagy munkába fogott a központ: eddigi tapasztalatok;
              tanfolyamokon elhangzott előadások, nyomán olyan kézikönyvet akart
              a vezető nénik kezébe adni, amelyből minden problémájukra választ
              találjanak és melyből a mozgalom szellemét megismerhessék. Majdnem
              túlbecsültük erőnket, mert az egy-két hétre tervezett munka két
              hónapot vett igénybe és lelkünk minden melegét, szeretetét,
              segíteni akarását bele tettük valamennyien, akik akkor a mozgalom
              irányításában dolgoztunk. Hősiesen, gondolkozás nélkül adta
              mindenki tudásának legjavát s még csak arra sem tartott igényt,
              hogy neve szerepeljen. A nagy munkát megáldotta a jó Isten, mert
              igen sok vezető testvérünk merített belőle lelkesedést, tudást,
              buz-góságot és a második kiadás jóformán változatlanul viheti
              tovább az első elgondolásokat.
            </p>
            <a id="6"></a>
            <p className={styles.alcim1}>Eucharisztikus Kongresszus</p>
            <p className={styles.torzs}>
              Az 1938. évi felejthetetlen szépségű Eucharisztikus Kongresszuson
              mutatkozott be legelőször a mozgalom a nagy nyilvánosság előtt.
              Háromezer lelkes, boldogságtól sugárzó leány jött fel ez
              alkalommal Pestre szép egyenruhában, ősi népviseletben s örömmel
              látták, hogy milyen sokan vannak. A nagyközönségnek és a vezető
              néniknek meg őszinte épülésére szolgált az a pompás, lélekből
              fakadó fegyelem, mellyel a fáradtságot, tűző napot és zubogó esőt
              valamennyien szó nélkül, helyükről el nem mozdulva viselték. Két
              napig voltak fent leányaink s felejthetetlen emlékük marad a
              legátusi szentmise, a közös szentáldozás s legelső este a
              tisztelgő felvonulás a Várba. Itt a főméltóságú kormányzói pár
              előtt tisztelegtek a leányok. Egyikük üdvözlőbeszédet mondott, s
              beszéde közben megérkezett a Pápai Legátus Úr is. A szép alföldi
              egyenruhába öltözött leány bátor fellépése annyira tetszett, hogy
              felhívták öt az erkélyre, ahol a mostani Szentatyának is kezet
              csókolhatott. A kislánynak annyira lelkébe vésődött ez a jelenet,
              hogy mikor Pacelli bíboros XII. Pius néven elfoglalta a pápai
              trónt, levelet írt neki Rómába és emlékezetébe idézte a magyar
              falu leányainak, hódolatát valamint azt a nagy zivatart is, ami
              csaknem megzavarta az ünnepséget. - A kormányzóné őfőméltósága is
              szívébe zárta a kis szónokot és minthogy valamennyi leánynak nem
              fejezhette ki köszönetét, neki küldte el aláírásával ellátott
              fényképét.
            </p>
            <p className={styles.alcim1}>Katekizmus-versenyek</p>
            <p className={styles.torzs}>
              1938 őszén egyházmegyei zarándoklattal Rómába, utaztunk s ott az
              A. C. leányifjúsági szervezetét tanulmányoztuk. A katekizmus
              tanulás és a versenyek gondolatát innen hoztuk magunkkal. A
              kivitelezésben azonban nagyon vigyáztunk arra, hogy a gondolatot a
              magyar viszonyoknak megfelelően valósítsuk meg.
            </p>
            <p className={styles.alcim1}>Mozog az egész ország</p>
            <p className={styles.torzs}>
              Ezekben az időkben, mintha a tavasz tündére indult volna
              életfakasztó útjára, mert egymásután hirtelen virágba borult
              mindenfelé a lányköri élet. A győri egyházmegyében útra kelt a
              nagy hidegben két didergő, de nagyon áldozatos lelkű szervező s
              lépteik nyomán egymásután nőttek ki a földből a Lánykörök. Az
              egyházmegyei A. C. igazgató úr pedig nagy szeretettel,
              áldozatkészséggel és soha ki nem fogyó optimizmussal segítette
              munkájukat.
            </p>
            <p className={styles.torzs}>
              A szombathelyi egyházmegye történetében felejthetetlen marad az
              első kőszegi tanfolyam, ahol nagy testvéri szeretetben forrtak
              össze a vezetők a mozgalommal. A központban ketyegő piros-szíves,
              margarétás ingaóra azóta is minden nap ennek a tanfolyam-nak
              kedves emlékéről beszél. Azóta már volt sok tanfolyam, Lánynap a
              szombathelyi egyházmegyében s az egyházmegye főpásztora, valamint
              az egyházmegye A. C. igazgatója állandóan ébren tarják jóságukkal
              a vezető nénik és leányok munkakedvét.
            </p>
            <p className={styles.torzs}>
              A csanádi egyházmegyében kezdődött meg a nagy alföldi ugartörés.
              Buzgó és odaadó állami tanító nénik a Lánykörök vezetői. A
              legjobban beszervezett egyházmegyék közé tartozik a csanádi
              terület, ahol kivált a tanyai Lánykörök komoly, régen nélkülözött
              munkát végeztek. Az 1940. évi nagy szegedi Lánynapon mutatkoztak
              be Glattfelder Gyula megyéspüspök úrnak, aki mindnyájukat szívébe
              fogadta.
            </p>
            <p className={styles.torzs}>
              A nagyváradi egyházmegye, mint szerető család forrt össze a
              lányköri munkában. Az egyházmegyei vezetők baráti együttese több
              fanfolyam után az 1940. évi székesfehérvári III. sz. tanfolyamon
              jelent meg s szent László egyházmegyéjét képviselte szent István
              városában. Lindenberger János dr. a volt apostoli kormányzó úr, a
              vezető nénik és leányok minden ügyében-bajában meleg szeretettel
              nyújtja segítő kezét.
            </p>
            <p className={styles.torzs}>
              Az egri egyházmegye is megtalálta a maga lelkes apostolát és
              megható volt látni a szegény szabolcsi nép érdeklődését és
              lelkesedését a mozgalom iránt. Zajló Tiszán kis lélekvesztőn,
              betyárbútorával a hátán ment mindenfelé az egyházmegyei szervező
              és lelkesedéssel sorakoztak mögéje a vezető nénik és leányok.
            </p>
            <p className={styles.torzs}>
              A kis tüzek tovább harapóztak az országban s egyszerre a váci
              egyházmegyében is fellobbantak. A nagy távolságokban lakó és sok
              nehézséggel küzdő komoly tanító nénik szívósan és lelkiismeretesen
              álltak be a munkába s a szervezést megindító Hanauer A. István
              megyéspüspök úr örömmel látta, hogyan alakulnak az új Lánykörök s
              a gyűléseken résztvevő 5-6 százas lánycsoportok tágra nyílt
              szemmel és szomjas lélekkel hallgatták a lányköri munka célját és
              értelmét.
            </p>
            <p className={styles.torzs}>
              A veszprémi egyházmegyei munkát siettetni akartuk pár évvel
              ezelőtt; tartottunk ott tanfolyamokat s szinte leheletünkkel
              dédelgettük a kiszemelt kis szervező tanító néninket, mégis a
              munka csak akkor indult meg, mikor a jó Isten az időpontot
              alkalmasnak találta hozzá. Egyszerre nagyvonalúan megkezdődött a
              szervezés, érdeklődés támadt mindenfelől a mozgalom iránt s
              egyéves munka után már jól sikerült tanfolyamokban és szép
              lánynapokban gyönyörködhetett az egyházmegyének a Kalásszal
              szemben annyi megértést és szeretetet mutató főpásztora.
            </p>
            <p className={styles.torzs}>
              Az esztergomi egyházmegyében a visszatért felvidék Lánykörei
              lelkesen csatlakoztak a megindult mozgalomhoz s a pezsgő lányköri
              életet nagy örömmel nézi, és sokat vár tőle a Hercegprímás úr
              őeminenciája, aki az Esztergomban rendezett vezetőképző
              tanfolyamot személyesen is meglátogatta nagyrabecsülése jeléül.
              Nagyon reméljük, hogy a sok szenvedést megért, sokat próbált
              egyesületek mind jobban belesimulnak a Kalász búza szemei közé,
              áldozatos kismamájuk imádságos szeretetének jutalmaképpen.
            </p>
            <p className={styles.torzs}>
              A többi egyházmegyékben is már sok-sok lányköri palánta bújt ki a
              földből s fejecskéjüket egyelőre a központ felé forgatják, ahol
              nagy szeretettel fogadják őket. Ők azonban egyre néznek fölfelé,
              kémlelik az eget, vajon mikor érkezik hozzájuk is zörgő szekéren;
              a hidegtől pirosra csípet arccal, tarisznyájában minden
              elképzelhető jóval az eljövendő egyházmegyei titkár. Ha az Úristen
              is úgy akarja, nem sokáig várnak hiába.
            </p>
            <a id="7"></a>
            <p className={styles.alcim1}>Kalász</p>
            <p className={styles.torzs}>
              A kicsi mustármagból nagy, terebélyes fává növesztette
              mozgalmunkat az Isten s szükségessé vált, hogy mint külön
              Szövetség dolgozzunk tovább, külön alapszabállyal, ügyrenddel. A
              Katolikus Nőszövetség Faluszervező Irodája helyett felvettük a
              Katolikus Lánykörök Szövetsége - KALÁSZ nevet s alapszabályunkat
              először a Hercegprímás Úr, majd a Belügyminiszter Úr, külön
              ügyrenddel 1940. okt. 19-én jóváhagyta. - Szövetségünk 1939. febr.
              12-én tartott alakuló közgyűlésén önállóságát kimondta és mint
              ilyen, ugyanakkor betépett a Magyar Katolikus Nőegyesületek
              Országos Szövetségébe, annak hálás, legifjabb hajtásaképpen.
            </p>
            <p className={styles.torzs}>
              A Kalász őszi reménység, tavaszi munka, nyári teljesedés
              mesevilága, szegénynek, gazdagnak egyformán vágya, a nagy
              Teremtőnél, érettség, bőség parabolája, maga a teljesült, gazdag,
              csodálatos élet. - Valaki valahol magot rejtett a föld alá; a mag
              átadta önmagát a föl nedvének, savának, megszűnt élni,
              "elrothadt", de élet, lett belőle. Zöld lett a levél, bojtos a
              gyökérke, míg a május este illatos melege Isten termékenyítő
              akaratát hozta. A vékony erős szár felemelte hamvas zöld fejét,
              toklász karjait ég felé tárva várta és fogadta felülről a napot,
              az esőt. Erőt szívott és gyűjtött magába s mikor érezte már
              teljességét, alázatos, szelíd meghajlással jelezte önátadását.
              Föld felé nézett, karjait összefonva várta a kaszát. S a rekkenő
              nyárban hangtalanul dűlt ezer társával a földre, melyből tavasszal
              kiemelkedett.
            </p>
            <p className={styles.torzs}>
              Kalászból hullott kicsike mag, föld táplálója, új vetés adója
              Isten jóságának, alázatos irgalmának egyszerű formája, ostyának
              tiszta, hófehér anyja, élet és erő és beteljesedés.
            </p>
            <p className={styles.torzs}>
              Kalász nevet kapott a női munkatér nagykorúsított mozgalma; a
              Katolikus Lánykörök Szövetsége. Ez a hat éves mozgalom 60.000
              falusi leányt gyűjtött zászlója alá, akiket lelki, szellemi és
              gyakorlati foglalkoztatással igyekszik családanyai hivatásuk
              tökéletesebb teljesítésére ránevelni. A cél nagyszerű, a magyar
              falu népe kiváló anyag, az áldozatos szellemű munkatársak száma is
              évről-évre emelkedik. Tagok, vezetők és központiak együtt kérik
              Isten kegyelmét közös, nemzetépítő munkájukra.
            </p>
            <p className={styles.torzs}>
              Kalász-szá lenni Egyházban, hazában, társadalomban oly súlyos jövő
              elé néző katolikus magyar életünkben lesz-e erejük? Oly szép és
              olyan nehéz hivatás! Pedig alóla kibújni aligha lehet, hiszen a
              szó szimbolikája igen erős. A falusi élet szépsége mostanában
              divatos szólammá lett. De a falu rajongók nagy része a
              búzavirágos, pipacsos vetésekért rajong, mert nem tudja, hogy a
              gazdának szégyene a tarkavirágos búzaföld. Vajon lesz-e ereje
              ennek az oly szép nevet viselő fiatal mozgalomnak kiírtan a maga
              vetéséből a pipacsot, a búzavirágot? És nem fog-e megelégedni
              azzal, hogy konkoly nincs közötte? Nehéz idők nehéz feladatok elé
              állítják az embereket, legyenek azok vezetők, vagy vezetettek. De
              csak a nehéz idők nevelnek hősöket!
            </p>
            <p className={styles.alcim1}>Római utak</p>
            <p className={styles.torzs}>
              1939. húsvétján részt vettünk a katolikus leányifjúsági mozgalmak
              nemzetközi kongresszusán Szövetségünk képviseletében. Itt a világ
              minden részéről összegyülekezett leányifjúsági vezetők között
              éreztük csak igazán, milyen áldás egy ilyen határokat nem ismerő
              nagy csatádba beletartozni és mennyire szegény és kicsinyes volna
              a legnagyobb szabású munka is, ha nem állna benne a végtelen nagy
              távlatokat nyújtó közösségben.
            </p>
            <p className={styles.torzs}>
              1940 tavaszán, mielőtt a nagy háború megkezdődött volna,
              leszaladtunk Rómába, ahol a Szentatya, XII. Pius pápa
              kihallgatáson fogadott bennünket. Krisztus földi helytartója előtt
              elmondtuk, kiket képviselünk, mennyien vagyunk és hűséget ígértünk
              az otthonlévők nevében is. A Szentatya szeretettel hallgatta
              szavainkat s a mozgalom minden munkására, egyháziakra, világiakra,
              vezetőkre és lányokra atyai áldását adta és küldötte. - Boldogan
              és a munkához újabb erőket nyerve jöttünk haza és nagy
              lelkesedéssel folytattuk a munkát s fogjuk is folytatni minden
              akadály közt is, ameddig a jó Istennek tetszeni fog szolgálatunk.
            </p>
            <a id="8"></a>
            <p className={styles.alcim1}>Népfőiskola</p>
            <img
              src="/assets/images/vezerkonyv/bodajk.jpg"
              alt="bodajk.jpg"
              className={`${styles.vezerkonyvKep} ${styles.balSzovegIllusztracio}`}
            />
            <p className={styles.torzs}>
              Mozgalmunk életében újabb nagy, erőteljes lépést jelent
              Népfőiskolánk felállítása. A gondolatot a jó Isten egészen
              hirtelen, váratlan helyről küldte, de megmutatta, hogy a
              megvalósítást Ő kívánja. Olyan nehézségeket adott elénk és olyan
              várakozáson felül meg is oldotta azokat; olyan kézzelfogható
              bizonyítékát adta az Ő állandó atyai gondoskodásának és
              megengedte, hogy egyesületeink, jóakaróink, sőt sokszor még
              teljesen idegen emberek között is annyi megértésre és nagylelkű
              áldozatkészségre találjunk, hogy megint egyszer egészen alázatosan
              el kell ismernünk: ebben a mozgalomban nem emberek dolgoznak,
              ebben az Isten dolgozik ami szegény, elesett, de mégis nagyra
              hívatott nemzetünkért.
            </p>
            <p className={styles.torzs}>
              Adományokból, segélyekből és kölcsönökből igen szépfekvésű
              ingatlant vettünk Bodajkon, Szűz Mária ősi kegyhelyén, szolid
              épülettel, melyet némi átalakítással alkalmassá tettünk a
              Néplőiskola céljaira. Sok szeretettel, féltő gonddal rendeztünk el
              mindent, hogy az ingatlan céljának legjobban megfeleljen,
              áldozatos vezető nénik álltak mellénk, hogy a nevelés nagy
              munkáját velünk megosszák és 1941 szeptemberében megnyílt a 36
              növendék számára berendezett otthon. A pettendi otthonban szerzett
              tapasztalatok alapján, de nagyobb körben és kedvezőbb körülmények
              között szolgálja ezen intézményünk a minta-lány nevelésének
              célját, szünidőkben pedig nagy szeretettel várja a pihenni, nagy
              munka után felüdülni vágyó kedves vezető testvéreket.
            </p>
            <a id="9"></a>
            <p className={styles.alcim1}>Vezérkönyv II. kiadása</p>
            <p className={styles.torzs}>
              A munka érdeke azóta számtalan kiadvány elindítását tette
              szükségessé; egymásután adtuk ki színdarabjainkat, lányaink
              számára a sok sikert és II. kiadást megért Szakácskönyvet, az
              erkölcsi tanításokat tartalmazó és közkedvelt "Üzenetet", a vezető
              nénik számára a Vetésforgót, magyar ízlést nevelő szentképeinket,
              karácsonyi és húsvéti lapjainkat.
            </p>
            <p className={styles.torzs}>
              A munkában most elérkeztünk a Vezérkönyv második kiadásához; míg
              ez készül, már indul útjára a Tarisznya hetedik évfolyama.
            </p>
            <p className={styles.alcim1}>Tovább!</p>
            <p className={styles.torzs}>
              Mindezen állomások nem tehetnek pontot a mozgalom történetére. A
              mozgalmat minden nap öntudatosan tovább kell építenie a központnak
              és az egyházmegyei titkároknak a saját lel-kükben, amire tőlünk
              telhetőleg törekszünk; tovább kelt építenie minden egyes vezetőnek
              a saját lelkében, amit mindenkitől nagyon szépen kérünk; és tovább
              kell építenie minden veze-tőnek a lányok lelkében, amiben
              imádsággal és szeretettel igyekszünk segítségükre lenni. Le-het,
              hogy nem mindig fog az Isten ilyen látható eredményekkel munkára
              serkenteni bennün-ket; lehet, hogy nagy egyéni és közös
              áldozatokkal kell később hitet tenni elveink és meggyő-ződésünk
              mellett; lehet az is, hogy látszólagos tétlenségre fog egy időre
              kárhoztatni minket, de egy mindig biztos: Őelőtte nincs
              tehetetlenség; ha Ő akarja, a mozgalomnak további útját is ki
              fogja jelölni az Ő dicsőségére és a jó szándékot sohasem fogja
              jutalom nélkül hagyni.
            </p>
            <a id="10"></a>
            <p className={styles.cim2}>A mozgalom célja</p>
            <p className={`${styles.torzs} ${styles.torzsMarginTop}`}>
              <i>
                Hitükben erős, erkölcsükben tiszta, nemzeti érzésükben
                öntudatos, gazdaságilag képzett családanyákat nevelni a falu
                fiatal lányaiból, hogy rajtuk keresztül építeni segítse a
                katolikus Magyarországot.
              </i>
            </p>
            <a id="11"></a>
            <p className={styles.cim2}>A mozgalom szervezete</p>
            <p className={styles.alcim1}>Actio Catholica</p>
            <p className={styles.torzs}>
              A katolikus falusi lányok szervezkedése, miként minden katolikus
              szervezkedés, kezdettől fogva az A. C. Központjának felügyelete és
              védelme alatt áll. Minden egyházmegyében a szervezkedés felett az
              egyházmegyei A. C. igazgató felügyeletet gyakorol.
            </p>
            <p className={styles.torzs}>
              Megerősítést nyert központunknak az Actio Catholicához való
              tartozása 1936 októberében, mikor is az A. C. Központ azt bízta
              meg országosan a katolikus falusi lányok megszervezésével.
            </p>
            <p className={styles.alcim1}>Nőszövetség.</p>
            <p className={styles.torzs}>
              A Magyar Katolikus Nőegyesületek Országos Szövetsége, röviden
              Katolikus Nőszövetség, mint katolikus női alakulat,
              természetszerűen szintén az A. C.-hoz tartozik és magában foglalja
              a Magyarországon működő összes katolikus nőegyesületeket,
              szervezeteket, szövetségeket. Központunk nemcsak ezen az alapon
              tartozik a Nőszövetség szervező bizottságához. Az egész mozgalom
              éppen a Nőszövetségnek 1935 augusztusában, Pécelen rendezett
              tanfolyamán indult el. Mindnyájan igen hálásak vagyunk támogató
              szeretetéért, mellyel mint jó édesanya, féltve kísérte minden
              lépegetésünket. Ezen az őszinte hálán kívül a katolikus, egységre
              való öntudatos törekvésünk vezetett arra, hogy önálló Szövetséggé
              alakulásunk első pillanatában a Nőszövetség tagegyesületei sorába
              lépjünk.
            </p>
            <a id="12"></a>
            <p className={styles.alcim1}>A Központ</p>
            <p className={styles.torzs}>
              "Központ" alatt rendesen egy nagy adminisztrációs gépezetet
              szoktak érteni, ahol írógépek kattognak, hatalmas könyvekbe írnak,
              iratokat raknak egymásra a mennyezetig érő polcokon. Szeretetnénk,
              ha a mi központunkról más lenne a vélemény.
            </p>
            <p className={styles.torzs}>
              A mi központunk, a Katolikus Lánykörök Szövetsége Bp. XII.
              Pagony-u. 8. sz. alatt tagadhatatlanul szintén iroda. Vannak benne
              íróasztalok, iratszekrények, térképek, melyen kis színes fejű
              gombostűk jelzik a Tarisznya szerint működő egyesületeket az
              ország területén, sőt több írógép is van. De ezek mind mellékes
              dolgok, szükségesek, hasznosak is, de mégsem lényegesek. A mi
              központunk annak a néhány embernek a szíve, szeretetének,
              együttérzésének szimbóluma akik vagy állandóan, vagy időnként
              ebien az irodában dolgoznak. Ezekben a szíveken fut össze minden
              szál, minden hír a kint dolgozókról, minden gondolat, mely a
              továbbépítésre vonatkozik. Ez a központ meleg, testvéri
              együttérzéssel reagál minden örömre, minden gondra, bajra, melyről
              tudomást szerez. Figyel és imádkozik, hogy ott, ahol kell, úgy,
              ahogy kell, akkor, amikor kell, tudjon segíteni; utat vágni és
              építeni és könnyíteni azoknak a helyzetét akiket a jó Isten
              akarata a falukra rendelt vezetőnek kis lánycsapatuk élére. Más
              kívánsága, célja, törekvése nincs, mint szolgálni Istent, Hazát és
              testvért, a szebb és boldogabb jövendőt. A központ munkáját
              egyházi szempontból az egyházi tanácsadó (jelenleg ft. Németh
              János püspöki tanácsos) irányítja és ellenőrzi, akit a
              Hercegprímás Úr Őeminenciája a központ előterjesztésére három év
              időtartamra nevez ki.
            </p>
            <p className={styles.alcim2}>Működése</p>
            <p className={styles.torzs}>
              A vezetők képzése, irányítása és maga a szervezés. A vezetők
              képzésének eszköze a tanfolyam. Irányításuk a kiadványokon,
              levelezésen és látogatásokon keresztül történik. A szervezés
              eszközei a szervező körutak, az egyházmegyei Lánynapok; a
              Tulipántos Láda és Népfőiskola.
            </p>
            <p className={styles.alcim2}>Tanfolyamok</p>
            <p className={styles.torzs}>
              A tanfolyamokon sűrítve elméleti és gyakorlati tudást igyekszünk
              adni a hallgatóknak, de csak annyit, amennyire a katolikus Lánykör
              vezetésében szükségük van; egyes tárgyakból szaktudást nem
              adhatunk az idő rövidsége miatt. Tanfolyamainkat háromnapos zárt
              lelkigyakorlattat kezdjük, hogy a lélek is készséges legyen a
              szociális gondolat befogadására. Igyekszünk valamennyien egy
              családként együtt lakni a tanfolyam tartama alatt, hogy testvéri
              kapcsolat jöjjön létre közöttünk. Reggeli szentmiséinken közösen
              énekelünk és imádkozunk, hogy a liturgián keresztül közelebb
              jussunk az Egyház Szelleméhez és lelkünk meríthessen annak
              kincseiből. A közös étkezések és vacsora utáni meghitt, vidám
              beszélgetések, a közös dalolás és játék szervesen kiegészítik
              egész napunk elméleti és gyakorlati munkáját. A közös esti ima
              szelíd és komoly hangulata pedig biztosítja a nyugodt éjszaka után
              a friss ébredést és további munkaképességet.
            </p>
            <p className={styles.torzs}>
              Előadásaink nem magasan szárnyaló stílusban tartott szónoklatok;
              mi tanulni és dolgozni jövünk össze, nem gyönyörködni mások
              tehetségében. A mi munkánk a falu mindennapi életében zajlik,
              nekünk gyakorlatiaknak, józanoknak, szemfüleseknek kell lennünk,
              hogy minden helyzetben feltaláljuk magunkat és mi maradjunk felül.
              Lelkiségben, tudásban, becsületességben, munkában, de nótázásban,
              táncban, játékban is, ha kell, sőt még csínosságban is (a
              természet adta lehetőségek mértéke szerint), mert másként nem jön
              utánunk a fiatal lánysereg. A tanfolyamon tehát mindezen
              kérdésekkel foglalkoznunk kell, ezért vannak ének-, tánc- és
              játékóráink és ezért rendezünk befejező kis műsoros bemutató
              előadást, hogy ezt is kipróbáljuk a hallgatókkal.
            </p>
            <p className={styles.torzs}>
              A mi tanfolyamunk csak azokat érdekli, akik Isten dicsőségére,
              népünk javára tényleg akarnak foglalkozni a fiatal falusi
              lányokkal. Tehát valamennyien elszánt, komoly és áldozatkész
              emberek, akik dolgozni akarnak. Ezért nem gondoskodunk mi a
              hallgatók számára semmiféle szórakozásról, ezért töltjük ki a
              rövid időt teljesen a tanulás és komoly munka prog-ramjával, ezért
              intézünk el a városban mindenféle megbízatást helyettük, hogy
              lehetőleg még egy fél órára se hagyják el a tanfolyam otthonát,
              mert minden félórának, minden beszélgetés-nek, minden előadásnak
              megvan a maga gyakorlati haszna, melyet kár lenne elmulasztani.
            </p>
            <p className={styles.torzs}>
              Tanfolyamaink tehát nem foglalkoznak egészségüggyel, gazdasági
              problémákkal, pedagógiával, szociálpolitikával, falukutatás
              módszereivel, hanem foglalkoznak a vezetővel, aki mindezen
              kérdésekben irányítani lesz hivatva az egész községet a reája
              bízott lányokon keresztül.
            </p>
            <p className={styles.torzs}>
              Mozgalmi szempontból tanfolyamaink három részre osztályozódnak: az
              I-es, a II-es és III-as sz. tanfolyamokra. Az egyes számú
              tanfolyamra hivatalos minden kedves vezető testvér, aki nálunk
              tanfolyamot még nem hallgatott. Ezen a tanfolyamon ismertetjük a
              mozgalom alapelveit, szempontjainkat, a munka módszerét. Az egyes
              számú tanfolyam a mozgalom ábécéje; amelyik vezető néni ezt el nem
              végzi, nem lehet gyökerestől benne a mozgalom elgondolásaiban,
              szellemében, és munkájában minden egyéni rátermettsége mellett is
              sok gondja, baja lesz. - Az I. sz. tanfolyam igazolványa jogosít a
              II. számún való részvételre. Ez a tanfolyam világnézetet ad és
              legfőbb törekvése: a vezetőnek saját egyénisége kialakításában
              segítségére lenni. A mai időkben gerinces emberekre van szükség,
              akik nem ingadoznak a szellő fuvattataira és "tudják, kinek
              hittek". Az egész évben ránk zúduló sok ellentétes hatást egyszer,
              nyugodtan magunkba nézve és a problémákat szétboncolva,
              ellensúlyoznunk kell, ha komoly katolikusok akarunk lenni és a
              ránk bízottakat példánkkal jó irányba akarjuk vezetni. Ezért nem
              fejeződik be a vezető nevelése az első tanfolyam után, ezért
              hívjuk szeretettel a következő évben is, hogy mindegyikük a
              nagycsaládnak teljes értékű tagja legyen. - A II. számú tanfolyam
              igazolványa egyúttal meghívó a III. számú tanfolyamra. Míg az
              előbbi kétféle tanfolyamot az országunk minél több és távol esőbb
              városában tartjuk, hogy az útiköltség ne tartsa vissza a vezetőket
              a részvételtől, addig III. számú tanfolyamot csak egyet tartank
              évenként. Erre a tanfolyamra csak azok a vezetőtestvérek jönnek,
              akik egészen együtt akarnak dolgozni a központtal és annak
              munkáját a maguk tapasztalatával, tudásával, meglátásaival
              könnyíteni és célszerűbbé tenni akarják. Ez a tanfolyam egyrészt
              világnézeti elirányítást ad még magasabb fokon, másrészt a
              megbeszélések útján a vezető nénik tapasztalatából és
              kívánságaiból építi tovább a mozgalom következő munkaévét.
            </p>
            <p className={styles.alcim2}>Kiadványok</p>
            <p className={styles.torzs}>
              A vezetők munkájának megkönnyítésére, az egyesületi élet állandó
              táplálására és a munka egységességének biztosítására a központ
              "Tarisznya" címen évenként 8-szor, októbertől májusig havonta
              munkagyűjteményt ad ki. Egyes szám ára a jelenlegi papírárak
              mellett 70 f., egész évre 5 P. A Tarisznya tartalmaz 4 előadás
              vázlatot a 4 vasárnapra, egyházi és világi éneket kottával, mesét,
              szavalásra alkalmas költeményeket, játék- és táncleírást és
              kézimunkamintát. A Tarisznya körlevelében állandó kapcsolatot tart
              fenn a vezetőkkel.
            </p>
            <p className={styles.torzs}>
              Vezérkönyvünk tartalmazza a munkára vonatkozó alapvető
              tudnivalókat 4 fejezetben: "A mozgalom", "A vezető", "A munka" és
              "A szórakozás" cím alatt.
            </p>
            <p className={styles.torzs}>
              Vetésforgó címen kis füzetben kiadtuk a vezetők részére a 3 első
              Tarisznya-évfolyam jellemképző előadásait, melyeket minden
              Lánykörben végig kell tanítanunk, hogy lányaink a mozgalom
              alapelveivel tisztában legyenek.
            </p>
            <p className={styles.torzs}>
              Tulipántos Láda címen lányaink számára kéthetenként megjelenő
              képes folyóiratot adunk ki évenként szeptembertől júniusig
              bezárólag. A kis lap szórakoztatva tanít és hála Istennek nagy
              kedveltségnek örvend. Egyes szám ára 10 f., évi előfizetés esetén
              2 P.
            </p>
            <p className={styles.torzs}>
              Süssünk-főzzünk c. szakácskönyvünk hasznos tanácsokat és
              gyakorlatban jól bevált recepteket ad a lányoknak. Ára lányköri
              tagoknak l pengő.
            </p>
            <p className={styles.torzs}>
              Üzenet. Sáfrán Györgyi tanárnő könyve elbeszélések keretében a
              falusi lányok erkölcsi kérdéseit dolgozza fel, igen szerencsés
              kézzel. Ára lányköri tagoknak 1.60 P.
            </p>
            <p className={styles.torzs}>
              Színdarabjainkkal, melyek sajnos, még csekély számúak, a jó
              szellemű, de mégis jól megírt darabok terén mutatkozó nagy hiányt
              akartuk pótolni. "Fél kend az asszonytól" 2 felvonásos. vígjáték a
              részegség ellen; "A pletyka" 3 felvonásos a rágalmazás ellen, "A
              fonóban szól a nóta" 3 felvonásos színmű a lányok könnyűsége,
              maga-kelletése ellen harcol szerencsés eszközökkel.
            </p>
            <p className={styles.torzs}>
              A jóízlés fejlesztéséré hatszínnyomású művészi magyar
              szentképeket, karácsonyi és húsvéti lapokat ad ki központunk; a
              mozgalmi gondolat, terjesztésére pedig propaganda-levelezőlapokat,
              jelvényünkkel díszítve.
            </p>
            <p className={styles.alcim2}>Levelezés</p>
            <p className={styles.torzs}>
              A Lánykör életében felmerülő problémák, nehézségek, melyek
              előbb-utóbb feltétlenül mutatkozni fognak, sokszor csak a "helyi"
              szemüvegen keresztül tűnnek annyira nagynak és megoldhatatlannak.
              Egyszeri levélváltással sokat lehet könnyíteni ezeken a dolgokon s
              a központ és az egyházmegyei titkárok vagy kerületi vezetők
              szeretettel állnak a vezető-testvérek rendelkezésére.
            </p>
            <p className={styles.alcim2}>Látogatás.</p>
            <p className={styles.torzs}>
              Az egyesületi élet felfrissítésében vagy esetleges zavaró
              körülmények elsimításában, valamint egy-egy kerület vezetőinek
              gyűlésért a központ s az egyházmegyei titkárok szívesen részt
              vesznek, ha a plébános úr s a vezető meghívják őket. Időhöz kötött
              látogatásokra jó előre való meghívást kérünk. Esetleges
              útiköltségen (olyan vonalakon, melyekre a látogatónak nincs
              kedvezményes jegye) és ellátáson, vasútra fuvarozáson kívül semmi
              sem terheli a vendéglátó egyesületet. Ilyenkor bőséges alkalom
              nyílik a helyi kisebb-nagyobb nehézségek megbeszélé-sére, egy-egy
              gyakorlati megoldás megtalálására, amelyben a tapasztaltabb és a
              dolgokat messzebbről néző központi testvér a maga helyi gondjaiba
              elmerült vezetőnek nagy segítségére lehet. Sokszor egyetlen
              gondolat vagy egy szívből jött kacagás kettesben felfrissíti a
              mostoha körülmények súlya alatt lankadni készülő, magánosan élő
              tanítónőnek vagy vezetőnek hangulatát. Ezek á látogatások
              természetesen mindig rövidre vannak szabva.
            </p>
            <p className={styles.alcim2}>Szervezés</p>
            <p className={styles.torzs}>
              Szervezés a központ részéről csak ott indulhat meg, ahol erre a
              központot akár a saját, akár az egyházmegyei titkárok személyében
              az egyházi hatóság (püspök, A. C. központ, A. C. egyházmegyei
              igazgató, esperes vagy plébános úr) felkéri. Történtek szervezések
              egyes községekben és esperesi kerületenként. Utóbbi esetben a
              szervezés költségei megoszlanak a kerület plébániai közt. A
              szervező az egyházközségtől lakást, ellátást, továbbfuvarozást és
              esetleg útiköltségének megtérítését kéri.
            </p>
            <p className={styles.alcim2}>Lánynap</p>
            <p className={styles.torzs}>
              Szervező munkánk látható eredménye az egyházmegyei Lánynap,
              melynek hármas célja: hogy hitüket, összetartozásukat és népi
              mivoltukat közösen megvallják a résztvevők. Lánynapunk
              jellegzetessége, hogy szentmisével és közös szentáldozással
              kezdjük és tervszerűen összeállított program szerint kizárólag
              falusi lányok számára rendezzük.
            </p>
            <p className={styles.torzs}>
              A szentmisén valamennyien közösen imádkozzák a liturgikus
              miseimákat és a Szent vagy Uramból énekelnek. Szentmise alatt
              megújítják ígéretüket, melyet a lányköri tagfelvétel alkalmával
              ünnepélyesen tettek. Szentmise után a város katolikus hölgyei vagy
              az egyházközség szeretet reggelivel vendégelik meg a fatusi
              lányokat, akik ezután zászlók alatt, rendezett sorokban átvonulnak
              a városon. Majd az ünnepélyes díszgyűlés következik, melyen az évi
              munkáról számolnak be a többiek képviseletében egy-egy Lánykör
              tagjai s a körülmények szerint változóan vagy ugyanakkor, vagy
              délután folyamán a szabadtéri előadás kezdődik, melyen
              kerületenként (kerületi Lánynapon falunként) népi műsorszámokat
              mutatnak be a nagyközönségnek, ezzel viszonozva a város
              vendégszeretetét, egyben öntudatosan megvallva falusi mivoltukat
              népművészetük legjavának bemutatásával.
            </p>
            <p className={styles.alcim2}>Tulipántos Láda</p>
            <p className={styles.torzs}>
              A szervezkedés szolgálatában áll a Tulipántos Láda, kéthetenként
              megjelenő képes havi folyóirat. Ezen a lapon keresztül egy táborba
              olvad össze az ország bármelyik szélén lakó kato-likus falusi
              lány, mert olvassa egymás levelét, a Lánykörök beszámolóit,
              társainak vers-próbálkozását s ebből megérzi, hogy az a másik is,
              nagyon messze föle, ugyanazért a célért dolgozik, Lánykörbe jár,
              tanul, imádkozik, tehát egy testvér vele. Szépirodalmi és
              szórakoztató cikkei pedig a lányok kedélyét terelik jó irányba.
              (Lásd még Kiadványok-nál.)
            </p>
            <p className={styles.alcim2}>Népfőiskola</p>
            <p className={styles.torzs}>
              Ma már el nem kerülhető, súlyosan időszerű feladat a magyar falu
              jövőjével foglalkozni. Erős kézzel nevelik a falu levente ifjait,
              jól-rosszul vezetik a meglett férfiait. Csak a falu lányai,
              asszonyai maradtak eddig magukra, nekik nem szabott senki a
              katolikus magyar tradíciókon alapuló új utat, eléjük nem állított
              senki közvetlen elérhető példát, nekik nem mondta: meg senki,
              hogyan mentsék otthonukat, hazájukat, hogyan fogóddzanak bele az
              Egyház támogató, célhoz juttató bástyafalába.
            </p>
            <p className={styles.torzs}>
              Pedig, hogy mennyire megérett a falusi leánymozgalom kérdése,
              igazolja, hogy 6 év alatt 1.200 falunak mintegy 60.000 lánya
              lépett a sok helyen máról-holnapra megalakult Katolikus
              Lánykörökbe s 1.200 vezető állt szívvel-lélekkel, s növekvő
              felkészültséggel a falusi lányok élére.
            </p>
            <p className={styles.torzs}>
              Nehéz a feladat, de Istentől kapott a cél: hitükben erős,
              erkölcsükben tiszta, nemzeti érzésükben öntudatos és gazdaságilag
              képzett családanyákat nevelni. A vasárnap délutáni gyűlések
              időtartama pedig kevés. Hogyan tudná a vezető a helyes és
              céltudatos külső és belső életszokásokat a lányokba sürgősen és
              gyökeresen beleplántálni és életképesen állandósítani, ha csak
              hetenként egyszer, pár óra hosszat lehet együtt a vezetettekkel?
              Töltse minden szabadidejét sorban a lányai házánál? Vagy a lányok
              egy-egy csoportja keresse fel a vezetőt sokszor otthonában? Ez a
              legtöbbször keresztülvihetetlen s a munka futólagos, az eredmény
              bizonytalan lesz.
            </p>
            <p className={styles.torzs}>
              Lenne csak legalább egy mintalánya, mintaasszonya a falunak,
              akihez bármikor könnyebben és bizalmasabban fordulhatnak a lány-
              illetve asszonytársai, aki több tudásával, nagyobb szorgalmával,
              lelki finomultságával jó példát, állandó vezetést tud adni a
              többieknek! Mennyivel könnyebben, gyorsabban, maradandóbban
              vezetne eredményhez a Lánykörök ne-mes munkája,
            </p>
            <p className={styles.torzs}>
              Van egy intézmény, amely kizárólag a falusi minta-lányok nevelését
              tűzte ki célul: ez a pettendi katolikus Lágyotthon utóda, a
              bodajki Kalász-Népfőiskola, melyben a vezető és a falusi lányok
              együtt lehetnek egész nap, heteken, hónapokon át, mintha egy
              családban, igazán otthon volnának. A Népfőiskola növendékei a
              vezetők közvetlen példája nyomán folytonosan látnak, hallanak,
              gyakorolnak, mindinkább kinyílik a szívük és értelmük,
              megügyesedik a kezük s a három hónapi szeretetteljes, komoly és
              mégis nagyon kedélyes, együttlét után észrevehető, szembetűnő és
              rendkívül vonzó a leendő mintalánnyal történt változás.
            </p>
            <p className={styles.torzs}>
              A Népfőiskola a Lánykörök eszközeivel törekszik a közös cél
              elérésére. A vezetők valláserkölcsi befolyásukkal napról-napra
              terv- és alkalomszerűen nevelik a lányukban a mély és őszinte
              vallásosságot. Megtanítják őket Istent mindenben észrevenni, földi
              rendeltetésüket megismerni, az örök cél felé tudatosan törekedni,
              Egyháznak és hazának hívő erkölcsös és hűséges tagjává lenni.
            </p>
            <p className={styles.torzs}>
              A hónapokon át tartó közös imádság, munka és szórakozás, a
              hetenként változó beosztás, melyet a lányok felelősség mellett
              vesznek és adnak át, a szociális erények gyakorlása, mely az esti
              lelkiismeretvizsgálat tárgyát képezi, s a hetenként másnál levő
              jutalomkép, melyet az kap meg, aki a felebaráti szeretet
              gyakorlásában, a szelídségben és türelemben leginkább kitűnt,
              céltudatosan neveli a lányokban a szociális érzéket.
            </p>
            <p className={styles.torzs}>
              Ugyancsak a Népfőiskolában vihető keresztül legjobban és
              leggyakorlatiasabban a Lánykörök fontos feladata, hogy
              gazdaságilag, képzett családanyákat neveljenek. A három hónapos
              tanfolyamok mindennapi tervszerű oktatása, a beosztott háztartási
              és gazdasági munkagyakorlatok végzése, a háziipari munkák
              elsajátítása bőségesen gyarapítja a lányok ismereteit, melyek
              által alkalmasabbak lesznek saját otthonuk gazdagítására és
              esetleg a falujukban kínátkozó kenyérkereseti lehetőségre.
            </p>
            <p className={styles.torzs}>
              A Népfőiskola hosszan elnyúló, szép fehérre meszelt kúria, benne
              tágas termek várják otthonosan a tanulni vágyó leányokat. A nagy
              előadóteremben minden lánynak külön kis fehérre festett asztalkája
              van fiókkal a füzetek számára; külön széke és kis zsámolya, melyet
              ha kinyílik a nagy szárnyas ajtó és kápolnává szélesül a terem,
              térdeplőzsámolynak használ. A munkateremben barátságos nagy
              cserépkályha körül folyik a varrás, kézimunka, esténként pedig ott
              gyűlnek össze szórakozni, mesélgetni, vasárnapi ott írják
              leveleiket a lányok. Három tágas hálóterem fehér vaságyakkal;
              szerte az országból sok Lánykör szerető adományából összeadott
              párnákkal, egyöntetű szép paplanokkal, ágyterítőkkel olyan
              barátságos látványt nyújt, hogy még a honvágyat is elfelejti, aki
              egyszer idekerül. A konyha óriási tűzhelyével várja a tanulókat s
              a barátságos ebédlő a maga kőpadlójával s az asztalok mellett
              sorakozó sok ülőkével ugyancsak nagyszerű nevelőeszköz; nemcsak a
              terítés, tálalás, evőeszköz forgatás megtanulására, hanem a
              csendes, finom leülésre; felállásra is. A kertben s gazdasági
              udvarban pedig minden arra szolgál, hogy a leányok minél több
              gyakorlati, hasznos tudást vihessenek magukkal haza. - Művészi kis
              kápolnánkban ott virraszt az Örök Szeretet, az Eucharisztiában
              jelenlévő Úr Jézus, hogy megáldja az ott élő lányok és vezetők
              minden jószáradékát, munkáját; törekvését. - Bodajk község pedig
              régi, ismert kegyhely. Úgy tudják, hogy maga szent István is
              sokszor járt ki ide Fehérvárról, gyalog, zarándokolva, Mária
              kegytemplomába. A mostani kegytemplom már nem a régi ugyan, de
              most is szeretettel várja a mindenhonnan gyakran érkező
              zarándokokat és a "Szentkút" bővizű forrása állandóan folyik a
              kegyelmek áradásának jeleképpen. Hogy a Népfőiskola éppen itt,
              Szűz Mária kegyhelyén talált otthont, jelképe annak, hogy csakis a
              tiszta katolikus és magyar hagyományokon épülhet fel, ezekből
              kiindulva az Istenáldott jövendő.
            </p>
            <p className={styles.torzs}>
              A Népfőiskola növendékeinek napirendjében az imádság, tanulás,
              gyakorlati munka éppen úgy szerepel, mint a rendszeres pihenés és
              szórakozás, azonban mindenből csak annyi, amennyi egy értelmes,
              józan, rendes katolikus falusi asszony kiegyensúlyozott életéhez
              feltétlenül szükséges. Nagyon vigyázunk arra, hogy a leányok, akik
              itt járnak, ne váljanak kisasszonyokká, hogy a tanultak ne tegyék
              őket felfuvalkodottá, hanem a több tudás számukra több
              felelősséget jelentsen a többiekkel szemben. Akik innen
              kikerülnek, nem lesznek szakképzettek egy-egy foglalkozási ágban,
              tehát nem válthatnak pl., ipart a varrásra, de azt, amire otthon
              szükségük van, megtanulják.
            </p>
            <p className={styles.torzs}>
              A Népfőiskolára felvételt nyerhet minden tanfolyamra 36 jó
              erkölcsű, egészséges, 16 -20 éves, VI-VIII elemit végzett falusi
              lány, akit plébánosa és a Lánykör vezetője ajánl s egészségi
              állapotáról orvosi bizonyítványt hoz és iskolai bizonyítványa
              kielégítő. A tanítás és ellátás havi díja pillanatnyilag 30 P,
              mely összeg a három hónapra egyszerre előre fizetendő s esetleges
              korábbi távozás esetén sem igényelhet senki visszatérítést. A
              tanfolyamok kezdete szeptember 15., január 3., április 3. Adja a
              jó Isten, hogy ez az új kezdeményezés megfeleljen a hozzá fűzött
              várakozásoknak és igazán komoly, öntudatos és képzett lányokat
              neveljen Egyháznak és hazának egyaránt. És adja Isten, hogy az
              első Kalász-Népfőiskolát kövesse minél hamarabb minden
              egyházmegyében egy-egy testvérintézet, melyek egymásután képezzék
              ki a falvak leendő minta-asszonyait, a családi tűzhelynek, a
              magyar jövendőnek és a lélek kincseinek felkészült és legméltóbb
              őrzőit.
            </p>
            <a id="13"></a>
            <p className={styles.alcim2}>"Falu" háziipari bolt</p>
            <img
              src="/assets/images/vezerkonyv/haziipari_bolt.jpg"
              alt="haziipari_bolt.jpg"
              className={`${styles.vezerkonyvKep} ${styles.jobbSzovegIllusztracio}`}
            />
            <p className={styles.torzs}>
              Mozgalmunk öntudatosan törekszik a népi értékek felkutatására és
              megkedveltetésére. Milyen sokat jelent az, ha a lány megbecsüli a
              régiek fonó-szővő-hímző művészetét, ha nemcsak a "modern"
              anyagokra tud kézimunkázni és nem csak a falvédők készítésében
              merül ki tudománya; hanem élvezettel, örömmel varrja a régi népi
              hímzéseket, felhasználja a háziipa-rra alkalmas nyersanyagokat és
              keresni tud a hosszú téli esté-ken is! - Hogy a népi kézimunka és
              háziipar fellendülését elő-segítse, a központ még abban az időben,
              mikor ez kevéssé volt divat, vagy legalábbis nem a falu javát
              szolgálta, megnyitotta kis háziipari boltját, hogy a lá-nyoknak
              keresetet, otthonmara-dást biztosítson, a jó ízlésű városi
              közönséget pedig hiteles népi munkákkal szolgálhassa ki és ízlését
              nevelje. - A kis bolt, minthogy egyáltalában nem nyerészkedésre
              van berendezve, hanem tisztességes munkabért ad és elveket
              képvisel, hallat-lan anyagi nehézségekkel küzdött és küzd részben
              még ma is. Ezért nem is tud még teljes mértékben elehet tenni
              kitűzött céljának. Azonban szívesen vesz át forgalmi értékű, tehát
              pontos, szép kézimunkákat, háncs és sásmunkát, rongyszőnyeget,
              megegyezés szerint bizományba vagy készpénzért. Újabban pedig ez a
              kis bolt bonyolítja le a Szövetség egyenruha akcióját, valamint
              közvetíti az érdeklődőknek a Kalász-szövöde különféle szőtteseit s
              a legkülönbözőbb vidékek népi cserép-készítményeit. Aki szépet
              akar látni, ne mulassza el megnézni a Falu háziipari boltot,
              Budapest, II. Margit körút 57.
            </p>
            <p className={styles.alcim2}>A Központ anyagi helyzete</p>
            <p className={styles.torzs}>
              Központunkat anyagiakkal kezdettől fogva önkéntes áldozatkészség
              látta el és látja el nagyrészt még ma is. A két keze munkájával,
              kiadványokkal, intézményekkel igyekszik megtoldani forgótőkéjét,
              bízva a közmondás igazságában: segíts magadon s az Isten is
              megsegít. - Hogy ilyen körülmények közt nem bővelkedhetik, azt nem
              kell bizonyítani. De nincs is szükség többre, csak annyira, hogy a
              munka meg ne álljon és a természetes fejlődés lehetősége
              biztosítva legyen.
            </p>
            <p className={styles.torzs}>
              A Lánykörök a központnak semmiféle tagdíjat nem tartoznak fizetni.
              Azok az egyesületek; melyek már egy éve működnek és úgy találják,
              hogy a központ munkája megérdemli a segítést központi hozzájárulás
              címén évi 12.- P-t küldenek be. Azokban az egyházmegyékben,
              melyekben egyházmegyei titkárok irányítják a munkát, ez a
              hozzájárulás az ő kiadásaik fedezésére szolgál. Az ilyen értelmű
              segítséget a központ hálásan veszi, de egyáltalában nem intézi
              kevesebb szeretettel azok ügyeit, akik valamilyen oknál fogva ezt
              a hozzájárulást nem küldik be. Az mindenesetre igen jó volna, ha
              az egyesületek válaszra váró leveleikhez válaszbélyeget
              mellékelnének - kint élők nem is képzelik, milyen tetemes összeget
              tesz ki egyhavi postaköltség is! - de ha nem, teszik, akkor is
              kapnak választ minden levelükre. A központ csak azt kéri nagy
              szeretettel és nyomatékosan a vezetőktől, hogy a megrendelt
              folyóínatok és kiadványok árát pontosan és hiánytalanul küldjék be
              s központjuk gondjait enyhítendő, terjesszék a megfelelő
              kiadványokat és a Tulipántos Ládát a leányok között.
            </p>
            <a id="14"></a>
            <p className={styles.alcim1}>
              Egyházmegyei titkárok, egyházmegyei lelkiigazgatók
            </p>
            <p className={styles.torzs}>
              Isten akaratából a munka napról-napra nőtt és szükségessé vált,
              hogy a központ gondjait megértő, testvéri szívek is magukévá
              tegyék. Azután az ország sajátos tájainak a különböző egyházmegyék
              keretében lassankint igénye lett, hogy külön csak nekik élő
              kismamák vegyék kezükbe a helyi Lánykörök ügyét s a vezető
              néniknek minden bújában-örömében osztozzanak. Ki-ki a saját
              földjén, ahonnét származott, ismerheti legjobban az előnyöket,
              nehézségeket, az ottani néplelket s így szűkebb hazájában a
              nagyobb távlatok szem előtt tartásával jó szolgálatokat tehet. A
              munka természetes fejtődése hozta magával a mozgalom
              decentralizálását, s így csaknem minden egyházmegye Lányköreinek
              élére egyházmegyei titkárokat állítottunk. Az egyházmegyei
              titkárokat a megyéspüspök úr a központ előterjesztésére nevezi ki.
              Az ő feladatuk az egyházmegye Lányköreinek megszervezése,
              látogatásai levelezéssel történő irányítása, kerületi gyűléseken
              való részvétel espereskerületi és egyházmegyei Lánynapok rendezése
              és évenként nyáron vezetőképző tanfolyam szervezése. Mindnyájan
              szolgáló szeretettel igyekszenek a központtal együtt a vezető
              nénik s lányok segítségére lenni és munkájukkal a püspök urak,
              bizalmát és megbecsülését kiérdemelni.
            </p>
            <p className={styles.torzs}>
              Az egyházmegyei titkárok mellett az Egyház irányító és ellenőrző
              szerepét gyakorolják az egyházmegyei lelki igazgatók, akiket a
              központ felkérése alapján szintén a megyéspüspök urak állítanak az
              egyházmegyék étére. Az egyházmegyei lelkiigazgatók az
              espereskerületi és helyi igazgatókkal együtt dolgoznak és az
              egyházmegye papságának mozgalmi ügyekben nagy szeretettel állnak
              rendelkezésére; ha nehézségek adódnának, azokat megoldják, a helyi
              Lányköröket látogatják, a katekizmus-versenyeken kérdezők, a
              Lánykörök lelkigyakorlatait tartják, espereskerületi
              vezetőgyűléseken elnökölnek, espereskerületi és egyházmegyei
              Lánynapokon részt vesznek s végül az egyházmegyei vezetőképző
              tanfolyamokon lelkigyakorlatot tartanak és szellemi, egyházi
              ellenőrzést gyakorolnak.
            </p>
            <p className={styles.torzs}>
              Az egyházmegyei lelkiigazgatók és titkárok munkájának
              megkönnyítésére egyházmegyénként minden espereskerület élére a
              megyéspüspök urak a központ felterjesztésére kerületi
              lelkiigazgatókat és kerületi női vezetőket neveznek ki. Feladatuk
              a kerület munkájának irányítása, őszi, tavaszi kerületi vezetők
              gyűlésén részvétel, a kerület őszi és tavaszi gyűlésének
              megrendezése. A kerületi lelkiigazgatók részt vesznek lehetőség
              szerint a helyi katekizmus-versenyeken, tagfelvételen, kerületi
              Lánynapon; beszédeket mondanak azokon s a helyi lányköri igazgatók
              és vezetők felkérésére nagyböjtben vagy tagfelvétel előtt
              lelkigyakorlatot tartanak az egyesületekben. - A női kerületi
              vezetők az egyházmegyei titkárt munkájában szervezéssel,
              látogatásokkal, levelezéssel segítik és meleg, baráti lélekkel
              közös frontot alkotnak vele minden nemes vállalkozásában.
            </p>
            <p className={styles.torzs}>
              Az egyházmegyei titkárok a központi vezetőséggel együtt
              továbbfejlődésük érdekében évenként két tanulmányi héten, zárt
              lelkigyakorlaton és az un: III. sz. vezérkari tanfolyamon vesznek
              részt. Ez utóbbin együtt tanulnak velük az espereskerületi
              vezetők. Közösen építjük tovább a mozgalmat, s az utódok nevelése
              is ezen a tanfolyamon történik.
            </p>
            <p className={styles.alcim1}>
              A lelkipásztorkodó papság állásfoglalása a mozgalommal szemben
            </p>
            <p className={styles.torzs}>
              A kallódó, gazdátlanul ténfergő és sok erkölcsi veszélynek kitett
              falusi lányok sorsa nagyon sok lelkipásztor szívét aggodalommal
              töltötte el. A munka természeténél fogva mindennapi és állandó
              nevelésüket kezükbe nem vehették és így a legtöbb helyen örömmel
              köszöntötték a meginduló Kalász mozgalmat, amely a jelek szerint
              ennek a rétegnek lelki és szellemi gondozására mindenképen
              alkalmas. Örömmel fogadták az egyházmegyei titkárt, aki a mozgalom
              szellemében megszervezte a lányokat, élükre a plébános urakkal
              egyetértve alkalmas, helyi vezető nénit állított, akivel továbbra
              is állandó kapcsolatban maradt. Akik a katolikus és magyar
              szervezkedést sürgették, szívesen fogadták a mozgalom nevelői
              programját és felismerték annak jelentőségét az egyházközségi és
              gyakorlati élet szempontjából. Huzamosabb együttdolgozás után
              kitűnt, hogy a mozgalom egyáltalában nem akar a helyi
              egyházközségi ügyekbe beleszólni és főleg nem akar "dirigálni",
              hanem nyíltan törekszik arra, hogy a leányok egyénileg és
              együttesen minél áldozatkészebben belekapcsolódjanak az
              egyházközség életébe. A tanfolyamokon a vezetők figyelmét mindig
              felhívjuk arra, hogy csak az Egyház képviselőivel együttdolgozva,
              irányításukat elfogadva lehet a mi munkánk Isten előtt kedves. Az
              egyházmegyei titkár kismama-hívatása összekapcsolja az egyes
              plébániák Lányköreit, vezetőit és összekötő aranyhidat kovácsol az
              egyházmegyétől a központig. Így bennük sem láthatnak a helyi
              vezetők idegen, hivatalos és fölényeskedni akaró szervet, hanem
              szerető testvéreket. Bízunk abban, hogy a mozgalom terjedésével az
              ország főtisztelendő papsága mind jobban célkitűzéseink mellé áll
              és munkánkat lelkipásztori szeretetével és segítségével támogatja.
            </p>
            <p className={styles.alcim1}>Kerületi vezetők</p>
            <p className={styles.torzs}>
              A központ és egyházmegyei titkár minden egyesülethez nem tud
              eljutni, minden egyesület minden gondját nehezen tudná magáévá
              tenni, hiszen munkaköre napról-napra szélesedik. Nagyon bevált
              módszer a gondozás munkájának megosztása minden beszervezett
              egyházmegyében az esperes-kerületenként megválasztott kerületi
              vezetőkkel, akik közelebb lévén, könnyen támogathatják a hozzájuk
              tartozó Lányköröket, nehézségeikben segíthetik és a nagy közös
              rendezésekben a központ irányítása szerinti vezető szerepet
              töltenek be. Közvetítők a vezetők és az egyházmegyei titkárok,
              valamint a központ között, arany középutat képviselve. -
              Természetes, hogy a kerületi vezetőnek a lányköri munkára
              képzettnek tevékeny, barátságos egyéniségnek és időben,
              anyagiakban némileg függetlennek kell lennie, hogy áldozatos és
              kényes feladatának mindenkor megfelelhessen.
            </p>
            <p className={styles.alcim1}>Helyi vezetők</p>
            <p className={styles.torzs}>
              A Lánykör vezetője csak nő lehet. Feladata a mozgalmat a lányokon
              keresztül építeni. Ezen munkájában Isten és emberek előtt
              egymagában felelős, amiből következik, hogy minden Lánykörnek csak
              egy felelős vezetője lehet. A Lánykör vezetőjét a helybeli
              plébános a központtal egyetértve kéri fel.
            </p>
            <p className={styles.torzs}>
              A mozgalmat a falu társadalma előtt a vezető képviseli. Tőle függ,
              hogyan ítélik meg a Lánykört, annak működését és az egész
              mozgalmat. Ezért feltétlenül szükséges, hogy minden vezető
              legalább egy-két nyári tanfolyamon részt vegyen, hogy tudatos
              biztonsággal és felkészültséggel álljon nehéz és felelősségteljes
              őrhelyén.
            </p>
            <a id="15"></a>
            <p className={styles.alcim1}>A Lánykör</p>
            <img
              src="/assets/images/vezerkonyv/medgyesegyhaz.jpg"
              alt="medgyesegyhaz.jpg"
              className={`${styles.vezerkonyvKep} ${styles.balSzovegIllusztracio}`}
            />
            <p className={styles.torzs}>
              A mozgalom legkisebb egysége a Lánykör, amint a társadalom
              legkisebb egysége a család. Más szavakkal: a lányokkal való
              foglalkozás kerete a mozgalomban. Hogy ennek a keretnek milyen
              nevet adunk, az teljesen közömbös a mozgalom szempontjából, ha a
              foglalkozás a mozgalom szellemében történik. Lényeg, hogy mind
              valláserkölcsi, mind gazdasági, kulturális és szociális irányban
              foglal-koztassuk a lányokat. Tehát lehet Egy-házközségi
              lánycsoport, Jézus Szíve szövetség, Mária Társulat, Kongregáció
              vagy Lánykör, ha a fenti feltételeknek megfelel. Az alább írottak
              min-denféle katolikus lánycsoport ideális működése szempontjából
              feltétlenül szükségesek.
            </p>
            <p className={styles.alcim2}>Megalakítás.</p>
            <p className={styles.torzs}>
              A megalakítás előtt vezetőt keresünk; arra alkalmas egyéniség
              híján inkább ne alakítsunk Lánykört. Ha egyszer a lányok csalódtak
              az egyesületben, hosszú évekig nem tudják többé összehozni őket.
            </p>
            <p className={styles.torzs}>
              Alakulásra a lányokat összetoborozzuk. A plébános urat megkérjük,
              hogy a templomban többször hirdesse ki, és esetleg, hogy vonzóbb
              legyen, hangsúlyozva, hogy csak fiatal jöhet. Nem kell a célt
              előre megmondani, hogy a kíváncsiság is hozta a lányokat. Az
              összegyűlt leánysereggel rövid beszédben ismertetjük a Lánykör
              célját. A hitbuzgalmi részt nem hangsúlyozzuk nagyon, mert ettől
              megijednek. Könnyebb ugyanis a kedéllyel odaédesgetett lányokat
              komoly útra terelni, mint a komolysággal elijesztetteket újra a
              Lánykörbe vonzani. A beszéd után összeírjuk az önként jelentkező
              tagjelölteket. Természetes, hogy az alakuló gyűlésen feliratkozott
              lányok 50 %-a a későbbi idők folyamán elmarad, de ez senkit se
              hangoljon le. Ha a Lánykör hivatása magaslatán fog állni, a falu
              minden jóérzésű lánya úgyis lassan hozzá csatlakozik, aki pedig
              nem jóérzésű, jobb, ha távol marad a többiektől. Ha az összeírás
              megtörtént, azonnal dalolni és játszani kezdünk a lányokkal, mert
              ez elengedhetetlen feltétele az eleven egyesületi életnek. Az ily
              módon kiváló hangulatban eltelt alakuló gyűlés után bizakodva
              nézhetünk a Lánykör eredményes működése elé.{" "}
            </p>
            <p className={styles.alcim2}>Közvélemény</p>
            <p className={styles.torzs}>
              Ugyanaznap, mikor a lányok gyűlése lefolyt, estére meghívjuk az
              édesanyákat is és egyszerű, őszinte, komoly szavakkal
              megmagyarázzuk nekik, hogy a Lánykör munkája jó szándékú, nekik
              segít leányaik nevelésében és a rossztól való megőrzésükben. A mai
              fiatalokra sok olyan probléma megoldása vár, melyet az idősebbek
              még nem ismertek, éppen ezért tanácsot sem tudnak benne adni. Itt
              jön segítségükre a Lánykör. Részleteket mondunk e1 a Lánykör
              működéséből és meghívjuk őket, hogy itt-ott nézzenek el vasárnap
              délután oda. Nekik is megmondjuk; hogy a lányköri tagok tagdíjat
              nem fizetnek. - Az édesanyák összehívására azért van szükség, hogy
              a falu közvéleményét a Lánykör gondolatának megnyerhessük.
            </p>
            <a id="16"></a>

            <p className={styles.alcim2}>
              <center>Szervező beszéd.</center>
            </p>

            <p className={styles.torzs}>
              Kedves lányok! - Elmondom nektek, mi történt egyszer a méhesben.
              Ősz felé járt az idő s egy nagy egér fázott-a kertben. Gondolta:
              "Bebújok egy méhkasba. Ott jó meleg van és finom ennivalóm is lesz
              egész télen át." Be is ment egy óvatlan pillanatban s a kis méhek
              nagyon megijedtek tőle. Féltették az életüket, féltették a téli
              elemózsiát. De nem sokáig. Összefogtak tízen, a legbátrabbak és
              egyszerre ütötték fullánkjukat a tolakodó egérbe. Az egér
              elpusztult. - Igen ám, de az egér még így is nagy bajt jelentett
              számukra! Ha elkezd romlani, megmérgezi a levegőt és mindnyájan
              elpusztulnak. - Népgyűlést hívtak össze a kasba és nagy
              aggodalommal emlegették kicsinységüket, erőtlenségüket a szörnyű
              veszedelemmel szemben. Már majdnem elcsüggedtek, mikor egy kis
              csinos, szorgalmas méhecske, vékony hangját megerőltetve,
              szónokolni kezdett, Ezt mondta: "Testvérek, ne csüggedjünk!
              Akármilyen kicsinyek is vagyunk, mégis mennyit dolgoztunk a
              nyáron! Gazdánk is jó pénzt kap a mézből, magunk is el vagyunk
              látva élelemmel egész télre. Mennyit építettünk, menynyit
              gyűjtöttünk mi apró, gyenge kis bogarak! Csak nem fogunk most
              meghátrálni a veszély láttán? Mindnyájan, akik itt vagyunk,
              hozzunk egy szemernyi viaszkot és azzal betapasztjuk az egeret!" -
              Képzelhetitek, mekkora tapsolás tört ki erre a kasban, hiszen a
              méheknek hat lábuk van és mind a hattal egyszerre tapsolták a kis
              szónokot. De a tanácsát is megfogadták ám. Mindnyájan hoztak
              viaszkot, tízen végezték a tapasztalást és estére él is készültek
              a nagy munkával. - Mikor aztán megjött a tavasz, kirepültek
              boldogan a napra s a méhész takarítás közben csodálkozva látta a
              befalazott s így ártalmatlanná tett egeret. - Tanulhatnánk tőlük!
            </p>
            <p className={styles.torzs}>
              Leányok, mireánk is leselkednek csúnya, nagy veszélyek, a mi kis
              méhkasunk, családunk, faiunk, nemzetünk békéjét és életét is
              fenyegetik tolakodó és falánk egerek, melyek ellen védekeznünk
              kell, közös akarattal.
            </p>
            <p className={styles.torzs}>
              Gondoljátok csak el, mivé leszünk rövidesen, ha a vallásosság
              kivész az emberekből, ha nem fogják tisztelni az Istent, az Ő
              parancsait és azok hirdetőjét, tanítóját: az Egyházat. Pl. ha nem
              kell tisztelni a szülőket, a gyermekek örülni fognak; ha nem kell
              róluk gondoskodni. Nem fognak nekik a munkában segíteni s
              hasznukat nem látják, elhagyják őket, rosszul bánnak velük, sőt
              meg is ölik; mint azt már eddig sokan megteszik, akik előtt nem
              áll törvényként az Isten szent parancsa. De mivé lesztek ti,
              kedves leányok, ha az erkölcstelenség; a szemérmetlen élet
              szokássá tesz; ha nem lesz törvény, mely a ti tisztaságotokat
              megvédje, ha közprédák lesztek a romlott férfiak között, vagy
              házasságotok is csak játék lesz mások szemében, és férjeteket
              bárki elszeretheti, pénzét elveheti és titeket, derék asszonyokat
              kilökhet bűntelenül családotokból. Ilyet is elég gyakran hallunk
              manapság. Vagy képzeljétek el, hogy beüt közénk az a nagy
              boldogító egyenlőség, amelyről annyit beszélnek mostanában
              nagyszájú férfiak és asszonyok - persze csak meghitt társaságban
              és sötétben - és az a szép selyemkendő, mely rajtatok van, nem
              lesz a tietek, hanem fejére kötheti bárki, akinek kedve van hozzá,
              mért, hiszen minden közös tulajdon. Mi lesz, ha a földeteken más
              fog aratni, olyan aki nem vetett, ha a kamrátokból más fog élni,
              olyan, aki nem szerzett, ha az ágyatokban más fog aludni, olyan,
              aki nem dolgozott meg érte és semmi sem lesz a tietek, mert minden
              közös lesz. Nem lehet majd új ruhát vennetek, új cipőben járnotok,
              csak olyanban, amelyet mindenkinek egyformát (zubbonyt és
              bakancsot) a gyár készít. Mert ha mindenki egyforma, úgy illik,
              hogy mindenki egyforma ruhában járjon. Hát azon gondolkoztatok-e
              már, hogy mi lenne, ha a hivatalokban, jegyzővel, bíróval,
              üzletben, vonaton, orvossal, bábával, gyógyszertárban, de még az
              iskolában is idegen nyelven kellene beszélni, ha a gyermekek
              idegen nyelven tanulnának és a tulajdon szüleik nem értenék, hogy
              mit beszélnek. Ha idegenek lennénk a saját országunkban, a saját
              földünkön, a saját házunkban s este nem tudnánk, hogy holnap
              reggel itt ébredhetünk-e fel, ahol lefeküdtünk. Pedig a határokon
              túl így van ez mindenütt s bennünket is éppen úgy fenyeget ez a
              sors. Úgy-e, hogy nem volna jó? Úgy-e, hogy kellene valamit
              csinálni ellene!
            </p>
            <p className={styles.torzs}>
              Egy lány magában gyenge és tehetetlen, mint egy kis méhecske, de
              tíz bátor lány egy községben már sokat tehet. Ahhoz pedig, hogy a
              szomszéd faluból se hozhassa el hozzánk a szél a rothadás szagát -
              hiszen attól magunk is betegek leszünk" pedig csak a szomszéd
              faluban van a baj - száz, ezer, tízezer lány kell. Minden
              katolikus fiatal lánynak egy táborban kell lennie; össze kell
              tartoznia és együtt dolgoznia, hogy a vallásosabb, becsületesebb s
              így boldogabb és gazdagabb Magyarországot felépíthessük!
            </p>
            <p className={styles.torzs}>
              Miért éppen a katolikus lányoknak kelt összefogniuk? Mert a
              katolikus vallás az egyetlen, mely tanításából semmit sem enged,
              mely ragaszkodik az Isten-adta törvényekhez mindenféle hatalommal
              szemben, de meg is adja híveinek a szentségeken át az erőt, hogy
              ezeket a parancsokat minden helyzetben megtarthassák. Csak mi
              katolikusok vagyunk olyan szerencsések és boldogok az egész
              világon, hogy akár naponkint egyesülhetünk a szentáldozásban az
              élő, igaz Istennel s így akár mindennap megszerezhetjük magunknak
              annak a 24 órának minden kísértésével, szenvedésével, gondjával
              szemben az orvosságot.
            </p>
            <p className={styles.torzs}>
              Miért éppen a fiataloknak kell összefogniuk? Azért lányok mert a
              fiatatok még nem csalódtak annyit, mint az öregek, azok még tudnak
              hinni, bízni egy boldogabb, szebb jövendőben. A fiatalok nem
              fáradtak még, az erejüket szeretik kimutatni s ezzel az erővel
              áldozatot is hozni, dolgozni is a szép eszmékért. Végül a fiatalok
              még szívesen tanulnak, hallgatnak a másikra; egy ilyen nagy
              nemzetmentő feladatot pedig csak helyes irányítás elfogadásával
              lehet megoldani.
            </p>
            <p className={styles.torzs}>
              S hogy miért éppen a lányokra vár ez a nagy feladat, holott eddig
              a hazát mindig a férfiak, a katonák védték, javáról a férfiak,
              államfők gondoskodtak? Azért lányok, mert akkor még nem lopódzott
              ennyire közei hozzánk a romlás, nem férkőzött úgy közénk az
              ellenség, mint most. Most nagyobb hősiesség kell, mint a katonáké,
              nagyobb bölcsesség, mint az államférfiaké, most a családot kell
              megmenteni a rossztól. A csatád pedig az édesanyák kezében van.
            </p>
            <p className={styles.torzs}>
              Bizonyosan észrevettétek már ti is, hogy milyen nagy hatással
              vagytok a legényekre. Mennyire megfigyelik viselkedésteket,
              beszédeteket, öltözködésteket, munkátokat és - láthattátok -
              aszerint is bánnak veletek. Már most, lányként is vezetni tudjátok
              a legényeket jó vagy rossz irányba, hát még ha komoly, okos,
              feleségek lesztek! Minden jóravaló asszonyra hallgat az ura,
              megbecsüli, gondjait vele megbeszéli. Milyen sok jót tehettek majd
              ti is annak idején férjeiteken keresztül. És ha a jó Isten a
              legnagyobb méltóágra emel benneteket és édesanyák lesztek, a ti
              anyakezetek fogja kialakítani gyermekeitek lelkét, gondolkozását,
              becsületét.
            </p>
            <p className={styles.torzs}>
              Ugye most már látjátok, milyen fontos szerep vár rátok és,
              szívesen készülnétek arra elő, ha valaki segítene benne, ha valaki
              megmondaná, mint a mesében az a kicsi méhecske, hogy mit kell most
              cselekedni?
            </p>
            <p className={styles.torzs}>
              Azt kérdezitek, hogy miért kell valamennyi lánynak együtt lennie?
              Lányok! A múltkorában azt olvastam egy újságban, hogy Amerikának a
              legnagyobb és leggyorsabb vonatja kénytelen volt nyílt pályán
              három napig vesztegelni - hernyók miatt. - Az történt ugyanis,
              hogy az egyik termékeny vidéket ellepték a hernyók és letaroltak
              mindent, amihez csak hozzáférhettek: vetést, növényeket, fák
              leveleit. Mikor már semmi ennivalójuk nem volt, elindultak új
              hazát keresni. Sokan voltak. Talán több millió is volt együtt.
              Másztak a földön, egymás hegyén-hátán, egy-egy helyen tenyérnyi
              vastag is volt a hernyótakaró. Így érték el a híres Pacífic vasút
              pályáját. - Mikor a vonat odaért a hernyótömeghez, a vonatvezető
              gondolkozni kezdett; ha ő rámegy a vonattal erre a vastag
              hernyórétegre, a vonat kerekei ugyan összetapossák őket, de síkos
              lesz a vaspálya, kisiklik a vonat és szerencsétlenül jár a sok
              utas. Megállította hát a vonatot és megvárta türelmesen, amíg a
              hernyóhad átvonul a pályán.
            </p>
            <p className={styles.torzs}>
              Lányok! A hernyóknak nincsen gerincük, nyomorult férgek, ha az
              ember földhöz csapja őket, semmivé válnak mégis meg tudták
              állítani a gyorsvonatot. Mennyivel erősebbek vagytok ti, kik Isten
              képét hordjátok magatokban, kik gondolkozni és akarni tudtok és
              keményen dolgozni a szebb, boldogabb jövendőért! Ezért kell
              mindnyájatoknak együtt lenni, hogy sokán legyetek és erősek
              legyetek.
            </p>
            <p className={styles.torzs}>
              Ha Ti is úgy akarjátok, hogy ennek a nagy, nemzetmentő munkának
              részesei legyetek, megalakíthatjuk a Ti számotokra is a Lánykört;
              amelyben megtanulhattok mindent, amire szükségetek lesz és
              amelynek vezetése alatt hozzászokhattok a tiszta, nemes, okos és
              józan élethez.
            </p>
            <p className={styles.torzs}>
              De mert fiatalok vagytok s a fiataloknak szükségük van a
              szórakozásra, hogy egészségesek legyenek, a Lánykörben szórakozás
              is lesz: nótaszó, játék, tánc, színielőadás, kirándulás, talán még
              bál is, de mindegyik olyan lesz, hogy ne kelljen érte másnap
              szégyenkeznetek; sem önmagatok, sem mások előtt.
            </p>
            <p className={styles.torzs}>
              Azt is jól jegyezze meg mindenki magának, amit most mondani fogok.
              A Lánykörben nem kell tagsági díjat fizetni, egy fillért sem!
            </p>
            <p className={styles.torzs}>
              Most álljanak elő azok, akik szeretnék, hogy ebben a faluban
              Lánykör legyen és szeretnének ennek a Lánykörnek tagjai lenni. Ha
              ezeknek a nevét összeírtuk, mindjárt meg is fogjuk próbálni, Hogy
              tudunk-e szórakozni tisztán, vidáman, egészségesen. Jó lesz?
            </p>
            <p className={styles.cim2}>* * *</p>
            <p className={styles.alcim1}>Lányköri tagok tízparancsa.</p>
            <ol type="1">
              <li>Szent vallásom törvényeit ismerem és megtartom.</li>
              <li>Lelkiismeretesen végzem minden munkámat.</li>
              <li>Ahol tudok, szolgálatkész szeretettel segítek.</li>
              <li>Vezetőimnek szívesen és pontosan engedelmeskedem.</li>
              <li>Egyszerűen viselkedem és őszintén beszélek.</li>
              <li>Haragot soha, senkivel sem tartok.</li>
              <li>Távollevőkről vagy jót, vagy semmit sem mondok.</li>
              <li>A jónak, szépnek örülök, ha baj ér, nem panaszkodom.</li>
              <li>
                A Lánykör javát és jó hírét, ha kell áldozatok árán is
                szolgálom.
              </li>
              <li>
                Vezetőm tudta és engedélye nélkül más egyesületbe nem lépek, ott
                még csak nem is szerepelek.
              </li>
            </ol>
            <p className={styles.alcim1}>Katolikus Lánykörök ügyrendje:</p>
            <p className={styles.torzs}>
              <i>Az egyesület neve:</i>{" "}
              ..............................................................-i
              Katolikus Lánykör.
            </p>
            <p className={styles.torzs}>
              <i>Célja:</i> hitükben erős, erkölcsükben tiszta, nemzeti
              érzésükben öntudatos és gazdaságilag képzett családanyákat nevelni
              a falu fiatat lányaiból.
            </p>
            <p className={styles.torzs}>
              <i>Eszközei:</i> Tanítónők, vagy más megfelelő képzettségű hölgyek
              vezetésével foglalkoztatni a lányokat:
            </p>
            <ol className={styles.noMarginOrderdList}>
              <li>
                lelkileg:
                <ul>
                  <li>közös imádság,</li>
                  <li>szentségekhez való közös járulás,</li>
                  <li>közös szentségimádás és lelkigyakorlatok tartásával.</li>
                </ul>
              </li>
              <li>
                szellemileg:
                <ul>
                  <li>vallásos,</li>
                  <li>jellemképező,</li>
                  <li>kulturális,</li>
                  <li>gyakorlati tárgyú előadásokkal.</li>
                </ul>
              </li>
              <li>
                gyakorlatilag:
                <ul>
                  <li>főző, háztartási, varró és háziipari tanfolyamokkal.</li>
                </ul>
              </li>
              <li>
                kedélyileg:
                <ul>
                  <li>dalok, játékok, táncok tanításával,</li>
                  <li>kirándulások, versenyek, szintelőadások rendezésével,</li>
                  <li>tisztességes szórakoztatással.</li>
                </ul>
              </li>
            </ol>
            <p className={styles.torzs}>
              <i>Igazgatója:</i> a helybeli plébános, vagy az általa megbízott:
              lelkész.
            </p>
            <p className={styles.torzs}>
              <i>Vezetője:</i> a falu intelligenciájának katolikus hölgytagja,
              akit a plébános úr erre a Szövetséggel egyetértve felkér. A vezető
              kívánságára más munkatársak is segíthetnek.
            </p>
            <p className={styles.torzs}>
              <i>Tagjai:</i> a Lánykörnek az elemi iskola elvégzésétől vagy 12
              éves kortól 14 éves korig jelöltje, azontúl felvett tagja lehet
              minden tisztességes katolikus lány, aki az összejöveteleket
              pontosan látogatja, viselkedése ellen kifogás nincs és felvételét
              a vezetőségtől kéri. Jelöltek felvétele az összejöveteleken, a
              tagok jelenlétében értelmesen elmondott kérésre történik, egy
              csoportvezető és két tag ajánlására.
            </p>
            <p className={styles.torzs}>
              Rendes tagok felvételüket a vezetőtől kérik, ki ez ügyben
              meghallgatja a csoportvezetők véleményét. A tagfetvételt
              háromnapos lehetőleg félig zárt lelkigyakorlat előzi meg, melyet
              közös szentáldozással fejeznek be. Tagfelvétel egyszer egy évben,
              valamely Mária-ünnepen, ünnepélyes keretek között a templomban
              történjék. A tagok legalább karácsonykor, húsvétkor, a tagfelvétel
              napján és az egyházmegyei lánynapon közösen járulnak a
              szentségekhez.
            </p>
            <p className={styles.torzs}>
              A meg nem felelő jelöltet a csoportvezetők meghallgatásával, de
              saját felelősségére, a meg nem felelő tagot a Lánykör
              igazgatójával egyetértve kizárhatja. A kizárt tag köteles
              jelvényét a vezetőségnek visszaadni, ha előírásos mozgalmi
              egyenruhája volt, azt a Lánykör vezetőségének beszerzési áron
              eladni.
            </p>
            <p className={styles.torzs}>
              <i>Csoportvezetők:</i> a tagok maguk közül csoportvezetőket
              választanak, utcák vagy számszerinti csoportosulás alapján.
            </p>
            <p className={styles.torzs}>
              Egyik a vezető ellenőrzése mellett nyilvántartja a Lánykör
              bevételét és kiadását, évzárókor az anyagi ügyekről nyilvánosan
              beszámol.
            </p>
            <p className={styles.torzs}>
              A Lánykör anyagi ügyeit illetőleg a központi vezetőségnek tartozik
              felelősséggel, de annak megbízásából az egyházmegyei titkár a
              Lánykör pénzkezelését bármikor ellenőrizheti.
            </p>
            <p className={styles.torzs}>
              Másik csoportvezető a Lánykör könyveit tartja nyilván, és felelős
              az olvasásra kiadott könyvek épségben való megőrzéséért.
            </p>
            <p className={styles.torzs}>
              Harmadik csoportvezető a háziasszony szerepét tölti be,
              gondoskodik arról, hogy a Lánykör helyiségé mindig rendes, télen
              fűtött legyen, hogy a tagok oda szívesen jöjjenek és rendben
              hagyják el azt.
            </p>
            <p className={styles.torzs}>
              Anyagi forrásai: tarthat fenn a Lánykör saját anyagi felelősségére
              ipartelepet, bármilyen termelő, vagy értékesítő vállalatot, mely a
              mozgalom katolikus, nőies és szociális szellemével nincsen
              ellentétben, ha jövedelmét a Lánykör tagjainak általános és közős
              lelki, szellemi és anyagi érdekeinek előmozdítására és a helyes,
              megfontolt jótékonykodásra fordítja.
            </p>
            <p className={styles.torzs}>
              Az igazgatónak és vezetőnek betátása szerint kívánatos az
              áldozatos szellem nevelésére bevezetni akármilyen csekély tagdíj
              fizetését.
            </p>
            <p className={styles.torzs}>
              Rendezhet a Lánykör igazgatójának és vezetőjének felügyelete
              mellett, saját- vagy bérelt helyiségében tánccal és műsorral,
              egybekötött, éjfélig tartó, zártkörű összejövetelt, melynek
              programraja és szelleme a mozgalom lelket építő, katolikus és
              magyar célkitűzéseivel nincs ellentétben.
            </p>
            <p className={styles.alcim2}>Az ügyrend magyarázata.</p>
            <p className={styles.torzs}>
              Az egyesület neve. Ahol már- működik a falusi leányokkal
              foglalkozó egyesület, az eredeti nevet minden további nélkül
              fenntartjuk, csak a működést bővítjük ki. Az új alakulásnál
              ragaszkodunk az ügyrendben feltüntetett névhez; mert ez kifejezi,
              hogy az egyesület egy bizonyos falu leányaiból alakult, tehát
              autonóm; hogy katolikus, tehát nem semleges és hogy Lánykör tehát
              nem kizárólag hitbuzgalmi csoport.
            </p>
            <p className={styles.torzs}>
              <i>Az egyesület célja:</i> Falusi népünk, bár még sok helyen
              vallásosnak látszik, nem ismeri és nem éli vallását. Eljár a
              szentmisére, mert mit szólnának, ha nem lenne ott; böjttől
              pénteken, mert a nagyapja is így tette; imádkozik kenyérszegés
              előtt, mert az így illik; de rögtön az asztali áldás után megindul
              a megszólások tömege, szégyenkezés nélkül káromkodik és ha
              vallásáért áldozatot kell hoznia (egyházi adó stb.) a
              leglovagiatlanabb, mert nincs meggyőződése. - Ezért kell a vallás
              kérdéseit lányainkkal, mint felnőtt emberekkel, megbeszélni adandó
              alkalommal, és tervszerűen is, hogy saját személyükben és később
              családjukon keresztül az öntudatos vallásosság támaszpontjai
              legyenek.
            </p>
            <p className={styles.torzs}>
              A vallási öntudat hiányából következik magyar népünk másik nagy
              fogyatékossága: az erkölcsi élet lazasága. Ha egy lány elbukik, a
              falu közvéleménye nem dob követ reá, részben, mert más is így
              csinálta fiatal korában, részben mert nem fogja fel azokat a
              hallatlanul nagy vallási, erkölcsi, egészségi és kedélybeli
              veszélyeket, melyek ebből származnak. Lányoknál minden erkölcsi
              botlásra felmentés a fiatalság és a férjszerzésre való törekvés.
              Asszonyoknál már szigorúbb a mérték, de mindenki természetesnek
              veszi a gyermekáldás korlátozását, ha azt gazdasági okok
              megindokolni látszanak. Ilyen felfogás mellett az erkölcsi
              botlásra vezető utak is mind természetesek és megengedettek a
              falusi nép szemében. - Nekünk tehát minden erőnkkel azon kelt
              dolgoznunk, hogy tiszta nemzedéket neveljünk a reánk bízottakból,
              mert csak így remélhetjük Isten áldását és csak így tudjuk építeni
              és továbbfejleszteni az egészséges magyar nemzetet.
            </p>
            <p className={styles.torzs}>
              Ha népünkben a vallásosság nem tudatos, a nemzeti, hazafias érzés
              még sokkal kevésbé az. Egy-egy március 15-i szónoklat
              meghallgatása, egy-egy irredenta dal eléneklése, egy-egy "Nem -
              nem! sohának" elszavalásával mindenki úgy véli, lerótta hazafias
              kötelességeit és nagyszerű magyarnak tartja magát. De ha az
              őseinktől átörökölt erények továbbfejlesztéséről, vagy a bűnök
              elleni küzdelemről van szó, melldöngető nagy magyarjaink sehol
              sincsenek. Alig akad közöttünk megbízható jó munkás és iparos; s a
              bajba került embernek alig akad barátja, aki önzetlenül segítené
              őt. Pedig az igazi magyarság a nemzeti bűnök elleni tudatos
              küzdelemben, az áldozatkész összetartásban áll, nem pedig szólamok
              hangoztatásában. Erre akarjuk lányainkat is megtanítani női
              természetükhöz és hivatásukhoz mérten.
            </p>
            <p className={styles.torzs}>
              Akik a falut ismerjük, sajnálattal tapasztaljuk, hogy fatusi
              asszonyaink a reájuk bízott javakat sem megőrizni, sem alkalmas
              módon felhasználni nem tudják. Egészségtelenül és ésszerűtlenül
              főznek, lakásuk és életmódjuk elhanyagolt, aminek nem csak a
              szegénység az oka; általában idejüket nem tudják beosztani és az
              újabban nyíló kereseti lehetőségek iránt nincs érzékük. Igyekszünk
              tehát leányainkat észszerű életmódra, józanul beosztott, helyes
              munkára, ügyességre és leleményességre nevelni, hogy annakidején
              háziasszonyi feladataiknak mindenben meg tudjanak felelni.
            </p>
            <p className={styles.torzs}>
              A családok élete sajnos a falvakban is a felbomlás jeleit mutatja.
              A gyermek nem kell, a válások napirenden vannak s az
              elégedetlenségnek, békétlenségnek megnyilvánulásait mind
              gyakrabban tapasztaljuk. Ennek az oka nem az anyagi leromlás,
              hanem az, hogy a fiatalság nincsen felkészülve a házasságra a
              komolyságot, kötelességtudást és áldozatkészséget illetőleg.
              Lányainkat arra akarjuk nevelni, hogy hivatásukat szentnek,
              komolynak és felelősségteljesnek tartsák s erre megfelelően
              készüljenek, ezzel saját boldogságukat is építve.
            </p>
            <p className={styles.torzs}>
              Ezek a hiányok a falu egész társadalmában észlelhetők ugyan, mi
              mégis csak fiatal lányokkal foglalkozunk, mert bennük van meg
              leginkább a készség a tanulása, és az új gondolatok befogadására
              és mert belőlük válnak családanyák, akik a jövő nemzedéket fogják
              nevelni.
            </p>
            <p className={styles.torzs}>
              <i>Eszközei:</i> A célt négyirányú foglalkoztatással igyekszünk
              elérni. A lányok lelki foglalkoztatásának célja, hogy megismerjék
              a közös imádság értékeit, hogy magukévá tegyék az Egyház
              szándékait és hogy lelkük ellenálló képessége növekedjék a rosszal
              szemben.
            </p>
            <p className={styles.torzs}>
              Az előadásokkal növelni akarjuk tudásukat. Tanfolyamok
              rendezésével háztartásuk jobb ellátására és esetleg
              mellékkeresetre képesítjük őket.
            </p>
            <p className={styles.torzs}>
              A tisztességes szórakoztatás célja, hogy kedélybeli energiájukat
              megengedett módon, erkölcsi veszélyek nélkül levezethessék.
            </p>
            <p className={styles.torzs}>
              <i>Igazgató:</i> A Lánykörnek szüksége van az Egyház tekintélyére,
              hogy megfelelő keretben működhessék. Ha nincs egyetértés a vezető
              és a plébános között, a munka nem lehet eredményes.
            </p>
            <p className={styles.torzs}>
              A plébános beleegyezése nélkül tehát nem lehet Lánykört alakítani.
              Ha pedig vitás kérdés merülne fel, a vezető kellő tisztelettel és
              tapintattal ragaszkodjék a központ irányításához, de csak addig,
              amíg ez ellenségeskedést nem jelent. Mert többet ér a község belső
              békéje a legragyogóbban működő Lánykörnél is.
            </p>
            <p className={styles.torzs}>
              <i>Vezető:</i> A Lánykör vezetője csak nő legyen. A lányok
              bizalmát csak ő nyerheti meg és sajátos problémáikban tanácsot,
              irányítást csak ő adhat. Ebből következik, hogy férfi még akkor
              sem lehet vezető, ha egyházi személy, vagy ha erre bármilyen
              kivételes tehetségek látszólag alkalmassá tennék. Még a Lánykör
              igazgatója is csak szívesen látott vendég legyen a Lánykörben,
              nehogy az Egyház képviselőjének kijáró feltétlen tiszteletet a
              megszokás gyengítse. Szükség esetén a vezetőnek kötelessége ez
              irányban a tiszteletteljes és tapintatos figyelmeztetés. Gyakran
              adódik a Lánykörben olyan téma, amelynek nyugodt megbeszélésében
              az amúgy is élénk fantáziájú falusi lányokat feszélyezi a férfi
              jelenléte.
            </p>
            <p className={styles.torzs}>
              A fiatalság összetartásához kedély és nagyfokú mozgékonyság kell,
              ezért szükséges, hogy a vezető fiatalos kedélyű legyen, akinek nem
              esik nehezére a lányokkal együtt játszani, velük a pajtási hangot
              megütni a bizalom felkeltése érdekében.
            </p>
            <p className={styles.torzs}>
              A vezetőt a plébános a központtal egyetértve kéri fel. Tehát sem a
              központ a plébános beleegyezése, sem a plébános a központ
              beleegyezése nélkül a vezetőt fel nem kérheti, illetve helyéről el
              nem mozdíthatja.
            </p>
            <p className={styles.torzs}>
              A Lánykörnek csak egy felelős vezetője lehet. Ha azonban a vezető
              úgy gondolja, hogy az előadások tartásában, ének, tánc, kézimunka
              tanításában segítségére lehetne a helybeli intelligencia valamely
              tagja, azt saját felelősségére felkérheti. Ezzel egyrészt felkelti
              az érdeklődést a helybeli intelligencia körében a mozgalom iránt,
              másrészt a saját munkáján könnyít. De jól gondolja meg, hogy
              milyen hangot ereszt be a lányok közé és azt is, vajon munkatársai
              hajlandók lesznek-e a központ irányításának megfelelően működni.
            </p>
            <p className={styles.torzs}>
              <i>A tagok:</i> A Lánykör tagjai csak tisztességes lányok
              lehetnek, mert a Lánykör nem javítóintézet, nem műkedvelő társaság
              vagy az egyéni hiúság legyezgetésére alakult egyesület. Inkább
              legyen csak öt tagja de az az öt életével és példájával valóban
              építse a katolikus Magyarországot. Ebben nem lehetünk engedékenyek
              a mozgalom tekintélyének súlyos megrongálása nélkül. Aki ezt az
              elvet nem vallja, ne használja a Lánykör nevet és ne csatlakozzék
              központunkhoz.
            </p>
            <p className={styles.torzs}>
              A Lánykör tagjai csak katolikusok lehetnek, mert másvallásúak nem
              vehetnek részt a közös szentáldozásban és egyéb vallás
              gyakorlatokban, s így nem teljesíthetik a tagokra nézve kőtelező
              szabályokat. Vendégként eljöhetnek más vallású lányok a vasárnap
              délutáni szórakozásokra, rendezvényeken is részt vehetnek, de nem
              szerepelhetnek, legfeljebb énekkarban, szavalókórusban. Nem
              keresztény vallású semmiképpen sem látogathatja a Lánykört. Ha a
              vezető úgy gondolja, hogy az illetőt meg lehetne keresztelni,
              foglalkozzék vele egyénileg, ismertesse meg vele szent
              vallásunkat, de a közösségbe ne eressze.
            </p>
            <p className={styles.torzs}>
              A tagoknak az összejövetelekről való elmaradásukat igazolni kell.
              Ha három összejövetelt mulasztottak, a vezető még egyszer, esetleg
              írásban felszólítja őket távolmaradásuk igazolására. Ha a
              felszólításnak nem tettek egy héten belül eleget, nem lehetnek
              többé tagok. Igazolhatják a tagok távolmaradását a csoportvezetők
              is, de csak egy- egy esetben.{" "}
            </p>
            <p className={styles.torzs}>
              A lányköri tagoknak viselkedésükkel is meg kell mutatniuk, hogy
              egy erkölcsi testület tagjai, hogy komolyabbak és kedvesebbek,
              mint azok, akik nem voltak hajlandók áldozatul hozni akaratuk és
              szabadságuk hányadát a szent célért. Gyökeres megváltozást egyik
              napról a másikra nem várhatunk, de feltétlen igyekezetet annál
              inkább. Minden esetben figyelmeztetjük a lányokat, ha arra okot
              találunk és bizonyos idő múlva elvárhatjuk tőlük, hagy az egész
              község lánytársadalmának jó példát adjanak. Ha ezt nem tudják
              megtenni, nincs helyük a Lánykörben.
            </p>
            <p className={styles.torzs}>
              Minden lány maga kéri felvételét, nehogy bárki is azt mondhassa,
              hogy kényszerítenék s így a szabályok megtartására nincs
              kötetezve, A nyilvánosan előadott kérés növeli a lányokban a
              bátorságot, a jó fellépést és a készséget gondolataik világos
              kifejezésére.
            </p>
            <p className={styles.torzs}>
              A felvételt kérő jelöltet egy csoportvezető és 2 tag ajánlatára
              veszi fel a vezető. Szükség van erre, mert esetleg nem ismeri a
              vezető a falu minden lányát, kik közül ha egy nem megfelelő
              felvételt nyer, elriasztja a jók nagy részét. A lányok egymás
              ügyeit ismerik és legtöbbször ők maguk tiltakoznak a nem közéjük
              való felvétele ellen. De jó fegyver ez a vezető kezében, ha p1.
              számon kérik tőle, hogy ezt vagy azt a lányt miért nem vette fel.
              A többiek is jobban megbecsülik a Lánykört, ha a bejutás némiképp
              meg van nehezítve.
            </p>
            <p className={styles.torzs}>
              Rendes tagok felvételüket a vezetőtől négyszemközt kérik. Ezalatt
              alkalom kínálkozik az esetleges egyéni nehézségek megbeszélésére,
              bizalmas figyelmeztetésre stb. Mielőtt a vezető a felvételről
              döntene, megkérdezi a csoportvezetőknek a felveendőkről alkotott
              véleményét, de nem szavaztatja meg őket.
            </p>
            <p className={styles.torzs}>
              A félig zárt lelkigyakorlathoz, legrosszabb esetben a három esti
              konferencia-beszédhez feltétlenül ragaszkodjunk a felvétel előtt.
              - Az ember végcélja az örök élet, melynek elnyerésére tudatosan
              törekednünk kell. De hány ember leéli életét anélkül, hogy ezzel a
              gondolattal csak egy órát is komolyan foglalkozott volna! Nekünk
              kötelességünk a reánk bízottaknak első sorban a lelkével törődni
              és figyelmüket az örök célokra irányítani. Ki tudja, lesz-e még
              egyszer alkalmuk ilyen gondtalanul három napot örök boldogságuknak
              szentelni? Egy nagylány életében annyi minden előadhatja magát,
              amire önmagában nem találja meg a helyes választ, hiszen a vér és
              a szokások sokszor az Isten akaratával ellentétes irányba terelik.
            </p>
            <p className={styles.torzs}>
              Legalább egyszer életében legyen alkalma életének előre látható
              eseményeit Isten akaratának fényében meglátni. Erre való és ezért
              szükséges a lelkigyakorlat. Ha lányaink komoly elhatározásokra és
              annak következményeire három napon át kénytelenek gondolni,
              nagyobb nyomot fog hagyni lelkükben a felvétel ténye és az isteni
              kegyelemnek is elkészítettük az útját lelkeikhez. De jót tesz ez a
              Lánykör tekintélyének is, melyet az egész község előtt emel a
              lányok komoly készülődése.
            </p>
            <p className={styles.torzs}>
              Tagfelvételt legfeljebb egy évvel a megalakulás után rendezünk
              először. Későbbi tagfelvételt is csak egy éves próbaidő után
              tartunk. Igyekszünk azt minél több külsőséggel összekötni, hogy
              annál nagyobb hatással legyen a lányokra és a falura. Lehetőleg
              minden tag egyenruhában legyen, a templomba együttesen vonuljanak
              be, kezükben égő gyertyával mondják el a felvételi imát és
              kapjanak valami csekély kis emléket a jelvényen kívül pl.:
              szentkép stb.
            </p>
            <p className={styles.torzs}>
              A szertartást lehetőleg litánia után kérjük, mert ehhez szervesen
              tud kapcsolódni a felvétel. A szentmise liturgiája ezt kevésbe
              engedi meg. Törekedjünk arra, hogy a felveendők szülei
              valamennyien ott legyenek a templomban, mert a szentbeszédnek
              nagyvésze úgyis nekik fog szólni, másrészt a lányoly is jobban
              érzik a nyilvánosság előtt elmondott ígéret súlyát. Az ünnepség
              után maradjunk még velük együtt, kedvesen beszélgetve, nehogy
              rögtön a vasárnap délután forgatagába kerülve, a külső benyomások
              lerontsák bennük a nehezen felépített jó hatást.
            </p>
            <p className={styles.torzs}>
              Nyomatékosan kérjük és figyelmeztetjük a vezetőket, nehogy a
              tagfelvétel napján színdarabot vagy táncot rendezzenek a lányköri
              tagok részvételével, mert ezzel tökéletesen ellentmondanak
              mindannak, amit a lányokban 3 napon át építettek. A szereplés
              izgalma elvonja a lányok figyelmét, megakadályozza a belső
              elmélyülést és felejtteti a hatást, melyet reájuk a megható és
              mély értelmű szertartás gyakorol. Semmiféle rendezés azon a napon
              ne legyen!
            </p>
            <p className={styles.torzs}>
              A felvételhez szükséges jelvényeket a Központtól legalább 2 héttel
              előbb kérjék, nehogy a gyár, egyéb munkája is lévén, ne tudja
              elkészíteni a kívánt időre azokat s az ünnepséget el kelljen
              halasztani. A jelvények mindenkor a Lánykör tulajdonát képezik
              azért, hogy ha egy lány méltatlannak mutatkozik a viselésére,
              vissza lehessen tőle venni. Az esetleg elvesztett jelvény árát
              azonban a lány köteles megtéríteni.
            </p>
            <p className={styles.torzs}>
              Az évenként négyszeri közös szentáldozás kötelező, de a legtöbb
              Lánykör havonként járul a szentségekhez. Ezt nem tesszük
              kötelezővé, nehogy emiatt egyesek elmaradjanak.
            </p>
            <p className={styles.torzs}>
              A jelöltek kizárásánál a vezető hallgassa meg a csoportvezetők
              véleményét, de ha jónak látja, - saját felelősségére - ezzel
              ellentétben is dönthet.
            </p>
            <p className={styles.torzs}>
              A tagok kizárása súlyosabb dolog, azért ebben ossza meg a vezető
              felelősségét a Lánykör igazgatójával. A kizárás - ha csak nem
              nyilvános botrány adott arra okot - csendben, szinte észrevétlenül
              történjék. A vezető figyelmezteti bizalmasan a lányt, hogy ne
              jöjjön többé, vagy nem olvassa fel nevét a névsorolvasásakor, ha
              ez adott esetben jobb módszernek bizonyul. A jelvényt feltétlenül
              vegye vissza a vezető és ha csak lehet, az egyenruhát is vásárolja
              vissza. A lány lelkének megmentése érdekében a vezető egyénileg
              maradjon kapcsolatban vele, de a közösségbe legfeljebb egy évi
              komoly próbaidő után eressze csak vissza.
            </p>
            <p className={styles.torzs}>
              Csoportvezetők. Falurészenként, vagy utcánként 8-10 lánynak van
              csoportvezetője. Az egy csoporthoz tartozók maguk választják
              körükből csoportvezetőjüket, kinek így tekintélye van és akire
              hallgatnak. Ezért a választás előtt magyarázzuk meg nekik, hogy
              mit is várunk a csoportvezetőktől.
            </p>
            <p className={styles.torzs}>
              A csoportvezető számon tartja a csoportjához tartozó tagokat. Az
              összejövetelen ő igazolja távolmaradásukat. Gondoskodik, arról,
              hogy a szolgálatba menők, vagy a községből elköltözők visszaadják
              jelvényüket. Ha rendkívüli időben valamit a tagok tudomására
              akarunk hozni, a csoportvezetők értesítik csoportjuk tagjait és
              gondoskodnak arról, hogy azok mindenről tudomást szerezzenek.
            </p>
            <p className={styles.torzs}>
              Minthogy így a csoportvezetők az egyesületben vezető szerepet
              töltenek be, külön is kell velük foglalkozni, már azért is, hadd
              eszméljenek rá, hogy tőlük többet várunk, mint a többiektől.
              Havonta egyszer tartunk csoportvezetői megbeszélést. Mindenek
              előtt értessük meg velük, hogy mind a tagok, mind a mi részünkről
              bizalom nyilvánult meg az ő csoportvezetői megválasztásukkal.
              Velük az egyesületnek és az egyes tagoknak mindem ügyét nyíltan
              fogjuk megbeszélni, de nem azért, hogy kritizálják társaikat, vagy
              hogy mindenfelé elmeséljék. Bármit is tárgyalunk meg ezután velük,
              nem fog kiszivárogni semmi.
            </p>
            <p className={styles.torzs}>
              A megbeszélés áll egy rövid - mondjuk - oktatásból. Alkalmas erre
              Förster "Élet művészetének" egy-egy fejezete. Pl. a felelősségről.
              Lássák azt, hogy bármily kicsinek és jelentéktelennek látszik is
              az ő életük, munkájuk, mégis csak felelősek esetleg nagy
              történésekért, de mindenekelőtt a reájuk bízottakért.
            </p>
            <p className={styles.torzs}>
              Aztán megbeszéljük velük az egyesület időszerű problémáit, legyen
              akár színielőadási akár lelkigyakorlat, vagy Lánynap. Majd pedig
              sorra vesszük az egyes tagoknál fennálló esetleges nehézségeket,
              hibákat. Ők iparkodjanak társaikra hatni s azokat a jóra vezetni,
              az újakat pedig bevezetni az egyesület életébe.
            </p>
            <p className={styles.torzs}>
              Különösen felvétel előtt beszéljük meg velük a felvételre
              jelentkezők alkalmasságát, hiszen sokkal jobban ismerik társaikat,
              mint mi és bízhatunk ítéletükben. Ha pedig nem ismerik őket
              eléggé, a jó csoportvezető nyíltan meg fogja mondani, hogy nem
              szólhat hozzá, mert nem eléggé ismeri a szóba került lányt.
            </p>
            <p className={styles.torzs}>
              Ünnepélyeknél, előadásoknál a csoportvezetők a rendezők.
            </p>
            <p className={styles.torzs}>
              <i>Tisztségek:</i> A Lánykör pénzének, könyveinek és helyiségének
              gondozóját a csoportvezetők maguk közül választják. Szándékosan
              nem nevezzük őket pénztárosnak, könyvtárosnak stb.-nek, hogy
              kizárjuk szervezkedésünkből a címeket s az ezzel járó hiúságot és
              versengést. A tisztségek nálunk több munkát és nagyobb
              felelősséget jelentenek, nem rangot és nem indokolatlan
              megkülönböztetést.
            </p>
            <p className={styles.alcim2}>A Lánykör anyagi helyzete.</p>
            <p className={styles.torzs}>
              A Lánykör anyagi forrását a nyílváros rendezvények jövedelme
              képezi. Pártoló tagokat mi nem gyűjtünk, és tagdíjat nem szedünk;
              csak ott, ahol a lányok ezt önként megajánlják. Még ilyen eseteken
              is nagyon meggondoljuk, nehogy legyen egyetlen szegényebb sorsú
              lány, ki a tagdíj miatt kénytelen a Lánykörből elmaradni.
            </p>
            <p className={styles.torzs}>
              Ha akadnak megértő jótevők, akik fűtőanyaggal, egyesületi
              helyiséggel, zászlóval, vagy pénzbeli adománnyal könnyíteni
              szeretnének a Lánykör munkáján, azt természetesen hgá1áv igénybe
              vesszük, de érte sohasem adományozunk címeket, rangokat, mint pl.
              védnöknő, díszelnöknő, vagy örökös dísztag, stb. Ezzel
              lealacsonyítanánk a jócselekedet értékét és magát a jótevőt, kit
              ilyen hiúság-konccal akarunk kielégíteni.
            </p>
            <p className={styles.torzs}>
              Tarthat fenn a Lánykör ipari telepet, bármilyen termelő, vagy
              értékesítő vállalatot, mely a mozgalom katolikus, nőies és
              szociális szellemével nincs ellentétben s ha ehhez a plébános úr
              jóváhagyását bírja. Bérelhet pl. földet s azon közös munkával
              termelhet kukoricát, krumplit vagy konyhakerti növényeket;
              kukoricaháncs feldolgozó és értékesítő, kézimunka-készítő,
              szövőüzemet, stb. Ezekért a vállalkozásokért a Központ anyagilag
              nem vállal felelősséget. Ezt tehát helybelieknek (plébános;
              egyházközség, lányköri vezető, községi elöljáró) kell vállalniuk.
            </p>
            <p className={styles.torzs}>
              A Központunkhoz csatlakozott Lánykör anyagi ügyeit és könyvvitelét
              a Központnak van joga ellenőrizni. Az évenként rendezett nyilvános
              záróünnepségen elszámol a Lánykör pénztárosa az évi bevételekről
              és kiadásokról az egyházközségnek, vagy kiteheti közszemlére
              elszámolását erre alkalmas helyen, mint pl. a templomajtó, vagy az
              iskola, vagy a Lánykör helyisége. Ez a külső elszámolás azonban
              jog szerint nem, csak tétek szerint kötelessége a Lánykörnek.
              Pénztárkönyvét az egyházi hatóság természetesen ellenőrizheti.
            </p>
            <p className={styles.torzs}>
              Vagyonával a Lánykör szabadon rendelkezik mindaddig, amíg a tagok
              általános és közős lelki, szellemi és fizikai érdekeinek
              előmozdítását és a helyes, megfontolt jótékonykodást tartja szem
              előtt. Ellenkező esetben a vagyon felhasználásáról a Lánykör
              igazgatója dönt a Központtal egyetértve.{" "}
            </p>
            <p className={styles.torzs}>
              Illendő és kívánatos, hogy a Lánykör adott esetben az Egyházközség
              gondjait igyekezzék enyhíteni, pl. templom vagy iskolaépítés stb.
              idején jövedelmét vagy annak egy részét ilyen célra adja. Hiszen a
              Lánykör is az egyházközség nagy családjához tartozik s annak
              esetleges gondja, küzdelme öt is éppen úgy érinti, mint a
              többieket.
            </p>
            <p className={styles.alcim2}>Katolikus Lánykörök egyenruhája</p>
            <p className={styles.torzs}>
              Az egyenruha célja áltatában, hogy az egy eszme szolgálatában
              azonos eszközökkel küzdők egységét és összetartozását külsőleg is
              kifejezésre juttassa. A lényege tehát, hogy egyforma, mint ahogy
              egyformák a küzdőtéren azok, akik viselik.
            </p>
            <p className={styles.torzs}>
              Az emberi természet ösztönösen irtózik attól, hogy másokkal
              egyforma legyen, egyéni érvényesülése és feltűnése nehézségekbe
              ütközzék. Éppen azért nem is volna szabad egyenruha viselésére
              engedélyt adni addig, míg a tagokat át nem hatotta a közős nagy
              cél iránti lelkesedés, amelyben testvérek, egyformák lettek a
              többiekkel. Ez az egyenruha viselés lelki alapja s mert belőlünk
              magyarokból éppen ez a lelkület hiányzik, azért olyan kényes
              kérdés nálunk, hogy milyen legyen az egyenruha. Jellemző volt az
              egyik Lánykör óhajtása: Mi is akarunk egyenruhát, de olyat;
              amilyen még senkinek sincs! - A mai ember szereti a külsőségeket,
              a magyar ember pedig szeret a külsőségekben is feltűnni s ezért
              nehéz az egyöntetű ruhát elfogadtatni nálunk.
            </p>
            <p className={styles.torzs}>
              Ahol a régi népviseletet hordják, vagy ahol annak némi nyoma még
              megtalálható, azt viseljük és újítsuk fel, mint a Lánykör
              egyenruháját. Ha a régi viselet nagyon költséges, vagy nagyon
              egészségtelen volna, annak egy olcsóbb, egyszerűbb változatát
              vegyük, de feltétlenül ragaszkodjunk az eredeti szabáshoz,
              színösszeállításhoz és díszítéshez és ne nevezzük ki az
              iparművészek által tervezett mű-magyar ruhákat népinek és
              magyarnak. Különösen tisztában kell lenni azzal, hogy az
              aranyvitéz-kötéses piros pruszlik és a nemzetiszínű szalaggal
              díszített fehér grenadin szoknya és ingváll sohasem volt magyar és
              népi viselet. Ez a ruha a díszmagyarnak egy ízléstelenül és
              ésszerűtlenül lealacsonyított csökevénye, amely sajnálatos módon a
              "magyar ruha" fogalmává vált. Ahol a régi népviseletnek már semmi
              nyoma sincs, vagy azt a lányokkal felvétetni már semmiképp sem
              tudjuk, ott, ha egyenruhát akarunk bevezetni, ragaszkodjunk az
              országos elgondoláshoz. A Lánykörök egyenruhája fehér gyolcsból
              készült, rövid ujjú, csipkével, vagy fehér hímzéssel díszített
              ingvállból, húzott bő szoknyából, sujtásozott klott pruszlikból és
              nagy szögletes kötényből áll. A ruha szabása teljesen megfelel a
              múlt századbeli magyar népi ruha szabásának. A fehér ingváll a
              legrégibb időktől alkotó része volt a népi ruhának, nemcsak a
              magyarnak, de minden más népének is, mert házilag szőtt anyagból
              készült, mosható és így könnyen cserélhető volt. A pruszlik
              szintén általánosan elterjedt népi ruhadarab. A falusi asszony
              házimunkájának és életmódjának, teljesen megfelel, mert nyugodtan
              hajlonghat, mozoghat benne, nem szakad el, nem húzódik, kényelmes
              és meleg. A Néprajzi Múzeum Értesítője XXV1II. évfolyamának 1-4
              számában tanulmányt közöl "Magyarországi ujjatlan felsőruhák"
              címmel. Ezen tanulmány keretében térképet is közöl, melyről
              kitűnik, hogy az olyan szabású pruszlikot, mint amilyent
              Lányköreink egyenruhájához választottunk, az integer Magyarország
              19 megyéjében viselték. Nincs is még egy pruszlik-forma, amely
              ennyire elterjedt lenne. Ami különösen érdekes: megtaláljuk Árva
              megye északi részében éppúgy, mint Csongrád megyében, Csíkban
              éppúgy, mint Vas megyében. Nyilvánvaló tehát, hogy ezt a szabást
              nem sajátították ki maguknak sem a szlávok, sem a németek, sem a
              magyarok, mert valamennyien egyformán viselték, mint igen csinos
              formát.
            </p>
            <p className={styles.torzs}>
              Hiteles adatok és emlékek alapján ragaszkodunk a pruszlikon a
              sújtásozás elhelyezéséhez. A magyar viseletnél a pruszlik
              díszítése mindig a varrások mentén, a nyak, karöltő és a
              gombolódás szélén halad, nem a varrásokra merőlegesen
              vitézkötésszerűen. A vitézkötés általában nem magyar eredetű,
              hanem egy a XVII. századból reánk maradt feljegyzés alapján
              tudjuk, hogy a Balkánról szivárgott be hozzánk a katonaság
              viseletén keresztül.
            </p>
            <p className={styles.torzs}>
              Az ország különböző vidékein működéi Lánykörök számára egységes
              szabású, de különböző színű egyenruhát állapítottnak meg, hogy az
              egység érvényesítése mellett alkalmazkodjunk az egyes vidékek
              hagyományaihoz is.
            </p>
            <p className={styles.torzs}>
              Az Alföld nagy részén a nők széles-csíkos, vagy világos alapon
              virágos, húzott, bő szoknyát viseltek. A szoknya egyik színéből
              készült a pruszlik és a díszes kötény. Azért alföldi Lányköreink
              ilyen anyagból készítik egyenruhájukat. A kötény anyaga is mosó,
              (lehetőleg klott, semmi esetre sem selyem) díszítése ugyanolyan
              színű fényes pamutból horgolt csipke.
            </p>
            <p className={styles.torzs}>
              A Felvidéken a magyarok között még ma is találunk fekete alapon
              tarka-rózsás szoknyát, piros pruszlikot fekete sujtással, fehér
              kötényt és ingvállat. Természetes, hogy felvidéki Lányköreink
              számára ezt a hitelesen magyar és népi ruhaformát vezettük be. -
              Kivételt képeznek a palócok, akik, ha nem is tudják a régi,
              túlságosan költséges és nehéz népviseletet a Lánykör
              egyenruhájaként feleleveníteni, legalább annak egy egyszerűbb, de
              a palóc viseletnek jellegzetességeit magánhordozó változatát
              fogják viselni. Fehérhímzéssel díszített buggyos ingvállat,
              aprómintán, húzott, bő karton szoknyát, hímzett fehér vállkendőt
              és széles fehér hímzett kötényt viselnek.
            </p>
            <p className={styles.torzs}>
              A Dunántúl Lányköreinek egyenruhája csipkés ingváll és kötény,
              fekete sujtással díszített fekete klott pruszlik és nagykockás,
              húzott szoknya. - A kockás és csíkos anyag talán idegenszerűnek
              hat, pedig elterjedtsége érthető, mert hiszen a népi
              szövéstechnika egyszínűt, csíkosat, vagy kockásat tudott szőni; de
              sohasem pettyeset, vagy virágosat. A Felvidéken kézzel hímezték a
              tarka virágokat a sima anyagba, a Sárközben pedig franciaországi
              selyemből készült az asszonyok virágos szoknyája.
            </p>
            <p className={styles.torzs}>
              A ruhákra vonatkozóan általános szabály, hogy anyaguk mosható
              legyen, de sohasem selyem, nehogy még az egyenruhával is szítsuk a
              lányok között azt az esztelen és lelketlen versengést, amely a
              ruházkodás terén közöttük úgyis fennáll. - A kötények
              alkalmazkodnak a ruha lényegéhez: nagyok és szögletesek és nem
              kelnek versenyre a kötényt gúnyoló, mostanában oly gyakran látható
              apró selyemdarabkákkal. - A felvidéki piros pruszlik kivételével a
              pruszlikot apró mintával mindig a saját színében sujtásozzuk.
              Árnyalati különbség lehet az anyag és a sujtás színe között, de
              más színű, fehér, arany, ezüst vagy egyéb sujtást sohase
              használjunk.
            </p>
            <p className={styles.torzs}>
              Egyenruhánk megválasztásánál elsősorban az a szempont vezetett,
              hogy eredetien magyar és népi ruhát viseljenek falusi magyar
              lányaink.
            </p>
            <p className={styles.torzs}>
              De szem előtt tartottuk azt is, hogy az egyenruha a mai szűkös
              körülmények között ne jelentsen nagy anyagi megterhelést a
              lányoknak és szüleiknek. Olyan legyen az egyenruha, hogy azt
              templomba, ünnepségre, kirándulásra egyformán használhassák a
              lányok, hogy a divatnak és versengésnek állandóan alávetett
              ünneplő ruhák beszerzésétől megkíméljük őket.
            </p>
            <p className={styles.torzs}>
              Egyenruhánknak szépnek kell lennie, hogy kielégítse népünk
              különleges művészi érzékét, hogy lányaink csinosak, szépek, vonzók
              legyenek benne, hogy még ruhájukkal is megkedveltessék a mozgalmat
              környezetükben.
            </p>
            <p className={styles.torzs}>
              Minden egyenruhára vonatkozó kérdésben szívesen ált rendelkezésre
              a Központ és örömmel küld anyagmintát, szabásrajzot és mindennemű
              útmutatást.
            </p>
            <p className={styles.torzs}>
              Az egyenruhát legelőször a vezető vegye fel, akkor elnémul a
              kritika és minden lány szívesen követi a példát.
            </p>
            <p className={styles.cim2}>* * *</p>
            <p className={`${styles.cim2} ${styles.cim2BottomMargin}`}>
              Tagfelvétel módja a Katolikus Lánykörben
            </p>
            <p className={styles.torzs3}>Jöjj Szentlélek Úristen... (Ének.)</p>
            <p className={styles.torzs3}>Szentbeszéd.</p>
            <p className={styles.torzs2}>
              Pap: Isten dicséretének és dicsőségének előmozdítására, a
              boldogságos szent Szűz, a Jótanács Anyjának tiszteletére lépjenek
              elő azok a jelöltek, akik a Lánykör tagjai kívánnak lenni.
            </p>
            <p className={styles.torzs2}>
              Vezető: Főtisztelendő Atyám! A jelenlevő lányoknak az az óhaja,
              hogy önmaguk és mások, lelkének megszentelésére, a mélyebb
              vallásosság elérésére a .._._......__..:...._.....,....::...._-i
              Katolikus Lánykör felvett tagjai lehessenek.
            </p>
            <p className={styles.torzs2}>
              Pap: Örömmel hallom kívánságtokat, de mielőtt azt teljesíteném,
              feleljetek a következő kérdésekre
            </p>
            <p className={styles.torzs3}>
              Kívántok-e igaz szívvel a Katolikus Lánykör tagjai lenni, hogy így
              lelketeket kiművelve Istennek kedves életet éljetek?{" "}
            </p>
            <p className={styles.torzs2}>Jelöltek: Kívánunk.</p>
            <p className={styles.torzs2}>
              Pap: Akartok-e őszintén arra törekedni, hogy jámborságtokkal,
              feddhetetlen erkölcseitekkel, vallási kötelességeitek buzgó
              teljesítésével, otthon, utcán és bárhol való viselkedéstekkel, jó
              példátokkal felebarátaitok; elsősorban leánytársaitok épülését
              előmozdítsátok.
            </p>
            <p className={styles.torzs2}>Jelöltek: Akarunk.</p>
            <p className={styles.torzs2}>
              Pap: Megígéritek-e, hogy pontosan megtartjátok a Lánykör
              szabályait, és gyermeki szeretettel engedelmeskedtek a vezetőnek
              mindabban, ami a Lánykörre vonatkozik{" "}
            </p>
            <p className={styles.torzs2}>Jelöltek: Megígérjük.</p>
            <p className={styles.torzs2}>
              Pap: Isten és a Boldogságos Szűz Mária előtt kedves a ti
              elhatározástok. Ha megtartjátok, amit most ígértek, megsegít
              benneteket az élet minden pillanatában s főleg a halál óráján. De
              minthogy a jámborság alapja a hit, azért mondjátok el most a
              Hitvallást.
            </p>
            <p className={styles.torzs3}>
              (A jelöltek, kezükben égő gyertyával, közösen elmondják a
              Hiszekegyet.)
            </p>
            <p className={styles.torzs2}>
              Pap: Hogy pedig ezen jó elhatározástokban megerősödjetek és
              életetek ezen pillanatát soha el ne feledjétek, mondjátok el
              ünnepélyesen az Egyház és a hívek színe előtt felajánlásotokat,
              mellyel magatokat a háromszemélyű egy Istennek s a Megváltó szent
              Anyjának, Máriának, a Jótanács Anyjának felajánljátok.
            </p>
            <p className={styles.torzs2}>
              Jelöltek: Az Atyának és Fiúnak és Szentlélek Istennek nevében.
              Amen. Én,......., (nevét érthetően, hangosan egymás után mondja
              minden felveendő lány !) ígérem, hogy katolikus hitemhez és
              Anyaszentegyházamhoz életem végéig hű maradok. Mint a Katolikus
              Lánykör tagja, annak szabályai szerint a magam megszentelésére,
              felebarátaim lelki és testi javának előmozdítására erőm és
              körülményeim szerint törekedni fogok, hogy ezáltal Egyházamnak,
              hazámnak és a társadalomnak hasznos tagja legyek.
            </p>
            <p className={styles.torzs3}>
              Ajánlom ezen ígéretemet a Mindenható Istennek, Atya, Fiú és
              Szentléleknek, jóságos mennyei Anyámnak, és a Jótanács Anyjának és
              Isten minden szentjeinek, különösen védőszentemnek.
            </p>
            <p className={styles.torzs3}>
              Az Atyának és Fiúnak és Szentlélek Istennek nevében. Amen.
            </p>
            <p className={styles.torzs2}>
              Pap: A törvényesen rámruházott hatalomnál fogva felvesztek
              benneteket a......-i Katolikus Lánykörbe és egyszersmind
              részesítelek benneteket az Egyház által engedélyezett
              kegyelmekben. Kívánom, hogy amint beírjuk neveteket a Lánykör
              könyvébe, úgy legyen az beírva az élet könyvébe is, mindörökké.
              Amen.
            </p>
            <p className={styles.torzs3}>
              Érmek megszentelése a lecke-oldalon.
            </p>
            <p className={styles.torzs3}>
              V. Adjutorium nostrum in nomine Domini.
            </p>
            <p className={styles.torzs3}>R. Qui fecit coelum et terram.</p>
            <p className={styles.torzs3}>V. Dominus vobiscum. </p>
            <p className={styles.torzs3}>R. Et cum spíritu tuo. </p>
            <p className={styles.torzs3}>Oremus:</p>
            <p className={styles.torzs}>
              Deus, qui per resurrectionem Filii tui Domini nostri Jesu Christi
              mundo gaudia contulisti: auge et sancti +fica collata: nobis haec
              dona tuae largitatis mentesque nostras pariter spiritualibus reple
              deliciis. Per eumdem Christum Dominum nostrum. Ámen.
            </p>

            <p className={styles.torzs}>
              <center>(Mielőtt a jelvényeket átadja)</center>
            </p>

            <p className={styles.torzs3}>
              Vegyétek a Lánykör jelvényét testi és lelki oltalmul, hogy az
              isteni jóság kegyelmével és égi Anyánknak, a boldogságos Szűznek
              pártfogásával elnyerjétek az örök életet, az Atyának és Fiúnak és
              Szentléleknek nevében. Ámen.
            </p>
            <p className={styles.torzs3}>
              (A jelöltek egyenként térdelve átveszik a jelvényt, megcsókolják
              és visszamennek helyükre. A vezető feltűzi azokat)
            </p>
            <p className={styles.torzs2}>
              Pap: Vegyen fel titeket a mi Urunk Jézus Krisztus az ő szolgálói,
              a mi tagtársaink közé. Engedjen időt a jó életre, alkalmat a
              jótettek gyakorlására, állhatatosságot az erényekre való
              törekvésben s amint a testvéri szeretet összeköt minket a földön,
              úgy egyesítsen minket az isteni kegyesség a szentekkel az égben.
              Amen.
            </p>
            <p className={styles.torzs3}>
              V. Confirma hoc, Deus, quod operatus es in nobis.
            </p>
            <p className={styles.torzs3}>
              R. A templo sancto tuo quod est in Jerusalem.
            </p>
            <p className={styles.torzs3}>V. Satvos fac servos tuos.</p>
            <p className={styles.torzs3}>R. Deus meus, sperantes in te.</p>
            <p className={styles.torzs3}>
              V. Mitte eis Domine auxilium de Sancto.
            </p>
            <p className={styles.torzs3}>R. Et de Sion tuere eos.</p>
            <p className={styles.torzs3}>V. Domine, exaudi orationem meam.</p>
            <p className={styles.torzs3}>R. Et clamor meus ad te veniat.</p>
            <p className={styles.torzs3}>V. Dominus vobiscum, </p>
            <p className={styles.torzs3}>
              R. Et cum spiritu tuo. (Itt kifordul s a felavatottak letérdelnek,
              keresztet vetve magukra.)
            </p>
            <p className={styles.torzs}>
              Oremus: Adesto, Domine, supplicationibus nostris et has famulas
              tuas, quas pice societati aggregavimus. benedicere dignare et
              praesta, ut statuta nostra per auxílium gratiae tuae sancte et
              religiose vivendo valeant observare et observando vitam promoreri
              sempiternam. Per Chrístum Domínum rostrum. Amen.
            </p>
            <p className={styles.torzs}>
              A tagok elmondják az "Áldott legyen az Isten" kezdetű imát és
              elénekelik a Jeligét.
            </p>
            <a id="17"></a>
            <p className={styles.alcim2}>Féligzárt lelkigyakorlatok.</p>
            <p className={styles.torzs}>
              A gyorsiramú fejlődés korszakát éljük. Növekednek igényeink minden
              téren és tökéletesítjük azokat a módszereket és eszközöket,
              amelyek segítenek minket a különb élet kialakításában.
            </p>
            <p className={styles.torzs}>A technikai kultúra csodákat művel.</p>
            <p className={styles.torzs}>
              A lelkiélet terén sem maradhatunk meg a régi szinten. Fejlődnünk
              kell, magasabbra kell törekednünk. Lelki igényeinket is kell
              növelnünk. Új módszereket kell keresnünk és találnunk, amelyek a
              megnövekedett lelki igényeket alkalmasak kielégíteni. Különösen
              fontosak az új módszerek a Katolikus Lánykörök vallásos életének
              elmélyítésére.
            </p>
            <p className={styles.torzs}>
              Egyik leghatásosabb és ma már szinte nélkülözhetetlen eszköz a
              lelki nevelés terén a lelkigyakorlat. A magyar férfivilág életében
              szinte megmérhetetlen eredményeket ért el eddig a Manréza, ahol
              csodálatos lelki fürdőn megy át a férfiaknak egy-egy csoportja.
              Nők részére praktikus és könnyen megközelíthető lelkigyakorlatos
              ház ma még úgyszólván nincsen, de ha volna is, éppen a falusi
              lányok különböző okok miatt nem nagyon részesülhetnének ennek az
              intézménynek áldásaiban. Egyik majdnem legyőzhetetlen akadálya a
              zárt női lelkigyakorlatoknak a fatusi nép nyomasztó gazdasági
              helyzete. Azonban a lelkekkel törődő és a lelkekért aggódó
              áldozatos szeretet találékony. Alkalmazkodik a körülményekhez és
              ha nem tudja leküzdeni, vagy elhárítani az akadályokat, akkor
              kikerüli azokat és más úton iparkodik elérni a célt.
            </p>
            <p className={styles.torzs}></p>
            <p className={styles.alcim2}>Mi a féligzárt lelkigyakorlat?</p>
            <p className={styles.torzs}>
              Tartalmát tekintve ugyanaz, mint a zárt lelkigyakorlat. Három
              napig tart, a résztvevők naponként négy szentbeszédet hallhatnak,
              elvégzik az összes áhítatgyakorlatokat, megtartják a csendet, csak
              éppen éjszakára, vagy esetleg étkezésre mennek haza. Ha megfelelő
              a résztvevők lelkülete, valamint a rendezőknek a gondossága,
              majdnem ugyanazt az eredményt lehet elérni, mint a zárt
              lelkigyakorlattal.
            </p>
            <p className={styles.torzs}></p>
            <p className={styles.alcim2}>Hogyan rendezzük?</p>
            <p className={styles.torzs}>
              Elkerülhetetlenül szükséges, hogy a résztvevők ugyanazon
              társadalmi állásúak legyenek, koruk, nemük, műveltségük is azonos
              legyen. A Katolikus Lánykör összes tagjai megfelelnék ennek a
              követelménynek. Mikor már megvan a lelkigyakorlat közönsége, akkor
              előre iparkodjunk bennük megfelelő lelki hangulatot teremteni.
              Beszéljünk a lelkigyakorlat lelki hasznáról, szükségességéről és
              állítsuk be úgy azt a három napot, hogy vissza ne riadjanak, hanem
              inkább kedvet kapjanak hozzá. Jó előre állítsuk fel azokat a
              szabályokat, amelyeket föltélenül meg kelt követelnünk a
              résztvevőktől. Ilyen szabályok a következők:
            </p>
            <p className={styles.torzs}>
              Pontosság. A lelkigyakorlat napjain reggel a napirend kezdetén
              mindenkinek ott kell lennie a vezető által meghatározott helyen
              (templomban, vagy iskolában.) Ha valaki nem tudna pontos lenni
              akármilyen okból, esetleg otthoni elfoglaltsága miatt, inkább
              tekintsen el a lelkigyakorlaton való részvételtől, mert későn
              jövésével csak zavarná a többieket.
            </p>
            <p className={styles.torzs}>
              Csendhallgatás. A lelkigyakorlat helyén (templomban,
              iskolateremben, folyosón, kertben) föltétlenül meg kell követelni
              a teljes csendet. A lelkigyakorlatozók között bizonyára akadnak
              olyanok is, akik ezt a csendet odahaza is meg tudják tartani. Ezt
              azonban legfeljebb meg lehet nekik említeni, de nem szabad tőlük
              követelni. A hallgatás megtartását így lehet legkönnyebben
              megszerettetni a lányokkal, hogy fölébresztjük bennük az önérzetet
              és akkor már becsütetbeli kötelességnek érzik a hallgatást és
              gyengeségnek a megszegését. A lelkigyakorlat alatt azonban
              mindenképen szükséges állandóan felügyelni, hogy ne alakuljanak
              beszélgető csoportok. A lányköri vezetők tegyék komoly
              meggyőződésükké, hogy a csendhallgatás a lelkigyakorlatnak
              lényegéhez tartozik és enélkül komoly eredményt elérni nem lehet.
            </p>
            <p className={styles.torzs}>
              Talán probléma lesz sok helyen a lelkigyakorlatozók ebédeltetése.
              Hacsak valamiképpen megoldható, akkor a lányok ebédidő alatt is
              maradjanak a lelkigyakorlat helyén és fogyasszák el az otthonról
              magukkal hozott ebédet. Így elérjük azt, hogy egész napon
              keresztül semmi sem zavarja lelki magányukat.
            </p>
            <p className={styles.torzs}>
              Minden résztvevőnek jelen kell lennie az összes szentbeszédeken,
              áhítatgyakorlatokon, általában mindazon, amit a napirend előír.
              Senkinek sem szabad mással foglalkoznia, mint amit a napirend
              megenged. Természetesen a szabad időkben imádkozhatnak,
              szentséglátogatást végezhetnek. Csak azokat a könyveket
              olvashatják, amelyeket a vezető, vagy a lelkigyakorlatot tartó
              pap, kijelöl.
            </p>
            <p className={styles.torzs}></p>
            <p className={styles.alcim2}>
              Hol tartsuk a félgaazárt lelkigyakorlatot?
            </p>
            <p className={styles.torzs}>
              Alkalmas minden hely, ahol ki lehet küszöbölni a zavaró
              körülményeket. Legalkalmasabbnak kínálkozik minden községben az
              iskolaterem (vagy a kultúrház). Ez a terem legyen szépen
              kitakarítva, mindenki találjon benne kényelmes ülőhelyet.
              Távolítsunk el minden olyan tárgyat, képet, falitáblát, ami
              zavarótag hatna a lelkigyakorlatos hangulatban. Ha lehetséges,
              akkor ebben a teremben csak a szentbeszédek alatt tartózkodjanak
              és legyen egy másik alkalmas helyiség a szabadidő eltöltésére,
              étkezésre, esetleg jegyzetek készítésére. Nagyon szükséges, hogy a
              szabadidőkben a lányok sétálhassanak, mert így sokkal könnyebben
              bírják a szokatlan és megerőltető szellemi munkát. Ha nem volna az
              épülettel összefüggő alkalmas udvar, vagy kert, akkor a vezető
              keressen módot és időt, hogy közös sétát végezzenek alkalmas
              helyre, esetleg a temetőbe, vagy kálváriára.
            </p>
            <p className={styles.torzs}>
              Az áhítatgyakorlatokat (szentmise, litánia, közös rózsafüzér,
              keresztúti ájtatosság, szentséglátogatás) mindig a templomban
              végezzük.
            </p>
            <p className={styles.torzs}></p>
            <p className={styles.alcim2}>Ki vezesse a lelkigyakorlatot?</p>
            <p className={styles.torzs}>
              A lelkigyakorlatot vezető pap személyét okvetlenül a plébános
              úrral kell megbeszélni. Leghelyesebb, ha a fölkérést is ő intézi
              el. Az azonban nagyon helyes és hasznos, ha a Lánykör vezetője már
              előre érintkezésbe lép az illető pappal és tájékoztatja a tagok
              lelkületéről, hibáiról, lelki műveltségéről, a falu általános
              erkölcsi és vallási életéről, hogy minél hasznosabban tudja
              munkáját végezni. Másrészről meg kell kérdezni a lelkigyakorlat
              vezetőjének kívánságát, vele kell megbeszélni a napirendet és vele
              egyetértve kell azon az esetleges változtatásokat eszközölni.
            </p>
            <p className={styles.torzs}></p>
            <p className={styles.alcim2}>Napirend</p>
            <p className={styles.torzs}>
              Tájékoztatásul közlünk egy napirend tervezetet. Amennyiben a helyi
              körülmények vagy más okok javasolják ennek megváltoztatását, nem
              szükséges pontról-pontra ragaszkodni hozzá.
            </p>
            <p className={styles.torzs}>
              &nbsp;&nbsp;Reggel 7 órakor: Szentmise a templomban. Utána
              reg5eli5. és szabadidő.
            </p>
            <ul>
              <li>
                <p className={styles.torzs}>&frac12;9 órakor: Szentbeszéd.</p>
              </li>
              <li>
                <p className={styles.torzs}>
                  &nbsp;10 órakor: Közös rózsafüzér a templomban.
                </p>
              </li>
              <li>
                <p className={styles.torzs}>&nbsp;11 órakor: Szentbeszéd.</p>
              </li>
              <li>
                <p className={styles.torzs}>
                  &nbsp;12 órakor: Rövid szentséglátogatás, utána ebéd és
                  szabadidő.
                </p>
              </li>
              <li>
                <p className={styles.torzs}>
                  &nbsp;&nbsp;&nbsp;2 órakor: Szentbeszéd.
                </p>
              </li>
              <li>
                <p className={styles.torzs}>
                  &nbsp;&nbsp;&nbsp;3 órakor: Keresztúti ájtatosság a
                  templomban.
                </p>
              </li>
              <li>
                <p className={styles.torzs}>
                  &nbsp;&nbsp;&nbsp;4 órakor: Szentbeszéd,
                </p>
              </li>
              <li>
                <p className={styles.torzs}>
                  &nbsp;&nbsp;&nbsp;5 órakor: Litánia a templomban, Litánia után
                  a résztvevők hazamennek.
                </p>
              </li>
            </ul>
            <p className={styles.torzs}>A napirendre vonatkozó észrevételek:</p>
            <p className={styles.torzs}>
              Szentmise alatt a lányok együtt legyenek. A miseénekeket előre meg
              kell tanítani és begyakorolni. Ének helyett nagyon alkalmas, ha
              közösen imádkozzák a liturgikus miseimádságokat, de csak akkor, ha
              jól tudják.
            </p>
            <p className={styles.torzs}>
              Az étkezések (reggeli és ebéd) alatt könnyű lelki olvasmányt
              olvastassunk valakivel, aki szépen és értelmesen tud olvasni.
            </p>
            <p className={styles.torzs}>
              A rózsafüzér imádkozás kétféleképpen történhet: vagy egy
              előimádkozó vezeti az imádságot, vagy a lányokat két részre
              osztjuk és az egyik rész az egyik felét, a másik rész a másik
              felét mondja el az imádságoknak.
            </p>
            <p className={styles.torzs}>
              A lelkigyakorlatot vezető atyát kérjük meg, hogy a szentbeszédek
              ne tartsanak tovább fél óránál, Minden szentbeszéd után maradjanak
              a lányok 10-15 percig a helyükön és gondolkozzanak arrő1, amit
              hallottak, esetleg gondolataikat jegyezzék le.
            </p>
            <p className={styles.torzs}>
              A napirendben felsorolt közös gyakorlatok idején kívül minden
              résztvevő használja fel úgy az idejét, ahogyan akarja. Nem szabad
              őket túlterhelni esetleges pótszentbeszédekkel, lelki
              olvasmánnyal, közös imádságokkal. Mindent az egyéni buzgóságra
              kell bízni.
            </p>
            <p className={styles.torzs}>
              Gyónásra legalkalmasabb a lelkigyakorlatok második napja. Ha a
              lelkigyakorlatot vezető atyának más kívánsága van, hozzá kell
              alkalmazkodni. A lelkigyakorlatok idején a vezető minden
              problémával utasítsa a lányokat a gyóntató atyához, még akkor is,
              ha hozzá volnának nagyobb bizalommal. Azokban a dolgokban, amelyek
              nem tartoznak a gyónás körébe, álljon ő is a lelkigyakorlatozók
              rendelkezésére. Arra azonban vigyázzon, hogy az ilyen
              megbeszélések ne fajuljanak ájtatos traccsolásokká.
            </p>
            <p className={styles.torzs}>
              Ha a lelkigyakorlatok idején olyan ügy fordulna elő, vagy olyan
              rendetlenség történne, amit a Lánykör vezetője nem tud elintézni,
              forduljon a lelkigyakorlatot vezető atyához. Esetleges
              kívánságait, vagy észrevételeit a lelkigyakorlat idején is bátran
              és bizalommal beszélje meg vele. Mindennél fontosabb a lelkek
              ügye.
            </p>
            <p className={styles.torzs}></p>
            <p className={styles.alcim2}>Előfordulható nehézségek.</p>
            <p className={styles.torzs}>
              Lehetséges, hogy a plébános úr nem akar a lányok részére fétigzárt
              lelkigyakorlatot tartani. Ha a vezető kellő tisztelettel nem tudja
              őt meggyőzni ennek szükségességéről és hasznáról, akkor ne
              erőltesse a dolgot. A falu felelős vezetője a plébános, neki
              sokkal nagyobb a látóköre, jobban tudja, mi szükséges és mi
              lehetséges, tehát feltétlenül alkalmazkodni kelt az ő akaratához.
            </p>
            <p className={styles.torzs}>
              Igen sokszor akadály a helyiség hiánya. Ne legyünk nagyigényűek,
              elégedjünk meg azzal, ami van és használjuk ki a legszerényebb
              lehetőségeket is. Ha a vezető egyetértésben van a község
              vezetőivel (pappal, tanítókkal, jegyzővel), közös megbeszéléssel
              biztosan megtalálják a módot arra, hogy megfelelő időben,
              megfelelő helyiség álljon a lelkigyakorlat megtartásához
              rendelkezésre. Szerénységgel, tapintattal és lélekből fakadó
              jóakarattal mindent el lehet érni, követelődzéssel pedig talán
              semmit.
            </p>
            <p className={styles.torzs}>
              Szükséges, hogy az egész községben jó hangulatot teremtsünk a
              lányok lelkigyakorlata mellett. A plébános úr készséggel megteszi,
              hogy a szószékről felhívja a szülők figyelmét lányaik
              lelkigyakorlatának fontosságára és áldásos gyümölcseire. Esetleg a
              vezető azt is megteheti, hogy először az édesanyákkal beszéli meg:
              a lelkigyakorlat ügyét és őket nyeri meg a gondolatnak. Vigyázni
              kell arra, hogy a lelkigyakorlat és a lelkigyakorlatot végzők ne
              legyenek a gúnyolódás céltáblái, mert ez már eleve meghiusíthatja
              a sikert. Abban az esetben, ha a Lánykörnek egyébként megvan már a
              megfelelő tekintélye, nem kell félni semmiféle kritikától,
              gúnytól, pletykától, vagy ellenkezéstől. Ezek a nehézségek akkor
              is összeomlanak önmaguktól, ha a lányokat igen nagy kedvre tudjuk
              hangolni a lelkigyakorlat iránt.
            </p>
            <p className={styles.torzs}>
              Nehézség lehet az is, hogy a Lánykörnek kevés tagja jelentkezik
              csak a féligzárt lelkigyakorlatra. Ebben az esetben legyen a
              vezető alázatos és helyezkedjék arra az álláspontra, hogy egy
              lélekért is érdemes igen sokat vesződni.
            </p>
            <p className={styles.torzs}>
              A lelkigyakorlat idejét illetőleg tartsuk igen szigorú szabálynak,
              hogy falun csak november elejétől húsvétig szabad és lehet a
              lányokat három napra lefoglalni.
            </p>
            <p className={styles.torzs}>
              Itt leközlünk egy egészen rövid lelkigyakorlatos vázlatot, amely
              talán szerény útmutatásul szolgálhat arra nézve, hogy milyen
              gondolatkörben mozogjon a lelkigyakorlat. Helyesebbnek tartjuk,
              hogy a lányok több pozitív indítást kapjanak a jóra, mintsem
              túlságosan ijesztgessük őket a halállal és pokollal. Ennek a
              vázlatnak keretéül szolgát a Miatyánk s az egyes beszédek
              gondolatait a Miatyánk kéréseihez fűzzük.
            </p>
            <p className={styles.torzs}></p>
            <p className={styles.alcim3}>I. Miatyánk, ki vagy a mennyekben.</p>
            <ul>
              <li>Van-e Isten?</li>
              <li>
                <p className={styles.torzs3}>
                  Az egész természet hirdeti Isten létét. Én is érzem, hogy
                  fölöttem s az egész világ fölött van egy hatalmas Úr.
                </p>
              </li>
              <li>Milyen az Isten?</li>
              <li>
                <p className={styles.torzs3}>
                  Végtelen, hatalmas. Érzem, hogy le kell borulnom előtte. Van
                  hatalmas Isten is, én is vagyok, a porszem.
                </p>
              </li>
              <li>
                <p className={styles.torzs3}>
                  Isten teremtett, Istentől vagyok.
                </p>
              </li>
              <li>Miért teremtett?</li>
              <li>
                <p className={styles.torzs3}>
                  Szeretetből. Azért hálával suttogom: Miatyánk, ki vagy a
                  mennyekben.
                </p>
              </li>
              <li>
                <p className={styles.torzs3}>
                  Istené vagyok. Parancsolhat nekem.
                </p>
              </li>
              <li>
                <p className={styles.torzs3}>
                  Mindenem az Istené. Azt teszi velem, amit akar. Övé a testem,
                  szemem, fülem, nyelvem, akaratom, értelmem. Örökké{" "}
                </p>
              </li>
              <li>
                <p className={styles.torzs3}>
                  Istenért vagyok. Istennek kell szolgálnom. Csak úgy vagyok
                  boldog.
                </p>
              </li>
            </ul>
            <p className={styles.torzs3}></p>
            <p className={styles.alcim3}>II. Szenteltessék meg a te neved.</p>
            <p className={styles.torzs3}>
              Az egész biblián és történelmen végigvonul Isten dicsérete. Káin
              és Ábel áldozata.
            </p>
            <p className={styles.torzs3}>Ábrahám föl akarja áldozni Izsákot.</p>
            <p className={styles.torzs3}>Melkizedek áldozata.</p>
            <p className={styles.torzs3}>Dávid zsoltárokat énekel stb. stb.</p>
            <p className={styles.torzs3}>
              Szűzanya: Magasztalja az én lelkem az Urat.
            </p>
            <p className={styles.torzs3}>
              Ez mind természetes. Imádkoznom kell, mert Istenért vagyok.
            </p>
            <p className={styles.torzs3}>Az imádság belekapcsolódás Istenbe.</p>
            <p className={styles.torzs3}>Beszélgetés Istennel.</p>
            <p className={styles.torzs3}>
              Az imádság kitüntetés. Beszélhetek Istennel.
            </p>
            <p className={styles.torzs3}>Nemcsak jog; kötelesség.</p>
            <p className={styles.torzs3}>
              A természet dicséri Istent, csak az eszes ember ne dicsérje?
            </p>
            <p className={styles.torzs3}>
              Legyen örömünk az imádság, ne csak nyafogó siránkozás. Együtt
              imádkozzunk az angyalokkal; szentekkel.
            </p>
            <p className={styles.torzs3}>
              Ha nem ízlik, nem számít, csak Isten számít, akinek szenteltessék
              meg a neve.
            </p>
            <p className={styles.torzs}></p>
            <p className={styles.alcim3}>III. Szenteltessék meg a te neved.</p>
            <ul>
              <li>A jó imádság eszközei:</li>
              <li>Az imádság törvényei</li>
              <li>
                <p className={styles.torzs3}>
                  Mikor, mit, mennyit, hol, hogyan.
                </p>
              </li>
              <li>
                <p className={styles.torzs3}> A törvény kevés.</p>
              </li>
              <li>Tanácsok:</li>
              <li>
                <p className={styles.torzs3}>
                  Este, reggel, harangszókor, evés előtt és után.
                </p>
              </li>
              <li>
                <p className={styles.torzs3}>Röpimák, rózsafüzér.</p>
              </li>
              <li>
                <p className={styles.torzs3}>Imádságos élet, jó szándék.</p>
              </li>
              <li>Az imádság külsőségei</li>
              <li>
                <p className={styles.torzs3}>Ne zavarjon semmi.</p>
              </li>
              <li>
                <p className={styles.torzs3}>
                  Térdelés, kézösszetevés, keresztvetés.
                </p>
              </li>
              <li>Hibák az imádságban:</li>
              <li>
                <p className={styles.torzs3}>
                  Nem ízlik az imádság. (Nem számít.)
                </p>
              </li>
              <li>
                <p className={styles.torzs3}>Szórakozottság.</p>
              </li>
              <li>Mit imádkozunk?</li>
              <li>
                <p className={styles.torzs3}>
                  Imakönyvből, beszélgetve; elmélkedve.
                </p>
              </li>
              <li>
                <p className={styles.torzs3}>
                  Szentmisehallgatás, közös Istentisztelet, ének.{" "}
                </p>
              </li>
            </ul>
            <p className={styles.torzs}></p>
            <p className={styles.alcim3}>IV. Jöjjön el a te országod.</p>
            <p className={styles.torzs3}>
              A történelem nem más, mint a sátán országának és Isten országának
              a küzdelme.
            </p>
            <p className={styles.torzs3}>
              Bennünk is megvan ez a küzdelem. Valami húz Isten felé, de a
              kísértés és a bűn el akar szakítani Tőle.
            </p>
            <p className={styles.torzs3}>
              Van, akit egészen elszakít Istentől a bűn.
            </p>
            <p className={styles.torzs3}>
              Van, aki egy kicsit Istené is akar lenni, egy kicsit a sátán
              örömeit is akarja élvezni.
            </p>
            <p className={styles.torzs3}>
              Két úrnak nem lehet szolgálni. Vagy-vagy!
            </p>
            <p className={styles.torzs3}>
              Csak akkor vagyok boldog, ha Isten országa van a lelkemben. A
              világ nem tud boldogítani.
            </p>
            <p className={styles.torzs3}>
              Mi Isten országához akarunk csatlakozni és hűek maradunk hozzá.
              Azt akarjuk, hogy Isten országa terjedjen.
            </p>
            <p className={styles.torzs3}>
              Imádkozzunk jó papokért. Ők vezérelnek Isten országába.
            </p>
            <p className={styles.torzs}></p>
            <p className={styles.alcim3}>V. Legyen meg a te akaratod.</p>
            <p className={styles.torzs3}>Jézus példája az Olajfák hegyén.</p>
            <p className={styles.torzs3}>Mi a törvény?</p>
            <p className={styles.torzs3}>Ismerni kell Isten törvényeit.</p>
            <p className={styles.torzs3}>Tisztelni kell és meg kell tartani.</p>
            <p className={styles.torzs3}>Isteni törvény, egyházi tárvény.</p>
            <p className={styles.torzs3}>Engedelmesség. (Szülőknek.)</p>
            <p className={styles.torzs3}>
              Az engedetlenség következménye: Ádám és Éva bűnhődése.
            </p>
            <p className={styles.torzs3}>
              Legyen meg Isten akarata. Ne az enyém.
            </p>
            <p className={styles.torzs3}>
              Nemcsak kötelesség, de helyes is. Csak így lesz boldog az életünk.
              (A törvények útjelzők a boldogság útján.)
            </p>
            <p className={styles.torzs3}>
              Ha nem is értjük Isten akaratát, akkor is bele kell nyugodnunk. Ó
              tudja, mit akar.
            </p>
            <p className={styles.torzs3}>Szenvedés, szegénység stb.</p>
            <p className={styles.torzs3}>Legyen meg az Isten akarata.</p>
            <p className={styles.torzs}></p>
            <p className={styles.alcim3}>VI. Legyen meg a te akaratod.</p>
            <p className={styles.torzs3}>Az élethivatásról.</p>
            <p className={styles.torzs3}>
              Nem mindenkitől ugyanazt várja az Isten.
            </p>
            <p className={styles.torzs3}>
              Mindenkinek kijelöl valamit, amit el kell végeznie.
            </p>
            <p className={styles.torzs3}>
              A lányoknak rendes körülmények között az a kötelességük, hogy
              férjhez menjenek és édesanyák legyenek.
            </p>
            <p className={styles.torzs3}>
              Legszebb, legfontosabb, legszentebb hivatás. Készülni kell rá.
            </p>
            <p className={styles.torzs3}>
              A tiszta házasság (XI. Pius körlevele alapján ismertetni a
              lényeges jegyeket.)
            </p>
            <p className={styles.torzs3}>
              Nem oktalanul, vagyonért mindenáron férjhez menni.
            </p>
            <p className={styles.torzs3}>Tisztán kell az oltár elé lépni.</p>
            <p className={styles.torzs3}>Szerzetesi hivatás.</p>
            <p className={styles.torzs3}>
              Fontos, hogy mindenben Isten akarata teljesüljön.
            </p>
            <p className={styles.torzs}></p>
            <p className={styles.alcim3}>
              VII. Mindennapi kenyerünket add meg nekünk ma.
            </p>
            <p className={styles.torzs3}>
              Mindent Istentől kaptunk. Meg kelt köszönni. Helyesen kell
              használni. Lelkünk javára.
            </p>
            <p className={styles.torzs3}>A teremtmények csak eszközök.</p>
            <p className={styles.torzs3}>
              Ha jó eszköz, használom, ha rossz, elvetem. Lelki függetlenség.
            </p>
            <p className={styles.torzs3}>
              Ne kössön le a gazdagság, ne bántson a szegénység.
            </p>
            <p className={styles.torzs3}>Bízni kell Istenben.</p>
            <p className={styles.torzs3}>Isteni gondviselés.</p>
            <p className={styles.torzs}></p>
            <p className={styles.alcim3}>
              VIII. Mindennapi kenyerünket add meg nekünk ma.
            </p>
            <p className={styles.torzs3}>A szentáldozásról.</p>
            <p className={styles.torzs3}>A lélek is táplálékra szorul.</p>
            <p className={styles.torzs3}>Mi az Oltáriszentség?</p>
            <p className={styles.torzs3}>Jézus maga, amint a földön járt.</p>
            <p className={styles.torzs3}>
              A szentáldozás Vele egyesít. Szőlőtő-szőlővessző. Ő bennem marad
              és én Őbenne.
            </p>
            <p className={styles.torzs3}>
              S Mindent ad, önmagát adja. Átitatja testemet, lelkemet önmagával.
            </p>
            <p className={styles.torzs3}>
              Mindennapi kenyér - gyakori szentáldozás.
            </p>
            <p className={styles.torzs3}>Jó előkészület feltételei.</p>
            <p className={styles.torzs}></p>
            <p className={styles.alcim3}>IX. És bocsásd meg a mi vétkeinket.</p>
            <p className={styles.torzs3}>
              Mikor minden összeomlik . . . jóság, szépség.
            </p>
            <p className={styles.torzs3}>
              A legnagyobb szerencsétlenség a bűn.
            </p>
            <p className={styles.torzs3}>A bűn Isten megsértése. Nagy dolog.</p>
            <p className={styles.torzs3}>Következményei.</p>
            <p className={styles.torzs3}>
              Elveszi a kegyelmet (szépséget), rabbá tesz, elveszi a békét.
            </p>
            <p className={styles.torzs3}>
              Még a testen is meglátszik (kedvetlenség, ingerültség, durvaság.)
            </p>
            <p className={styles.torzs3}>
              A saját bűneink. (A tízparancsolat alapján.) Mennyi bűn!
            </p>
            <p className={styles.torzs3}>
              Le kell borulnom és könyörögnöm: bocsásd meg a mi vétkeinket.{" "}
            </p>
            <p className={styles.torzs}></p>
            <p className={styles.alcim3}>X. Ne vígy minket a kísértésbe.</p>
            <p className={styles.torzs3}>
              Három nagyhatalom: sátán, világ, test.
            </p>
            <p className={styles.torzs3}>A sátánnak van hatalma kísérteni.</p>
            <p className={styles.torzs3}>Becsapja az embert. Hazudik.</p>
            <p className={styles.torzs3}>
              A világ nem más, mint az ördög csatlósa.
            </p>
            <p className={styles.torzs3}>
              Ami körülöttünk van, minden lehet veszedelmes. Barátnő,
              táncmulatság, legények stb.
            </p>
            <p className={styles.torzs3}>
              A test a legveszedelmesebb. Mindig velünk van.
            </p>
            <p className={styles.torzs3}>
              Lustaság, irigység, gyűlölet, megszólás, hazugság, paráznaság.
            </p>
            <p className={styles.torzs3}>
              A lelkigyakorlat után még jobban támadnak a kísértők, mert
              értékesebb lesz a lelkünk.
            </p>
            <p className={styles.torzs3}>
              Nem baj. Isten segítségével le tudjuk győzni a kísértéseket.
            </p>
            <p className={styles.torzs3}>
              Okosnak kell lennünk. Ne keressük a veszedelmet. (A lányélet
              veszedelmei.)
            </p>
            <p className={styles.torzs3}>
              Erősnek kelt lennünk. A lélek legyen az úr és parancsoljon a
              testnek
            </p>
            <p className={styles.torzs3}>Ha nehéz is, győznünk kell.</p>
            <p className={styles.torzs}></p>
            <p className={styles.alcim3}>XI. De szabadíts meg a gonosztól.</p>
            <p className={styles.torzs3}>
              Még egyszer a kísértésekről, veszedelmekről, bűnalkalmakról. Ez az
              igazi gonosz, ami lelkünket fenyegeti.
            </p>
            <p className={styles.torzs3}>
              1. Külső dolgok: Társaság, barátkozás, olvasmányok, szórakozások,
              vagyon, szegénység, kényelemszeretet, szépség stb.
            </p>
            <p className={styles.torzs3}>
              2. Belső dolgok: Lelki szomorúság, (nem találunk örömet az
              imában), elbizakodottság, rossz természet, rendetlenség,
              zárkózottság (bizalommal lenni a lelkiatyához) stb.
            </p>
            <p className={styles.torzs3}>
              Meg kell ismerni a veszedelmeket, akkor el tudjuk kerülni.
              (Lehetőleg a pozitív jócselekedetekre rávilágítani!)
            </p>
            <p className={styles.torzs}></p>
            <p className={styles.alcim3}>XII. Amen.</p>
            <p className={styles.torzs3}>
              A lelkigyakorlatnak akkor van haszna, ha hűek maradunk. Ha ma is
              és ezután mindennap lelkesen tudjuk mondani Isten akaratára: Amen,
              úgy legyen, úgy lesz!
            </p>
            <p className={styles.torzs3}>
              Hogy ezt megtétessük, segítőt kell keresnünk.
            </p>
            <p className={styles.torzs3}>
              Szűzanya: Szűz - példaképe a leányoknak.
            </p>
            <p className={styles.torzs3}>Anya - kézen fogva vezet és segít.</p>
            <p className={styles.torzs3}>Királynő - hatalma van; megerősít.</p>
            <p className={styles.torzs3}>
              Mi csak mindenre mondjuk: Amen, úgy legyen.
            </p>
            <p className={styles.torzs}></p>
            <p className={styles.cim2}>* * *</p>
            <p className={styles.alcim2}>Csatlakozás. </p>
            <p className={styles.torzs}>
              A Katolikus Lányköröket a világi hatóságok előírásai szerint
              életben lévő törvényeknek megfelelően kelt megalakítani. Ennek
              módja a következő:
            </p>
            <p className={styles.torzs}>
              Plébános Úr vagy a vezető levélben bejelenti az illetékes
              főszolgabírói hivatalnak, hogy a községben pl.: nov. 15.-én du. 3
              órakor az iskolában az egyházközséghez tartozó lányokat össze
              kívánja hívni, hogy őket egyházközségi lánycsoporttá vagy
              Lánykörré szervezze. Ez bejelentés, nem engedélykérés tehát, ha 8.
              napon belül letiltás nem jön, a gyűlést meg lehet tartani. A
              gyűlésről szabályszerű jegyzőkönyvet veszünk fel. Tehát: mikor,
              hol, mily alkalomból vettük fel, kik voltak jelen, ki mit mondott,
              jelenlévők mit határoztak, aláírások. Ez a mondat azonban szó
              szerint benne legyen: "A jelenlévők X. Y. buzdító szavaira
              elhatározták, hogy egyházközségi A. C. lánycsoportot - vagy
              katolikus Lánykört - alakítanak s mint ilyen, a Katolikus
              Lánykörök Szövetségéhez kívánnak tartozni"; másként a csatlakozást
              nem tudjuk el-ismerni. - A jegyzőkönyvet aláírják: a plébános úr,
              mint az egyházközség feje, a vezető és a lányok; vagy a jelenlévő
              egyházközségi tagok, tanító urak, tanítónők közül ketten, mint
              tanúk. (A jegyzőkönyv sokszorosított űrlapja nálunk darabonként 2
              fillérért kapható.)
            </p>
            <p className={styles.torzs}>
              A jegyzőkönyvet 5 példányban, az alapítók (plébános, vezető) és a
              tagok lakcímét és foglalkozását, szüleinek nevét is feltüntető
              névsorát 4 példányban kell kiállítani. A jegyzőkönyv 1 példányát
              be kell küldeni a KALÁSZ központba, de feltétlenül jegyzőkönyvet
              küldjünk, mert levélbeli bejelentést a központ hivatalosan nem
              vehet tudomásul. - A csatlakozást bejelentő jegyzőkönyv
              kézhezvétele után a központ kitölti és elküldi a csatlakozást
              tudomásul vevő hivatalos nyilatkozatot és a Szövetség
              alapszabályait 4 példányban, melyeket megérkezés után az
              egyesületnél 4 példányban lévő jegyzőkönyvvel és tagok névsorával
              együtt az alakulás hivatalos jóváhagyását kérő levél kíséretében
              az illetékes főszolgabírói hivatalba kell beküldeni. Onnan a
              hivatalos eljárás során hosszabb-rövidebb idő mulya az alakulás
              tudomásulvételéről és engedélyezéséről fogják az egyesületet
              értesíteni: - Esetleges tévedések vagy félreértések eloszlatására
              szolgáljon, hogy a Katolikus Lánykörök Szövetségének
              alapszabályait a m. kir. Belügyminiszter Úr 146.638/1940/VII-a,
              sz. alatt jóváhagyta és a háborús viszonyok következtében fennálló
              alapulási tilalmat a KALÁSZ-ra nézve 264.562/1941- VII. b. sz.
              alatt felfüggesztette. Tehát a KALÁSZ-hoz tartozó egyesületek a
              törvény értelmében szabadon alakulhatnak.
            </p>
            <p className={styles.torzs}>
              Ha valamely egyesület már régebben működik és most kíván a
              KALÁSz-hoz csatlakozni, ezen csatlakozást elhatározó gyűléshez
              kérjenek főbírói engedélyt, és arról vegyenek fel jegyzőkönyvet. A
              továbbiakban az eljárás az újonnan alakuló egyesületekével azonos.
            </p>
            <p className={styles.torzs}>
              A KALÁSz-hoz való csatlakozás a mi részünkről pénzbe nem kerül,
              csak azt kérjük, hogy a portó és készkiadások fedezésére küldjön
              minden csatlakozó egyesület 50 fillért 10 filléres
              postabélyegekben, a csatlakozást elismerő nyilatkozatokra
              darabonként 30 fillér (4x30 f.) okmánybélyeget, a 4 db.
              alapszabályért pedig 80 fillért. Aki az okmánybélyegek beküldését
              elmulasztja, annak a hivatalos iratokat bélyeg nélkül továbbítjuk
              s csak azt kérjük az ő érdekükben, hogy a hivatalos helyre való
              juttatás előtt feltétlenül szereljék fel az okmányokat
              megfelelően, mert különben súlyos pénzbírságnak teszik ki magukat.
              Ha pedig az alapszabályokért és készkiadásokért nem kapja meg a
              központ előre a szükséges összeget, csekklapot mellékel, és azon
              kéri a tartozás mielőbbi kiegyenlítését.
            </p>
            <p className={styles.torzs}>
              A KALÁSz-hoz való tartozás semmiféle anyagi kötelezettséggel nem
              jár, csak a katolikus egységet erősíti és a sok kis munkát
              foglalja hatalmas egységbe.
            </p>
            <p className={styles.torzs}>
              Akár egyházközségi lánycsoportot alakítunk, akár Lánykört, az
              egyesület mindig az egyházközséggel legyen elsősorban szoros
              kapcsolatban; egyrészt, mert katolikusok vagyunk, és mindenek
              előtt abba a katolikus közösségbe tartozunk bele, ami a
              legközelebb áll hozzánk; tehát munkákkal, jó példánkkal, esetleges
              eredményeinkkel legfőképpen azt akarjuk segíteni; a lányköri
              központ csak a sajátos problémák megoldásában akar segítőkezet
              nyújtani az egyesületeknek. Másrészt az egyházközség autonóm
              testület, annak működésébe semmiféle világi testület nem szól
              bele, ezért annak keretén belül vagyunk a legerősebb szervezet.
            </p>
            <p className={styles.torzs}>
              A hivatalos megalakulás módozataira nézve az esetleges változások
              miatt tanácsos a jegyző uraktól felvilágosítást kérni.
            </p>
            <p className={styles.torzs}></p>
            <p className={styles.torzs}></p>
            <a id="18"></a>
            <p className={styles.cim2}>A mozgalom jeligéje és imái</p>
            <p className={styles.torzs}></p>
            <p className={`${styles.alcim1} ${styles.alcim1NoBottomMargin}`}>
              Jelige
            </p>
            <table width="0%" align="center">
              <tr>
                <td align="center" width="0%">
                  <p>Sík Sándor verse, Gidófalvy Ilona zenéje</p>
                  <img
                    className={styles.vezerkonyvKep}
                    src="/assets/images/vezerkonyv/jelige.gif"
                    alt="A Kalász jelige"
                    height="150"
                  />
                  <br />
                </td>
              </tr>
            </table>
            <p className={styles.torzs}></p>
            <p className={styles.torzs}></p>
            <p className={styles.torzs}>
              Ezt a jeligét Sík Sándor a Katolikus Lányok Országos Szövetsége
              számára írta évekkel ezelőtt. Mikor munkánkkal megindultunk és
              annak lényegét magunk és lányaink számára igyekeztünk
              megfogalmazni, rájöttünk, hogy ennek a kis versnek minden sora,
              minden szava nekünk is éppen úgy szól, mint azoknak, akiknek annak
              idején írták. - Hiszen mi is szebb jövőt akarunk építeni Istenbe
              vetett hittel, szoros testvéri összefogással, nemzeti
              szentjeinknek és a mostoha sorson mindég győzedelmeskedő őseinknek
              példáján lelkesülve. - Lányaink is megszerettek s ma már hangosak
              a fatusi Lánykörök összejövetelei a szívvel-lélekkel és bizony
              gyakran hibásan énekelt Jeligétől. Jeligénket és imáinkat Shvoy
              Lajos, székesfehérvári megyéspüspök úr Ónagyméltósága 103/1936
              szám alatt hagyta jóvá.
            </p>
            <p className={styles.torzs}></p>
            <p className={styles.alcim1}>Imádságaink.</p>

            <p className={styles.alcim2}>
              <center>Gyűlés előtt:</center>
            </p>

            <ul>
              <li>A vezető mondja az antifónát:</li>
              <li>
                <p className={styles.torzs}>
                  Aki az Urat féli, ím így megáldatik.
                </p>
              </li>
              <li>A leányok karban felváltva imádkoznak.</li>
              <li>
                <p className={styles.torzs}>
                  I. kar: boldog ember, aki féli az Urat, &#124; aki az Úrnak
                  ösvényén halad.
                </p>
              </li>
              <li>
                <p className={styles.torzs}>
                  II. kar : Kezed munkáját élvezni fogod, &#124; boldog leszel
                  és jó leszen sorod.
                </p>
              </li>
              <li>Vezető: Aki az Urat féli, ím így megáldatik.</li>
              <li>Mind: Könyörögjünk!</li>
              <li>
                <p className={styles.torzs2}>
                  Kérünk Téged, Úristen, &#124; nyújtsd segítő jobbodat &#124;
                  az égből nekünk, &#124; hogy Téged méltó szívvel keressünk és
                  mindazt, &#124; amit méltóképpen kérünk, &#124; megnyerhessük.
                  &#124; Add, hogy szent hitünkben állhatatosak &#124; és Hozzád
                  mindenkor hűségesek maradjunk, &#124; szeretetben
                  megerősödjünk. &#124; és Tőled semmi kísértésben el ne
                  szakadjunk. &#124; Amen.
                </p>
              </li>
            </ul>

            <p className={styles.alcim2}>
              <center>Gyűlés után:</center>
            </p>

            <p className={styles.torzs}>Áldott legyen az Isten.</p>
            <p className={styles.torzs}>Áldott legyen az Ő szent neve.</p>
            <p className={styles.torzs}>
              Áldott legyen Jézus Krisztus igaz Isten és igaz ember.{" "}
            </p>
            <p className={styles.torzs}>Áldott legyen Jézus neve. </p>
            <p className={styles.torzs}>Áldott legyen az Ő szentséges Szíve.</p>
            <p className={styles.torzs}>
              Áldott legyen Jézus a legméltóságosabb Oltáriszentségben.
            </p>
            <p className={styles.torzs}>
              Áldott legyen a fölséges és szent Istenanya Mária.
            </p>
            <p className={styles.torzs}>
              Áldott legyen az Ő szent és szeplőtelen fogantatása.
            </p>
            <p className={styles.torzs}>
              Áldott legyen a szűz és anya Mária neve.
            </p>
            <p className={styles.torzs}>
              Áldott legyen szent József, az Ő tisztaságos jegyese.
            </p>
            <p className={styles.torzs}>
              Áldott legyen Isten az Ő angyalaiban és szentjeiben. Amen.
            </p>
            <p className={styles.torzs}>
              <br />
            </p>
            <p className={styles.torzs}>
              Lányköri összejövetelt nem tarthatunk imádság nélkül. Isten
              nevében kezdjük, és azzal végezzük munkánkat. De a mi imádságunkat
              akarjuk mondani, azt, amely kifejezi egyesületi életünk célját és
              törekvését: amelyben érvényre jut az imádságos munka, az
              összetartozás és az egymásért való felelősség gondolata.
            </p>
            <p className={styles.torzs}>
              A gyűlés előtt mondott zsoltár és könyörgés a munkával élő,
              Istenfélő ember imája: Ennél szebbet, nekünk valóbbat alig
              találhatnánk. - Felváltva, két csoportra (karra) oszolva mondjuk a
              zsoltárt. Mint ahogy az őskeresztény Egyházban a közösen átélt
              liturgia egy családdá tette az együtt imádkozókat, úgy erősíti
              bennünk is az összetartozás érzetét az imádkozásnak ez az
              egyházias módja: - Az egymásért való felelősség tudata a gyűlés
              után a káromkodásokért mondott engesztelő imában jut kifejezésre.
              Azért engesztelünk éppen a káromkodásért, mert ez a magyar népnek
              leggyakoribb és legutálatosabb vétke. Hátha az engesztelés
              gondolatán át ráeszmélnek lányaink a káromkodás súlyosságára és
              leszoknak róla!
            </p>
            <p className={styles.torzs}>
              Magyarázzuk ezt meg lányainknak, hogy megértsék és megszeressék az
              imádkozásnak ezt a szokatlan módját és kissé idegenszerű szövegét.
            </p>
            <p className={styles.torzs}></p>
            <p className={styles.torzs}></p>
            <a id="19"></a>
            <p className={styles.cim2}>A mozgalom jelvénye és zászlója</p>
            <p className={styles.torzs}></p>
            <p className={styles.alcim1}>Jelvény. </p>
            <img
              src="/assets/images/vezerkonyv/regi_cimer.jpg"
              alt="regi_cimer.jpg"
              className={`${styles.vezerkonyvKep} ${styles.balSzovegIllusztracio}`}
            />
            <p className={styles.torzs}>
              Jelvényünk kifejezi egész mozgalmunk szellemét, melynek lényege a
              szeretet. Ez ad erőt, kedvet, kitartást minden munkához. Ennek
              jelképe középen a mindent összefogó szív. Ebből indul ki a
              kereszt, katolicizmusunk szimbóluma. A kereszt négy búzakalászban
              folytatódik, ami azt jelenti, hogy minden munkánkat: a szántást, a
              vetést, az aratást, a földdel való minden kapcsolatunkat a kereszt
              szelleme hatja át. A szeretet s a hit minden munkánk legfőbb
              irányítója s ez küszöböli ki a nagyravágyást; hiúságot közülünk.
              Ez ülteti szívünkbe az áldozatkészséget is, melynek önzetlen
              gyakorlása nélkül pedig a falusi Lánykör vezetője nem végezheti
              jól a munkáját és ami nélkül egy falusi lány sem indulhat neki a
              reá váró, gondokkal, áldozatokkal teli életnek úgy, hogy abban
              boldog lehessen. - Az egész jelvényt zöld mező öleli körül, úgy,
              mint a falu végén a határban felállított keresztfát is. A termés a
              földből fakad, de áldást reá csak a kereszt adhat. Épp így a mi
              munkánk is a józan, vidám, tiszta természetre épít, de
              középpontjában megváltásunk jele, a kegyelem forrása: a kereszt
              áll. Így lesz ez a jelvény beszédes hitvallása törekvésünknek,
              reményünknek, annak, hogy e jelben győzni fogunk, - "In hoc signo
              vinces" - mint a jelvényen látható négy betű: I. H. S. V. is
              hirdeti.
            </p>
            <p className={styles.torzs}>
              Jelvényünkön a kereszt búzaszemekből van összerakva.
            </p>
            <p className={styles.torzs}>
              I. A búzaszemek az emberi munkának a legértékesebb és legfontosabb
              - bár szemre kicsiny - gyümölcsei.
            </p>
            <p className={styles.torzs}>
              A búzaszemekből lesz a kenyér - testi életünk nélkülözhetetlen
              tápláléka.
            </p>
            <p className={styles.torzs}>
              De emberi, lelki életünk is ilyen búzaszemekből él és ezek a mi
              erényeink, - Minden. emberi életnek - vagyoni, vallási születési
              vagy testalkati különbség nélkül - dísze, ereje, táplálója: a
              becsületesség, a tiszta szív, az igazmondás, az engedelmesség, az
              erkölcsösség, a szemérmesség, stb. - a "búzaszem".
            </p>
            <p className={styles.torzs}>
              II. A KALÁSZ-lányok azonban ezeket az erényeket - Krisztus Urunk -
              az Istenember - példája szerint "keresztbe" fonják. - Milyen más
              az, ha valaki Krisztus Urunk példáját követve "kereszt-alakban
              engedelmes, amint Krisztus engedelmes volt egészen haláláig a
              keresztfán. - Milyen erős a tisztaságunk, ha "kereszt-alakban" -
              Krisztus keresztjének erejében, Krisztus keresztjét kezünkkel
              magunkra vetve és lelkünkben, érzéseinkben elevenen viselve -
              őrizkedünk minden tisztátalanságtól. - Menynyire szentek a
              "kereszt-alakban" mondott szavak és elhangzott beszélgetések:
              megszépül Krisztus Urunk keresztje által az egy-mással való
              érintkezésünk. - Átsugárzik szavainkon és tetteinken, Krisztus
              jósága, ereje, megértése, megbocsátása. - Szívünk jóságát,
              mindennapi erényeinket, mindazt, amit csak egy-egy nap, egész
              életünkben teszünk - ezeket ez apró búzaszemeket - kereszt-alakban
              kell egymás mellé illesztgetnünk. (Otthon a szorgos munkánkat,
              sétánkat, táncolásunkat stb.)
            </p>
            <p className={styles.torzs}>
              III. A "kereszt-alakban" vezetett életünk által győzünk. Azáltal
              megőrizzük magunkban a romlatlan életet, megóvjuk hazánkat a
              pusztulástól és megszolgáljuk az örök életet, mindnyájunk végső
              vágyát, amelyet Krisztus Urunk szent keresztjével nekünk szerzett.
            </p>
            <p className={styles.torzs}></p>
            <p className={styles.alcim1}>A zászló.</p>
            <p className={styles.torzs}>
              A Zászló mindig a győzelem gondolatát lebegteti meg azok előtt,
              akik reá lélekkel néznek. Buzdít, bátorít, lelkesít. Ezt akarja a
              mi zászlónk is.
            </p>
            <p className={styles.torzs}>
              Hófehér a zászlónk. Egyik oldalán a jelvényünk nagyított képe,
              másik oldalán a tótanács Anyja. Alakja lehet akár templomi lobogó,
              akár zászló. Az előbbi mindenesetre sokkal előnyösebb, mutatósabb,
              jobban megfelel a célnak. - A rúd végén minden esetben kereszt
              van.
            </p>
            <p className={styles.torzs}>
              A zászlón a jelvény már maga sokat mond. Ismerik, értik, szeretik
              a lányok, hogyne néznének rá boldog lelkesültséggel! A miénk. Ezt
              érzik, valahányszor rátekintenek és hogy ez milyen programot
              jelent a számukra, azt a jelvény elmondja.
            </p>
            <p className={styles.torzs}>
              A másik oldalán a tótanács Anyjának képe van. Ő mutatja meg a
              lányoknak az utat, hogyan alakíthatják ki magukban az igazán jó
              katolikus magyar lány lelkületét. Figyelmeztető egész életükre,
              hogy kihez fussanak bánatukban eligazításért, útmutatásért. A
              Jótanács Anyja meghallgatja őket és mindig felel nekik. Tudták
              azok, akik az egész világ minden katolikus lánymozgalmát az Ő
              védelme alá helyezték, hogy a lánynak s az asszonynak, - inkább,
              mint bárki másnak - kell a jó tanács, az állandó segítség, egész
              életen át oly sok, gyakran mások helyett is viselt gond és baj
              között.
            </p>
            <p className={styles.torzs}>
              A zászló kivitele teljesen egyszerű; a fehér selyemre rá van
              hímezve a jelvény, körülötte ugyancsak sárga domborított betűkkel
              a tulajdonos Lánykör és annak alakulási éve. A Jótanács Anyja
              képet nem érdemes házilag elkészíteni; annak, hogy céljának
              megfeleljen, igazán szépnek, művészinek kell lennie. Ezt tehát
              csak művésszel festessük még akkor is, ha egyébként a zászlót
              házilag készítenénk is. A kép körül ugyanolyan domborított
              betűkkel, mint túloldalon, ez a felírás áll: Jótanács Anyja,
              könyörögj érettünk! Házi készítéshez szívesen ad útmutatást a
              Központ; kész zászlót szállít a Falu háziipari bolt (a szövetség
              boltja!) Margit krt. 57., valamint a KALOT központ, Bp. IV.
              Ferenciek tere 7. Igen szép zászlók készülnek a Hermina-úti
              zárdában is.
            </p>
            <p className={styles.torzs}>
              Vannak, akik divatból és fényűzésből csináltatnak zászlót, hogy
              büszkélkedve felvonulhassanak alatta. - A mi zászlónk nem
              változékony divatot, hanem fokozott hitvallást jelent. Éppen ezért
              csak régebben dolgozó, öntudatos Lánykör csináltasson zászlót,
              melynek minden tagja biztosan tudja, mit akar, mi a célja és azért
              komolyan és áldozatosan küzd is.
            </p>
            <p className={styles.torzs}></p>
            <p className={styles.torzs}></p>
          </div>
          <div className="fejezet-vezeto">
            <a id="20"></a>
            <p className={styles.cim1}>II. A VEZETŐ</p>
            <p className={styles.torzs}></p>
            <p className={`${styles.cim2} ${styles.cim2BottomMargin}`}>
              Szociális kötelesség és szociális felelősség.
            </p>
            <p className={styles.torzs}></p>
            <p className={styles.torzs}>
              A szociális kötelesség és felelősség katolikus tantétel. Nemcsak a
              papnak és lelkipásztornak, de a falu minden intelligens lakójának
              kötelessége a gazdaságilag vagy társadalmilag alacsonyabb és
              gyengébb osztály szociális gondozása - leányifjúságra alkalmazva a
              tételt: minden intelligens nőnek kötelessége a falu lányainak
              gondozása, amily kötelessége az anyának gyermekeinek gondozása és
              amint az édesanya felel az Isten előtt, hogy e kötelességét
              teljesítette-e, ép úgy felel minden intelligens nő, hogy az
              alacsonyabb osztályba tartozó lányokat részesítette-e szociális
              gondozásban. Ezért nemcsak szociális kötelesség van, de szociális
              felelősség is.
            </p>
            <p className={styles.torzs}>
              A falu intelligens nőtársadalmának kötelessége és felelőssége a
              női lélek adottságából, az un. női psyche alaptermészetéből
              következik, sürgeti ezt a műveltség helyes fogalma is és
              kodifikálta a katolikus nő számára az evangélium.
            </p>
            <p className={styles.torzs}>
              a) Krisztus Urunk megátkozta a fügefát, mert mások számára
              gyümölcsöt nem termett és elrendelte, hogy mint hasznavehetetlent
              kivágják, mert a gyümölcsfának az a rendeltetése, hogy másoknak
              gyümölcsöt teremjen. Amint a fa rendeltetése és természeti
              beállítottsága, hogy gyümölcsöt teremjen, úgy a nőnek is
              rendeltetése és természeti beállítottsága, hogy másokról
              gondoskodjék - ha ezt nem teljesíti, terméketlen fügefa, melyre az
              Üdvözítő büntető parancsa vár: kivágtatik és tűzre vettetik.
            </p>
            <p className={styles.torzs}>
              A női psyche alaptermészete másokért élni önmagának teljes
              feláldozásával. A női lélek ezen adottsága és diszpozíciója az
              emberiség legnagyobb kincse és hőforrása - úgy hívjuk, hogy
              anyaság. Ez a természet adta rendeltetés az életnek az a
              titokzatos boldogság-forrása, melyről a költök állandóan énekelnek
              - ez a családnak és az otthonoknak fókusza, vagyis igazi tűzhelye.
              Olyan az édesanya, mint a gyertya (Didon) - rendeltetése, hogy
              másoknak világítson; hogy világítani tudjon, ahhoz szükséges, hogy
              égjen és míg másoknak világít, maga elégjen s elfogyjon. Amely
              nőben e lelkület és hajlam nincs meg, kiben ezen rátermettség
              helytelen nevelés folytán elcsenevészedett, mint az utcakőre
              vetett mag, vagy elkorcsosult és elsatnyult az ösztönök,
              életfrivolitás és életkönnyelműség fülledtségében, mint a gaz és
              bokrok közé vetett mag, az a nő, mint a terméketlen fügefa,
              megméretik és könnyűnek találtatik, kivágatik és tűzre vettetik.
            </p>
            <p className={styles.torzs}>
              Az "Élni másokért"' az anyai hivatás közös psychéje folytán
              nemcsak a férjhez ment nőknek és gyermekes anyáknak a hívatása, de
              hivatása minden férjhez nem ment nőnek: az ő családjuk a
              társadalom, vagyis a nagycsalád - ők az árvák, szegények,
              elhagyatottak édesanyái, mert hivatásuk és életrendeltetésük, mint
              az orosz Ruskin írja - a kiterjesztett anyaság.
            </p>
            <p className={styles.torzs}>
              b) Prohászka püspök mondta (1922. október): "Nincs műveltség
              szociális érzés nélkül... a szociális ember művelt ember, és aki
              nem szociális, nem művelt."
            </p>
            <p className={styles.torzs}>
              A műveltség nem pusztán értelmi tanultság, finom modor,
              életstandard vagy szellemi munkakör, a műveltség az egyén minden
              oldalú és rétegű tökéletes kifejlődése. Az egyén világának
              jelentős része a közülethez való viszony. Ha e viszony nem
              tökéletes, hiányos a műveltség. A testület és közület sokban
              hasonló a fizikai testhez. A testnek egységesítő és összefoglaló
              lelke van, a test minden részében érzi ezen egy lelket és az
              összefogó egy léleknek befolyása van a test minden részére. Így
              kell összefogó, egységesítő lelkének lenni a társadalomnak is és
              ez a szociális érzés. A társadalom, mely szakadozott, melynek föle
              nem érti meg az alját - míg a társadalomban rétegek vannak, melyek
              mint ér-zéketlen betétek fekszenek egymás mellett (Prohászka), a
              közület nem felel meg a társadalom fogalmának, mert nincs meg a
              lelke. A szociális érzést, a társadalom ezen egységesítő lelkét,
              mely a szociális kötelességek mögött mint ható erő és lendítő
              kerék áll, Prohászka püspök így fogalmazta meg : "Régi evangéliumi
              szeretet új meglátásban, melynél fogva az én bajom a mások baja is
              legyen - és mások baja az én bajom is legyen; a szociális érzés
              az, hogy valakinek legyen érzéke ne csak a maga kisebb körének
              érdekei iránt, hanem a nagyobb sugárral megírt érdekkörök iránt
              is."
            </p>
            <p className={styles.torzs}>
              c) A világiak szociális kötelességét előírja és törvénybe foglalja
              a Szentírás is: A rómaiakhoz írt levélben (15, 7.) olvassuk Szent
              Pál szavait: "Karoljátok fel egymást, amiképp Krisztus is magáévá
              tett benneteket." - A Thesszalonikiakhoz írt első levélben (5,
              14-16.) ugyanezt hangsúlyozza: "Kérünk titeket Testvérek,
              feddjétek meg a nyugtalanokat, bátorítsátok a félénkszívűeket,
              gyámolítsátok a gyengéket . . . mindenkor szolgáljátok egymást és
              mindenki javát". "Minden bölcsességgel tanítsátok és intsétek
              egymást" folytatja a Kolosszeiekhez irt levél (3, 12.) és
              "hirdessük annak erényeit, aki a sötétségből hívott minket az ő
              csodálatos világosságára" (I, Pét. 2, l2.) De hangsúlyozza a
              kötelességet már az Ószövetség is : "Parancsot adott nekik,
              kinek-kinek társára vonatkozólag" (Eccl. 17, 12,)
            </p>
            <p className={styles.torzs}>
              Szent Péter az okot is megmondja, miért kell a világiaknak
              apostolkodni és szociál-karítatív munkával embertársaikat
              szolgálni: mert bizonyos mértékben a világiak is papok, és mert
              minden világi hívő megkapja a papi hivatás egy részét a keresztség
              és a bérmálás szentségében. Az első Péter-levél második
              fejezetében így szólítja meg Szent Péter a híveket: "Választott
              nemzetség, királyi papság, szent nemzet, szerzett nép" vagyunk. A
              papi hivatás Istentől adott külön kegyelem. Királyi papság: ezt a
              kegyelmet teljes egészében az kapja meg, akit Isten papi
              szolgálatra hívott, a szentségek kiszolgáltatójává kent fel, de
              egy részét miden hívő megkapja és ezt a kegyelmet, mint Istenadta
              kincset mindenki forgatni köteles - és ha a talentumokról szóló
              példabeszéd szerint kamatozatlan hagyja, felel érte Isten előtt.
              Ugyanezt ismétli a látomások könyve (5, 9-10. és 20, 6.)
            </p>
            <p className={styles.torzs}>
              Káin kihívóan válaszolta Istennek: Vajon őrzője vagyok-e én
              öcsémnek? Katolikus hívő, te nem mentheted magad, a keresztségben
              megkaptad a papi hivatás egy részét, ezzel testvéred őrzőjévé tett
              az Úr. - A világi apostolság hivatása ez.
            </p>
            <p className={styles.torzs}>
              A korinthusiakhoz intézett első levél (1~, 16-17.) a szentáldozás
              kenyeréből, az Úr testének titkából vezeti le a hívek egymás iránt
              való szociális kötelességét. "Az áldás kelyhe, melyet megáldunk,
              nem Krisztus vérében való részesülés-e és a kenyér, melyet
              megeszünk, nem az Úr testében való részesülés-e? Mert egy kenyér -
              egy test vagyunk mindnyájan, akik az Úr testét esszük. Az emberi
              test egyik része megszenvedi és érzi a másik testrész fájdalmát,
              így akik ugyanazon Oltáriszentséggel táplálkoznak, kell, hogy
              megérezzék és hordják egymás terhét és fájdalmait.
            </p>
            <p className={styles.torzs}>
              Ne mondja senki, hogy e munkára tudatlan. Jeremiás próféta dadogó
              volt és az Úr mégis elküldte, hogy szembeszálljon az istentelen
              Acháb királlyal és pogány feleségével - dadogva könyörgött
              Jeremiás: "gyermek vagyok, Uram" . . de mennie kellett és győzött
              az Úr segítségével. Tudatlanok voltak az apostolok, gyermekek
              tudásra, műveltségre, szótehetségre nézve, de menniük kellett . .
              . és meggyőzték a világot, mert velük volt a Pünkösd Lelke. A 18
              éves sienai Szent Katalin küzdötte ki, hogy a pápa az avignoni
              fogságból Rómába visszatérjen, a gyermekleány Pulencia titkárja
              volt a kútba elrejtett pápának és élete veszélyeztetésével volt
              összekötő az elrejtőzött pápa és a hívek között. Mi is mindenre
              képesek vagyunk az Úrban, kit minket erősít.
            </p>
            <p className={styles.torzs}>
              Rusten esztéta írja: "Minden nő legyen a rend őre, a vigasz
              balzsamcseppje, a lelkiség tükre." - És én hozzáteszem, legyen
              fiatalabb társnőinek "idősebb testvére", szociális gondozója.
            </p>

            <div className={styles.alairas}>
              <div>
                <p className={styles.torzs}>
                  <center>
                    <i>Potyondy Imre</i>
                  </center>
                </p>
                <p className={styles.torzs}>
                  <center>Praelatus-kanonok</center>
                </p>
              </div>
            </div>

            <p className={styles.torzs}></p>
            <p className={styles.torzs}></p>
            <a id="21"></a>
            <p className={`${styles.cim2} ${styles.cim2BottomMargin}`}>
              Milyen legyen a vezető?
            </p>
            <p className={styles.torzs}></p>
            <p className={styles.torzs}>
              Azt szokták mondani, hogy a mai fiatalságot nehéz jó irányba
              vezetni, mert nem ismer tekintélyt, kötelességet és törvényt. Ha
              ennek az állításnak igazat adunk - nehéz megmondani, hogy milyen
              legyen a vezető, aki után a fiatalság, még hozzá a magyar
              lányifjúság elindul.
            </p>
            <p className={styles.torzs}>
              A tekintélytisztelet tényleg gyenge lábon áll a mai lányoknál, de
              csak a hatalmon, pénzen, rangon, társadalmi álláson épült
              tekintélynek a tisztelete. - Nem vetik meg ezeket a javakat sem,
              ha szükségük van valamire, de nem minden esetben hisznek a
              tulajdonosának. S ha legcsekélyebb mértékben kellemetlenné válik
              számukra a kapcsolat, nyugodtan hátat fordítanak a tekintélynek,
              néhány gúnyos jelzővel téve érthetővé a többiek előtt is
              álláspontjukat. - De van a tekintélynek egy fajtája, amellyel
              szemben nincs a mai lánynak sem ellenálló képessége, amely előtt
              feltétlenül meghajlik, szelíden és engedelmesen simul az önként
              magára vert igába és ez: a józan, őszinte szeretet és jóakarat.
            </p>
            <p className={styles.torzs}>
              Hiba volna szeretet alatt mézédes szavakat, az arcizmoknak görcsbe
              keményedett "mosolygását" érteni. Még az állandóan megbocsátó és
              elnéző lágyságot sem sorozhatjuk a szeretet tényei közé. - Aki
              szeret, az feltétlenül jót akar, az igazi jóakarathoz pedig
              gyakran kell a nyeső ollót, szemző kést, fűrészt, még bizonyos
              esetekben az ásót és kapát is használni. - Ehhez pedig biztos és
              kemény kéz kell, amely vágni, sőt irtani is tud, ha rá kerül a
              sor, de tud simogatni, támogatni, felemelni, segíteni, könnyet
              törölni, sebet kötözni, betakarni és testvéri szorításban
              összetalálkozni egy másik, talán kérges, kidolgozott, félénk, vagy
              alig megtisztult kézzel - szeretetből.
            </p>
            <p className={styles.torzs}></p>
            <p className={styles.alcim1}>Szeretet</p>
            <p className={styles.torzs}>
              Az első és legfontosabb alapvető jellemvonása a vezetőnek a józan,
              őszinte és feltétlenül jót akaró szeretet.
            </p>
            <p className={styles.torzs}>
              Könnyű szeretni, ha szeretetünket a vérség kapcsolata, vagy a
              különböző nemek között fellépő vonzalom élteti. Ezek az érzések is
              jelentenek gyakran szenvedést, hősies önfegyelmet,
              áldozatkészséget, önmagunknak való teljes megsemmisülést - de
              ezekhez megvan e természetes rúgó, amely lendít és könnyít,
              felejttet és - mégis csak boldogít. De szeretni természetes alap
              nélkül, szeretni valakit, aki nekünk idegen, aki velünk szemben
              talán bizalmatlan, rosszindulatú, akinek hibáit elfogultság nélkül
              teljes egészükben látjuk, az ebből származó kellemetlenségeket
              magunkon tapasztaljuk, valakit, aki hálátlan, aki megcsal, aki nem
              őszinte, talán fondorkodó, sötét, csúnya, ügyetlen szokások rabja,
              aki érzéketlen marad akkor is, ha lelkem elébe teszem - ez nehéz
              dolog, kemény, keserves, verejtéket sajtoló, szüntelenül tartó
              küzdelem önmagukkal, emberi szívünkkel és természetünkkel. - Pedig
              a vezetőnek szeretnie kell, így, ennyire, mindég, mert másképpen
              nem lehet vezető, vagyis nem fognak utána menni, nem lesz kit
              vezetnie.
            </p>
            <p className={styles.torzs}>
              Ebben az értelemben vezetőnek lenni: emberi erőnket meghaladó
              feladat. Ha látunk is a történelem folyamán nagyszerű példákat;
              hátuk mögött mindig ott látjuk a minden természetes érzés-rúgónál
              erősebb, nagyszerűbb, kifogyhatatlan forrást: az Isten kegyelmét!
              Vezetni hősies szeretet nélkül nem lehet, de a hősies szeretethez
              indítást, erőt, lelket és lángot az Isten ad - és mindenkinek ad,
              aki készségesnek mutatkozik az Ő szent kezeiben. - Ha a vezetői el
              meri mondani komolyan és átgondolva a legméltóságosabb
              Oltáriszentség előtt a belga szociális munkások kis fohászát:
              "Uram, ha magamat keresem: alázz meg; ha Téged kereslek: áldj
              meg!" - az a vezető tervezhet, akarhat, szerethet; mert vele van a
              jó Isten kegyelme, amely minden emberi gyengeséget; hibát,
              készséghiányt pótol. Az szeretni tud a szónak legnemesebb és
              legkomolyabb értelmében, az a vezetésre alkalmas, mert alkalmassá
              tette őt arra a jó Isten kegyelme.
            </p>
            <p className={styles.torzs}> </p>
            <p className={styles.alcim1}>Együttérzés, együttdolgozás.</p>
            <p className={styles.torzs}>
              A mai fiatalság nem ismeri a kötetességet, nem hoz áldozatot, nem
              feszíti meg minden erejét a nemesebb célok eléréséért folytatott
              küzdelemben. Ez is igaz. - A mai fiatalság parancsszóra nem indul,
              vakon nem engedelmeskedik. Hiszen ez a fiatalságnak mindig nehéz
              volt, de mennyivel nehezebb ma, amikor annyi csalódáson kellett
              átesnie, amikor megrendült a bizalma minden parancs iránt, mert
              látta, hogy gyakran csak játék, szeszélyek és alacsony indulatok
              eszköze lett a parancsolók a kötelességet prédikálók, de nem
              teljesítők kezében. Hányszor becsapták, hányszor kifosztották már
              őket, mert hittek és engedelmeskedtek. Csoda hát, ha most már nem
              indulnak semmiféle szóra, bíztatásra, a legtisztább jóakarattal,
              értük aggódó, becsületes szeretettel adott parancsra sem? Csak egy
              esetben indulnak. Akkor, ha a vezető maga áll a sereg élére, maga
              megy legelöl és azt mondja: Gyertek utánam! Igen, a vezetőnek
              elismert egyéniség után mennek, de előtte nem; biztatásra nem, de
              hívásra igen.
            </p>
            <p className={styles.torzs}>
              A vezető tehát éljen együtt munkában, kötelességteljesítésben,
              örömben, bánatban, szórakozásban, élvezetben a vezetettekkel.
            </p>
            <p className={styles.torzs}>
              Ő legyen az első, aki a kiadott parancsnak engedelmeskedik, és a
              fiatalság is teljesíteni fogja kötelességét.
            </p>
            <p className={styles.torzs}>
              A Lánykörök programjában szerepel az ének, játék, tánc, kirándulás
              stb. szórakozási lehetőségek. Az igazi vezető nem hagyja el
              leányait szórakozás közben sem, hanem velük megy, fárad, ugrál,
              jókedvű, dolgozik, tehát mindent megtesz maga is, amit á lányoktól
              kíván. Ezért mozgékonynak, kedélyesnek, talpraesettnek, bátornak
              kelt lennie s végtelenségig türelmes gyermekes szórakozásaival
              szemben, hadd érezzék a lányok, hogy vezetőjük egyben jó pajtásuk
              is, kivel szemben őszintén és egyszerűn megnyilatkozhatnak. Így
              fogja a vezető leányai bizalmát teljes mértékben élvezni és így
              tudja majd legnagyobb problémáikat könnyen és fontoskodás nélkül
              megoldani. - Egy tánccal együtt töltött délután sokszor több
              alkalmat kínál a nevelésre és irányításra mint bármilyen komoly
              témájú előadás.
            </p>
            <p className={styles.torzs}></p>
            <p className={styles.alcim1}>Példaadás.</p>
            <p className={styles.torzs}>
              A mai fiatalság nem ismer törvényt. Igaz. - De ritka manapság az
              olyan törvény, amelyet nem lehet kijátszani, amely alól nem lehet
              kibújni, amelyet nem lehet megkerülni. Melyik törvény megszegésére
              nem láthat példát ma a fiatalság? - Milyen alapon kívánhatjuk hát
              tőlük, hogy ők, akik előtt a boldogulás olyan elérhetetlen
              messzeségben lebeg, akik nem számíthatnak a következő napnak
              természetesen és rendszeresen következő eseményeire, akik előtt
              nem áll a becsület, a munka, a kötelességteljesítés, mint a biztos
              boldogulás záloga - mert nem állhat így - ismerjenek törvényt, és
              törvényhozó hatalmat? Pedig keresik a törvényt, a biztos támaszt,
              hiszen ők építeni akarnak, mert fiatalok és az élet ezer
              rejtélyével még előttük áll. Mire építsenek? A becsületre nem
              érdemes, hiszen a becstelenek boldogulnak jobban, a hűségre nem
              érdemes, mert a hűtlenek könnyebben élnek, a munkára nem érdemes,
              mert a dologtalanok többet keresnek, a szorgalomra, takarékosságra
              nem érdemes, mert hányan elvesztették saját hibájukon kívül
              öregkorukra azt, amit egész életükön át nehezen gyűjtöttek. A
              mindenki által szentnek tisztelt törvény nélkül bolyonganak az
              útvesztőkben, minden megtört fénysugár után elindulnak, mert azt
              hiszik, hogy ott van a kivezető út. - Aki vezetni akar, az
              tisztelje a törvényt és a fiatalság is tisztelni fogja. Gyűlölje a
              bűnt, hogy megtanulhassák ezt is a fiatalok. Szeresse mindenek
              fölött a tisztát, a becsületeset, a jót, adjon példát egész
              életével, életének minden percében mindég a legjobbra: és azok,
              akik őt vezetőjüknek elfogadták, ugyanúgy fognak tenni - erejükhöz
              mérten.
            </p>
            <p className={styles.torzs}>
              Mikor vasárnap délután elbúcsúztunk a lányoktól, nem tehetjük le
              magunkról a vezetői köntöst és nem cserélhetjük azt fel mással. Az
              hozzánk van nőve, tőlünk elválaszthatatlan. Nevelünk, vezetünk
              reggeltől estig, öltözés, étkezés, munka, társas érintkezés,
              szórakozás, imádság, szenvedés és örvendezés közben, nevelünk
              szavainkkal, tetteinkkel, gondolatainkkal, viselkedésünkkel,
              mozdulatainkkal, egész valónkkal. És nincs szünet, nincs pihenés;
              a feldobott kő visszahull reánk. Lányaink figyelnek minket, amikor
              nem is gondoljuk, elemezik hanghordozásunkat, kézmozdulatunkat,
              utánozzák beszédünket, járásunkat, öltözetünket, modorunkat. S ha
              mi tiszteljük a törvényt cselekedettel és példával, ők is
              tisztelni fogják, mert a példánkkal hatunk reájuk a legmélyebben,
              legmaradandóbban. A vezetőnek egész élete példaadás és felelős a
              példáért, melyet a fiatalságnak mutatott.
            </p>
            <p className={styles.torzs}></p>
            <p className={styles.alcim1}>Türelem.</p>
            <p className={styles.torzs}>
              A tagok legnagyobb részét a kamaszkoron a Lánykör segíti át,
              illetve kamaszkoruk idejét a Lánykörben töltik. A vezetőnek
              türelmesnek kell lennie a kamasz gyermek kellemetlen
              életmegnyilvánulásaival, indokolatlan és felelőtlen viselkedésével
              szemben. Ha ebben az időben kicsúszik kezünk közül a lány, a
              legnagyobb veszélynek van kitéve, mert vérén és szokásain kívül
              még kiegyensúlyozatlan jellemének kapkodása is romlásba viheti őt.
              Nem baj, ha hangos, ha erejét lépten-nyomon összemérni igyekszik,
              ha fontoskodó és bölcsebb mindenkinél, ha indokolatlanul egyszerre
              vad és bizalmatlan lesz, mert azt hiszi, hogy őt senki meg nem
              érti. Nem baj, ha néha különcködik, ha néha nem vesz részt a
              játékban, ha előre meggondoltan és láthatóan szenved elképzelt
              szenvedések súlya alatt. Ez mind hozzátartozik az ő
              átalakulásához, ezt mind ki kell próbálnia, néki magának, mert
              senkinek sem hisz. De titokban, magának sem vallva meg, boldogan
              veszi tudomásul, hogy őt szeretik, vele törődnek, őt szívesen
              látják, reá mosolyognak, vele együtt futnak, birkóznak, búsulnak,
              szenvednek. Érzi és tudja, hogy valaki van, akihez ha jól esik, e1
              leltet menni, sírva, vagy nevetve oda lehet bújni, aki megérti a
              csodák és álmok seregét, melyek őt életének ebben a korszakában
              foglalkoztatják. S ahogy Mécs László írja a kamaszok című versében
              "S egy észrevétlen hajnalon: a vér partos mederbe tér. Lelkük
              fattyúhajtásait cirokseprűnek lenyesik és leseprik az utakról a
              buja sziromhavazást. Az előírást átveszik, a hídépítést átveszik,
              a hajók kormányát átveszik, az ekét, malmot átveszik, a régi
              fáklyát átveszik, az Istent megsüvegelik, mert: ők lettek a Rend,
              Család, a Miatyánk s a Hiszekegy". - Ezt az időt a lányoknál is ki
              kell várni, mert eljön, sokkal hamarabb, mint a fiúknál s annál
              kevesebb bajt jelent a lelkük számára, minél biztosabban tudta a
              kamasz leány, hogy van neki igazi vezetője.
            </p>
            <p className={styles.torzs}></p>
            <p className={styles.alcim1}>Alázat</p>
            <p className={styles.torzs}>
              Egy-egy falunak, vidéknek, foglalkozási ágnak lánytársadalma
              különbözhetik egymástól szokásban, ügyességben, anyagi helyzet
              tekintetében, de rossz ifjúság, rossz anyag nincs, csak esetleg
              kevésbé alkalmas vezető van. S ha a munkánknak nincsen eredménye,
              legalább is nem olyan az eredményes, mint amilyent mi szeretnénk,
              ne okoljuk a lányokat, ne mondjuk, hogy hálátlanok, nem érdemes
              velük foglalkozni stb, hanem hajtsuk meg alázatosan a fejünket és
              keressük meg magunkban a hibát. Ha megvizsgáljuk szándékunk
              tisztaságát és mértékét, áldozatkészségünket, türelmünket, itt
              vagy ott meg fogjuk találni eredménytelen munkánk magyarázatát.
            </p>
            <p className={styles.torzs}></p>
            <p className={styles.alcim1}>Készség</p>
            <p className={styles.torzs}>
              Nem a véletlenség műve, hogy valaki tanítónő lett egy kis faluban,
              vagy házassága, családja révén, több tanultsággal és ismerettel
              falura került. Az Isten örök tervéiben meg van írva mindenkinek a
              hívatása, az a feladat, mely körülményei folytán földi életében
              reá vár, és amelynek megoldásához - hívatása teljesítéséhez - a
              segítő kegyelem is rendelkezésére áll. Ha valakit a jó Isten
              tudása, műveltsége, lelki finomsága és érzékenysége, vagy más
              kiválóságai miatt vezetőnek szánt s körülményeit úgy alakította,
              hogy vezető legyen, ne féljen és ne latolgassa tehetségeit,
              ál-alázatossággal ne igyekezzék kibújni a felelősség és a munka
              alól. "Ha az Isten hivatalt ad, észt is ad hozzá." Régi jó
              közmondás ez. Nem a mi dolgunk eldönteni, hogy alkalmasak
              vagyunk-e arra vagy nem. A mindenható Isten még a mi
              tehetetlenségünket is ki tudja pótolni az Ő kegyelmével annyira,
              amennyire szükségünk van. De hogy a kegyelem bennünk működni
              tudjon, hogy Isten kezében alkalmas eszközzé lehessünk, arra
              öntudatosan, komolyan, acélos erővel reá kell nevelni magunkat. Ez
              már tőlünk függ. S ha ezt valaki elmulasztja, és saját hibájából
              nem lehet alkalmas az ifjúság vezetésére, azért egyedül csak ő
              felelős.
            </p>
            <p className={styles.torzs}>
              A vezetés igazi örömet csak akkor jelenthet számunkra, ha annak
              eredményeibe a magunk kis erejét is tudatos jóakarattal
              belefektettük.
            </p>
            <p className={styles.torzs}></p>
            <p className={styles.torzs}></p>
            <a id="22"></a>
            <p className={styles.cim2}>
              A vezető lelki és szellemi felkészültsége
            </p>
            <p className={styles.torzs}></p>
            <a id="23"></a>
            <p className={styles.alcim1}>Lelki felkészültség</p>
            <p className={styles.torzs}>
              Ha a jó Isten valakit vezetőnek hív, megvan rá az oka. Másképp
              szólva, ennek a hivatásnak komoly betöltéséhez méri az örök
              boldogságot. A kánai menyegzőn a vizes edények mellett készségesen
              ott álló szolgáknak azt mondotta az Úr Jézus, hogy töltsék meg a
              vedreket vízzel: "És színig megtölték azokat." Nem félig, nem
              tessék-lássék; nem úgy, hogy egyenlőtlen, rendetlen legyen, nekik
              ennyi kötelességük volt: színig töltötték a vödröket!
            </p>
            <p className={styles.torzs}>
              Bármilyen megbízatást kapjunk is a jó Istentől földi életünk
              idejére, bármilyen egyszerű, igénytelen munkába, eldugott helyre
              is állítson bennünket, igyekeznünk kell minden erőnkből azzá
              lennünk, aminek bennünket a jó Isten elgondolt. Tökéletesen meg
              kell felelnünk - amennyire ez akaratunktól, igyekezetünktől,
              elszántságunktól függ. A kegyelmet úgy is felülről kapjuk.
              Működnünk kell tehát a kegyelemmel, képezni lelkünket, eszünket,
              ügyességünket, hogy mint a falu fiatal lánytársadalmának -
              vezetői, minden tőlünk telhetőt megtegyünk és elérhessünk a munka
              során.
            </p>
            <p className={styles.torzs}></p>
            <p className={styles.alcim2}>Felelősségtudat</p>
            <p className={styles.torzs}>
              A kegyelem, melyet a jó Istentől kaptunk, megláttatta velünk, hogy
              fiatalabb testvéreinknek szükségük van reánk. Ezt a homályos
              érzést, melyet sokan - mint kényelmetlent - elhessegetnek
              maguktól, nekünk tudatosan mélyítenünk kell. Érzékenyeknek kelt
              lennünk az emberek, különösen a reánk bízott fiatal lányok minden
              lelki és testi igénye iránt. Mi vagyunk azok, akiknek több
              adatott, lelki és szellemi műveltségből, szépségből, valóban nagy
              örömből, Isten ismeretéből, tőlünk tehát többet követelnek. Vagyis
              ha körülöt-tem levők és rám bízottak nem élvezik az én
              műveltségemnek, tudásomnak, finomságomnak előnyeit, én vagyok érte
              felelős. Ha valami bajuk történik, miért nem foglalkoztam velük
              többet? én vagyok értük felelős. Ha valamit nem tudnak, miért nem
              tanítottam én meg; ha valamit rosszul csinálnak, miért nem adtam
              én jó példát nekik? Mindenért én vagyok a felelős!
            </p>
            <p className={styles.torzs}></p>
            <p className={styles.alcim2}>Szolgáló készség</p>
            <p className={styles.torzs}>
              Ha a felelősségtudat elmélyült bennem, természetes, hogy tenni
              akarok. Segíteni, cselekedni. Éget a kötelességtudat, menteni,
              védeni, bátorítani kell. Sokan ezen a ponton szokták eltéveszteni
              az irányt. A legteljesebb jószáradék vezeti őket, lelkesen, buzgón
              hozzálátnak, de nem a szolgálathoz, hanem a parancsoláshoz,
              uralkodáshoz. Nekünk pedig szolgálnunk kell az Egyházat, a hazát,
              a társadalmat, az eszmét, minden egyes leányt, aki kezünkbe
              került. Szolgálni az ő lelki jólétét, boldogságát, egész emberré
              levését. Ez nem jelenti azt, hogy kiszolgálom a leányokat, Sőt
              megkívánom, hogy a kabátomat feladják, hogy az ajtónál előre
              engedjenek, hogy kisebb szívességeket tegyenek előzékenyen, mert
              meg akarom tanítani őket illemre, a tekintélytisztelet szükséges
              megnyilvánulásaira, a cselekvő szeretet kifejezéseire. Ezzel is
              szolgáltam őket, jövő boldogulásukat. Tehát a szolgálatkész
              szeretetet kell kialakítanom magamban, hogy alkalmas vezető
              lehessek, alkalmas eszköz Isten kezében.
            </p>
            <p className={styles.torzs}></p>
            <p className={styles.alcim2}>Istenközelség</p>
            <p className={styles.torzs}>
              Súlyos dolgok ezek. Nem csoda, ha a felületes olvasó
              el-kedvetlenedve teszi le a könyvet és azt mondja: én erre nem
              vagyok képes. Úgy van, igaza van, ember önmagától, saját erejéből
              nem is volna erre képes. De a vezetésre minket a jó Isten hívott!
              El sem képzelhető, hogy olyan feladat megoldását bízza rám,
              melyhez nem ad elég erőt. Hiszen Ő mindenható! Az Ő erejét nem
              teszi próbára még az sem, hogy belőlem igazi apostolt neveljen.
              Csak adjak alkalmat a nevelésre, mert akarata ellenére senkit
              serre lehet üdvözíteni. Ezért szükséges elkerülhetetlenül,
              feltétlenül, hogy a vezető állandó és eleven kapcsolatban éljen az
              Eucharisztiával, az élő, igaz, örök Istennel. Isten nélkül, az Ő
              segítsége, személyes jelenléte, mindennapos, vagy gyakran
              ismétlődő megerősítése nélkül ilyen feladatot nem oldhatunk meg.
              Azok adhatnak ebben igazat, akiknek sikerült valamikor a
              lehetetlennek látszót, az elérhetetlent, a kibírhatatlant és
              elképzelhetetlent a szentáldozás után magától értetődőnek,
              egyszerűnek, könnyűnek látni és diadalmaskodni olyan hatalmas erők
              felett, amelyeknek puszta átgondolása is földig sújtotta őket
              azelőtt. Nem súlyos szavak ezek? Kicsi és gyenge az ember és
              minden, ami vele történik, végtelenül nagynak tűnik és valóban
              nagy is az ő véges és nyomorult erejéhez mérten. De végtelenül
              kicsiny minden gond és nehézség, ha Isten erejével küzdheti le
              azt.
            </p>
            <p className={styles.torzs}></p>
            <p className={styles.alcim2}>Önfegyelmezés</p>
            <p className={styles.torzs}>
              A Lélek kész, de a test erőtlen! Pedig nem egyszer kellene
              -virrasztanunk és együtt éreznünk a mi Urunkkal, aki szintén
              szenvedett és gyötrődött az eljövendők láttán. Egy fárasztó
              vasárnap délután, a hideg templomban dideregve töltött nagymise, a
              hosszú szónoklatokkal megtöltött díszgyűlés, vagy zuhogó esőben
              lefolyt körmenet és más alkalmatlan helyzetek hányszor kergetik
              ajkunkra a türelmetlen gyáva szót: nem bírom! Pedig ha bírnám, a
              lányok is bírnák, nem oldalognának el a kerítés mellé a legények
              közé, nem keresnének egyéb szórakozást imádkozás helyett s ki
              tudja, még mi minden rossztól tarthatnám vissza őket személyes
              jelenlétemmel, fegyelmezett példámmal. Ha éjfél után szomjas
              vagyok és nem iszom, mert akkor nem mehetek másnap áldozni; ha a
              legvadabb hófúvásban, esőben, szélben is elmegyek oda, ahova
              ígértem és ahol várnak reám; ha a ködös, felhős, sáros időt is
              mosolyogva tudom elfogadni, mint a jó Isten akaratát; ha
              panaszaimat lenyelem, haragomat kialszom és nem éreztetem
              másokkal, akkor virrasztok és imádkozom az én Urammal, ki az
              Olajfák hegyén vért izzadt, előre látva a véres jövendőt. - Liziői
              kis szent Teréz pl. sohasem támaszkodott meg hálával a szék
              támláján. Milyen csekélység, mondhatnánk semmi! Próbáljuk meg! -
              Ezek a csekélységek teszik akaratunkat acélossá és ellenállóvá
              lustaságunkkal, puhaságunkkal szemben. Nekünk pedig keményen kell
              állnunk a sarat, mert munkánk, hivatásunk e nélkül céltalan és
              eredménytelen. A mennyország erőszakot szenved, s ha mi nem
              törekszünk oda komolyan, hogyan kívánhatjuk, hogy vezetettjeink
              azt tegyék?
            </p>
            <p className={styles.torzs}>
              A mai ember irtózik az önmegtagadástól, vagy ha gyakorolja,
              karcsúságért, fiatalodásért, sporteredményekért teszi. De
              felszabadulni az ösztönök hatalma, a kísértések ereje alól és
              készséget szerezni az önuralom gyakorlására, ez hisztéria,
              önkínzás, a sötét középkor maradványa. Nevezzük hát el a mi józan
              aszkézisünket önfegyelmezésnek, vagy határozottságnak, vagy
              érdekes egyéniségnek s akkor sem más, sem a magunk szemében nem
              lesz az olyan idegen és ijesztő.
            </p>
            <p className={styles.torzs}></p>
            <a id="24"></a>
            <p className={styles.alcim2}>Szellemi felkészültség</p>
            <p className={styles.torzs}>
              A szellemi felkészültség is lényeges a Lánykör vezetéséhez. Nem
              mondom, megkezdeni anélkül is lehet, mert az amúgy is heves kezdő
              energiák, lányokban és vezetőben egyaránt, átsegítik a Lánykört az
              esetleges döccenéseken is. - De megőrizni, életben tartani egy
              egyesületet, a megszokáson, megunáson átsegíteni a tagokat: ez
              nehéz feladat. Ehhez különleges képzettség kell.
            </p>
            <p className={styles.torzs}></p>
            <p className={styles.alcim2}>Világnézet</p>
            <p className={styles.torzs}>
              Nekünk katolikus világnézet kell, mert másképp kicsúszik a lábunk
              alól a talaj, egyrészt sarokba szorítanak bennünket s csatát
              vesztünk, másrészt lányainkat nem tudjuk megerősíteni a romboló
              áramlatokkal szemben. Kell, hogy véleményünk legyen az Egyházról,
              vallásunkról, a velünk szemben álló eszmeáramlatokról, Hitlerről,
              Mussoliniről, királyságról és diktatúráról, társadalmi és
              állampolgári jogokról és kötelességekről, családról, gyermekről,
              egészségről, tudásról, stb.-röl, mert ezeken keresztül vezet az út
              az örök élet felé, és mert mindezen kérdésekre, ha szükséges,
              nekünk készen kell lennünk a felelettel. Olvasni kell tehát, és
              képezni kell magunkat, de olyan forrásokból merítve tudásunkat,
              melyeknek bősége az örök élet vizéből ered. Olvassuk el a
              katolikus újságot, katolikus folyóiratot, megbízható katolikus
              könyvet, ne csak gyűjtsük a szobánkban, vagy azon kívül.
            </p>
            <p className={styles.torzs}>
              A vezető szellemi tudásának gyarapítására, katolikus
              világnézetének kialakítására ad lehetőséget a Kalász
              kölcsönkönyvtár, ahol tudományos, vallásos tárgyú és szépirodalmi
              könyvek állnak a vezetők rendelkezésére. Feltételekről kész
              örömmel küld tájékoztatást, valamint könyvjegyzéket a központ.
            </p>
            <p className={styles.torzs}></p>
            <p className={styles.alcim2}>A vezetőképző tanfolyamok</p>
            <p className={styles.torzs}>
              A vezetőképző tanfolyamok szaktudást nyújtanak, anyagot adnak az
              évi munkához, és egységes szellemet építenek ki a Lánykörök
              vezetésében; azonkívül a lelkigyakorlatokkal az Istenbe való
              kapcsolódás erejét és biztonságérzetét adják a felelősségteljes
              munkához. A Lánykör vezetői legnagyobb részben tanítónők, akik a
              képzőben tanulták pedagógiát, lélektant s más hasznos és
              hivatásukhoz szükséges tantárgyakat. Mégsem felesleges számukra a
              tanfolyam elvégzése. Mert a fiatal, mondjuk kamaszlány lelkülete
              annyira különbözik a gyermek lelkületétől, hogy ha ugyanazzal a
              módszerrel nyúlunk hozzájuk, mint a gyermekhez, ellenkezést
              váltunk ki belőlük. Sajnos nálunk a szociális munka, különösen a
              falusi társadalom érdekében kifejtett munka olyan gyermekcipőben
              jár, hogy megfelelő szakkönyvek, szakirodalom kitermelésére még
              nem is gondolhatunk. Az egyetlen módszer a gyakorlati tudás
              elsajátítására, ha egymás tapasztalatait meghallva, azokból közös
              munkával igyekszünk következtetéseket levonni, tételeket
              felállítani és elveket leszögezni. Ez történik a tanfolyamokon;
              közös munka az, amelyhez mindenki odahordja tapasztalatait,
              tudását, eszméit s így alakul ki, hogy mit is kell a jövőben
              tennünk szent célunk megvalósítása érdekében.
            </p>
            <p className={styles.torzs}>
              De éppen ilyen lényeges a tanfolyamok programorjába beállított
              ének-, játék- és táncgyakorlás is, mert ezek nélkül nem lehet
              fiatalságot vezetni. Érdekes jelenség, hogy olyanok, akik a
              tanfolyam elején ridegen elzárkóznak az énekléstől, játéktól,
              tánctól, mondván, hogy ők nem tudnak, vagy sohasem táncoltak, vagy
              nem szeretnek ilyen kedélyes szórakozásokban részt venni, egy-két
              óra végighallgatása után buzgón és lelkesen állnak be a többiek
              közé, mert belátják, hogy minél nagyobb áldozat számukra a
              gyakorlásokon való részvétel, annál biztosabban számíthatnak
              munkájukban a jó Isten segítségére.
            </p>
            <p className={styles.torzs}>
              A tanfolyamokon gyakorolt liturgikus imák, klasszikus magyar
              egyházi népénekek mind hozzájárulnak ahhoz, hogy a vezető teljes
              biztonsággal, sokoldalú felkészültséggel foghasson hazatérése után
              a vezetés nehéz munkájához. Ezeket tudva, bárki beláthatja, hogy
              nem lehet a mozgalomnak igazi építője, nem lehet a Központtal
              komolyan együtt érző és együttdolgozó testvér, ha nem vett részt
              valamelyik vezetőképző tanfolyamon.
            </p>
            <p className={styles.torzs}></p>
            <p className={styles.alcim2}>A Tarisznya</p>
            <p className={styles.torzs}>
              Fel kell készülnie a vezetőnek az egyes összejövetelekre is, mert
              az eredmény szempontjából könnyelmű elgondolás a "véletlenre"
              bízni a délutánok programorját. Az összejövetelek anyagát a
              Tarisznyából merítheti a vezető. Elolvassa a négy előadásvázlat
              közül azt, amelyik éppen következik és átgondolja, hogy mennyiben
              felel az meg - részteteiben - a helyi körülményeknek. Kihagyja
              belőle azt, amire ott nincs szükség, viszont kibővíti személyes
              tapasztalataival, helyi események elbeszélésével s így, átdolgozva
              mondja el a lányoknak. De elgondolja előre azt is, hogy melyik új
              játékot fogja a lányoknak megtanítani és melyik régit elismételni
              a délután folyamán, az egyházi ének szövegét esetleg
              lesokszorosítja, vagy ott az összejövetelen a lányokkal leíratja,
              de emlékezetből is megtanulják a szöveget a lányok. Tehát
              aszerint, mennyi ideig együtt szoktak maradni, előre gondoskodik
              az időt kitöltő változatos programorról. Ha azután valami aktuális
              probléma felvetődik, vagy valami meglepetésszerűen közbejön, nem
              ragaszkodik görcsösen az eredeti elgondoláshoz és teret enged a
              lányok kívánságának. Csak a komoly foglalkoztatást nem hagyja el
              sohasem, még színdarabpróba vagy egyéb fontos dolog miatt sem,
              mert hiszen összesen 4 alkalom van egy hónapban, hogy ilyen
              formában tanítsuk őket s ha egyet is elhagyunk, az eredeti és
              egységes munkaterv hiányos, zavaros és céltalan lesz.
            </p>
            <p className={styles.torzs}></p>
            <p className={styles.alcim2}>Az élet</p>
            <p className={styles.torzs}>
              Nem hagyhatjuk figyelmen kívül az életet, mint legjobb
              tanítómestert, különösen mi, akik szociális munkával foglalkozunk.
              A vezető járjon nyitott szemmel és füllel, lásson és halljon meg
              mindent, aminek leányai nevelése szempontjából - pozitív, vagy
              negatív irányban - hasznát veheti. Ha érzékenykedik, sértődik,
              félénk, vagy álszemérmes, vagy nincsenek benne lehiggadva az élet
              természetes jelenségeivel kapcsolatos élmények, vélemények, akkor
              sok minden elvész a számára, amit pedig a jó Isten a környezet és
              a körülmények útján segítségére küldött. Ezekből az élményekből a
              saját lelke és a lányok számára is több hasznot fog látni, mint
              esetleg nem tiszta irányú, vagy nem a való életet tükröző
              könyvekből, regényekből.
            </p>
            <p className={styles.torzs}>
              Ehhez természetesen a léleknek egy olyan biztonsága kell, melyet
              nem lendít ki nyugalmából, egyenes, felfelé haladó irányából apró,
              emberies földi gond, baj, féltékenység, irigység, fájdalom, csapás
              stb. Ezt a biztonságot pedig az Istenbe kapcsolódó, kegyelemre
              támaszkodó tiszta katolikus világnézet adhatja meg.
            </p>
            <p className={styles.torzs}></p>
            <p className={styles.torzs}></p>
            <a id="25"></a>
            <p className={styles.cim2}>Külső segédeszközök</p>
            <p className={styles.torzs}></p>
            <p className={styles.alcim1}>A központ közvetlen irányítása</p>
            <p className={styles.torzs}>
              Mozgalmunk egységessége megkívánja a központ egységes irányítását.
              Minden vezetőnek könnyebb a munkája, ha nem kell magának
              kigondolni teendőit, egyletének megmozdulásait, hanem a központ
              irányítása szerint halad. Ezen egységes irányítás céljából a
              központ időnkint körleveleket küld minden vezetőnek. Sok
              felesleges gondtól kímélheti meg magát a vezető, ha ezeket a
              körleveleket figyelmesen elolvassa. Minden szó, ami ezekben van,
              fontos a vezetőre és munkájára nézve.
            </p>
            <p className={styles.torzs}>
              A munka eredményességére azonban nem elég csak az egyoldalú
              levelezés, ami fennáll akkor, ha csak a központ küldi leveleit.
              Hogyan segítsen, irányítson sikeresen a központ, ha a vezetők nem
              tárják fel előtte egyéni, helyi bajaikat, problémáikat, éppúgy,
              mint sikereiket is? A központ annak örül, ha hírt kap a vezetőktől
              és ha választ kérnek, rövid időn belül meg is kapják azt. A
              válaszbélyeg mindenesetre megkönnyíti a központnak a levélírást.
            </p>
            <p className={styles.torzs}>
              A szoros, baráti kapcsolatot csak növeli, ha a vezetők
              alkalomadtán személyesen látogatják meg a központot, X1I.
              Pagony-u. 8. Telefon 35-77-02, ahol mindig meleg fogadtatásra
              találnak. A szóbeli megbeszélés sokszor többet ér, mint sok levél.
            </p>
            <p className={styles.torzs}>
              Központi kiküldött és egyházmegyei titkárok szívesen utaznak
              egy-egy egyesület meglátogatására, előadás megtartására is, ha a
              vezető idejében meghívja őket (utolsó napokban kapott meghívásnak
              azonban a legritkább esetben tehetnek eleget, mert idejük hetekkel
              előre le van kötve) és csak szállást és ellátást kérnek.
            </p>
            <p className={styles.torzs}></p>
            <p className={styles.alcim1}>Tarisznya</p>
            <p className={styles.torzs}>
              A Tarisznya évente nyolcszor (okt.-tól máj.-ig) megjelenő
              folyóirat a leányköri vezetők számára. Ez a Központ rendszeresen
              megjelenő segítő eszköze.
            </p>
            <p className={styles.torzs}>
              Mikor a falusi család felnőtt tagja munkába indul, az édesanya
              előveszi a tarisznyát, telerakja mindazzal, amire a dolgozónak az
              úton, vagy munkahelyén szüksége lehet. Kenyérből a ducosat,
              szalonnából a széleset, pogácsából a magasabbat, almából a
              legpirosabbat, pálinkából is a legerősebb fajtát adja. Az itthon
              maradtaknak jó a többi is, de annak, aki elmegy, aki messze van,
              annak kedvezni kell, annak segíteni kell még azzal is, hogy
              mindennek a legjavát kapja az élő és tevékeny szeretet
              bizonyságaképpen. - Valahányszor a munkában lévőnek szüksége van a
              tarisznya tartalmára, szétbontja a fehér kendőt és megérzi az
              "otthoninak" illatát: mindannyiszor azokra gondol, akik ezt neki
              csomagolták, akik szívesen, szeretettel adták. És a szeretet, amit
              a gondosságon keresztül megérez, megacélozza izmait a további
              munkára, a további küzdelemre.
            </p>
            <p className={styles.torzs}>
              Tarisznyát csomagol a központ is minden hónapban a munkába
              indulóknak. - Vajon megérzitek-e, vajon megtudjátok-e valaha, hogy
              mennyi gonddal, szeretettel, aggódással és reményteljes
              várakozással tesszük ezt? Vajon kiolvassátok-e ezekből a sorokból
              a teljes készséget, amivel nektek a legjobbat, a legszebbet,
              tapasztalatokból a leghasznosabbnak ítélteket összeszedjük? Hogy
              könnyítsünk, segítsünk, bátorítsunk és vigasztaljunk, hogy mindig
              minden munkátokban és minden gondotokban veletek lehessünk?{" "}
            </p>
            <p className={styles.torzs}>
              A Tarisznya első oldalán minden hónapban körlevél jelenik meg.
              Erre vonatkozólag is azt ismételhetjük, ami a külön körlevelekre
              szól. Olvassák át a vezetők mindenkor és mindenkor figyelmesen! A
              központ nem öltözteti mondanivalóját szép, stilizált mondatokba,
              mert minden szó pénzbe, papírba, nyomdafestékbe kerül. Ezért tűnik
              néha a körlevél szűkszavúnak és nem oly barátságos a hangja, mint
              azt sokan elvárnák és magunk is szeretnénk. Ne sértődjék meg tehát
              senki s ha szemrehányás is van néha benne, azok, akikre nem
              vonatkozik, ne vegyék magukra.
            </p>
            <p className={styles.torzs}>
              Egyes szám ára 70 f. Egész évre 5- P. Befizethető csekken
              (csekkszámla: 50.8093), készpénzben, vagy 10 filléres bélyegben
              (nem nagyobb értékű bélyegben). De mindenesetre fizetendő. A
              központ u. i. nincs olyan anyagi viszonyok között, hogy ezen
              előfizetési díjakról lemondhatna, vagy hosszú lejáratra
              kölcsönözhetné azokat.
            </p>
            <p className={styles.torzs}>
              A Tarisznya tartalmaz négy előadásvázlatot a hónap négy
              vasárnapjára. Egy vallásos, egy jellemképző, egy kulturális és egy
              gazdasági előadás vázlatát. Ezek azonban, hangsúlyozottan
              vázlatok. Semmiképpen sem valók tehát felolvasásra. Ezeket a
              vázlatokat át kell dolgozni, a helyi viszonyokhoz átformálni és
              mindig szabad előadásban leadni a lányoknak. Könnyű stílusban,
              értelmi nívójuknak megfelelően, példákkal illusztrálva és
              lehetőleg megbeszélés formájában, úgy, hogy a lányokat tényleg
              belevonjuk a megbeszélésbe.
            </p>
            <p className={styles.torzs}>
              Tartalmaz a Tarisznya ezenkívül mesét (ugyancsak vázlatosan),
              kézimunkát, egyházi és világi éneket, népi táncot, játékokat és
              szavalásra alkalmas verseket. Az énekek, táncok stb. mindig
              elővehetők, ha hirtelen műsoros bemutatót kell rendezni és nem
              érünk rá kellőleg készülni.
            </p>
            <p className={styles.torzs}>
              Jegyezzük meg még a Tarisznyára vonatkozólag, hogy a lányok kezébe
              soha ne adjuk, még vers vagy ének kiírására se, hiszen az
              kizárólag a vezetőknek szóló bizalmas irányítás, amelyhez a
              lányoknak semmi közük.
            </p>
            <p className={styles.torzs}></p>
            <p className={styles.torzs}></p>
            <a id="26"></a>
            <p className={`${styles.cim2} ${styles.cim2BottomMargin}`}>
              Belső segédeszközök
            </p>
            <p className={styles.torzs}></p>
            <p className={styles.torzs}>
              Aki készséggel megkezdi a munkát, megkapta a Központtól az
              irányítást, mégis gyakran megtorpan a helyi nehézségek miatt. Vagy
              azért, mert túlságos lelkesedésében nem vette figyelembe, hogy nem
              mindenki éghet mindig lobogó lánggal, vagy azért, mert kezdettől
              fogva túl sötéten ítélte meg a helyzetet és nem tudta kihasználni
              a kínálkozó segítségeket. Mint mindig, itt is a józan idealizmus
              legyen irányadó.
            </p>
            <p className={styles.torzs}></p>
            <p className={styles.alcim1}>Plébános vagy helyettese</p>
            <p className={styles.torzs}>
              A falu hivatott vezetője az Egyház helyi képviselője, a plébános.
              Természetes, hogy a Lánykör is alá van vetve az ő irányításának, a
              vezetőnek tehát teljes egyetértésben kell vele dolgoznia. A
              Lánykör vezetőjének s a plébánosnak együttműködése nem merül ki
              abban, ha az utóbbi ellátogat a Lánykörbe. Az egyházi tekintélyen
              kívül a vezetőnek szüksége van papi támogatásra, másrészről pedig
              kötelessége az Isten szolgáját ténykedésében segíteni, mint azt az
              A. C. igazi szelleme megkívánja. Ezért jó, ha minden tervét a
              plébános, mint leghivatottabb helyi vezető elé tárja s a
              lehetőségeket vele megbeszéli. Több szem többet lát.
            </p>
            <p className={styles.torzs}>
              Az együttdolgozás első feltétele a legteljesebb őszinteség még
              nehézségek, meg nem értések árán is. A vezetőnek önmagában jó,
              önzetlen és kitartóan ismételt törekvése, hogyha azt a Központ is
              támogatja, ritkán juthat végső bukásra. Ha mégis így történne, ez
              gyakran a vezető hibája, aki talán nem volt elég körültekintő az
              előkészítésben és elég áldozatos a kivitelben. Emberi
              szempontoktól mentesen, Krisztus országa érdekében kell végeznie a
              Lánykör ügyét s az ideális helyzet az, ha papjának szava és
              tetszése Isten akaratát jelentheti számára. Az a pap, akitől ezt
              várják, ráébred felelősségére, és érezni fogja krisztusi
              méltóságát. Minden két félen múlik.
            </p>
            <p className={styles.torzs}>
              Igyekezzék a vezető a plébánost hivatalával járó nehézségeiben
              saját hatáskörén belül segíteni. A lányoknak egy-egy otthon
              elejtett megjegyzése, melyet a Lánykörben hallottak, sok
              ellenszenvet mérsékelhet. Mert látszólag nagy ellentéteknek is
              gyakran kicsiny meg nem értések az okai. Hozza szóba a vezető az
              egyházi adót, a hitközségi, iskolai, szegénygondozási ügyeket s
              tegye azokat a lányok szívügyévé. Így ráérő idejükben személyes
              segítésre is maguktól fognak jelentkezni. Az A, C., az
              eucharisztikus kongresszus s az egyházi élet egyéb eseményeiben
              buzgó kis közvetítők lehetnek a szent Szűz Anya példájára, aki
              alázatos önfelajánlása áltat lett Isten Fiának közvetítőjévé. Ne
              mulassza el a vezető a falu lelki életébe vágó minden eseményről
              előre értesíteni a lányokat s imájukat kérni ezeknek sikeréért.
              Sok helyen szokás, hogy a lányok gondoskodnak az oltár
              feldíszítéséről, oltárneműk gondozásáról, a szükséges virágról,
              Különösen megtehető ez ünnepek előtt, másképp készülnek lélekben
              is, ha külső tevékenységgel is segítenek az ünneplésben. Többet ér
              ez, mint izgalmas sietséggel, talán sok féltékenységgel s
              cifrálkodással egybekötött színdarab rendezése.
            </p>
            <p className={styles.torzs}>
              Mutasson rá gyakran a vezető a papi hivatás méltóságára, amelyet a
              szentségek ruháznak az egyénre, s amely független minden emberies
              vonástól. Buzdítsa a lányokat imára jó papságért, különösen a
              kántorbőjtök időszakában. Mindenek előtt azonban adjon személyes
              példát a Krisztus képviselője iránti tiszteletben s első legyen,
              aki gyakori szentségekhez való járulással kiveszi részét az Egyház
              életéből, papjának oldalán.
            </p>
            <p className={styles.torzs}></p>
            <p className={styles.alcim1}>Helyi intelligencia</p>
            <p className={styles.torzs}>
              Külön hivatás vár a vezetőre a helység intelligenciájával szemben.
              Nem szabad belenyugodnia, ha azt bármi idegenkedés elválasztja a
              közösség rokonszenvétől. Ritka az olyan hely, ahol e tekintetben
              nincsenek bajok. Kellő tapintattal azonban néhány nehézség
              legalább a Lánykörben áthidalható. Nincsen olyan egyéniség, akiben
              valami érték ne volna, és ha a vezető jó emberismerő, főleg pedig
              szerető szívű ember, találhat olyan pontot, melyen a kapcsolatot
              fel tudja venni. Egy jó Lánykör élete a helység életének kicsiny
              mása, tükröződnek kenne az otthoni gondok, remények, örömök.
              Egy-egy születés, vagy betegség alkalmat adhat az orvos
              meghívására, adó-gondok a jegyzőére, s így sorra lehetne venni
              valamennyit. Minden azon múlik, hogy a vezető saját részéről
              szerető szívet tárjon mindenki felé és legyen kitartó a
              szeretetben. Semmit se tegyen e ponton a pillanat hatása alatt,
              bárkit is csak már melegebb ismeretség után hívjon meg és csak
              akkor, ha annak érdeklődését a Lánykör iránt sikerült felkeltenie.
              A lányokat pedig készítse elő fogadására. A vezetőnek kulturális
              feladata is lehet a helység intelligenciájával szemben.
              Figyelmeztesse őket olyan helyi szükségletekre, amelyeket ők nem
              láthatnak. A nép nagyon sokszor takarja és elhallgatja bajait
              abban a meggyőződésben, hogy úgy sem értik meg. Ha pedig így
              természetesen orvoslást nem kap, ő neheztel. Jó szemű vezető
              megelőzheti a pusztán nem-ismerésből származó ellentéteket. Az
              emberek kölcsönösen bizalmatlanok egymással szemben, s aki
              kevesebbet tanult, már ezen az alapon is fél, hogy félrevezetik.
              Ezt érzékenység nélkül, mint tényt, tudomásul kell venni és
              odaadással felelni rá. Bizalmatlanságot csak állandóan újra
              kezdett önfeláldozás tud idővel leszerelni.
            </p>
            <p className={styles.torzs}>
              A Lánykör vezetője kapcsolatban van a központtal és így módjában
              áll, hogy a falu intelligenciája számára is könyv, jó tanács, vagy
              egyéb tárgyában segítséget kérjen. Legyen kultúraközvetítő is s
              lassan nagyobb felelősséget ébresztve a helyi vezetőkben,
              hozzájárulhat ahhoz, hogy kis körükre való korlátozottságukból
              kirántsa őket. Mindenképen azon legyen, hogy a lányok szívében
              bőségesen termő és fejlesztendő szeretet által hidat verjen a
              világiasság és az egyház, a nép és az intelligencia között
              fenyegetően tátongó szakadék fölé.
            </p>
            <p className={styles.torzs}>
              Talán így előszöri olvasásra nem egészen világos mindenki előtt,
              hogy az itt tárgyaltak hogyan jelenthetnek belső segítséget a
              Lánykör vezetésében. De aki a gyakorlatban végig próbálja és
              megvalósítja, meg fogja látni, hogy lassan olyan értékes segítő
              gárdát nevel magának, akikkel öröm lesz együtt dolgozni, és akik
              minden vonatkozásban megkönnyítik nehézrés felelősségteljes
              munkáját.
            </p>
            <p className={styles.torzs}></p>
            <p className={styles.torzs}></p>
            <a id="27"></a>
            <p className={`${styles.cim2} ${styles.cim2BottomMargin}`}>
              Hogyan készüljünk előadásra
            </p>
            <p className={styles.torzs}></p>
            <p className={styles.torzs}>
              Előadás alatt ne értsünk szónoklatot, mert ahhoz egyrészt tehetség
              kell, másrészt a mi kereteinket tekintve kiment a divatból. Még a
              lányokkal való komoly és szellemi alapon történő foglalkozásunk
              sem mindig előadás, inkább csak beszélgetés, egyszerű
              gondolatközlés. Adott körülmények között a rendes vasárnap
              délutáni foglalkozás alatt lehet szükség előadásra, még inkább egy
              ünnepélyen, gyűlésen, népművelési estén, kurzuson stb.
            </p>
            <p className={styles.torzs}>
              Az ilyen előadáshoz nem kell tehetség, legalább is nem több, mint
              amennyi átlag egy értelmes és hibátlan beszédű nőnek van. Hogy
              mégis olyan ritkán vállalják a nők az előadások, vagy fent
              említett beszélgetések megtartását szívesen, azt azzal lehet
              magyarázni, hogy a nők nem szeretnek rendszeresen gondolkozni,
              illetve közlendő gondolataikat rendszerbe foglalni. Ha ezt a
              nehézséget (jóravaló restséget) önmagunkban leküzdjük, semmi
              akadálya sincs annak, hogy a bennünket érő megtiszteltetést
              elfogadjuk, különösen ha ezzel a szervezőknek vagy rendező
              bizottságnak szívére nehezedő mázsás kő legördülését
              elősegíthetjük.
            </p>
            <p className={styles.torzs}>
              Az ilyen előadásra való előkészületnek egy egészen egyszerű,
              könnyű és gyakorlati módszere a következő, amely különösen
              ajánlható azoknak, akiknek kevés az idejük, gondolkozni nem
              szeretnek, és mégis lelkiismeretesen akarnak készülni előadásukra.
              Házi módszer, nem szabadalmaztatott, nem tudós ember felfedezése,
              csak olyan valakié, akinek sokszor kellett előadnia s a
              hallgatóságát igen nagyon szerette.
            </p>
            <p className={styles.torzs}></p>
            <a id="28"></a>
            <p className={styles.alcim1}>A "drukk"</p>
            <p className={styles.torzs}>
              Elsősorban komolyan és mélyen átgondoljuk, hogy semmire sem
              vagyunk képesek önmagunktól. Dadogunk, a nyelvünk botlik, nincs
              egyetlen ép gondolatunk, ájulás környékez, ha magasabbról kell sok
              fejet és sok szempárt látunk. Igaz, így van, rettenetes! De a jó
              Isten kegyelmével, ha Ő akarja, mindent megtehetek. Az
              írástudatlan, műveletlen, szegény falusi halász-emberekből, az
              apostolokból milyen meggyőződéses előadók váltak a pünkösdi Lélek
              elnyerése után! Vajon ők mitől tudtak úgy beszélni, hogy egyszerre
              3000-en keresztelkedtek meg a szavukra? A Szentlélek erejétől,
              amelynek ők készséges eszközei voltak. Ha tehát én is átadom magam
              teljesen a jó Isten akaratának, fogékony és tanulékony leszek vele
              szemben, én is el fogom érni azt az eredményt, melyet tőlem a jó
              Isten vár. Hogy milyen eszközzel, az mindegy, hogy belesülök-e,
              vagy elsírom magam, vagy bármi történik is ha készséges vagyok és
              Istenben bízom, nem lesz működésem eredménytelen. Ha mindezt
              komolyan álgondoltam, a kevélységemmel magyarázható drukkot
              leküzdöttem.
            </p>
            <p className={styles.torzs}></p>
            <p className={styles.alcim1}>Segíteni akarok</p>
            <p className={styles.torzs}>
              Másodszor átgondolom, hogy mi az én jelenlegi működésemnek,
              előadásom megtartásának célja. Segíteni akarok azoknak, akik
              hallgatni fognak. Semmi egyebet nem akarok! Sem a ruhámat
              megmutatni, sem szellemi erőmmel elképeszteni az igazgató urat,
              vagy más intelligens embert, aki hallgatóságom között lesz, még a
              barátnőmet sem akarom irigységre hangolni, hogy lám a
              megtiszteltetés engem ért, az újságban rólam fognak írni, de még -
              és erre nagyon vigyázzunk - a hallgatóságom szimpátiáját sem
              akarom nagyobb mértékben magam felé fordítani, mint amilyen
              mértékben azt hívatásom betöltéséhez feltétlenül bírnom kell.
              Segíteni akarok bármi áron, még a megszégyenülés, a felsülés
              (hátha az enyéimnek éppen azt kell látni, hogyan kell elviselni
              alázatosan és egyszerűen egy vaskos megaláztatást!) a verejtékes
              munka, az önmagam számára is kötelezően felállított kényelmetlen
              szabályok vállalásának árán is. És ettől az átgondolt komoly
              elhatározásomtól nem hagyom magam eltéríteni. Vigasztalásul
              szolgáljon, hogy ezt a fent említett két gondolatot csak egyszer
              kell - minden erőnkkel - magunktól, önszeretetünktől kiverekedni.
              Ha egyszer lelkiismeretesen, lehetőleg a legméltóságosabb
              Oltáriszentség előtt megtettük, az ismétlések már sokkal
              könnyebben fognak menni.
            </p>
            <p className={styles.torzs}></p>
            <p className={styles.alcim1}>Kikkel állok szemben?</p>
            <p className={styles.torzs}>
              Mondanivalómat olyan hangon, olyan stílusban, olyan kifejezéseket
              használva mondom el, amilyen a hallgatóságomnak legjobban
              megfelel, amilyet megért és szívesen hallgat. Sokkal könnyebb
              intelligens hallgatóságnak beszélni, mint egyszerűnek. Mert az
              intelligens ember, ha a magam stílusában beszélek, feltétlenül
              megért, sőt ki is egészíti magában azt, amit én esetleg hiányosan
              mondtam el. De az egyszerű embernek világosan, érthetően, rövid
              mondatokban, ismétlésekkel kell beszélnem és számítanom kell arra,
              hogy még így sem fog megérteni mindent és amit megért, annak is
              egy részét félreérti, Mégis ha hallgatóságomban mindkét elem
              képviselve van, mindég a legegyszerűbbhöz kell beszélnem, mert az
              intelligens megérti azt is, amit egyszerűen mondok, az egyszerű
              azonban nem képes ennek ellenkezőjére. Tehát bármennyire próbára
              is teszem érvényesülési vágyamat, mégis a legegyszerűbb
              hallgatóságot kell figyelembe vennem, ha igazán segíteni akarok és
              nem kiválóságommal tündökölni. De lényeges az is, hogy
              hallgatóságom milyen lelkületű. Falusi-e vagy munkás, vagy
              félművelt okoskodó, vagy készséges és tanulékony, mert eszerint
              állítanom, tagadnom, cáfolnom, tanítanom, vagy magyaráznom kell.
            </p>
            <p className={styles.torzs}>
              Meg kell tehát ismernem hallgatóságomat; ha nem ismerhetem meg,
              legalább kikérdezek valakit, aki ismeri őket és úgy készülök fel.
              Mégis gyakran fog meglepetés érni, mikor az előadó terembe lépek,
              ilyenkor végzetes hiba volna ragaszkodnom eredeti elgondolásomhoz.
              Még ha a kerekség, logika, szépség rovására is megy, hirtelen át
              kell hangolódnom, mert inkább mondjam el, amit akarok, kevésbé
              tökéletes formában, de érthetően, mint beszéljek gyönyörűen és
              senkinek sem használtam vele.
            </p>
            <p className={styles.torzs}></p>
            <p className={styles.alcim1}>Mire van szükségük?</p>
            <p className={styles.torzs}>
              Nyitott kapukat döngetni nem célravezető dolog. Ezért kell
              átgondolnunk alaposan, hogy azok, akik hallgatnak rám, milyen
              körülmények között élnek, mi lehet a problémájuk, mi fájhat nekik,
              vagy miben gondolkoznak hibásan. Áll ez a tétel, akár megjelölik
              előre a témát, akár magamnak kell ezt kiválasztanom. Pl. egy
              március 15.-i hazafias ünnepségen beszélhetek én a hazaszeretetről
              úgy, hogy jobbak lettek általa hallgatóim, magyarabbak,
              hűségesebbek, komolyabbak, becsületesebbek. De beszélhetek én a
              hazaszeretetről úgy is - és talán ehhez többen foknak gratulálni -
              hogy a nagy és hangzatos szavak csoportosítása elkápráztatja
              hallgatóimat, talán meg is könnyezik "elszakított testvéreink
              szomorú sorsát," de az elhangzott "éljen"-nel ki is repült a
              fejükből mindaz, amit mondtam. Mint egyszer egy lelkes lány mondta
              a gyönyörűnek ítélt prédikációról: "én egy kicsit messze álltam,
              így nem értettem tisztán miről beszélt, de olyan gyönyörű volt,
              hogy zengett bele a nagy templom." Tehát mire van szükségük, mit
              várnak tőlem, ez a lényeges kérdés, amelyre önmagunknak feletetet
              kell adnunk,
            </p>
            <p className={styles.torzs}></p>
            <a id="29"></a>
            <p className={styles.alcim1}>Hogyan segíthetek nekik?</p>
            <p className={styles.torzs}>
              Sokszor nagyon nehéz megtalálni a segítés módját és sokszor
              egyáltalán nem is találjuk meg. Mert pl., ha szegény az a nép,
              amelyik engem hallgat, nem tudom őket előadásommal gazdaggá tenni.
              Ez nyilvánvaló. De feltétlenül megtalálom az elszegényedésük okát
              - ha komolyan keresem. - Lehet az lustaság, urhatnámiság,
              irigység, bűn, hűtlenség a föld iránt, igényesség, maradiság,
              bizalmatlanság, a szervezkedés hiánya stb. Ha látom a hibát,
              igyekszem kiküszöbölni belőlük az ellenkezést, a tévedésükhöz való
              ragaszkodást és feltétlenül ajánlok valami gyakorlati megoldást,
              amelyben ők is eredményét láthassák javulásuknak, vagy
              törekvésüknek. De lehet olyan eset is, hogy pl., a nép nem
              önhibájából lett szegény, hanem a rajta kívül álló körülmények
              tették azzá. Mire van tehát szükség? Pénzre, de azt nem adhatok.
              Akkor adjak legalább megnyugvást, emeljem ki az ő szegény életük
              értékességét, igénytelenségükben is tapasztalható vigasztaló és
              kedves szokásaikat. A szegény nép mindig sokkal megértőbb,
              segítésre készebb, mint a jómódú. Megmutatom nekik, hogy mennyi
              szép és jó van még mindig az életükben. És vigasztalom őket,
              kedvet öntök beléjük újabb próbálkozásokra, összefogásra,
              türelemre, szívósságra biztatom őket. Elmondok nekik példákat
              olyanoknak életéből, akik önként lettek szegények, mert vágytak a
              szegény élet értéke és szépsége után. - Ha tehát testi
              szükségletükben segíteni egyelőre nem tudok, lelkileg emelem őket
              és így segítek nekik.
            </p>
            <p className={styles.torzs}></p>
            <p className={styles.alcim1}>Mese vagy kép</p>
            <p className={styles.torzs}>
              Ha így előadásom komoly részét összeállítom, keresek az elejére és
              a végére egy mesét, vagy egy képet, ami összefüggésben van a
              tárggyal, de színes, könnyű, érdekes, nekik kellemes, amivel
              felkelthetem magam, illetve előadásom iránt az érdeklődést. Az
              egyszerű ember nem tud egyik percről a másikra koncentrálni. Előbb
              engem néz, hogyan mozgatom a számat, milyen ruha van rajtam, repül
              egy légy, egy zászlót fúj a szét körülöttem, mindez sokkal inkább
              leköti, mint az én komoly és lelkes fejtegetésem. De ha elkezdek
              egy mesét, annak nem tudnak ellenállni. Azt annyira szeretik,
              értik, velem együtt élnek, hogy játszva átvihetem őket komoly
              térre. A befejező mesében, vagy képben viszont arra kell
              törekednem, hogy a végső tanulságot rövid mondatban, vagy
              történetben foglaljam össze. Ezt meg tudják jegyezni és
              visszaemlékeznek reá, de egy hosszadalmas vagy bonyolult
              gondolatmenetre nem. Ezt emlegetik sokáig, elmondják másnak is,
              elismételgetik önmaguknak és megmarad lelkükben. Nekem pedig az a
              célom, hogy ha már annyit gondolkoztam, tépelődtem, dolgoztam,
              legalább legyen is eredménye a munkámnak, használtam légyen
              azoknak, akikért mindezt tettem.
            </p>
            <p className={styles.torzs}></p>
            <p className={styles.alcim1}>Szabadon</p>
            <p className={styles.torzs}>
              Ha valaki kellemes és jó előadóvá akar lenni, - már pedig
              mindnyájunknak kötelességünk erre törekedni hallgatóságunk
              érdekében, - a legnagyobb hiba, amit elkövethet, ha betanulja azt,
              amit leírt. Ezzel elvágta maga alatt a fát, a fejlődés lehetősége
              megszűnt számára. Sohasem fogja őt elragadni a hallgatói szeméből
              felé sugárzó megértés, hűség, figyelem, sohasem fog tudni a
              pillanat hangulatához alkalmazkodni, hallgatóinak szellemi
              képességeit figyelembe véve rövidebbre, vagy hosszabbra szabni
              mondanivalóját. A készülésre mindig hetekre lesz szüksége, nem tud
              egy-egy alkalmas pillanatot kihasználni, vagyis egy nehezen
              mozduló, nagy gyötrelmekkel és mégsem nagy eredményekkel dolgozó
              előadó lesz. Csak az életünk első 3 előadását jó leírni azért,
              hogy a megfelelő stílust megkapjuk. De azontúl csak rövid
              mondatokból, esetleg szavakból álló vázlatot használunk és arról
              szabadon, beszélgetve, a hangulat hatása alatt, egyszerűen,
              példákkal és mesékkel átszőve adunk elő. Ehhez nem kell tehetség,
              csak jóakarat és eleinte tudatos önnevelés.
            </p>
            <p className={styles.torzs}>
              Álljon itt például a lányköri egyenruhát megkedveltető előadás
              vázlata, amely csak gyakorlati útmutatásul és nem mintául szolgál.
            </p>
            <p className={styles.torzs}></p>
            <p className={styles.alcim2}>
              <center>Meggondolás</center>
            </p>
            <p className={styles.torzs2}>Kikkel állok szemben?</p>
            <p className={styles.torzs3}>
              A falu közvéleménye előtt feltétlenül meghajló, fiatal, hiú, drága
              új ruhájuk árán érvényesülni akaró lányokkal.
            </p>
            <p className={styles.torzs2}>Mire van szükségük?</p>
            <p className={styles.torzs3}>
              Lelkierőre hiúságuk leküzdéséhez, szeretetre összetartozásuk
              megvallásához, takarékosságra, hogy egyébre, fontosabbra leljék és
              egy komoly példaadóra, aki után elmerjenek indulni.
            </p>
            <p className={styles.torzs2}>Hogyan segíthetek nekik?</p>
            <p className={styles.torzs3}>
              Megmagyarázom, hogy féktelen ruházkodásuknak hiúság és irigység az
              oka, lelkesedést ébresztek bennük a mozgalom és a Lánykör iránt,
              felsorolom az egyenruha előnyeit, megmondom, hogy mit feleljenek,
              ha gúnyolják, vagy bántják majd őket a ruháért.
            </p>
            <p className={styles.torzs2}>Mese, vagy kép</p>
            <p className={styles.torzs3}>
              Az elején elmesélem az egyházmegyei Lánynapot, milyen szép és
              felejthetetlen volt a sok egyenruhás lánycsapat öntudatos,
              fegyelmezett felvonulása zászlóik alatt s milyen kár, hogy ők nem
              lehettek közöttük. A végén elmondom a modern libák történetét. -
              Egy autó ment a falun keresztül és az egyik menekülő libának
              elkapta a farktollait. Másnap a liba farktollak nélkül volt
              kénytelen a legelőre menni. Néhány nap mulya csodálkozva látta,
              hogy valamennyi libának hiányzik a farktolla. Kitépkedték, mert
              nem tudva mi történt, azt hitték, hogy ez a legújabb divat. - Ne
              féljenek hát a lányok sem, hogy egyedül maradnak, mert akik most
              leginkább az egyenruha ellen vannak, azok is meg fogják
              csináltatni, ha nem is meggyőződésből, csak azért, mert a lányköri
              lányok új és szép divatot csináltak.
            </p>
            <p className={styles.torzs}></p>
            <p className={styles.alcim2}>
              <center>Vázlat</center>
            </p>
            <p className={styles.torzs}>
              Mit láttam a Lánynapon. Mennyire fájt hogy ők nem lehettek ott,
              vagy nem lehettek olyan szépek, mint az egyenruhások. Hiába
              lennének szépek az ő ruháik egyenkint, sokféleségükkel semmit sem
              mutatnának.
            </p>
            <p className={styles.torzs}>
              Ha a Katinak kékselyem az új ruhája, az enyém azért is rózsaszínű
              lesz és még drágább mint az övé. Ezt nem a szeretet diktálja.
            </p>
            <p className={styles.torzs}>
              Az egyenruha kifejezi azt, hogy szeretjük egymást és egyet
              akarunk. De elmondja azt is, hogy magyarok vagyunk, hogy falusiak
              vagyunk, kik a magunk munkájával, egészséges, szép élettel,
              egyedül a jó Istentől függve éljük életünket. Ebben a ruhában
              mindenki szép és csinos, ha széles is, ha meg is látszik a kezén,
              karján a mezei munka és ez a ruha mindenkinek egyformán olcsó a
              nem lehet vele legyőzni a másikat, minden ünnepre, búcsúra újat
              felvenni, mert egyforma és sokáig tart, mert ünneplő marad.
            </p>
            <p className={styles.torzs}>
              Ne féljenek a falu szájától, én megcsináltatom és jövő vasárnap
              abban megyek templomba. Így nem fognak merni gúnyolódni s ha mégis
              mondanának valamit, feleljétek azt: mi a vezetőnkre hallgatunk és
              utána indulunk, mert a katolikus Lánykör tagjai vagyunk.
            </p>
            <p className={styles.torzs}>
              Egy csoda sem tart 3 napnál tovább. A libák is kihúzgálták a
              farkukat, mi sem maradunk egyedül, rövidesen utánunk fognak jönni
              a többiek is és akkor majd mienk lesz az érdem, hogy egy ilyen
              szép és jó dologra mi adtuk az első példát.
            </p>
            <p className={styles.torzs}></p>
            <p className={`${styles.cim2} ${styles.cim2BottomMargin}`}>* * *</p>
            <p className={styles.torzs}></p>
            <p className={styles.torzs}>
              Öntudatos lányköri vezető apostoli munkájának eredményessége
              érdekében nem nélkülözheti: a MISSZÁLÉT, SZENTÍRÁST, KATEKIZMUST,
              SZENT VAGY URAM énekeskönyvet, a VEZÉRKÖNYVET, KALÁSZ VETÉSFORGÓT,
              TARISZNYÁT, TULIPÁNTOS LÁDÁT. Ezen néhány könyv és folyóirat
              ismerete és használata a katolikus és a munkában nélkülözhetetlen
              szociális kultúra alapja.
            </p>
            <p className={styles.torzs}></p>
            <p className={styles.torzs}></p>
          </div>
          <div className="fejezet-munka">
            <a id="30"></a>
            <p className={styles.cim1}>III. A MUNKA </p>
            <p className={styles.torzs}></p>
            <a id="31"></a>
            <p className={styles.cim2}>Összejövetelek</p>
            <p className={styles.torzs}></p>
            <p className={styles.alcim1}>Ideje</p>
            <p className={styles.torzs}>
              A Lánykör összejöveteleit minden vasárnap, lehetőleg litánia után
              tartja. Minden vasárnap, azért, hogy a falun oly sok bűnalkalmat
              rejtő vasárnapi szórakozástól elvonja a lányokat. Ebből
              következik, hogy a lányköri szórakozásnak fel kell vennie a
              versenyt a vasárnap délután egyéb gyönyöreivel, másként a lányok
              nem fognak megválni régi kedvteléseiktől. Leggyakoribb eset, hogy
              a lányok nem is nagyon ragaszkodnak a falu vasárnapi
              szórakozásaihoz, csak részt vesznek, mert nem tudnak a
              délutánjaikkal mit kezdeni. De nyomban átpártolnak a Lánykörhöz,
              amint az idejüket értékes és kedves programmal kitölti. - Ha a
              faluban a vasárnap délutánokat korcsmai tánccal töltik, az
              összejöveteleket mégis vasárnap tartjuk és utána magunk is
              elkísérjük a lányokat a táncba. Az összejövetelen hallottak és a
              tekintélyes kíséret tompítani fogja a duhajkodást és jó hatással
              lesz az ifjúságra. Idővel, mikor lányaink már meg vannak nevelve,
              magunk is rendezhetünk táncot számukra.
            </p>
            <p className={styles.torzs}>
              Azért jó az összejövetelt litánia után rendezni, mert a lányok a
              litániára amúgy is eljárnak. Ha nem járnak, akkor a Lánykör
              szoktassa hozzá a lányokat azzal, hogy pl., alatt a kóruson a
              Lánykör énekel, vagy utána közös imát mondanak. A litániára
              összegyűlt lányok a vezetővel együtt átmennek a Lánykörbe és így
              nincsenek kitéve a kísértésnek, hogy pl. sétálni induló barátnőjük
              a Lánykör bejáratáig kíséri őket, aztán elmegy szórakozni, nekik
              pedig be kell ülni a terembe.
            </p>
            <p className={styles.torzs}>
              Énekórákat, kézimunkaórákat, színdarabpróbákat hétköznapokon is
              rendezhetünk, de az igazi foglalkozásnak hagyjuk meg a vasárnapot.
            </p>
            <p className={styles.torzs}></p>
            <p className={styles.alcim1}>Helye</p>
            <p className={styles.torzs}>
              Az összejövetel helye leggyakoribb esetben valamelyik iskola
              terem. Ez nem felel meg a célnak, csak szükségből vesszük igénybe.
              A játékhoz, tánchoz tágas hely kell, ami az iskola padjai között
              ritkán adódik. De nem is érzik magukénak a lányok a Lánykört,
              ameddig nőiességüknek megfelelően nem díszíthetik, rendezhetik,
              szépíthetik, takaríthatják egyesületi helyiségüket, Legjobb, ha az
              egyházközség kultúrházában, vagy más erre a célra használt
              épületben kapnak otthont. Ha kénytelenek helyiségüket más
              egyesülettel is megosztani, még mindig jobb, mintha iskolateremben
              jönnek össze. Ez a kérdés természetesen az adott helyi körülmények
              szerint módosul. Nem baj, ha a Lánykörnek az ősszel jöveteli
              helyiségért fizetnie kell - ha van miből - mert emberi
              tulajdonság, hogy akkor kezdünk valami iránt komolyabban
              érdeklődni, ha áldozatot is hozunk érte.
            </p>
            <p className={styles.torzs}></p>
            <p className={styles.alcim1}>Foglalkozás módja</p>
            <p className={styles.torzs}>
              Általános vélemény, hogy a magyarokat, különösen a nőket nem lehet
              szervezni. Alá szokták ezt támasztani a "turáni átokról" lábra
              kelt babonával, leginkább azok, akik egyrészt az önfegyelmezésnek
              nem barátai, másrészt nem néztek a probléma mélyére. - A széthúzás
              tényleg faji rossztulajdonságunk, de talán megtalálhatjuk a
              magyarázatát a magyar nép művészi készségében, amelynek nagysága
              elismerten páratlan Közép-Európában. A művészi érzék a kifejlett
              egyéniség függvénye. Az egyéni élet rosszirányú túlzása pedig a
              széthúzás, összeférhetetlenség. Lányainkkal való foglalkozásunkat
              tehát e szerint kell beállítanunk. Minden lány külön egyéniség,
              tehát nem kezelhetjük mint tömeget. A vezető igyekezzék az
              összejöveteleken minden lányt egy-egy szóval megörvendeztetni,
              mindegyiktől valamit kérdezni, lehetőleg a családjáról, az otthoni
              dolgairól, mert ebből látni fogja a lány, hogy őt a vezető ismeri,
              vele egyénileg is törődik, másképp mint a többivel, külön is
              szüleit, testvéreit ismeri, otthona iránt is érdeklődik.
            </p>
            <p className={styles.torzs}></p>
            <p className={styles.alcim1}>Foglalkoztatás</p>
            <p className={styles.torzs}>
              Tudnunk kell azt is, hogy a nők áltatában elvont eszmék iránt nem
              tudnak lelkesedni. A mi lányaink sem fognak a nemzet megmentésén,
              a boldogabb jövő építésén felbuzdulni, de nagyon fogják szeretni a
              Lánykört, ha abban találnak valamit, ami őket közvetlenül érdekli,
              pl. a szereplés, a szórakozás, valamely megbízatás, felelősség,
              tehát valami, ami csak hozzájuk tartozik, csak őket érinti, egyéni
              életükben jelentőséggel bír. Azért lényeges az, hogy a mi
              Lányköreinkben egy-egy ozsonna, műsoros előadás, karácsonyi vásár
              megrendezésénél minél több lánynak jusson szerep, megbízatás,
              amelynek pontos teljesítéséért ő felelős, és amelynek keretében
              egyéni kiválóságait kimutathatja. - Természetes, hogy a vezető is
              csak akkor fog tudni lélekkel dolgozni, ha magáénak érzi a
              Lánykört.
            </p>
            <p className={styles.torzs}></p>
            <p className={styles.alcim1}>Napló</p>
            <p className={styles.torzs}>
              A lányköri gyűlésekről vezessünk haladási-naplót, röviden jelezve
              ebben a gyűlés tárgyát, a végzett anyagot, az előadót, a jelenlévő
              és hiányzó tagok számát. Így néhány percnyi munkával igen
              megkönnyíthetjük magunknak az év végi beszámolót és előttünk is
              világosabb, áttekinthetőbb lesz egész évi munkánk. Ehhez
              nyomtatvány a központban kapható.
            </p>
            <p className={styles.torzs}></p>
            <p className={styles.torzs}></p>
            <p className={`${styles.cim2} ${styles.cim2BottomMargin}`}>
              Egy délután a Lánykörben
            </p>
            <p className={styles.torzs}></p>
            <p className={styles.torzs}>
              Isten hozott gyerekek! Megfáztatok a litánián; hideg volt úgy-e?
              Álljunk ide a kályha mellé, míg a többiek jönnek. Kis Ilonkám,
              hogy van édesanyád? Hallom, beteg volt a héten. Csak vigyázzatok
              reá, ebben a szeszélyes időben, ki ne mertjén lázasan, mert nagy
              betegséget szerezhet. - Mariskám, Pistátok szépen tudta tegnap a
              számtant. Segíts neki néha a tanulásban, meri eszes gyerek, csak
              játékos és nem tud figyelni.
            </p>
            <p className={styles.torzs}>
              Na, úgy látom együtt vagyunk. Helyezkedjünk el, énekeljük el a
              jeligét és mondjuk el az imádságainkat. Úgy, most felolvasom a
              névsort. Szabó Margit csoportjából hiányzik Kis Teri, igazold az
              elmaradását Margitkám. - Még mindig olyan rosszul van szegény
              édesapja? Jó gyerek, hogy az egész ápolást magára vette.
              Imádkozzunk majd értük közösen, te meg Margitkám látogasd meg,
              nézz szét, hogy nincs-e valamire szükségük és jelentsd nekem. - A
              többiek itt vannak. - Ha figyeltek, elmondok egy mesét.
            </p>
            <p className={styles.torzs}>
              Egyszer egy kis Jérce észrevette, hogy az öreg kotlóstyúkok a
              költés utolsó napjaiban itt-ott feltörik a tojás héját, hogy a
              kiscsirkék könnyebben kibújhassanak. - Milyen ostobák ezek az
              öregek, gondolta magában a kis Jérce; ha majd rám kerül a sor,
              okosabban fogom csinálni! Mikor a kis Jércéből tyúk lett s a
              gazdaasszony tojásokat tett alá, a fiatal tyúkocska feltörte az
              összes tojásokat. - Mit csinálsz te bolond?! - kérdezte a Kotló,
              aki mellette ült. - Mit csinálok?! hát csak azért, mert régi
              szokás, nem fogok itt ülni hetekig a tojásokon! Feltörtem a
              tojások héját, így a kis csirkék már ma kibújhatnak, ha úgy
              tetszik nekik! - A vén Kotló nem tudott hova lenni a
              megbotránkozástól, de a gazdaasszony is pattogott ám másnap, mikor
              ráakadt a feltört és tönkrement tojásokra. És, mert a fiatal
              tyúkocska újmódi rendszerével a gazdaasszony sehogy sem tudott
              megbarátkozni, a következő vasárnapon bizony tyúkhúsleves volt
              ebédre, még pedig régi szokás szerint: csigatésztával.
            </p>
            <p className={styles.torzs}>
              Úgy-e milyen mulatságos, lányok? De ha nagyon keresünk, nem
              találnánk-e magunk között is ilyen okos jércéket? (Munka, ruházat,
              erkölcs, férjhez menés, szórakozás, pénzszerzés stb. régi
              módszereinek elvetése az újabb, könnyebb és reménytelenebb
              kedvéért.) na, ki tudna még példát mondani, te, Mariska? Halljuk!
              - Lám, ez okos; ha úgy járnánk a templomba, olyan hittel
              imádkoznánk, mint nagyanyáink tették, több Isten-áldása nyugodnék
              rajtunk és munkánkon.
            </p>
            <p className={styles.torzs}>
              Most álljunk fel lányok és énekeljünk. Aki legfigyelmesebben
              tanulja ezt a gyönyörű Mária-éneket, annak szabad az első nótát
              választani. - Figyelem! - Előbb a szöveget, aztán a dallamot
              tanuljuk, pár perc az egész, ha figyeltek s utána játék
              következik. - Készen vagyunk.
            </p>
            <p className={styles.torzs}>
              Mi is lesz az első nótánk? Hej sárelő? - Rajta! - A játékokat az
              rendezi, aki legtöbbet nevetett ma délután. Te Boris? De ügyesen,
              előre gondold ki, hogy fognak egymás után következni s engem ki ne
              hagyj egyikből sem!
            </p>
            <p className={styles.torzs}>
              Na lányok, mára talán elég, már fáj az oldalunk a sok nevetéstől.
              Melyik volt a legjobb, vattafúvás, szamaras, vagy kefés? - Most
              szedjük össze a holminkat s imádkozzunk. A szándékot úgy-e
              tudjátok: engesztelésül a káromkodásokért. A Kis Teri édesapjáért
              egy Üdvözlégyet! - Isten veletek, lányok, szép rendesen menjetek
              hazafelé, hadd lássa mindenki, hogy kik vagytok. - Mindörökké,
              Ámen. - Viszontlátásra jövő vasárnap!
            </p>
            <p className={styles.torzs}></p>
            <p className={styles.torzs}></p>
            <a id="32"></a>
            <p className={`${styles.cim2} ${styles.cim2BottomMargin}`}>
              Katekizmus versenyek
            </p>
            <p className={styles.torzs}></p>
            <p className={styles.torzs}>
              Az Olasz Lányifjúsági A. C. munkaprogramjából ültette át
              Szövetségünk a behatóbb katekizmus tanulás gondolatát. Munkánknak
              egész értéke avval áll, vagy bukik, vajon mennyire tudjuk
              öntudatossá és életerőssé tenni lányainkban a hitet. Erre pedig
              nem a prédikációk, vagy hosszas, sokszor előttük unalmasnak látszó
              imádkozások nevelik rá lányainkat, hanem az, ha hitüket ismerik és
              megértik. Hogy ez a foglalkozás lányaink előtt vonzó legyen,
              valamilyen keretet kellett adni annak. Így alakult ki a
              katekizmus-versenyek gondolata.
            </p>
            <p className={styles.torzs}>
              A központ minden évben előre meghatározza, hogy a katekizmusnak
              melyik része kerül sorra. Ehhez a részhez hozzáértő egyháziak un.
              "értelmi kérdéseket" állítanak össze. Ezek az értelmi kérdések a
              vallás tételeit és a hitigazságokat a gyakorlati étet szemszögéből
              tárgyalják. Lényeges kellékük, hogy rájuk feleletet senki sem
              kaphat készen; azt a lányoknak maguknak kell kitalálni,
              természetesen irányítás mellett. Kezdő egyesületekben eleinte sok
              gondot okoz ez a rendszer, mert a vezető-nénik is megijednek és a
              leányok is bátortalanok, de később, ha rájönnek kölcsönösen ennek
              a munkának szépségére, a leányok versengve gondolkoznak és
              találják ki a helyes feleleteket, ha nem is egyénileg, de a
              közösségben megnyilvánuló erőnél fogva. Ha az értelmi kérdések
              közül egyikre-másikra nem tudják a pontos választ megtalálni,
              előveszik magát a kis katekizmust, ebben feltétlenül megtalálják
              az ide vonatkozó feleletet és most már nem fognak idegenkedni
              attól, hogy magát a katekizmust is pontosan megtanulják.
            </p>
            <p className={styles.torzs}>
              Evvel a munkával az egyesületi év kezdetén ádvent folyamán
              elkészülnek az egyesületek. Nagyböjtben pedig minden egyesületben
              megrendezik a katekizmus ünnepséget. Az illető egyesület
              bátorságának mértéke szerint vagy zárt körben, vagy a falu
              bevonásával folyik ez le. Meghívják rá az egyházmegyei vagy
              espereskerületi lelki-igazgatót és titkárt, akik a helybeli
              plébános úrral együtt a bírálóbizottság tagjai. Minden egyesületi
              tag, aki a katekizmus tanulás idején már bent volt az
              egyesületben, részt vesz az ünnepségen, mert ha még nem is tud
              teljesen jól, akkor is feleleteivel pontszámot szerezhet
              egyesületének.
            </p>
            <p className={styles.torzs}>
              Minden tag három kérdést kap. Feleletével, annak helyessége
              szerint egy-egy alkalommal legjobb esetben 10 pontot szerezhet. Ha
              nem volt egészen pontos a felelet, megfelelően kevesebbet. Olyan
              azonban még sohasem fordult elő, hogy valaki a három kérdés közül
              egyikre sem tudott volna úgy felelni, hogy legalább 6-8 pontot ne
              szerzett volna. Az ünnepség végén összeadják az egyes lányok által
              szerzett pontokat, s az így nyert összegeket elosztják az
              egyesület azon tagjainak számával, akik a versenyen részt
              vehettek, tehát a tanulás időpontjában az egyesülethez tartoztak
              és otthon vannak. Az így nyert eredmény adja meg a Lánykör elért
              pontszámát. Természetesen minél többen vettek részt és minél
              jobban tudtak, annál nagyobb lesz ez a szám, Szükséges tehát, hogy
              az egyesület valamennyi tagja szorgalmasan vegyen részt ebben a
              munkában, mert egyes primadonnák, akármilyen ragyogóan tudnak is,
              nem pótolhatják a kevésbé okosaknak elmaradását.{" "}
            </p>
            <p className={styles.torzs}>
              Az egyesület bíráló lapjára a katekizmus tudás pontszámán kívül
              rákerül a plébános úrnak az egyesületről alkotott véleménye, az
              egyesületbe járó Tulipántos Ládák példányszáma, az egyesület
              rendezéseinek száma, (Kívánatos az évnyitó, évzáró, egy vidám és
              egy komoly ünnepség, ezen kívül megengedett még kettő. A túl sok
              rendezvény ugyanis műkedvelővé alacsonyítja a Lánykört.) a
              munkanapló állapota és a vezetőnek a kerületi gyűléseken való
              részvétele. Így tehát egy-egy bíráló lap az egyesület az évi
              életének jóformán teljes keresztmetszetét adja, ezeket a
              bírálólapokat kerületenként gyűjtik össze az egyházmegyei titkárok
              és azok összevetéséből állapítják meg, hogy melyik egyesület
              szerzett legtöbb pontot az esperes kerületben, illetve az
              egyházmegyékben. Ugyancsak megállapítják, azt is, hogy melyik
              kerület szerzett legtöbb pontot, ami természetesen a versenyző
              egyesületek számától függ. Mert az eljárás itt is ugyanaz, mint az
              egyesületek elbírálásánál: az espereskerületben szerzett összes
              pontok számát azon egyesületek számával osztják, amelyek
              versenyezhettek volna. Tehát mind az espereskerületnél, mind az
              egyházmegyének érdeke, hogy minél több egyesület legyen hajlandó
              nyilvánosan is bizonyságot tenni tudásáról.
            </p>
            <p className={styles.torzs}>
              A helyi ünnepségek lefolyása után azok eredményeit az egyházmegyei
              titkárok beterjesztik a központnak, ahol az egyházmegyék az évi
              helyezése eldől. A legtöbb pontot szerzett egyházmegye legjobb
              egyesülete egy évig őrzi a központ vándorzászlaját. Minden
              egyházmegyének legjobb három egyesülete pedig felküldheti egy-egy
              résztvevőjét a rendesen október 8-án tartani szokott országos
              katekizmus-ünnepségre, melyen a legnagyabb nyilvánosság előtt,
              teljesen pártatlan kérdezők és bírálók jelenlétében mutathatják
              meg a lányok, hogy dicsőségüket tényleges tudásukkal érdemelték
              ki.
            </p>
            <p className={styles.torzs}>
              Ez a rendszer egyesek szemében talán külsőségnek látszik. Egy
              azonban bizonyos: A lányok érdeklődését nagymértékben felébreszti,
              és kedvet támaszt bennük a tanulásra. Aki pedig hitét annyira
              világosan ismeri és annak az élettel való vonatkozásával annyira
              tisztában van, mint a mi katekizmus-versenyzőink, annál biztosan
              remélhetjük, hogy életével sem fogja megcáfolni tudását
            </p>
            <p className={styles.torzs}></p>
            <p className={styles.torzs}></p>
            <a id="33"></a>
            <p className={styles.cim2}>Tanítások</p>
            <p className={styles.torzs}></p>
            <p className={styles.alcim1}>Irányuk</p>
            <p className={styles.torzs}>
              Vasárnapi összejöveteleinken leányainkkal rövid, komoly
              megbeszéléseket tartunk ötös célkitűzésünknek megfelelően
              vallásos, jellemképző, kulturális, gyakorlati és családanyai
              hivatásukra előkészítő tárggyal.
            </p>
            <p className={styles.torzs}></p>
            <p className={styles.alcim1}>Hangjuk</p>
            <p className={styles.torzs}>
              A lányköri munkában tanítás alatt egy-egy témának a lányokkal való
              megbeszélését értjük. Az előadások, szónoklatok az egyesületi
              életben idejüket múlták, általa nem jutunk közelebb célunkhoz és
              csak nevetségessé tehetjük magunkat. A megbeszélések alatt a
              lányok kedvet kapnak véleményük szabad nyilvánítására, amit az
              ügyes vezető úgy irányít, hogy a helyes következtetésre jussanak.
              Ha a lányok maguk is részt vesznek a megbeszélésben, magukévá
              teszik a hallottakat, s fel is használják azt, nem úgy, mint a
              szép szónoklatokat, melyeket megdicsérnek, de tartalmukra nem
              emlékeznek vissza. A vezető is megszabadul attól a nyomasztó
              érzéstől, hogy neki előadást kell tartania.
            </p>
            <p className={styles.torzs}></p>
            <p className={styles.alcim1}>Tárgyuk</p>
            <p className={styles.torzs}>
              Tanításainkban elsősorban a helyi kérdéseket, a héten elő-fordult
              dicséretes, vagy megrovandó eseményeket, valamely ünnepségre, vagy
              egyébre vonatkozó előkészületeket beszéljük meg. Ezután sor kerül
              vallásos, jellemképző, kulturális, vagy gazdasági témákra,
              melyeket a vezető a Tarisznya vázlata alapján, a helyi
              viszonyoknak megfelelően kibővítve, vagy átalakítva tárgyal le a
              lányokkal. A Tarisznya vázlatai egyrészt gondolatot adnak a
              megbeszéléshez, másrészt egységessé teszik az ország
              lányifjúságának nevelését, ezért feltétlenül szükséges, hogy
              minden vezető azok szerint dolgozzék. A Tarisznya vázlatait
              szakemberek állítják össze, tehát aki ezek nyomán tartja a
              megbeszéléseket, nyugodt lehet, hogy adott lányainak annyit,
              amennyire nekik szükségük van, ha ő maga nem is orvos,
              pszihológus, vagy gazdasági szaktekintély.
            </p>
            <p className={styles.torzs}></p>
            <p className={styles.alcim1}>Időtartamuk</p>
            <p className={styles.torzs}>
              A tanítások ne tartsanak 20 percnél tovább. A falusi lányok
              nincsenek szellemi munkához szokva, ezért nem tudnak huzamosabb
              ideig figyelni. A vasárnapi szentbeszéd meghallgatása úgyis
              szellemi munkát kíván tőlük, nem tudnak még a lányköri
              megbeszélésre is hosszabb ideig figyelni és abban tevékenyen részt
              venni. Alvó vagy nyugtalankodó hallgatókkal pedig nem érünk célt.
            </p>
            <p className={styles.torzs}></p>
            <p className={styles.alcim1}>Vendég előadók</p>
            <p className={styles.torzs}>
              Ha találunk a faluban alkalmas és készséges munkatársakat,
              feltétlenül használjuk fel segítségüket, már csak az egyhangúság
              elkerülésére is. De arra vigyázzunk, hogy vendég előadóink is a mi
              munkánk szellemében tartsák a megbeszélést, mert a tudásnál is
              lényegesebb a lelkület.
            </p>
            <p className={styles.torzs}>
              Ha a plébános úr szívesen vállalja a vallásos tanítás megtartását,
              hálásan fogadjuk, de gondoskodunk arról, hogy ezt ne érezze
              kényszernek, mert a reá nehezedő újabb teher esetleg elveszi
              kedvét az egész mozgalomtól. - Ha orvosnő, védőnő vagy esetleg
              tanult ápolónő van a faluban, egészségügyi előadásra őt kérhetjük.
              Férfi orvossal lányoknak egészségügyi előadást sohase tartassunk,
              mert a lányok férfi előadó előtt zavarba jönnek, fantáziájuk
              működni kezd s ez lelküknek nagyobb kárára van, mint amennyi
              hasznot tudásuk gyarapodása jelent. - Ha példás életű családanya,
              vagy jó gazdaasszony él közöttünk, a családvédelmi illetve
              gazdasági tárgyú megbeszélés tartására őt hívhatjuk. Tőle jobban
              elfogadják a lányok a jó tanácsot, mint egy magánosan élő és a
              háztartáshoz talán nem sokat értő vezetőtől.
            </p>
            <p className={styles.torzs}>
              A vendégelőadó tanítását a vezető mindég hallgassa végig a lányok
              között, hogy az előadás hatását kitapasztalhassa.
            </p>
            <p className={styles.torzs}>
              Arra természetesen nagyon vigyázzunk, hogy tevékenységünk ne
              merüljön ki idegen előadók hajhászásában, mert a vezetővel való
              meghitt és barátságos együttlét az, mely a Lánykörben kívánatos
              őszinte és családias hangot kialakítja.
            </p>
            <p className={styles.torzs}>
              A munka megkönnyítésére a különböző tárgykörökből egy-egy
              mintatanítást közlünk.
            </p>
            <p className={styles.torzs}></p>
            <p className={styles.torzs}></p>
            <a id="34"></a>
            <p className={styles.cim2}>Mintatanítások</p>
            <p className={styles.torzs}></p>
            <p className={styles.alcim1}>Mi az, ami boldogít?</p>
            <p className={styles.torzs}>
              Ma egy érdekes kis levelet olvasok fel néktek, melyet egy falusi
              lánytársatok írt a városban szolgáló barátnőjének. Így hangzik:
            </p>
            <p className={styles.torzs}>
              "Kelt levelem Pásztoriban, 1937. szeptember 15-én. Kedves Juliska!
              Ezennel tudatlak, hogy hála legyen a jó Istennek, friss jó
              egészségben vagyok, amit neked is hasonlóképpen szeretettel
              kívánok. - Amit megígértem, most meg is teszem, beszámolok neked a
              mi aratóünnepségünkről. Nagyon szép volt! A plébános úr már egy
              héttel előbb kihirdette a szószékről, hogy a Lánykör tagjai
              házról-házra fognak járni és összegyűjtik mindazt, amit a népek az
              Úr Jézus nevében a szegényeknek szánnak. Megkérte a gazdákat, hogy
              adják kölcsön a szekerüket egy-egy napra a gyűjtéshez. A vezető
              néni felosztotta közöttünk a falu utcáit. Én a Katival a Főutcát
              jártam a Szántóék szekerén, melyet szépen felvirágoztunk. A jó
              emberek sokat adtak: búzát, krumplit, mákot, babot, szőlőt,
              szilvát, almát, meg virágot. Mindent összehordtunk az iskolába, és
              ott szépen elrendeztük, zsákokba meg kosarakba. Azokat is
              feldíszítettük. Vasárnap délután a legények is eljöttek és
              körmenetben vittük el mindenből a legszebbet az áldásra. A lányok
              a virágos kosarakat, a legények a feldíszített saroglyákon a
              zsákokat vitték. A plébános úr nagyon szépen beszélt, hogy milyen
              hálával tartozunk a jó Istennek minden adományáért, és milyen
              szeretettel kell adnunk belőle a szegényeknek, akiknek nem jutott
              semmi a termésből. Másnap szétvittük a sok jót a szegényeknek, de
              csak a legszegényebbeknek, akik igazán rá voltak szorulva a
              segítségre. - Jaj, ha láttad volna Juliskám azt a boldogságot,
              örömet, amit mi láttunk ezeknek a szegény betegeknek, vagy
              öregeknek az arcán. Mi ketten Katival az öreg Mári néninél
              voltunk, tudod, aki ott a falu végén abban a nyomorúságos kis
              házban lakik. Szegény már tavasz óta nem bír felkelni annyira sem,
              hogy koldulni menjen a faluba. Képzelheted milyen boldog volt,
              hogy könnyezett, hálálkodott, dicsérte a jó Istent, akinek még az
              ilyen elhagyatottakra is gondja van.
            </p>
            <p className={styles.torzs}>
              A mi szemünkből is megeredt a könny, de nem ám a szomorúságtól,
              hanem a boldogságtól, hogy mi szerezhettünk ekkora örömet a
              szegény jó Mári néninek s el is mondogattuk hazafelé menet
              Katival, hogy talán még életünkben sem volt ilyen nagyon boldog
              napunk, mint akkor s talán nem is lesz egyhamar. - Téged is
              emlegettünk, milyen kár, hogy nem lehettél velünk ezen a boldog,
              szép napon, hogy nem érezhetted te is azt az örömet, amit mi
              éreztünk. Na de majd jövőre! Akkor már mi is tudni fogjuk, hogy
              milyen az aratóünnep és a többi lányok is velünk és veled együtt
              azon fogunk igyekezni, hogy minél több szegényen segíthessünk a jó
              Isten nevében. - Addig is jó egészséget kívánok és sokszor
              csókollak szeretettel, Erzsi."
            </p>
            <p className={styles.torzs}>
              Kedves lányok, ki ne szeretne közülünk ilyen boldog, örvendező
              lélek lenni, mint a kis Erzsi, aki ezt a szép levelet írta?
              Lássátok, ez az igazi boldogságnak az útja: a szeretetnek
              gyakorlása. Csak akkor lehetünk igazán boldogok mi emberek, ha
              megértjük és teljesítjük a mi Urunk Jézus új parancsát: "Ahogy én
              szerettelek titeket, úgy szeressétek ti is egymást!" - Ahogy Ő
              elhagyta irántuk való szeretetből a mennyet és eljött rajtunk,
              nyomorult bűnösökön segíteni, úgy kell nekünk is iránta való
              szeretetből felkeresni szenvedő embertestvéreinket és segíteni
              rajtuk. Csak akkor részesülhetünk az Ő végtelen nagy
              boldogságában, ha az Ő nevében az éhezőknek enni, a szomjazóknak
              inni adunk, ruhátlanokat felruházunk, a betegeket meglátogatjuk és
              mindenkivel szemben gyakoroljuk az igazi tevékeny szeretetet.
              Különben jaj nekünk! Boldogtalanok leszünk itt és örökre odaát.
            </p>
            <p className={styles.torzs}>
              Tehát rajta lányok. Lássunk a szeretettel boldogító munkájához:
              vegyük pártfogásunkba, Jézus nevében falunk szegényeit. Úgy-e jó
              lesz, úgy-e segíttek mindnyájan?
            </p>
            <p className={styles.torzs}>
              No, de hát kik is azok a szegények, akik leginkább rászorulnak a
              mi segítségünkre? Mert mindenkin nem tudunk ám segíteni! Mit
              gondoltok, kik azok, akiket legelsősorban kellene felkeresnünk,
              meglátogatnunk és megvigasztalnunk?
            </p>
            <p className={styles.torzs}>
              Igen, azok a jó öregek és betegek, akiknek nincs senki
              hozzátartozójuk, vagy akiket ezek ápolás nélkül magukra hagytak.
              Ismertek ilyeneket?
            </p>
            <p className={styles.torzs}>
              Hát aztán kik szorulnak még igen nagyon a mi támogató, meleg
              szeretetünkre? Úgy-e az apátlan, anyátlan szegény kis árvák és
              sokszor a kihelyezett lelencgyermekek.
            </p>
            <p className={styles.torzs}>
              De tudok én gyermekeket, akiknek vannak szülei, és mégis nagyon
              rájuk férne egy kis gondoskodás. Azok, akik messziről, tanyákról,
              pusztákról jönnek be egy hideg krumplival a zsebükben az iskolába.
              Korán reggel indulnak, és sötét este van, mire hazaérnek. Éhesek
              és fáznak szegénykék. Sok Lánykört tudok, melynek jószívű tagjai
              meleg levest főznek ezeknek a gyermekeknek a déli órákban, hogy
              megenyhítsék éhségüket és fáradtságukat. Mi is megtehetnénk
              ugyanezt.
            </p>
            <p className={styles.torzs}>
              Hát még? A sokgyermekes szegény özvegyasszonyok. Vannak-e ilyenek
              a faluban? Bizonyára, csak eddig tatán észre sem vettük őket.
            </p>
            <p className={styles.torzs}>
              Kedves jó lányok, úgy-e ti szeretitek az apró kis gyermekeket,
              kisbabákat? Látjátok, olyan sokan szenvednek ezek közül a kis
              ártatlanok közül, mert szegény édesanyjuknak nincs pólyácskája,
              nincs egy darab rongyocskája, amibe takarhatná gyermekét. Sokan el
              is pusztulnak, mert gyengék a nagy nyomorúság elviselésére. -
              Pedig bizonyosan nagyon boldogan készítettetek volna a boldogságos
              Szűz Máriának a kis Jézus részére kelengyét, ha akkor éltetek
              volna. Gondoljátok el a meleg kis kabátkát, puha fejkötőt, ha a
              kis Jézust melegíthette volna. - Ezekben a szegény kis
              csöppségekben az Úr Jézus jön elénk és mindent, amit ezeknek
              teszünk, magának az Úr Jézusnak tesszük. Az ország sok községében
              készítettek már a lányok a szegény édesanyák számára kelengyéket;
              ha azok meg tudták tenni, mi sem maradunk el mögöttük. Úgy-e
              lányok?
            </p>
            <p className={styles.torzs}>
              De most Krisztus szeretete sürget minket, hogy meglássuk és
              megsegítsük szenvedő embertársainkat. Lánykörünknek ez lesz egyik
              legszebb és legáldásosabb feladata, tevékenysége.
            </p>
            <p className={styles.torzs}>
              Hát hogyan is fogunk hozzá a mi Karnász munkánkhoz? Az első
              kérdés, honnan teremtjük elő a szükséges anyagiakat, élelmet,
              ruhát stb. Ennek sokféle módja van, melyet most mind fel nem
              sorolhatok. Rendezhetünk esetleg egy kis előadást, színdarabot a
              szegények javára és annak tiszta jövedelmét erre fordítjuk. Vagy
              megkérjük a ft. plébános urat, hogy prédikáljon a felebaráti
              szeretetről (pl. Szent Erzsébet ünnepe táján) és azután végig
              járjuk a falut és összegyűjtjük természetben a szükséges anyagot.
              Talán a Szent Aratat perselyből is kaphatunk egy kis összeget és
              azon vásárolhatunk a Hangyában, kedvezményes áron molinót, vagy
              flanelt. Majd közösen, munkadélután keretében megvarrjuk a
              szegények számára. Vígan dalolunk mellette, vagy felolvasunk
              érdekes történeteket. Milyen kedves és hasznos téli délutánok
              lesznek ezek, kedves lányok! És közöttünk lesz bizonyára az Úr
              Jézus.
            </p>
            <p className={styles.torzs}>
              Hát aztán hogyan osztjuk szét az elkészített holmit? Talán nagy
              közös kiosztást rendezünk karácsonyra? Nem, kedves lányok, ez nem
              lesz jó! Hiszen sok szegény már előbb is rászorul a fűtőanyagra,
              jó meleg ruhára. Karácsonyfa ünnepélyt rendezhetünk ugyan
              szegényeink számára is szép énekekkel, szavalattal és kicsi kis
              édességek kiosztásával, de a komolyabb segítséget már előbb vigyük
              el külön-külön, lehetőleg titokban a szegényeknek személyesen. Így
              nem sértjük majd önérzetüket, kevesebb lesz az irigykedés is, és
              mélyebben hathatunk a lelkükre, ami pedig fontos.
            </p>
            <p className={styles.torzs}>
              Épp a lelki gondozás miatt, kik is vállalkoznák a szegény öregek
              és betegek meglátogatására? . . . Derék lányok vagytok. Majd
              felírjuk a neveteket és azt is, hogy ki hová megy.
            </p>
            <p className={styles.torzs}></p>
            <p className={styles.alcim1}>Fiúkkal való viselkedés</p>
            <p className={styles.torzs}>
              No, lányok mi volt az a nagy szócsata, amikor beléptem? Látom a
              Mariska még most is haragszik. Csak nem vesztél össze a Pistával?
              Nem, pedig már azt hittem, mert annyit emlegettétek, mikor az
              ablak alatt eljöttem. Mi baj van a Varga Julissal? Mond csak meg
              bátran, Margit. Hogy a Varga Julis le akarta beszélni a Mariskát
              arról, hogy a Lánykörbe járjon, mert akkor nem beszélhet már a
              Pistával. Hogy itt a Lánykörben arra tanítunk benneteket, hogy a
              fiúkkal nem is szabad találkozni? Tudom, hogy a Mariska megfelelt
              a Juliskának. Mondjátok meg őszintén, mondtam-e én azt valaha,
              hogy nektek nem szabad a fiúkkal beszélgetni? Úgy-e nem. De
              micsoda? Hogy arról már beszéltem, hogy hogyan kell nektek
              viselkedni a fiúkkal szemben. Igen, és hogyha ma már úgyis erről
              beszéltetek az előbb, beszélgessünk csak tovább róla egy kicsit.
            </p>
            <p className={styles.torzs}>
              Varga Juliska csak azért mondhatta azt, hogy nem akarunk
              benneteket a fiúk közelébe engedni, mert ő nem is jár a Lánykörbe.
              Hogy is juthatna ilyen eszünkbe, mikor mindig csak úgy tanítunk,
              hogy ügyes, jó asszony váljék mindegyitekből. Asszony meg hogy
              legyen belőletek, ha a fiúkkal sohasem találkoztok, sohasem
              beszéltek. Legény csak úgy vehet el lányt, ha előbb megismeri.
              Úgy-e? Dehogy akarunk titeket elzárni a fiúktól. Viszont az igaz,
              hogy jóravaló, derék fiú csak úgy vesz el lányt, ha látja, hogy
              az, becsületes, szorgalmas és ügyes, jó asszony válik majd belőle.
            </p>
            <p className={styles.torzs}>
              Hogyan is nőhetnétek ti fel úgy, hogy legényekkel nem érintkeztek,
              mikor nem múlik el nap anélkül, hogy ne találkoznátok velük.
              Mondjátok csak, ti, akik itt az elsősorban ültök, hol voltatok
              tegnap egész nap? Napszámban. Két hét múlva meg aratni mentek,
              tudom. Itt is, ott is, egész nap együtt vagytok a fiúkkal, egymás
              mellett dolgoztok. Bizony nem kívánja tőletek senki sem azt, hogy
              egész nap szóba se álljatok velük. De valamit igen, valamit
              elvárhat tőletek mindenki. Azt, hogy rendesen beszélgessetek.
              Annyi minden van, annyi minden történik körülöttetek, szép is,
              érdekes is, amiről el lehet beszélgetni, nevetgélni. Hogyne,
              nagyokat is lehet nevetni, ha valami jó tréfásat mondanak - csak a
              munka rovására ne menjen a sok beszélgetés, nevetés! - Mi az,
              Margit? Látod a számból vetted ki a szót. Éppen ezt akartam
              említeni, hogy bizony előfordul, hogy valamelyik fiú csúnya, durva
              tréfát mond. Tudjátok jói, mifélékre gondolok. Ilyenkor aztán
              tisztességes lány nem nevet. De nemcsak, hogy hangosan nem neveti
              el magát, hanem még csak nem is kuncog magában és nem is lökdösi
              társnőjét. Tudom én azt, hogy nagyon nehéz ilyenkor hallgatni,
              mert sokszor el kell viselni azt is, hogy még cifrábbakat
              mondanak, ha akkor is hallgat és nem vesz részt a tréfálkozásban,
              kinevetik, kicsúfolják azt a lányt, elmondják ilyen-olyan,
              szenteskedőnek. De ez ne zavarjon benneteket. Még akkor sem, ha
              azt mondják rátok, hogy gyávák vagytok, hogy féltek a vezetőtől,
              féltek a paptól. Nem gyáva az, aki hallgat, hanem bátor, mert meg
              meri mutatni, hogy őneki bizony az illetlen beszéd, durva tréfa
              nem tetszik, akár mit is tesz a többség.
            </p>
            <p className={styles.torzs}>
              A múltkor beszéltem egy legénnyel, nem bizony, nem mondom meg,
              hogy kicsoda, csak annyit árulok el, hogy nemsokára lesz az
              esküvője. Azt mondta nekem, hogy akkor kezdett neki tetszeni a
              mostani menyasszonya, amikor egyszer együtt dolgoztak a mezőn és a
              fiúk csúnyán tréfálkoztak. A legtöbb lány nevetett velük együtt,
              vagy legalább is magában kuncogott, de ennek a lánynak még a szája
              széle sem rándult meg, dolgozott tovább, mintha nem is hallaná,
              mit beszélnek a többiek; amikor pedig a déli szünetben is
              folytatták ezt a tréfálkozást, ő egyszerűen felállt és messzebb
              ment. Az a legény azt mondta, hogy akkor látta meg, hogy ez a lány
              komoly, tisztességes és bátran meg meri mutatni helyes véleményét.
              Pedig különben víg kedélyű, dalos lány volt. Egész biztosan boldog
              pár lesz belőlük.
            </p>
            <p className={styles.torzs}>
              Hanem, ha már arról beszéltem, hegy mit mondott egy legény, azt is
              elmondom, hogy mit hallottam a múltkor az utcán, amikor több fiú
              beszélgetett együtt. Idejöttem hozzátok az egyletbe s az utca
              túlsó felén 3 -4 lány ment összefogódzva. Látom, tudjátok már kik
              voltak, ti is láttátok azt a viháncolást, amit véghezvittek.
              Mögöttük is fiúk jöttek és azok a lányok hangosan nevettek,
              visszakiabáltak, átkiabáltak azokra a fiúkra, akik az utca másik
              oldalán álltak. És akkor hallottam, hogy az egyik fiú mondta: Né,
              hogy kelletik magukat! Tudjátok lányok, én úgy szégyellem magamat
              azokért a lányokért. Ők azt hitték, a legények így észreveszik
              őket, tetszenek nekik. Hát bizony észre is vették, de nem volt
              köszönet benne.
            </p>
            <p className={styles.torzs}>
              Így bizony utcán nem szabad viselkedni. Szeretnék belétek több
              önérzetet, büszkeséget oltani. Nem olyan olcsó portéka a lány,
              hogy az utcán vigye magát vásárba! Így nem szabad legényt fogni,
              de nem is lehet. Azaz legényt talán tehet fogni, aki elszórakozik
              a lánnyal, de férjet bizony nem, mert egy jóravaló legénynek sem
              kell az ilyen olcsó lány.
            </p>
            <p className={styles.torzs}>
              És tudjátok, mikor fáj legjobban a lányoknak ilyenféle
              viselkedése? Mit gondoltok? Úgy van Mariska, amikor vasárnap
              templomból jönnek ki és hazafelé már ilyen hangosan viháncolva,
              magukat kelletve mennek. Istenem, hát nem is gondolnak ők arra,
              hogy a templomból jönnek, az Isten házából. Az Ő szent színe elől?
              Hogy gondoljon a jó Isten az olyan lányokra, akik mihelyt kilépnek
              a házából, már nem is gondolnak Reá.
            </p>
            <p className={styles.torzs}>
              Ha már itt a templomot emlegetjük, azt szeretném lányok, ha ti is
              próbálnátok hatni arra a pár lányra, akik mindig ott hátul állnak
              meg a templomban a legények közt. Nem ott van a lányoknak a helye.
              Tudom, hogy ti ezt tudjátok, de próbáljátok szép szóval
              megmagyarázni azoknak is. Hiszen nem azért mennek a templomba,
              hogy ott mutogassák magukat, és a fiúkra kacsintgassanak. Ha a
              templomba megyünk, a jó Istenhez megyünk, hogy részt vegyünk a
              legszentebb áldozatban. Semmi másra ne gondoljunk ilyenkor. Hogy
              fájhat a jó Istennek az, hogy míg az Ő szent Fia feláldozza magát
              érettünk, vannak lányok, akik nem is gondolnak Reá, hanem csak
              azon jár az eszük, hogy vajon meglátta-e Jancsi, hogy új ruhájuk
              van, vagy hogy úgy szeretné elkapni Józsi pillantását, hadd lássa
              Józsi, hogy még most is ő jár az eszében.
            </p>
            <p className={styles.torzs}>
              Hanem most már nagyon is komoly kezdtem lenni, még elalusztok itt.
              Nem? Akkor rendben van. De, hogy még jobban felébredjetek,
              megemlítem nektek, hogy nemsokára készülünk megint színdarabra.
              Igen, fiúk is fognak velünk játszani. Úgy is tudom, hogy ez
              érdekel benneteket. Hanem lányok, itt mondanék még valami
              komolyat. Ne gondolja senki azt, hogy az életben is minden éppen
              úgy történik, mint a színdarabban, és hogy éppen az a lány és az a
              legény kerül össze, akikből a színdarabban egy pár lesz. Lehet,
              hogy annak a Jancsinak, aki a színpadon elveszi a Juliskát, egész
              más lány jár az eszében, és nagyon megutálja és megveti Juliskát,
              ha az akkor is utána akar szaladni, ha már lejött a színpadról.
              Sohase szaladjanak a Juliskák olyan szekér után, amelyik őket nem
              veszi fel! Mert csak kinevetik a többiek. És még egyet, a játék a
              színpadon van és nem a kulisszák mögött! Azt emlegetitek, amit a
              múltkoriban beszéltek a dalárda színdarabja után? Úgy-e nem esnék
              jól nektek, ha úgy beszélnének az emberek rólatok, ahogy néhány
              lányról beszéltek akkor. Azért, mondom, a kulisszák mögött semmi
              sugdolózásnak, játszadozásnak helye nincs. Mindenki maradjon azon
              a helyen, ahova őt küldöm.
            </p>
            <p className={styles.torzs}>
              Mi az Margit? Nézd csak, most beszélünk a színdarabról, és máris
              bálon jár az eszetek. Lehet, hogy az is lesz, de hiszen most volt
              nemrégen bál, nem táncoltatok eleget? - Többen be voltak rúgva s
              így nem lehetett jól mulatni? - Az bizony elég baj, részeg
              emberekkel nem is lehet szórakozni, de nem is szabad. Tisztességes
              lány ott is hagy minden olyan legényt, akiről észreveszi, hogy
              megártott neki a bor, de az olyan legényt is, aki nem rendesen
              táncol. Ne féljetek, megérti az a legény is, ha komolyan érdekli a
              lány, nem fog még egyszer úgy közeledni. Láttam bizony nagyon jól,
              hogy a múltkori bálnál úgy is történt. Nagyon örültem neki. - Ti
              észre sem vettétek, hogy én akkor már ott voltam? Ennek meg még
              jobban örülök. Mert nem csak akkor kell a lányoknak helyesen
              viselkedni, mikor tudják, hogy látják őket, hanem akkor is, ha
              senki sem látja őket. Azaz van-e olyan pillanata az éleinek,
              mikor, senki sem lát? - Úgy van! A jó Isten mindig lát, a mezőn
              is, az utcán is, de még a bálteremben is az Ő színe előtt vagyunk.
            </p>
            <p className={styles.torzs}>
              Mielőtt ezt a mai nagyon komollyá lett beszélgetést befejezzük,
              még azt mondom el nektek, amit nem régen mondott nekem egy tanító
              úr, aki mostanában került erre a vidékre. Azt mondta, hogy a
              faluban, ahova most került, olyán jóravalók a legények - ő vezeti
              ti. ott a legényegyletet - látszik, hogy tisztességesek,
              becsületesek a lányok a faluban. Ott pedig, ahonnan jött,
              haszontalanok, rosszak voltak a legények, mert a lányok
              könnyelműek, kikapósak, semmirevalók voltak. - Igaza volt a tanító
              úrnak, aki ezt így mondta el. Tőletek, lányoktól függ, hogy
              milyenek a falu legényei. Jó lányok megjavítják még a rossz
              legényeket is, ahol pedig rosszak a legények, az annak a jele,
              hogy a lányok rosszak.
            </p>
            <p className={styles.torzs}>
              Megmondhatjátok a Varga Juliskának, hogy mi egyáltalán nem akarjuk
              a lányokat elzárni a legényektől, csak azt akarjuk, hogy tudjanak
              rendesen, tisztességesen viselkedni a legényekkel.
            </p>
            <p className={styles.torzs}></p>
            <p className={styles.alcim1}>
              Kalap és kendő háborúja nemzeti szemporúból.
            </p>
            <p className={styles.torzs}>
              Kedves Lányok! - Hol volt, hol nem volt, volt egyszer egy kis
              kukac. Ez a kis kukac vígan élt egy nagy sajtban. Minden nap
              jóllakott a sajtból és fúrt tovább, ereje szakadtáig. Boldog volt
              és megelégedett és szentül meg volt győződve, hogy a sajton kívül
              nincsen már világ. De mint minden földi jónak, a sajtnak is vége
              lett egy napon és a kis kukac, amint napvilágra ért, csodálkozva
              nézett körül. Összecsapta két kis kezét és meglepődve állapította
              meg, hogy ni-ni, a sajton kívül is van világ?! Látta a teknőt, a
              dagasztólábat, a szitákat és álmélkodott. Mindezekről ő eddig
              semmit sem tudott és csodálatos, hogy mégis léteznek . . .
            </p>
            <p className={styles.torzs}>
              Nézzétek lányok, mi is olyanok vagyunk sokszor, mint a kis kukac.
              Élünk a falunkban, megvan az örömünk és bánatunk s azzal nem
              törődünk, hogy a falunkon kívül is van még világ. Van bizony,
              sok-sok ilyen falu, mint a mienk, ahol éppen ilyen gondolkozású
              emberek vannak, mint mi. Ugyanolyan az életük, mint a mienk, a
              határban van a földjük, mint nekünk és ez a sok-sok falu és város
              együtt alkotja az országot, a nemzetet.
            </p>
            <p className={styles.torzs}>
              Március 15.-én és október 6-án szép hazafias beszédeket szoktatok
              hallani. Ott van édesapátok, nagyapátok és az egész falu. Büszkén
              hallgatja mindenki, hogy a magyar nép milyen vitéz, milyen bátor,
              nagylelkű és vendégszerető. Mikor vége van a beszédnek, hazamegy a
              falu népe és már estére el is felejti, hogy miről volt szó. - Ti
              most olyan kérdően néztek rám, lányok. Azt kérdezitek magatokban,
              hogy nincs ez így jól? Nincs! Mert nem csak erényei vannak a
              magyar népnek, hanem hibái is. Ki tudná megmondani, melyek ezek? -
              Jól van Erzsike, ügyesen mondtad. A magyarok hibája a széthúzás,
              gőg, egymás lekicsinylése, önhittség és sajnos egy kicsit a
              lustaság is.{" "}
            </p>
            <p className={styles.torzs}>
              Látom a Kati szeméből a kérdést, hogy miért mondja ezt most nekünk
              a tanító néni? - Azért lányok, mert itt a Lánykörben ugyanúgy
              megvannak ám ezek a hibák: Megfigyeltem már többször, hogy a
              svájci sapkások mindig külön ülnek, a kendősök szintén. Ez a két
              csoport mindig fitymálja a másikat és össze-össze néznek gúnyosan
              a másik háta mögött.
            </p>
            <p className={styles.torzs}>
              Lányok, jót van ez így? Helyes ez? - Látjátok, itt a magyar
              széthúzás a Lánykörben is. - Most nézzük meg érdemes-e egymást
              bántani, van-e tényleg okotok reá, hogy egyik csoport a másikat
              kinevesse, lenézze.
            </p>
            <p className={styles.torzs}>
              Az igaz lányok, hogy mi emberek nem vagyunk egyformák; Juliska,
              gondolkozz csak, a múltkor te beszéltél nekem ilyesfélékről. Jól
              mondtad, hogy különbségek vannak közöttünk. Miben? Tehetségben,
              vagyonban, állásban! Mit suttogsz Ilonka? Mondd csak hangosan:
              szépségben. No, ez a legkevesebb, mert hamar elmúlik, de megmarad
              a léleké!
            </p>
            <p className={styles.torzs}>
              Lányok, nem vagyunk egyformák, de mindenkinek megvan a maga helye,
              ahol neki ereje és tudása legjavát kell adni. Furcsa is lenne, ha
              a különféle munkások, hivatalnokok és földművesek helyet
              cserélnének. Ideig-óráig helyt tudnának állni, de később egyik sem
              tudná a másik dolgát jól elvégezni.
            </p>
            <p className={styles.torzs}>
              Azután egyik lány nagy, a másik kicsi. Ilonka szőke, Margit barna,
              Zsuzsi hirtelen természetű, Mariska meg kedvesen mosolyog mindig,
              Kati svájci sapkát hord, Erzsike kendőt. Látszólag tehát ti sem
              vagytok mindenben egyformák. De mégis valamiben mindnyájan
              egyformák vagytok. Mondja meg gyorsan valaki, hogy miben. 1 percig
              mindenki törheti a fejét. Látom, a Gizi arca már ragyog. Ki vele
              Gizi. Tudasd velünk is, hogy mit gondoltál.
            </p>
            <p className={styles.torzs}>
              Jól van. Tehát egyformák vagyunk mindannyian Isten előtt. Mert
              bizony, hiába a vagyon, rang, külső szépség, ha a lélek belül
              bűnös, rosszindulatú. Hála Istennek, fent az Úr Istennél semmiféle
              földi előny nem számít.
            </p>
            <p className={styles.torzs}>
              Azután katolikusok vagyunk. Minket sokszor megvádolnak, hogy nem
              vagyunk jó magyarok. Kérdezem, nincs-e igazuk ellenségeinknek, ha
              közöttünk éppen úgy megvannak a hibák? Hiszen nekünk fokozottabban
              kell egymást szeretnünk és egymáson segítenünk, mikor állandóan
              közöttünk van az Úr Jézus és annyiszor - van módunkban Őt
              magunkhoz venni.
            </p>
            <p className={styles.torzs}>
              Lányok, magyar testvérek is vagyunk. Egy haza gyermekei. Egyfajta
              az örömünk, a bánatunk és mindannyiónkra közös ellenség
              leselkedik. Valaki most vállat vont közületek, mintha azt
              kérdezné, mi bajunk van nekünk a közös ellenséggel? Lányok, Erdély
              azért veszett el, mert a magyarok nem gondoltak a közös
              ellenségre. Ahelyett, hogy összefogtak volna, pereskedtek,
              gyűlölködtek, idegeneknek juttatták a pénzüket és a földjüket. Ne
              feledjétek azt se, hogy az oláhok Békéscsabát, mások a Dunántúl
              szívéig akarnak eljutni, s akkor majd mi is meg fogjuk tudni, hogy
              mi az elnyomottság, a gyötrelmes, keserű idegen járom. Várjunk
              egész addig? Úgy-e nem.
            </p>
            <p className={styles.torzs}>
              Még egyet, valamit nagyon szerettek ti mindannyian. Sárika úgy
              látszik, már tudja! Mi az Sárika? Okosan mondtad, a földet
              szeretitek ti egyformán. Hiszen nem arra törekszik
              mindegyikőtöknek az édesapja, hogy 3-4 hold földet vegyen legalább
              öregségére? Ha iparos az édesapátok, a testvére még földműves és a
              nagyapátok, dédapátok mind a földet művelte véres verejtékével.
              Miféle nagy különbség van tehát a svájci sapkás Ilonka és a kendős
              Erzsike közt, mikor Ilonkának a nagyapja művelte a földet,
              Erzsikének meg most az édesapja és a bátyjai szántanak és vetnek?
              No és Erzsikének 3 bátyja van, egyik közülük asztalosnak ment,
              kettő megmaradt földművesnek. Kérdem ezek után tőletek, lányok,
              hát tényleg van okotok arra, hogy egymást lenézzétek, a kendősök
              és a svájci sapkások külön tömörüljenek? Feleljetek rá igaz
              szívetek szerint! Jól van! Nincs bizony erre okotok!
            </p>
            <p className={styles.torzs}>
              Azután, ha a svájci sapkás Kati szőnyeget is sző, nem kell-e éppen
              úgy értenie a főzéshez, mint a kendős Erzsikének? Édesanyátok
              megköveteli, hogy mindegyikőtök minden munkát elvégezzen és
              szégyellje is magát, aki nem teszi! Lányok, a munkátokban is
              egyformák vagytok, egy cél felé törekedtek, mindannyian, derék
              feleségek, és jó édesanyák akartok lenni. Hát mire vártok még? Azt
              akarjátok, hogy valami borzalmas, elviselhetetlen szerencsétlenség
              kovácsoljon össze benneteket? Kevesen emlékeztek a kommunizmusra,
              talán még akkor nem is éltetek! Nos tehát van itt néhány lány, aki
              elemista volt akkor s együtt szenvedték el a kommunizmus borzasztó
              rémségeit. Ezek a lányok azóta összetartanak, és nagyon szeretik
              egymást. Ti is a kommunizmusra vártok?
            </p>
            <p className={styles.torzs}>
              Lányok, most fogjatok össze - hogy is van a Jeligében?
              "testvérkezet szorít a kéz"! Hát szorítsa ez a magyar kéz a
              másikat erősen. Ha pénze van és földje, ne az idegent segítse,
              hanem a magyarokat!
            </p>
            <p className={styles.torzs}>
              Lányok, fogadjátok ezt meg, és most álljatok, fel szépen,
              szorítsátok meg egymás kezét és énekeljük el közösen a jeligét!
            </p>
            <p className={styles.torzs}></p>
            <p className={styles.alcim1}>A főzésről</p>
            <p className={styles.torzs}>
              Kedves, Lányok! Ma a főzésről fogunk beszélgetni. De mit látok!?
              Csalódott arcokat, mintha reájuk volna írva a kérdés "Főzés? miért
              nem játszunk inkább, énekelünk, vagy táncolunk Főzés? Minek nekünk
              az, ráérünk még arra, mikor öregedő asszonyok leszünk."
            </p>
            <p className={styles.torzs}>
              Nos, hát kedves lányaim, éppen ezért fogunk a főzésről
              beszélgetni, hogy meglássuk a bajokat, amelyek ebből a téves
              hiedelemből származnak. Ki magyarázná meg, hogy miért
              gyökeresedett meg nálunk és a környéken ez a szokás?
            </p>
            <p className={styles.torzs}>
              Az öregeknek nehezükre esik a külső munka. A fiatalok könnyebben
              dolgoznak a kertben, szántóföldön, szőlőben, erős a lábuk, hajlós
              a derekuk. Az öregek inkább elszöszmötölnek a konyhában, megfőzik
              az ebédet, elintézik a belső, házi munkát.
            </p>
            <p className={styles.torzs}>
              Jól is volna ez így, kedves leányaim. De ha ti valakitől egy ruhát
              kaptok ajándékba, amelynek hiányzik az aljától vagy a derekából
              egy rész, mit mondanátok rá? Úgy-e azt, hogy ezt nem használhatom,
              hiszen ez még nincs készen ebből hiányzik valami. Látjátok, éppen
              ilyen hasznavehetetlen az olyan nagy leány, az olyan
              fiatalasszony, aki tökéletlen a főzésben, mert annak a
              háziasszonyi tudása nem kész, nem egész.
            </p>
            <p className={styles.torzs}>
              Legtöbbször ez a hiány a családi béke megrontója. A háztartást
              vezető anyós, vagy édesanya megbetegszik, meghal. A gyakorlatlan,
              tudatlan fiatalasszony pedig nem képes az idejét beosztani. Az
              ebéd nem készül el harangszóra, a férj és a gyermekek hiába várják
              azt. A csalódásuk is nagy lesz, mert már az első kanálmerítésnél
              megérzik, hogy nem gyakorlott kezek főzték. A főzelék kozmás, vagy
              levesnek is beillenék, a hús sótlan, kemény, leégett, a főt tészta
              ragacsos, az élesztős tészta meg keletlen. Ha a férj emiatt szólni
              merészel, lesz akkor hadd-elhadd! - "Ha semmi sem jó, itt hagyom
              kendet, megyek haza édesanyámhoz", - nyelvet a fiatalasszony -
              "Isten hírével" így a férj. A menyecske nagy dérrel-dúrral
              csomagol, elviharzik a háztól, a férj is megy búfelejtőre a
              kocsmába. Hány elválás, hány tönkrement élet kezdődik így! Úgy-e a
              mi falunkban is tudunk ilyet? Van, ahol a fehérnemű foltozáson
              kezdődött az első összeveszés. Úgy-e Tera?
            </p>
            <p className={styles.torzs}>
              - Azt azonban nagyon jól tette a Teca, hogy nem nevezte meg
              családot. Megdicsérem érte. Ha valakiről jót nem mondhatunk, a
              rosszat hallgassuk el róla.
            </p>
            <p className={styles.torzs}>
              Ha már ilyen bizalmasan beszélgetünk együtt, elárulok nektek egy
              titkot: a nők a férfiakat nem ám a szívükön, hanem inkább a
              gyomrukon át hódítják meg és bilincselik le magukhoz. - Amint az
              arcotokon észreveszem, ezt már hallottátok is. De hogyan kell ezt
              érteni, magyarázd meg Maris. - "Hogy ahol jól sütnek, főznek, oda
              szívesen járnak a legények!"
            </p>
            <p className={styles.torzs}>
              Jól megmondtad, kislányom. Én még hozzáfűzök egyet-mást. -
              Képzeljünk el egy éhes embert. A csecsemő sír, a gyermek kér,
              rimánkodik, a felnőtt követel s ha nem kap, lop, rabolt sőt
              gyilkolni is képes egy falat kenyérért. A gyomor és nyomor nagy úr
              - szokták mondani.
            </p>
            <p className={styles.torzs}>
              Ellenléte ennek a jóllakott ember. A csecsemő megkapván a
              legédesebb anyai táplálékot, édesen szunnyad a bölcsőben. A
              jóllakott gyermek arca pirospozsgás, mosolygós, a felnőtt ember
              pedig derűs arccal, nyugodtan nézi a világ folyását. Egy kedvére
              való ebéd, vagy vacsora után pipára gyújtva, olyan jó hangulatban
              van, hogy amint mondani szokás, nyulat lehetne vele fogatni.
            </p>
            <p className={styles.torzs}>
              Lányaim! Akartok békés, derült, boldog otthont. Egészséges
              családot? Tanuljatok meg jól főzni!
            </p>
            <p className={styles.torzs}>
              Most pedig elmondok egy mesét. Egyszer a kéz láb és a többi tagok
              elhatározták, hogy ők bizony nem táplálják a lusta gyomrot. Meg is
              tették. De mi történt? Kis idő mulya lankadozni, bágyadozni
              kezdett mindegyikük, s rájöttek, hogy erejük elvész, elhalnak, ha
              a gyomornak nem adják meg a magáét. - Mit tanulunk ebből? - "Azt,
              hogy a háziasszony ne sajnálja az ételt a családtól, ne legyen
              lusta főzni." Igazad van, Julis. A meséből megértettétek, hogy
              táplálkoznunk kell. Vajon miért? Ki emlékszik rá, hogy mit
              tanultunk az egészségtanból? - Az ember minden életműködése:
              érzés, gondolkozás, munka mind a szervezet anyagveszteségével jár,
              amelyet gátolnia kell, ha élni akar. Olyan anyagokkal táplálkozunk
              tehát, amelyek az elhasznált anyagok pótlására alkalmasak.
            </p>
            <p className={styles.torzs}>
              Táplálékainkat a természet három országából: állat, növény és
              ásványok világából vesszük. Csont, szövet és izomképző: a hús,
              tej, tojás. Meleg fejlesztő: a zsírok, tésztaneműk, cukor, méz,
              kismennyiségben az alkohol. Ásványi részt találunk a konyhasón
              kívül a különböző sókat tartalmazó növényekben és gyümölcsökben.
              Ez utóbbiaknak igen fontos alkotórésze az úgynevezett vitaminok
              sokfélesége, melyek szervezetünknek egészségét, frissességét
              biztosítják.
            </p>
            <p className={styles.torzs}>
              A szegedi zöldpaprikának a vitamintartalma világhírű. Az almában,
              szőlőben, érett paradicsomban nagy tápláló érték rejlik. A
              főzetékek között első helyen áll a spenót, sóska és sárgarépa.
            </p>
            <p className={styles.torzs}>
              Miért nevetsz Maris? - "Édesanyám azt szokta mondani ki az urát
              nem szereti, sárgarépát főzzön neki. Nem szokták szeretni a
              férfiak. A spenótot sem. Édesapám azt mondja, igen hamar megéhül
              utána. Nem való munkásembernek, mert nem tart a gyomorban."
            </p>
            <p className={styles.torzs}>
              Igaza van édesapádnak, Maris. Az ilyen egészséges, de könnyű
              ételekhez kis pótlékot kell készíteni. Spenót mellé jó a burgonya,
              ahogy ti nevezitek krumplisterc. Sóskához lehet lisztstercet,
              magyarul lisztmorzsókát adni. Ha meg sárgarépát főzünk, húslevest
              készítsünk. Ebből a marhahús igen jó feltétnek és ha még
              valamilyen buktát, pogácsát, gyúrt tésztát készít édesanyátok,
              marad vacsorára is és jóllakhatik édesapád.
            </p>
            <p className={styles.torzs}>
              Sokan azt hiszik az a jó konyha, ahol mindig húst, vagy sült
              tésztát esznek. Egyik sem jó, mert egyoldalú. Az egyféle ételből a
              szervezet nem kap utánpótlást. A sok hús különben is köszvényt,
              reumát, érelmeszesedést okoz. Az sem jó beosztás: húsnap,
              tésztanap. Keverve tegyen naponta mindenből. Erre jók az
              úgynevezett egy tál ételek, mint a szerb gulyás vagy lecsó és
              töltött káposzta, töltött paprika stb.
            </p>
            <p className={styles.torzs}>
              De nem elég, ha van mit főzni. A tisztaság is fontos. Legyen
              tiszta a konyha, a konyhaedények és legyen tiszta az, aki főz és
              annak öltözete. Volt rá esett, hogy mikor beléptem, a gazdaasszony
              vizes kezét kötényébe törölte, később pedig kötényét zsebkendő
              helyett használta. Pelenkát törlőruhának, alsó fehérneműt
              túrószacskónak felhasználni undorító és az egészségre veszedelmes
              dolog. Hány hosszas betegség, halál is származott már abból, hogy
              a gazdaasszony a főzésnél nem törődött a tisztasággal. Ne is
              akadjon a mai világban olyan, mint az egyszeri asszony, aki így
              tűnődött: "Ejnye, ejnye, tegnapelőtt kast tapasztottam, tegnap
              kenyeret dagasztottam, mégis piszkos a kezem!" Ne feledjétek, a
              tisztaság fél élet!
            </p>
            <p className={styles.torzs}>
              De térjünk vissza a növényi ételek tápértékére. Úgy-e Erzsikém,
              láttál már nehezen totyogó, karikalábú, úgynevezett angolkóros
              gyermeket? Mi ennek az oka? Kevés a csontjaiban a mésztartalom.
              Ezt pótolni kellene helyes táplálékkal. Lehetőleg naponta áttört
              babot, borsót, lencsét kell vele etetni, mert ezek az ételek
              bővelkednek a csontoknak keménységet adó mészsókban.
              Vérszegényeknek ajánlják a sok vasat tartalmazó almát, sárgarépát,
              spenótot, sóskát.
            </p>
            <p className={styles.torzs}>
              Látjátok, télen mikor nagy a hideg, a testünk melegfejlesztő
              ételeket kíván. Azért ízlik úgy télen a jó szalonna és zsíros
              húsféle. Tavasszal már nem kell a testünknek annyi meleget
              fejleszteni, mert az áldott napsugár megteszi helyettünk. Sőt néha
              már sok is belőle. Jól esik a hűsítő fejes saláta, a savanyú
              sóska, a zöld főzelékek, akár hús nélkül is.
            </p>
            <p className={styles.torzs}>
              "Édesanyám nem tudja megenni a babot, megbetegszik tőle, miért van
              az, tessék mondani " - "Mert gyenge a gyomra kislányom, nem elég
              erősek az emésztőszervei. Az ilyeneknek, kis gyermekeknek,
              öregeknek könnyű ételt kell adni. Aki pedig beteg, annak különös
              vigyázattal, gonddal készítsük el az ételét, pontosan az orvos
              utasításai szerint. Eszembe jut egy régi történet: A falu kovácsa
              panaszkodott az orvosnak, hogy bágyadt, erőtlen, nincs kedve
              semmihez. Az orvos azt tanácsolta neki, hogy egyék, igyék, amit
              szeret. Pár nap mulya hálálkodva jött elé a kovács. "Mitől
              gyógyult meg?" kérdi tőle a doktor. Töltött káposztától," mondta a
              kovács boldogan. A doktor rögtön beírta a kis könyvébe: "gyengeség
              ellen töltött káposzta," Egy idő mulya a szabóhoz hívták a
              doktort. Nincs étvágyam, alig van jártányi erőm, panaszkodott a
              cingár emberke. Egyék csak töltött káposztát, amennyit bír,
              javasolta a doktor. Másnap éjjel hívják az orvost, mert nagyon
              rosszul van a szabó. Sietett is. De későn érkezett, a szabó
              felesége nagy sírással panaszolta, hogy hiába főzött az urának jó
              szalonnás töltött káposztát, nem használt neki. A doktor megint
              elővette jegyzőkönyvét és beírta: "töltött káposzta: kovácsnak
              egészség, szabónak halál." - Na de régen volt. Ma már az orvosok
              nagyon jól tudják, hogy kinek mit lehet rendelni. Azért ebből
              megtanuljuk, hogy a szabadban, erős testi munkával foglalkozó
              ember gyomra megemészti még a vasszöget is és akkor gyengül el, ha
              nem kap erős, tartalmas ételeket. Míg a zárt helyen, műhelyekben,
              irodában, ülő munkával foglalkozó embernek nem vall a nehezen
              emészthető étel.
            </p>
            <p className={styles.torzs}>
              Hanem most már be kell fejeznünk, mert az idő eltelt. Jövő
              vasárnap, ha hoztok papírt és ceruzát, majd lediktálok nektek
              egy-egy jó étel- és tészta-leírást, amelyért, ha pontosan úgy
              csináljátok, ahogy elmondtam, még öregasszony korotokban is
              hálával fogtok emlegetni.
            </p>
            <p className={styles.torzs}>
              A jó Isten sok minden jót teremtett az emberek számára, csak
              dolgozni kell vele és fel kell használni. Köszönjük meg az ő
              jóságát, ne hagyjuk el soha a közösen mondott asztali áldást, az
              evés előtt és után mondott imádságot, a fölöslegből pedig
              juttassunk a szegényeknek, hogy a boldog földi élet után az örök
              boldogság kapuja is megnyíljék előttünk.
            </p>
            <p className={styles.torzs}></p>
            <p className={styles.alcim1}>Mintatanítás a szerelemről.</p>
            <p className={styles.torzs}>
              Szörnyű zajongás volt az orgonabokorban. Az volt a baj, hogy az
              öreg gyökér mérges volt. "Itt kell ülnöm, és dolgoznom az egész
              családért - morogta - nekem kell a leveleket és virágokat
              táplálnom és meg is kapaszkodnom, hogy a szél el ne vigye az egész
              bokrot és hűséges szolgálatomért semmi hála! Meg sem látnak, észre
              sem vesznek!" - "Kapaszkodj jót a földbe, öreg gyökér" - kiabáltak
              az ágak - "szél jön, talán még-vihar is!" - "Adj nekünk eleséget,
              öreg gyökér" - suttogták a levelek még sokáig tart, míg az egész
              család kinő!" A virágok pedig így énekeltek:
            </p>
            <p className={styles.torzs}>
              "Küldj egy néhány víz-cseppet, hogy forróságunk enyhítsed.
            </p>
            <p className={styles.torzs}>
              {" "}
              Öreg gyökér, légy jó hozzánk, oly borzasztó a forróság!"{" "}
            </p>
            <p className={styles.torzs}>
              {" "}
              "Hát nem megmondtam" - morogta a gyökér - "rajtam nyugszik minden!
              Nem kapaszkodom többé a földbe!" - "Hisz mi sem lopjuk a napot!" -
              ordították az ágak - "épp annyit dolgozunk, mint te!" -
              "Hogy-hogy?" - kérdte a gyökér. "Egész nap azon fáradozunk, hogy a
              leveleket a napra hozzuk; már egészen belegörbültünk a munkába. A
              levelek a naplopók, nem mi!" - Ekkor a levelekhez fordult a
              gyökér: "Mennyi ideig szolgáljak még nektek lusta levelek?
              Felmondom a szolgálatot lássátok, hogyan éltek meg egyedül!" -
              "Hát ti azt hiszitek, hogy meg lehet enni az ételt így nyersen,
              ahogy a gyökér a földből az ágakon keresztül hozzánk küldi?
              Sütünk-főzünk egész nap a meleg napsugárban!" - suttogták a
              levelek. "De ha okvetlenül veszekedni akartok, szóljatok a
              virágoknak, azok igazán nem csinálnak semmit?" Ekkor a szegény
              virágokra törtek a lázadók. De a virágok nem zavartatták magukat,
              csak csendesen tovább énekeltek, míg a többiek megegyeztek abban,
              hogy nem dolgoznak tovább a lusta virágokért.
            </p>
            <p className={styles.torzs}>
              Elmúlt a nyár. A leveleknek nem volt téli ruhájuk s ezen, annyira
              mérgelődtek, hogy sárgaságot kaptak és elpusztultak. A virágok már
              régen elhervadtak és azok a furcsa, minden szellőre megrezdülő
              valamik, amik a helyükön maradtak, is rég leestek már. "Hu, há" -
              nyöszörögték az ágak - "de jó neked öreg gyökér, ott lenn a meleg
              földben!" De semmi feleletet nem kaptak mert a gyökérnek volt min
              gondolkozni. Mellette egy kis furcsa valami volt, ami őt nagyon
              érdekelte. "Kihez van szerencsém?" - kérdezte, de feletetet nem
              kapott és ezen annyira felbőszült, hogy egész télen egy szót sem
              szólt.{" "}
            </p>
            <p className={styles.torzs}>
              Tavasz lett és a kis ismeretlen kezdett dagadni, míg egy szép
              napon kis zöld hajtás búit ki belőle. "Adjon Isten!" - mondta a
              gyökér - "talán most megfelelsz kérdésemre, hogy kihez van
              szerencsém?" - "Én a virágok álma vagyok" - mondta az ismeretlen.
              A gyökár kíváncsi volt és tovább kérdezősködött. A kis újonc
              folytatta. "Tavaly szidtátok a virágokat, hogy naplopók - s íme én
              is virágból lettem. Te is virágból lettél, öreg gyökér!
              Mindenkinek megvan a maga munkája, hivatása. Te lent dolgozol a
              földben, mi fönt a napvilágon, de mindenkinek van valami
              kötelessége. Most talán belátod, milyen igazságtalan voltál múlt
              nyáron!" - A gyökér elgondolkozott a hallottakon. Mikor végre
              magához tért és felfogta ezt a nagy csodát, szokatlanul udvarias
              hangon megkérdezte az ágakat, nem nőtt-e mellette egy szép kis
              bokor? "Hogyne, igen!" - felelték az ágak, - "de fogj meg jól
              bennünket, mert elfúj a szél. - "Csak maradjatok nyugodtan," -
              mondta a gyökér - "megfoglak titeket. Azt akartam veletek közölni,
              hogy ez a helyes kis orgonabokor az én gyermekem." - "Ha, ha!" -
              nevettek az ágak - "azt hiszed, el hisszük, hogy ez a zsenge,
              gyönyörű kis bokor egy ilyen mogorva, fekete gyökérnek a
              gyermeke?" - "És mégis az én fiam!" - mondta büszkén a gyökér. És
              elmesélte, hogy mit hallott a kis magtól és az ágak tovább mondták
              a leveleknek. És akkor megértették végre, hogy ők egy nagy
              családot alkotnak, ahol mindenkinek fontos munkája van. Ebben
              megnyugodtak. Az öreg gyökér tovább dolgozott és szívta a földből
              a táplálékot, a levelek ezer apró kis konyhában sütöttek-főztek az
              ágak pedig ég felé törtek, hogy minél több napsugarat fogjanak
              fel. A virágok álmodoztak és énekeltek és érlelték magukban az új,
              jövendő életet.
            </p>
            <p className={styles.torzs}>
              Az életben vannak komoly és szent dolgok kedves lányok, melyekhez
              csak áhítattal és az Isten gondolatainak kijáró tisztelettel
              közeledhetünk. Figyeljetek rám lányok és gondoljatok az öreg
              orgonabokorra. Míg a fiatal hajtás nem fakadt körülötte, nem
              látott a dolgok mélyére, hogy mindennel célja van az Istennek s a
              körülötte élő szép világ ezt szolgálja. Látszólag a virág
              haszontalan, mégis belőle fakad az új élet, mert a virág Isten
              tervei szerint az eljövendő élet csíráját hordja magában. Milyen
              szép ez lányok s mégis hányan közelednek feléje nyálkás, csúf
              gondolatokkal, durva megjegyzésekkel és léha nevetéssel.
            </p>
            <p className={styles.torzs}>
              Ha most komolyan a szemembe tudtok nézni, mert arra gondoltok,
              hogy az Isten elgondolása szent és magasröptű, beszélgethetünk az
              élet céljáról és értelméről. Az élet célját az Úristen bölcs
              előrelátásával szép és nemes érzelmekkel érteti meg velünk s az Ő
              gondolata, hogy "szaporodjatok s töltsétek be a földet."
            </p>
            <p className={styles.torzs}>
              Isten ajándéka a szép, tiszta szerelem s célja, hogy két fiatal
              szív, lány és legény szeretetben egyek legyenek s a szeretetük
              olyan legyen, hogy érte vállaljanak minden nehézséget és
              küzdelmet. A szeretet viszi a fiatalokat egymás felé, megszépíti
              az életüket, nagy felbuzdulások támadnak a lelkükben, azelőtt
              sohasem tapasztalt szárnyaló érzések dobognak szívük minden
              ütemében, és akik igazán szeretik egymást, tisztán, Isten terveit
              megvárva, azok együtt el is jutnak magáig az Úristenig.
            </p>
            <p className={styles.torzs}>
              Mert nektek tudnotok kell, lányok, hogy minden szerelem, minden
              lángoló tiszta szeretet az Úristenből való. Aki maga a
              legtökéletesebb Szeretet. S azért ezzel az érzéssel Isten
              kitünteti a fiatalokat s önmagához emeli őket, mert a szerelem
              által a fiatalok Isten munkatársaivá válnak. Ha erre gondolunk,
              milyen más szemmel nézzük az élet értelmét s másképpen fogjuk fel
              a szerelmet. Ezt a tiszta, nemes érzést csak az érintetlen ifjúság
              kapja ajándékba Istentől, mert ez kincs, vagyon és nagy érték,
              mely nem való a sertéseknek éppúgy, mint a drágagyöngy.{" "}
            </p>
            <p className={styles.torzs}>
              Ha Isten szemével nézitek a szerelmet, megbecsülitek nagyon és
              átélitek mit jelent ez a szép gondolat - Testem a Szentlélek
              temploma -. A templomot nemcsak virágokkal díszítik, hanem
              gondosan óvják minden leheletnyi portól, hiszen benne az Isten
              lakik. Így lakik ő minden tiszta fiatal lány testében, nemcsak a
              lelkében.{" "}
            </p>
            <p className={styles.torzs}>
              Látom szemetekben a kérdést: "De Vezetőméni, mibennünk sokféle
              érzés és indulat kavarog, egyszer sírni, egyszer meg nevetni
              szeretnénk s olyan furcsa és kimondhatatlan érzések vannak
              bennünk, amikor a legényekkel találkozunk, hogy szinte bűnösnek
              érezzük magunkat s nem találjuk meg tisztán az Úristen
              gondolatát."{" "}
            </p>
            <p className={styles.torzs}>
              Nézzétek, lányok, nekünk a Lánykörben az a célunk, hogy titeket
              műveljünk lelkileg és nemcsak tudást és szórakozási alkalmat
              adjunk néktek, hanem megtanítsunk benneteket arra, hogyan kell az
              igazi katolikus leánynak önmaga testét és lelkét nézni. Lányok,
              bennetek mindig a lélek kerekedjék fölül s a szépre és jóra
              szomjas lélek jópajtása legyen a testnek, amelyikben kifejezi
              magát s amely Isten gondolata volt szintén, mert hajlékot épített
              a testben a léleknek. Az érzékiség erő, melyet nem kiirtani kell,
              hanem be kell állítani nyugodtan és komolyan szép, nagy célok
              szolgálatába. Úgy érzitek, hogy zúg a fejetek, mélabús hangulat
              akar úrrá lenni rajtatok s utána rögtön tettvágytól feszül a
              karotok, nosza rajta fogjátok meg a seprű nyelét, takarítsatok,
              súroljátok fel a konyhát, mázoljátok be a padlást, énekeljetek,
              táncoljatok: csak egyet kerüljetek: a bujkálást akár egyedül, akár
              mással. Szeressétek a világosságot s ne féljetek saját
              testetektől, hanem értsétek meg, mi miért van ha ezt tudjátok,
              nyugodtak vagytok s nem gondoltok mindenféle homályos és
              titokzatos dolgokra. Mert Isten teremtő terve titok a házasságban,
              mégis végtelenül egyszerű, nem kell rajta semmi zegzugos pókhálós
              sarkot keresni. S nekünk meg mindent úgy kell venni, ahogyan van,
              se hozzátoldani, se elvenni belőle nem kelt semmit. A tisztáknak
              minden tiszta - mondta a lisieuxi kis Szent - s ha mi is meglátjuk
              a szerelemben Isten akaratát és tervét, megbecsüljük, nem aprózzuk
              el magunkat, hanem megvárjuk Isten határozatát, aki minden férjhez
              menni akaró lánynak elküldi a párját, boldogok leszünk! Mert a
              boldogság bennünk van, s ha méltatlanul meghurcoljuk legszentebb
              érzéseinket, eljátsszuk a boldogságunkat, mely csupán a tiszta
              lelkiismeret s szeplőtelen élet jutalma. - Nektek már elmondhatom,
              hogy az Úristen minden ember lelkébe két vágyat ültetett. Egyik a
              kiegészülés vágya, másik a megsokszorozódásé. A házasságban a férj
              s feleség kiegészül egymással, s megsokszorozódnak a gyermekekben.
              Ezt a két vágyat szentségi magaslatra emelte Isten a házasságban.
              A szentségi házasság az igazi, soha el nem múló szeretetről
              beszél, mely a lelkek egymásra találásával jött létre s ezt semmi
              hűtlenség, unalom szét nem tépheti. Viszont ha akár ez, akár a
              házasság másik értelme: a gyermekekben való megsokszorozódás,
              kimarad a szeretetből, üres, értelmetlen és csúfság az emberek
              élete, mert terméketlenségükkel az Isten legszebb gondolatát
              csúfolják meg. - A kiegészülés és megsokszorozódás megtörténhetik
              lelki értelemben, is az Úristen felé azok életében, akik minden
              tehetségükkel és egész életükkel Őt akarják szolgálni.
            </p>
            <p className={styles.torzs}>
              Mi tartozzunk akár egyik, akár másik csoporthoz, csak üres,
              kedvetlen, gyümölcs nélküli fügefák ne legyünk, lányok!{" "}
            </p>
            <p className={styles.torzs}>
              Szépen éljétek fiatalságotok legszebb napjait a férjhez menésig!
              Most van a gyűjtés ideje s most dől e1, hogy boldogok lesztek,
              vagy boldogtalanok egész életetekben nemcsak ti, hanem az uratok,
              s leendő családotok! Egyik újságban olvastam egyszer, hogy a
              serdülő fiatalok egész fiatal életükkel a jövendő bölcsőt
              készítgetik. Vannak, akik tüskét, szúrós szalmát, durva tollakat
              gyűjtenek az eljövendő bölcsőhöz, s vannak olyanok, akik hófehér
              tollakkal, lágy pihékkel bélelik azt ki. Az eljövendő új élet vagy
              a tüskét, vagy a puha pihét fogja érezni. Mindez rajtatok áll
              lányok. Nagy a felelősségetek s nektek nem szabad alkudozni, hogy
              ez még nem bűn, ez már bűn. Minden bűn, ami az Isten tervét
              elhomályosítja és bemocskolja. A tiszta lánylélek lelkiismerete
              olyan, mint egy finom ezüstcsengő, a legkisebb levegőrezdülésre
              csilingel s azt a finom, érzékeny hangot ne engedjétek
              elhallgatni, hanem figyeljétek benne a jó Tanács Anyjának szavát,
              aki saját élete példájával mutatja a tiszta lányság értékét és
              szépségét! Imádkozzatok és vigyázzatok, hogy kísértésbe ne
              essetek! Akinek a lelke tiszta, a teste ép és egészséges, nevetve
              néz az eljövendő nap elé s férjének szíve bátran ráhagyatkozik,
              mert mint a Bölcsesség könyvéből olvassuk: "a kedvesség csal, a
              szépség múlandó, de az istenfélő asszony dicséretet érdemel".
            </p>
            <p className={styles.torzs}></p>
            <p className={styles.alcim1}>Mariska férjhez ment.</p>
            <p className={styles.torzs}>
              Tudjátok-e lányok, hogy hol jártam csütörtökön? Látom, Horváth
              Julis szeretné megmondani, persze ő tudja, mert találkozott velem,
              mikor hazajöttem. No mondd meg a többinek. Úgy bizony,
              meglátogattam Szabó Mariskát, azaz most már régen úgy kellene
              neveznem, hogy Kispál Mártonné, de még most is nehezen jár erre a
              névre a nyelvem. - Jól van már lányok, ne zajongjatok annyira,
              elmondom úgyis, mit láttam, tapasztaltam a Mariskánál.
            </p>
            <p className={styles.torzs}>
              Éppen délfelé járt az idő, amikor kiérkeztem a tanyára. Amint az
              udvarra léptem, már megláttam, hogy bizony nem változott meg a mi
              Marisunk. Olyan rendes asszony lett belőle, amilyen rendes lány
              volt. Emlékeztek még rá, milyen jó háziasszonya volt az
              egyesületnek? Úgy-e mindig rend, sőt kényelem volt itt, idejében
              be volt fűtve, a padok elkészítve . ., no de nem erről akarok
              beszélni. Hát azon az udvaron is olyan rend volt. Ház előtt a kis
              kert, gaz nélkül, virágzóan, az udvar tisztára söpörve, minden
              szépen a helyén. A nagy eperfa alatt pedig látok valami kis ketrec
              félét, négy oldala volt, teteje nélkül, látom mozog benne valami s
              boldog visongatásokat hallok. Erre már kíváncsi lettem s közelebb
              mentem, még mielőtt az ajtóhoz léptem volna. Hát látom, hogy
              körülbelül 1 éves kis gyerek játszik abban a ketrecben. A Mariska
              kis fia. Olyan boldogan játszadozott egy kis rongybabával, hogy
              csak! Nem tudtam mást tenni, elkezdtem vele játszadozni. Megörült
              úgy látszik a gyerek a társaságnak, mert nagyokat kacagott. Erre
              aztán az ajtóban egyszerre megjelent a Maris. No, képzelhetitek,
              hogy megörültünk egymásnak!
            </p>
            <p className={styles.torzs}>
              Azt mondta, el sem enged úgy, hogy ne vennék részt az ebédjükön,
              már úgy is minden pillanatban várja haza az urát. Be is mentünk
              mindjárt a konyhába, ott már meg volt terítve. Szépen, rendesen
              abrosszal terítve az asztal, mindegyik tányér mellett a kés,
              villa, kanál. Hamar oda tett Maris még egy terítéket s akkor már
              meg is érkezett az ura. Maris szinte repült eléje, megcsókolta,
              elvette a tarisznyát tőle, aztán jutottam csak hozzá, hogy kezet
              fogjak vele én is. Emlékeztek úgy-e Mártonra? Szép szál legény
              volt, de most mintha még szebb lenne. Talán az a boldogság teszi,
              ami csak úgy sugárzik róla.
            </p>
            <p className={styles.torzs}>
              Alig, hogy üdvözölt, az volt az első kérdése Marishoz: "Hát a
              gyerek?" és már ment is megint ki az udvarra. Közben megkérdeztem
              Marist, hogy van az, hogy ilyen ketrecfélében tartja a kis fiát.
              Azt mesélte, hogy olvasott erről valahol és az tetszett meg neki
              benne, hogy olyan nyugodtan ott lehet hagyni a gyereket. Nem
              csúszhat-mászhat el, mégis mozoghat, felállni is megtanul, ha a
              lécekbe megkapaszkodik és felhúzza magát, csak valami tiszta
              pokrócot kell alája tenni, nehogy a puszta földön legyen. Fel
              lehet az egészét állítani akár hol, a napon, ha hűvösebb van, ha
              pedig nagyon tűz a nap, az árnyékban, de még a szobában is, akkor
              is milyen jó, hogy nem mászhat el a gyerek minden asztal, ágy alá.
              Abban az újságban vagy könyvben, ahol olvasott róla, le is volt
              rajzolva, és aszerint Márton maga meg is csinálta. Mialatt ezt
              mesélte, a levest már ki is tálalta, az urának pedig vizet
              készített a mosdótálba, hogy kezet moshasson. - Mi az Julis, min
              csodálkozol? Hogy Márton megmosta a kezét? Hát persze, hogy
              megmosta, mindenkinek étkezés előtt kezet kell mosni, különösen,
              ha munkából jön, csak nem fog asztalhoz ülni piszkos kézzel! Azt
              már igazán nem tudom, hogy Márton azelőtt is meg tette-e, lehet,
              hogy csak Mariska tanította meg erre, de minden
            </p>
            <p className={styles.torzs}>
              esetre nem kellett rá kérni, látszott, hogy megszokta és úgy
              teszi, mint aki anélkül nem is tudna meglenni.
            </p>
            <p className={styles.torzs}>
              Ebéd alatt nem igen beszélgettünk a Marissal, hagytam őket
              beszélgetni, hiszen annyiféle megbeszélnivalója van egy
              házaspárnak, még akkor is, ha csak reggel váltak el, már az olyan
              házaspárnak, akik igazán boldog életet élnek és jól megértik
              egymást.
            </p>
            <p className={styles.torzs}>
              Márton, igaz, szűkszavúan felelgetett Maris kérdéseire, de hát a
              magyar gazda nem bőbeszédű. De azért szépen, türelmesen felelt és
              elmondta, hol kapálta a kukoricát, kivel találkozott reggel, mikor
              kiment, meg a többit, ami Marist érdekelte.
            </p>
            <p className={styles.torzs}>
              Mikor aztán vége lett az ebédnek, szépen imádkoztak, úgy mint az
              elején is, aztán a gazda rágyújtott a pipájára, vette megint a
              tarisznyáját s elballagott. Maris egy-kettő leszedte az asztalt,
              elmosogatott, rendbe rakta a konyhát, aztán kiültünk mind a ketten
              az eperfa alá. Csak halkan beszélgettünk, mert bizony a kisgyerek
              elaludt. - De nehogy azt gondoljátok, hogy Maris csak úgy üres
              kézzel üldögélt ott, De nem ám Mártonnak a holmiját javítgatta
              gyors kézzel. Éppen valami inget foltozott, amikor mégis
              felvetettem a nagy kérdést: "Boldog vagy-e Maris?". De hiszen nem
              is kellett megvárni a választ, ahogy rám emelte nagy kék szemét,
              már a tekintetén láttam, hogy nem is lehet más a válasz, mint az,
              amit mondott is: "Boldog vagyok." Hiszen nem is kellett volna
              megkérdezni tőle, úgyis láttam rajta, ahogy az urát fogadta, ahogy
              kitálalt neki, beszélt vele, s ahogy közbe-közbe végignézte az
              alvó kis fiát.
            </p>
            <p className={styles.torzs}>
              Aztán kezdett mesélni, hogy milyen áldott jó ember az ő ura, nem
              iszik, nem goromba, csak néha azért előfordul, hogy nem olyan
              jókedvű és az őt nagyon bántja, mert olyankor mindig azt hiszi,
              hogy Márton talári mégsem szereti öt már annyira. De
              megvigasztaltam, hogy az nem azt jelenti, talán fáradtabb, talán
              valami gondja van, amit nem akar a feleségének elárulni, nehogy őt
              is bántsa. Ilyenkor ne erőszakolja azt, hogy beszéljen, legyen
              hozzá kedves, járjon mindenben a kedvében, de a világért ne
              zaklassa. Majd elsimul a gond, vagy kipiheni magát, akkor
              visszajön a jó kedve és épen olyan kedves lesz, mint azelőtt,
              talán kedvesebb is, mert jóvá akarja tenni, ha talán megbántotta a
              feleségét. Ha pedig zaklatja őt olyankor, akkor a férfi is csak
              türelmetlen lesz, esetleg szó szót követ és könnyen veszekedés
              lesz belőle. Olyan szépen aludt ott mellettük a kisfiú, hogy
              megkérdeztem Marist, hogy mindig ilyen jó gyerek ez? Azt mondta,
              hogy igen. Soha nem volt síró gyerek. "Hát nem kellett ringatni,
              vagy a kocsiban tologatni?" - Kíváncsi voltam nagyon, mit felel
              erre Maris, mert hát sajnos, még nagyon sokan azt hiszik, hogy a
              gyerek e nélkül nem lehet meg, De Maris csodálkozva nézett rám,
              majdnem megsértődött. Dehogy tett ő olyat. Csaknem lökődi az ó
              fiát ide-oda, pihenjen az a szegény apró csemete, hiszen attól a
              lökdöséstől legfeljebb jobban sírhat, nemhogy az hallgattatja el.
              Meg is mondta ezt az egyik szomszéd asszonynak. Az eleinte nem
              akarta elhinni, de aztán Maris annyit magyarázott neki, míg végre
              mégis csak elhitte és úgy is tett, a végén még nagyon hálálkodott,
              hogy Maris ezt megmagyarázta neki.
            </p>
            <p className={styles.torzs}>
              Ilyenkor - mondta Maris - mindig alszik a kisfiú. Már előbb adok
              neki enni, hogy nyugodtan legyen. - Körülbelül két órát pihen,
              aztán megint virgoncan eljátszadozik. Kezd szépen járni, ha az
              édesanyja vezeti, az egész udvaron végig megy. Vasárnap délután az
              apja szórakozik vele.
            </p>
            <p className={styles.torzs}>
              De nekem indulnom kellett már. Még egyszer visszavezetett Maris a
              házba. Öröm volt belépni, csak úgy ragyogott minden a
              tisztaságtól. A tiszta szobába is bementünk, itt is nagyon rendes
              volt minden, csak a levegővel nem voltam megelégedve. Meg is
              mondtam Marisnak, hogy itt bizony többet kell szellőztetni.
              Szegény nagyon megijedt, hogy kifogásolni valót találtam nála és
              azt mondta, hogy ő szokott szellőztetni, de olyan bajos mindig
              kiszedni a sok virágot, azt pedig nem szereti, ha nincs ott virág,
              olyan szomorú akkor a szoba. Erre azt mondtam neki, hogy csináljon
              Márton deszkákból, meg lécekből egyszerű kis virágállványokat,
              azon tartsák a virágot ne az ablakok közt, akkor a virághoz is
              jobban hozzáfér, meg az ablakokat is ki lehet nyitni. Maris úgy
              megörült ennek az egyszerű megoldásnak, hogy majd a nyakamba
              ugrott s alighanem mostanra már meg is csinálta Márton az
              állványt.
            </p>
            <p className={styles.torzs}>
              Addigra a kis Marci is felébredt. Maris karjára vette. - Márton
              inge már szépen megfoltozva oda került a többi ruha közé, amely
              vasalásra várt - és így mind a ketten kikísértek. Sőt egy darabig
              el is jöttek, mert egyszer csak ott voltunk annál a
              kukoricaföldnél, ahol Márton kapált. Most aztán megértettem, miért
              nem akart Maris előbb visszafordulni, pedig váltig biztattam, hogy
              most már eltalálok én magam is. De ő csak azt hajtogatta, hogy nem
              lesz baja a háznak, megőrzi a Bundás is.
            </p>
            <p className={styles.torzs}>
              Innen aztán már megbízott abban, hogy hazatalálok, ők ketten meg
              ott maradtak Mártonnál s a gazda bizony nem látszott olyannak
              mintha haragudnék, hogy megzavarták a munkában.
            </p>
            <p className={styles.torzs}>
              No, most már mindent elmondtam, amit Marisnál láttam. Látogassátok
              meg ti is. Én majd csak akkor megyek ki megint, ha ismét
              keresztelő lesz, mert arra már meghívott a Maris.
            </p>
            <p className={styles.torzs}></p>
            <p className={styles.torzs}></p>
            <a id="35"></a>
            <p className={`${styles.cim2} ${styles.cim2BottomMargin}`}>
              A mese szerepe a Lánykörben
            </p>
            <p className={styles.torzs}></p>
            <p className={styles.torzs}>
              A Lánykörök vezetői gyakran idegenkednek a meséléstől. Tán azt
              hiszik, hogy a lányok nem hallgatják szívesen a mesét? Mást
              bizonyít a múlt, ha igaz volna ez, nem gazdagítaná irodalmunkat
              népmese-kincsünk.
            </p>
            <p className={styles.torzs}>
              A magyar lány lelke tele van színnel, hanggal, virággal. Csendes
              óráiban, melyekből sajnos annyiszor kiűzik a városból tolakodó hiú
              szórakozások - édes egyedüllétben titkot sző lelke rejtekén. Nem
              egy van, aki nyitott szemmel színes történeteket vetít este a
              fehér szoba mennyezetére. De ezt nem meri bevallani. Ha azonban a
              falu köztiszteletben álló tanítónője megtöri a jeget és
              megmutatja, hogy a mese nem lekicsinyelni való felszabadul sok
              lány képzelete és teljesebben bontakozik ki lelke, mert az ész és
              a kéz munkája mellett kellő hely jut az érzelemnek és képzeletnek.
              Sokan csodálkozni is fognak, hogy mesélés közben mennyivel többet
              megismernek a falusi leány lelkiségéből.
            </p>
            <p className={styles.torzs}>
              Sokan nem értenek a meséléshez, nem mernek belefogni s bár látják
              havonta a mesét a Tarisznyában, nem tudnak mit kezdeni vele. Semmi
              esetre se tegyék azt, hogy a közölt meséket felolvassák. Gondolják
              át azokat gyűlés előtt, éljék át és adják elő élénken, szabadon.
              Eleinte talán nehezen fog menni, de később belejönnek. Mindinkább
              el fognak jutni oda, hogy a leányoknak maguknak is kedvük
              kerekedik a mesélésre. Jó alkalom ennek megindítására a leányköri
              munkadélután, amelynek élénkítésére közösen mesélnek. Egyik leány
              elkezdi, a másik folytatja és versengnek, hogy ki mond
              érdekesebbet.
            </p>
            <p className={styles.torzs}>
              A Lánykör keretében mesélő versenyt is lehet rendezni. A lányoknak
              1-2 héttel előre megmondjuk, hogy gondoljanak ki meghatározott
              célú meséket, p1. kis gyermekeknek, iskolásnak, lányköri tagoknak
              tanító célzattal stb. A kitűzött napon minden résztvevő elmondja a
              maga meséjét, melynek megbírálására bizottságot is kérhetünk fel.
              Akkor derül csak ki igazán, mennyi képzelet, mennyi tehetség van a
              legegyszerűbb lányok között is. Mily őrömet okozna a Tulipántos
              Láda szerkesztőinek és olvasóinak, ha néha egy-egy ügyes lányköri
              mese jelenhetnék meg a lap hasábjain!
            </p>
            <p className={styles.torzs}>
              Később is, ha majd bölcső ring a szobában s tátott szájjal hallgat
              a volt lányköri tag csemetéje, milyen jó lesz előkeresni az
              emlékek közül egyet-egyet s elmondani az együtt hallgatott
              meséket.
            </p>
            <p className={styles.torzs}>
              Arra azonban vigyázzunk, hogy ne szokják meg lányaink az ijesztő,
              vad meséket. A Tarisznya jó példát mutat az értékes mesetípusra.
            </p>
            <p className={styles.torzs}>
              Hogyha megindul a mesefolyam, előkerülnek a padlásról a lányok
              könyvei is. Ezek nagyvésze iskolás korban beszerzett mesekönyv.
              Állítsuk vissza megbecsülésüket, a filléres "Friss újság"
              szörnyűségek helyett: meg fogjuk látni, nem egy apa, anya örömmel
              előkotorja valahonnan az öreg kalendáriumot és imakönyvet s nekiül
              olvasgatni. Így talán valamit visszavarázsolhatunk a mesemondás
              segítségével a boldogabb régi világból s az eltagadott egészséges
              lélekből.
            </p>
            <p className={styles.torzs}></p>
            <p className={styles.torzs}></p>
            <a id="36"></a>
            <p className={styles.cim2}>Ének</p>
            <p className={styles.torzs}></p>
            <a id="37"></a>
            <p className={styles.cim3}>a) Egyházi ének</p>
            <p className={styles.torzs}></p>
            <p className={styles.alcim2}>Az egyházi ének célja</p>
            <p className={styles.torzs}>
              Az egyházi ének az istentiszteletek lényeges kiegészítő része,
              emeli a szertartások szépségét és fényét, áhítatra gerjeszt s
              elmélyít a felséges szertartásokban. A "kétszeres imádság"
              szárnyán könnyebben emelkedhet a lélek a magasságok felé.
            </p>
            <p className={styles.torzs}></p>
            <p className={styles.alcim2}>Az egyházi ének tulajdonságai.</p>
            <p className={styles.torzs}>
              Az egyházi éneknek szentnek, művészinek és egyetemesnek kell
              lennie. Szent, ha szövege, dallama és előadásmódja minden
              világiasságtól mentes; művészi, ha kompozícióban, előadásmódban a
              tökéletesség fokán á11; egyetemes, ha bizonyos nemzeti jelleg
              érvényesülése mellett is formáit az egyházi ének általános
              törvényei s a liturgikus szellem szabják meg. Ezen tulajdonságokat
              a legteljesebb mértéken a gregorián-énekben találjuk meg. Ez az
              Egyház sajátos és hivatalos éneke.
            </p>
            <p className={styles.torzs}></p>
            <p className={styles.alcim2}>A gregorián ének.</p>
            <p className={styles.torzs}>
              A gregorián énekek elnevezésüket összegyűjtőjüktől, Nagy Szent
              Gergely pápától nyerték. Értéküket legjobban kifejezik Koudela
              Géza dr. szavai: "Szövegük a világirodalom gyöngyei: Próféták
              beszélnek, zsoltárok zengenek, az apostolok szólnak, az
              Anyaszentegyház imádkozik bennük és igen sokszor magának az Úr
              Jézusnak hangja árad belőlük felénk. Tehát a legfelségesebb,
              szentséges szövegkönyve ennek az éneknek van! A dallamok alkotói
              javarészt ismeretlenek, de mind-mind Istentől ihletett szent
              emberek, akik imádságos lelküket lehelték ezekbe a térden állva
              komponált melódiákba. A gregorián énekek zenei értéke szinte
              felmérhetetlen. A világ legnagyobb zenei tekintélyei
              elragadtatással nyilatkoznak ezen énekek művészeti és etikai
              erejéről, tartalmi fenségéről. Ilyen ének pl. a Pange Lingua, a
              Tantum ergo, Genitori azon dallamával, amelyet a pap intonál. Ne
              higgyük ugyanis azt, hogy minden latin szövegű ének gregorián. Sok
              gregorián szöveget fosztottak meg fenséges dallamától s
              társítottak világias, érzelmes melódiával. Ragaszkodjunk az
              eredeti dallamokhoz, amelyeknél szebbet, jobbat úgy sem alkothat
              senki! Vannak esetek, amikor honi nyelven nem is szabad énekelni,
              pl. az Oltáriszentség kitételekor, közvetlenül az áldás előtt és
              után. Tanítsuk meg legalább is a Tanrum ergo, Genitori, O
              salutaris hostia, Adoremus in aeternum kezdetűeket s a négy Mária
              antifonát! Tanításukat megkönnyíti az, hogy modern hangjegyzéssel
              is közreadták már azokat.
            </p>
            <p className={styles.torzs}></p>
            <p className={styles.alcim2}>A gregorián énekmódja.</p>
            <p className={styles.torzs}>
              <i>1. Szöveg!</i> Legfontosabb a szavaknak imaszerű átélése és
              értelmüknek lélekből jövő kifejezése. A templom nem
              hangversenyterem, hanem az ima hajléka.
            </p>
            <p className={styles.torzs}>
              <i>2. Ritmus!</i> A nyolcadok mindig egyforma rövidek, a negyedek
              pontosan kétakkorák. A tempó általában gördülékeny, inkább élénk,
              mint vontatott. Csak a tételek végén lassítunk egy kissé.
            </p>
            <p className={styles.torzs}>
              <i>3. Dallam!</i> Énekeljünk a) túlnyomótag halkan, b) mindig
              legato, azaz kötve, nem darabosan, c) a szó- és zenei hangsúlyok
              (aláhúzott szótagok) kiemelésével. A felfelé emelkedő dallamot
              kissé erősítjük, az ereszkedőt pedig gyengítjük.
            </p>
            <p className={styles.torzs}></p>
            <p className={styles.alcim2}>A gregorián ének vezénylése.</p>
            <p className={styles.torzs}>
              A gregorián éneknek legnagyobb művészi értéke a szabad ritmusa.
              Hangjegyei között nem látjuk az ütemvonalak korlátait. Ebben tehát
              ütemet vezényelni nem lehet, de nem szabad minden egyes
              hangjegy-értéket sem kiütemezni, mert ezzel az e1őadása darabossá
              válnék s elvesztené lendületességét. Ehelyett kéthármas
              szótagcsoportot foglalunk össze, s azok kapnak egy ütemegység
              vezényléséhez való mozdulatot. Pl, Tan-tum/er-go/Sac-ra /men-tum .
              . . vezénylésénél a csoport első szótagjára a felemelt jobb kart,
              vagy inkább csak kézfejet lágy mozdulattal leeresztjük, de azonnal
              fel is lendítjük, hogy a következő csoport első szótagjára ismét
              leereszthessük. A karnak, illetőleg csuklónak ez a hullámzó
              mozgása mértékegységgel kifejezve kb. 1-30 cm. között váltakozzék
              a hangerősség szerint úgy, hogy nagyobb hangerőt mélyebb,
              gyengébbet sekélyebb hullámmal érzékeltessünk.
            </p>
            <p className={styles.torzs}></p>
            <p className={styles.alcim2}>A gregorián ének kísérete.</p>
            <p className={styles.torzs}>
              A gregorián éneket lehetőleg orgonakíséret nélkül énekeljük. Így
              lesz stílusos az éneklése. Csak akkor használjunk kíséretet, ha
              anélkül gyenge, bizonytalan volna az előadása. Az orgona ebben az
              esetben is csak halk, szerény kíséret szerepét töltse be.
            </p>
            <p className={styles.torzs}></p>
            <p className={styles.alcim2}>A népének tulajdonsága.</p>
            <p className={styles.torzs}>
              Csendes miséken, litániákon népénekeket énekelhetünk. A népének
              annál szentebb és liturgikusabb, minél inkább megközelíti
              stílusában, ihletében és ízében a gregorián dallamokat. Ilyenek a
              mi régi egyházi énekeink, amelyeket Harmath Artur keltett életre,
              mikor azokat Szent vagy Uram c. énekeskönyvében nagy gonddal
              összegyűjtötte. Ebben a könyvben ne keressük az érzelmes szövegű,
              dallamú, sokszor cigányos, műmagyar hallgató nótákra emlékeztető
              énekeket, pl. Bús magyarok imádkoznak; ebben ilyeneket nem
              találunk. Ezek nem templomba valók, mert szellemük nagyon távol
              esik az egyházi ének hármas követelményétől.
            </p>
            <p className={styles.torzs}></p>
            <p className={styles.alcim2}>A népének éneklésmódja.</p>
            <p className={styles.torzs}>
              Az egyházi népének szövege imádság, tehát énekelnünk is úgy kell,
              mintha imádkoznánk. Nincs fölemelőbb az ájtatos tömeg lelkes,
              fegyelmezett énekénél jó orgonakíséret mellett. A szólóéneklés nem
              érheti el hatásában, méltóságában és áhítatosságában a
              tömegéneklést. Tartózkodjunk is attól, hiszen az úgy sem más, mint
              egyéni hivalkodás.
            </p>
            <p className={styles.torzs}>
              A népéneket a hangjegyértékek szigorú megtartásával, pontos
              ütemezéssel, folyékonyán, (azonban nem túlságos gyorsan) inkább
              halkan, mint erősen énekeljük. Ne álljunk meg egy pillanatra sem a
              verssorok, még kevésbé az ütemek végén, csak akkor, ha koronával
              találkozunk. Az ének belsejében, rendesen a verssorok végén
              előforduló 4-ütemű hangot csupán 3 ütemegységen át énekeljük fogyó
              erővel, a negyedik egység alatt vegyünk lélegzetet, hogy az ütem
              folyamatosságát meg nem állítva énekelhessük a következő ütem első
              hangját. Á versszak utolsó rendszerint 4 ütemű hangját teljesen
              kiénekeljük, de fogyó hangerővel és kissé visszatartott tempóval.
            </p>
            <p className={styles.torzs}>
              Ügyeljünk a nyolcad időtartamú szótagok éneklésére; ezeket legato,
              azaz simán kell énekelni, mert rövid, szaggatott éneklésük még
              lassított tempo mellett is kellemetlen hatású. Lásd "Ó gyönyörű
              szép titokzatos éj," vagy "Boldogságos Krisztus Anyja vigadozzál"
              kezdetű énekeket!
            </p>
            <p className={styles.torzs}>
              Vigyázzunk, hogy a szavakat éneklés közben lélegzetvétellel meg ne
              szakítsuk! Pl. A keresztfá-hoz megyek. Ha az ütem a szót
              kettéválasztaná is, sima énekléssel siklunk át azon.
            </p>
            <p className={styles.torzs}>
              Gondunk legyen arra, hogy rossz hangcsoportosítások énekünket el
              ne éktelenítsék. Pl. "Az Úristen Ádám atyánknak" kezdetű éneket
              hajlamosak az énekesek így énekelni: A-zu-ris-ten... Tehát így
              énekeljük: Az Úr-is-ten . . .
            </p>
            <p className={styles.torzs}>
              Ne engedjük meg a tercelést (szekundálást), mint komolytalan,
              ízléstelen rögtönzést!
            </p>
            <p className={styles.torzs}></p>
            <p className={styles.alcim2}>A népének orgonakísérete.</p>
            <p className={styles.torzs}>
              A népének orgonakíséreténél szigorúan ragaszkodjunk a Szent Vagy
              Uram orgonakönyvében lefektetett kísérethez. Ennek összhangzatai
              nemcsak változatosak, művésziek, hanem azok az ősrégi dallamok
              korának hangulatát is kifejezik, s mintegy patinát adnak a nemesen
              egyszerű dallamoknak. A kíséret erejét mindig az énekhez
              alkalmazzuk, s az orgona hangja ne nyomja el soha az éneket.
            </p>
            <p className={styles.torzs}>
              Az énekek orgonakíséretét jól meg kell tanulnunk. A tanulás helyes
              módja az, ha előbb jobb, majd balkézzel begyakoroljuk az első négy
              ütemet és csak azután mindkét kézzel. Így folytatjuk azt
              mindaddig, míg az egész ének kísérete ütemesen, a megfelelt
              tempóban, könnyedséggel nem megy.
            </p>
            <p className={styles.torzs}>
              Az istentiszteletek, különösen a szent mise alatt mondjuk közösen
              a liturgikus imákat, sokat és szépen énekeljünk az ének
              hangulatában tartott kevés, halk és szerény orgonakíséret mellett.
            </p>
            <p className={styles.torzs}>
              Jól megtanult, átérzett énekekkel álljunk az Úr oltára elé!
            </p>
            <p className={styles.torzs}></p>
            <a id="38"></a>
            <p className={styles.cim3}>b) Világi ének.</p>
            <p className={styles.alcim2}>A világi dal tanításának célja.</p>
            <p className={styles.torzs}>
              A világi dal léleküdítő, kedélyképző hatását, fegyelmező erejét
              eredményesen használhatjuk fel a Lánykörben. Nótás lányok, daloló
              családanyák környezetében derült lesz a családi élet égboltja,
              könnyebb lesz az élet, a munka terhe.
            </p>
            <p className={styles.torzs}></p>
            <p className={styles.alcim2}>Milyen dalok valók a Lánykörbe?</p>
            <p className={styles.torzs}>
              Igazi magyar népdalokat tanítsunk; műdalok, a cigány kedvelte
              émelygős mű magyar nóták nem valók a Lánykörbe. A szívet-lelket
              mételyező idegen, frivol dalok ellen pedig minden erőnkkel
              küzdenünk kell!
            </p>
            <p className={styles.torzs}>
              Hálával kell itt megemlékeznünk azokról, akik veszendőnek indult
              nótakincsünket felkutatták s újra közkinccsé tették. Ilyenek
              Kodály, Bartók, Kerényi, Lajtha, Bárdos, Malmos, Kertész, Adám,
              Volly stb.: ezek gyűjteményeiből meríti a Tarisznya mindenkori
              nóta-anyagát.
            </p>
            <p className={styles.torzs}></p>
            <p className={styles.alcim2}>Az énektanítás módja hangjegyekről.</p>
            <p className={styles.torzs}>
              Munkánkat megkönnyíti a hangjegy szerint való tanítás. Nem
              nagydolog 10-12 hangterjedelemben a hangjegyek nevét,
              időtartamértékét, a szünetjeleket, az ütemjelzéseket, az ütemezés
              módját, a hangerő jelzéseit, 3 kereszt-ig és 3 bé-ig a kemény és
              lágy hangsorokat megtanítani. Megéri a fáradságot, mert lényegesen
              könnyebb és eredményesebb lesz az énektanításunk.
            </p>
            <p className={styles.torzs}>
              Az énekek tanítása hangjegyekről a következő fokozat szerint
              történjék
            </p>
            <ol className={styles.indentedOrderdList}>
              <li>érdeklődést keltünk a dal tartalmával,</li>
              <li>
                ismertetjük a szerzőt, a szöveget (szövegmagyarázatot tartunk),
              </li>
              <li>
                egyesekkel, majd az egész karral együtt olvastatjuk a szöveget,
              </li>
              <li>
                megállapítjuk a hangnemet, az ütemet, leolvastatjuk, majd
                leénekeltetjük a hangjegyeket egyelőre ritmus nélkül, majd a
                méretbeli tulajdonságok megállapítása után ritmikusan a
                hangjegyek nevével, majd la-szótaggal s végül a szöveggel.
              </li>
              <li>megállapítjuk a tempót,</li>
              <li>ügyeljünk az előírt hangerősségre és egyéb jelzésekre.</li>
            </ol>
            <p className={styles.torzs}></p>
            <p className={styles.alcim2}>Az énektanítás módja hallás után.</p>
            <p className={styles.torzs}>
              Hangjegy nélkül való tanításnál a tanítás menetének 4. fokozatában
              szép, ütemes előadásban bemutatjuk az éneket, maja rövid,
              összefüggő dallamegységenként többször elénekeljük, s utánunk
              énekeltetjük. Kezdetben lassúbb tempóban is énekelhetünk, de jobb,
              ha mindjárt a tanítás kezdetén a végleges tempóban énekelünk. A
              szöveget, dallamot, ritmust, tempót, hanáerőséget ilyenkor
              egyszerre tanítjuk.
            </p>
            <p className={styles.torzs}></p>
            <p className={styles.alcim2}>Mire ügyeljünk az éneklésnél?</p>
            <p className={styles.torzs}>
              Éneklésnél ügyeljünk a tiszta, helyes szövegkiejtésre. Jól nyitott
              szájjal énekeltessünk, mert összeszorított fogakkal nem lehet
              szépen énekelni.
            </p>
            <p className={styles.torzs}>
              Vigyázzunk a helyes lélegzetvételre. A karvezető kezének
              felemelésére vegyünk mély, de nem sóhajtásszerű lélegzetet s a kéz
              leejtésére kezdjük az éneket. Ez az egyszerre való kezdés titka.
            </p>
            <p className={styles.torzs}>
              A helyiség, ahol énekelünk, mindig tiszta levegőjű legyen. Az
              énekesek állása, fejtartása egyenes, természetes legyen. A könyvet
              a bal kézben tartjuk, nem emeljük azt a száj elé, a jobb kézzel
              ütemezünk. Még akkor is ütemeztessünk, ha hallás után tanítunk. Az
              ütemezést csak akkor hagyják el az énekesek, amikor már jól tudják
              az éneket.
            </p>
            <p className={styles.torzs}>
              Kívülről kell tudni az éneket, s a vezető is könyv nélkül
              ve-zényeljen.
            </p>
            <p className={styles.torzs}></p>
            <p className={styles.alcim2}>A kánon és tanítása.</p>
            <p className={styles.torzs}>
              Lányaink éneklő kedvét sikeresen fokozhatjuk többszólamú énekek,
              dalok tanításával. A többszólamú énektanítást kánonokkal kezdj ük.
            </p>
            <p className={styles.torzs}>
              Kánonnak nevezzük az olyan művet, amelyben az egyik szólam menetét
              egy vagy több később induló szólam utánozza. Tanításának módja a
              következő: nem áruljuk el, hogy kánont tanítunk. A dalt egyszerre
              tanítjuk be az egész karral, mert hiszem mindegyik szólam ugyanazt
              fogja énekelni. Ha már ütemesen, biztosan, megy az ének, kétfelé
              választjuk a kart, még egyszer külön-külön elénekeltetjük s így
              índalunk el: "Ez az első szólam, ez a második. Most úgy fogjuk
              énekelni ezt a dalt, hogy a második szólam később kezdi, majd
              akkor, amikor inteni fogok." Többszólamú kánonnál először kétfelé,
              azután háromfelé bontjuk a kart, és így fokozatosan érjük el a
              teljes szólamszámot.
            </p>
            <p className={styles.torzs}></p>
            <p className={styles.alcim2}>A többszólamú énekek tanítása.</p>
            <p className={styles.torzs}>
              Ha a kánonénekléssel elértük azt, hogy énekeseink a különböző
              szólamokkal nem zavarják már egymást, megkezdhetjük két, majd
              többszólamú énekek, dalok tanítását. A többszólamú éneket
              szólamonként tanítjuk meg. Ne siessünk az összpróbával, csak akkor
              fogjunk ahhoz, amidőn a szólamokat tökéletesen tudják énekeseink.
            </p>
            <p className={styles.torzs}></p>
            <p className={styles.alcim2}>Énekművek</p>
            <p className={styles.torzs}>Beszerzésre ajánlható művek:</p>
            <p className={styles.alcim2}>
              <center>a) Egyháziak.</center>
            </p>
            <p className={styles.torzs}>
              Harmath-Sík: Szent vagy Uram (306 éneket tartalmazó, hangjegyes
              kiadás,)
            </p>
            <p className={styles.torzs}>
              Magyar Cantuale., Egyházi karénekes könyv I, 2, 3 és 4 szólamú
              egynemű karra.
            </p>
            <p className={`${styles.torzs} ${styles.torzsInvertedIndentation}`}>
              Korális füzetek és Korális Lapok (a legszükségesebb gregorián
              énekek) Kf. I. Responsoriumok, Tantum ergo, O salutaris Kf. 7. A 4
              Mária-antifóna. Kf. 204. Adoremus.
            </p>
            <p className={styles.torzs}>
              Werner Lajos dr.: Az éneklő egyház (Az egyházi zene története és
              törvényei.)
            </p>
            <p className={styles.torzs}>
              Forrai Miklós: A karvezető. A karszervezés, kartanítás
              kézi-könyve.
            </p>
            <p className={styles.torzs}></p>
            <p className={styles.alcim2}>
              <center>b) Világlak.</center>
            </p>
            <p className={styles.torzs}>Kerényi György: Madárka. 102 népdal.</p>
            <p className={styles.torzs}>Bárdos Lajos: 101 magyar népdal.</p>
            <p className={styles.torzs}>
              Kerényi György: "Körbe-körbe" 2-3-4 szólamú kánonok 2 füzet,
            </p>
            <p className={styles.torzs}>
              Kertész Gyula: Tavaszi bokréta, Kétszólamú dalok.
            </p>
            <p className={styles.torzs}>
              Vásárhelyi Zoltán: Erdő-Mező. Kétszólamú népdalkórusok.
            </p>
            <p className={styles.torzs}>
              Kerényi György: Kilenc leánykar 3-4 szólamra.
            </p>
            <p className={styles.torzs}>Kodály Zoltán gyermekkórusai.</p>
            <p className={styles.cim3}>* * *</p>
            <p className={styles.torzs}>
              Megrendelhetők a Kalász-központban XII. Pagony u. 8.
            </p>
            <p className={styles.torzs}></p>
            <p className={styles.torzs}></p>
            <a id="39"></a>
            <p className={styles.cim3}>Énekkarképzés.</p>
            <p className={styles.torzs}></p>
            <p className={styles.torzs}>
              Ne sajnáljunk minden énekórán 10 percet elméleti oktatásra,
              néhányat pedig hallásfejlesztésre és hangképzésre fordítani. Nem
              vesztünk ezzel időt, mert ez a munka bőségesen meghozza
              gyümölcsét.
            </p>
            <p className={styles.torzs}>
              Itt adjuk egy-egy 10 perc alatt megtanítható elmélet anyagát.
            </p>
            <p className={styles.torzs}></p>
            <p className={styles.cim3}>1.</p>
            <p className={styles.torzs}>
              Gondolatainkat, érzelmeinket nemcsak beszéddel, hanem sok esetben
              dallal is kifejezhetjük. Vallásos és hazafias érzelmeinket, a
              szülői szeretet érzelmét, örömünket vagy bánatunkat a dal a
              beszédnél is jobban kifejezheti.
            </p>
            <p className={styles.torzs}>
              Távollevők is közölhetik velünk gondolataikat, sőt dalban
              kifejezett érzelmeiket is, ha leírják azokat.
            </p>
            <p className={styles.torzs}>
              A beszédhang írott jegye a betű, a zene betűi a hangjegyek vagy
              kották.
            </p>
            <p className={styles.torzs}>
              A hangjegyeket kicsiny fekvő 0-val 5 vonalra írjuk. A
              vonalrendszer elején kulcsot látunk, ez nyitja a sort.
              Violinkulcsnak is nevezzük, mert a hegedűre (violinra) írt
              hangjegyeket ezen kulcs alatt írják, de G-kulcsnak is nevezzük,
              mert a második vonalra kanyarodik, ennek pedig g vonal a neve. A
              vonalak neve alulról fölfelé: é g h d f. A vonalközök neve: f á c
              é. Ezeket begyakoroljuk.
            </p>
            <p className={styles.torzs}></p>
            <p className={styles.cim3}>2.</p>
            <p className={styles.torzs}>
              A vonalak alá és fölé is írunk hangjegyeket segédvonalak
              alkalmazásával. Az egyvonásos c alatt elég lesz a kis oktávot d é
              f g á h hangokkal kiegészíteni, sőt folytatni a kétvonásos oktáv
              hangjaival g-ig. A zene abc-je ezen nyolc hangból áll: c d é f g á
              h c. Hangsornak nevezzük. Oktávnak, a 8-nak latin neve után
              hívjuk.
            </p>
            <p className={styles.torzs}>
              A hangsor hangjegyesnek nevét állandóan gyakorolhatjuk, sőt
              énekelhetjük is.
            </p>
            <p className={styles.torzs}></p>
            <p className={styles.cim3}>3.</p>
            <p className={styles.torzs}>
              Kétféle hangsorunk van. Az egyik keményen, a másik lágyan, hangzó.
              Amazt kemény, vagy idegen szóval dúr-, az utóbbit lágy vagy
              moll-hangsornak nevezzük. Mindkettőt énekeljük a harmónium
              segítségével, mégpedig a kemény hangsor szemléltetésére a kemény c
              hangsort, a lágy hangsor bemutatására pedig a lágy á hangsort. De
              bemutathatjuk a kemény c hangsor mellett a lágy c hangsort is. A
              különbséget énekeseink is felismerik. Mindkét hangsort
              énekelhetjük s begyakorolhatjuk.
            </p>
            <p className={styles.torzs}></p>
            <p className={styles.cim3}>4.</p>
            <p className={styles.torzs}>
              A harmóniumon fehér meg fekete billentyűket látunk. Ha ezeket
              szemügyre vesszük, azt látjuk, hogy nincsen minden két fehér
              billentyű között fekete. Ahova fekete billentyűt lehetett
              helyezni, azon fehér billentyűk hangjai között egész hangköz van,
              más esetben félhangköz. Ha a kemény c hangsor billentyűit
              megszámozzuk (lerajzolhatom azokat a táblára is) megállapíthatjuk,
              hogy a hangsor 3. és 4. továbbá a 7. és 8. hangjai között
              félhangköz van, másutt egész. A hangközök ezen elrendeződése adja
              meg a hangsor kemény jellegét. Ezt tudva bármely hangot
              alaphangnak véve, építhetünk arra kemény hangsort. A felépítés
              közben - hogy a kemény hangsor hangközeit megkapjuk, -
              módosításokat kell végeznünk. Pl. Ha kemény g hangsort építünk,
              abban az f-et fél hanggal kell emelnünk s ezt a módosítást a
              hangjegy elé írt kereszttel jelezzük. Ha tehát az ének elején a
              G-kulcs után az f helyén keresztet látunk (lehet az akár az
              egyvonásos-, akár a kétvonásos f helyén) akkor az éneket a kemény
              g-hangsor hangjaiból szerkesztették s minden, benne előforduló f
              helyett fisz-t kell énekelnünk. Ha esetleg a dallam mégis f hang
              éneklését kívánná, azt a feloldójel jelzi. A hangsor harmóniumon
              való felépítésében a fülünk is segít bennünket, ha a kemény-
              illetőleg, lágy hangsor dallamát jól begyakoroltuk.
            </p>
            <p className={styles.torzs}></p>
            <p className={styles.cim3}>5.</p>
            <p className={styles.torzs}>
              A kemény g-hangsor felépítésének módján járunk el a kemény d- és
              az á-hangsor felépítésében. A kemény d-hangsorban fisz és cisz, a
              kemény á-hangsorban pedig fisz, cisz és gisz módosításokat kell
              végeznünk. Ezen hangsorokat is énekelhetjük és írásukat is
              gyakorolhatjuk.
            </p>
            <p className={styles.torzs}></p>
            <p className={styles.cim3}>6.</p>
            <p className={styles.torzs}>
              Némely esetben valamely hangnak fél hanggal való leszállítására
              van szükség a hangsor felépítésében. Ezt a módosítást az írásban
              b-vel jelezzük. Felépítjük a kemény f-hangsort, amelyben a
              h-hangot kell leszállítanunk, hogy a szükséges hangközöket
              megkapjuk. Ezt az új hangot b-nek nevezzük. A kemény f-hangsort
              énekléssel és írásban gyakoroltatjuk.
            </p>
            <p className={styles.torzs}></p>
            <p className={styles.cim3}>7.</p>
            <p className={styles.torzs}>
              Felépítjük a kemény b-hangsort, amelyben b- és esz-módosításokat
              kell végeznünk a kemény esz-hangsort, melyben a b, esz,
              ász-módosításokat találjuk. Ezeket a hangsorokat is leíratjuk és
              énekeltetjük.
            </p>
            <p className={styles.torzs}></p>
            <p className={styles.cim3}>8.</p>
            <p className={styles.torzs}>
              Ha a lágy á-hangsor hangközeit megfigyeljük, akkor a hangsor 2. és
              3., valamint az 5. és 6. hangjai között találjuk a fél
              hangközöket. Az ilyen elrendeződés adja a hangsor lágy jellegét.
              Ezt a hangköz-elrendezést kell figyelembe vennünk a lágy hangsor
              felépítésénél s aszerint végezzük a módosításokat.
            </p>
            <p className={styles.torzs}>
              Ily módon nyerünk a lágy é-hangsorban egy módosítást, a fisz-t.
              Leírjuk, énekeltetjük.{" "}
            </p>
            <p className={styles.torzs}></p>
            <p className={styles.cim3}>9.</p>
            <p className={styles.torzs}>
              Felépítjük a lágy h-hangsort, melyben fisz és cisz, azután a lágy
              fisz-hangsort, melyben fisz, cisz és gisz módosításokkal
              találkozunk. Ezeket is gyakoroltatjuk.
            </p>
            <p className={styles.torzs}></p>
            <p className={styles.cim3}>10. </p>
            <p className={styles.torzs}>
              A lágy d-hangsort építjük fel, melyben egy módosítást végzünk, a
              b-t. Gyakoroltatjuk.
            </p>
            <p className={styles.torzs}></p>
            <p className={styles.cim3}>11.</p>
            <p className={styles.torzs}>
              A lágy g-hangsor felépítésén a sor, amelyben b, esz módosításokat
              végzünk s végül a lágy c-hangsor következik, melyben b, esz, ász
              módosításokat kell teljesítenünk. Ezeket a hangsorokat is
              gyakoroltatjuk.
            </p>
            <p className={styles.torzs}></p>
            <p className={styles.cim3}>12.</p>
            <p className={styles.torzs}>
              Összefoglaljuk a kereszttel és b-vel módosított kemény és lágy
              hangsorokat. Eközben arra a megállapításra jutunk, hogy van egy
              kereszttel módosított, tehát ugyanolyan jelzésű kemény és lágy
              hangsorunk stb. A felismerésben rendszerint az ének utolsó hangja
              segít bennünket.
            </p>
            <p className={styles.torzs}></p>
            <p className={styles.cim3}>13.</p>
            <p className={styles.torzs}>
              Az ének szövege vers, amelynek szabályos hanghullámzása, vagyis
              üteme, ritmusa van. Az ütem időméretét az ének elején jelezzük a
              hangnem jelzésére szolgáló keresztek és b-k után. Van 2/4-es,
              3/4-es, 4/4-es stb. ütem. A 2/4-es ütem vezénylésének módja le,
              fel; a 3/4-esé: le, jobbra, fel; a 4/4-esé: le, balra, jobbra,
              fel. Az ütemezés egyenletes legyen!
            </p>
            <p className={styles.torzs}></p>
            <p className={styles.cim3}>14.</p>
            <p className={styles.torzs}>
              Az ütemekben hosszabb-rövidebb hangokat kell énekelnünk. A
              hangjegy időtartamértékét a hangjegy alakjával fejezzük ki. Van
              4-méretű v. egész hangjegy, melyet addig énekelünk, amíg 4-et
              ütemezünk; 2-méretű v. fél hangjegy, melyet két ütemegységen át
              énekelünk; 1-méretű v. negyed hangjegy és fél-méretű vagy nyolcad
              hangjegy, amelyből egy ütemegységre kettőt énekelünk. A
              hangsorokat a különböző időtartamú hangokkal énekeltetjük.
            </p>
            <p className={styles.torzs}></p>
            <p className={styles.cim3}>15.</p>
            <p className={styles.torzs}>
              Éneklés közben gyakran tartunk szüneteket, melyekkel az ütem
              folytonosságát nem szakítjuk meg ugyan, de ezek a lélegzetvételre,
              pihenésre adnak jó alkalmat. Minden időméretű hangjegynek megvan a
              megfelelő szünetjele, amellyel az ütem hiányzó hangjegyét
              pótoljuk. Írásban, éneklésben gyakoroljuk a szünetjelet, illetőleg
              azok betartását.
            </p>
            <p className={styles.torzs}>
              Gyakran látunk valamely hangjegy után pontot. Ez a pont a hangjegy
              időtartamértékét annak felével növeli. A hangjegy fölött -
              leginkább a verssor vagy az ének végén - félkör alá írt pontot,
              un. koronát is gyakran találunk, ez a hangnak tetszésszerinti
              megnyújtását kívánja.
            </p>
            <p className={styles.torzs}></p>
            <p className={styles.cim3}>16.</p>
            <p className={styles.torzs}>
              Nem volna kellemes hatású az éneklésünk, ha az elejétől a végéig
              egyenlő hangerősségű volna. Az énekben kifejezett érzelem
              hangulatának megfelelően halkabban vagy erősebben énekelünk. Ezt a
              hangárnyalást a hangjegyek között jelezni is szokták. A
              hangerősség jelzésére szolgáló jelek: pp=pianissimo - igen halkan,
              p=piano - halkan, mf=mezzoforte - középerősen, f=forte - erősen,
              ff=fortissimo - igen erősen.
            </p>
            <p className={styles.torzs}>
              Különböző hangerővel énekeltetjük a hangsorokat.
            </p>
            <p className={styles.torzs}></p>
            <p className={styles.cim3}>17.</p>
            <p className={styles.torzs}>
              Gyakran egy hang vagy hangcsoport hangerősségét növelnünk vagy
              csökkentenünk kelt. Ha ezt szépen, fokozatosan végezzük, igen
              kellemes hanghatást érünk el. Ennék jelzésére a crescendo -
              (növekvő erővel) és a decrescendo - (fogyó erővel) szavak
              szolgálnak. De jól szemléltetik a növekvő és fogyó hangerőt a
              hangjegyek fölé rajzolt szögek nyitódó és záródó szárai is?.
            </p>
            <p className={styles.torzs}>
              Az ének végén a tempót fokozatosan el szoktuk lassítani. Ha erre a
              tempo-visszatartásra szükség van, azt a ritardando szó jelzi.
              Gyakoroljuk a hangsorokat növekvő és fogyó hangerővel, a befejezés
              előtt énekeljünk ritardando-val!
            </p>
            <p className={styles.torzs}></p>
            <p className={styles.cim3}>18.</p>
            <p className={styles.torzs}>
              Az énekek üteme különböző gyorsaságú. Lassabban énekelünk egy
              gyász-éneket, mint pl. egy örömet kifejező karácsonyi vagy húsvéti
              éneket. Az ének tempóját, időméretét a kezdeten látható szavak
              írják elő. Ilyenek: largo = igen lassan, lento = lassan, adagio =
              lassan, andante = andalogva, moderato = mérsékelten, allegro =
              gyorsan, vivace = élénken, presto = nagyon gyorsan.
            </p>
            <p className={styles.torzs}></p>
            <p className={styles.cim3}>* * *</p>
            <p className={styles.torzs}></p>
            <p className={styles.torzs}>
              A hangjegyeket énekelhetjük a hangjegy nevével (absolut rendszer
              szerint) vagy az éneklésre alkalmasabb do re mi fa szo la szi do,
              un. szolmizációs szótagokkal. Ezen utóbbi esetben minden, hangsor
              első hangja a "do" nevet kapja, a második a "re"-t és így tovább.
              Tehát a c-hangsorban a "c" lesz a do; a g-hangsorban a "g" stb.
              Ezt az elnevezést relatív rendszerűnek nevezzük.
            </p>
            <p className={styles.torzs}>
              Akármelyik rendszer szerint énekeltetünk, gyakoroltassuk minden
              órán a hangeltalálást, ezzel az énekeset hallását is fejtesztjük
              és szánjunk néhány percet a hangképzésre, különböző
              magánhangzókkal, különböző hangerővel hangsorokat énekeltessünk
              ezen célből. Az erre fordított kevés idő bőségesen vissza fog
              térülni az eredményekben.
            </p>
            <p className={styles.torzs}></p>
            <p className={styles.torzs}></p>
            <a id="40"></a>
            <p className={`${styles.cim2} ${styles.cim2BottomMargin}`}>
              Miért van szűkség játékra és milyenre?
            </p>
            <p className={styles.torzs}></p>
            <img
              src="/assets/images/vezerkonyv/jatek.jpg"
              alt="jatek.jpg"
              className={`${styles.vezerkonyvKep} ${styles.jobbSzovegIllusztracio}`}
            />
            <p className={styles.torzs}>
              A játékkal és tánccal vidámságot és szórakozást viszünk a
              Lánykörbe, a komoly megbeszélések és a munka után.
            </p>
            <p className={styles.torzs}>
              Sokkal szívesebben megy a lány a Lánykörbe, ha ott a hasznos
              tanuláson kívül vidám szórakozásban is lesz része. A játékóra
              adjon olyan szórakozást, melyben a lányok tiszta lélekkel,
              gyermekes jókedvvel mulatnak és felüdülnek. A lányok
              szórakoztatásának fő célja, hogy a bennük egész héten át
              felgyü-lemlett kedélybeli energiákat helyes irányban levezesse a
              vezető ellenőrzése mellett.
            </p>
            <p className={styles.torzs}>
              Ha a Lánykörben megszokja a lány a tiszta, ártatlan szórakozást és
              abban öröme telik, a Lánykörön kívül is, más társaságban is tudja
              majd, miként kell és lehet viselkednie, hogy szépen, nemesen
              mulasson. A fiatal lány lelkét nagyon sokszor a helytelen
              szórakozás és a rossz társaság fertőzi meg először. A társaságba
              őt először csak a mulatás utáni vágy viszi és az itt látott példa
              s a mulatozás közben szerzett tapasztalatok vezetik észrevétlenül
              a rossz útra. A falusi lányok is ki vannak téve ennek a
              veszélynek, sokszor éppen a falu megrögzött szokásain keresztül.
            </p>
            <p className={styles.torzs}>
              A játék elsősorban szórakoztasson, nevessen, fusson,
              felszabadultan mulasson és lelkileg üdüljön fel játék közben a
              lány. Hogy a játékot meg is becsülje és nagyobb, kedvvel játssza,
              szükséges, hogy a vezető is részt vegyen abban, vagy legalább is a
              megindításában. Mindjárt élénkebb és fegyelmezettebb a játék, ha a
              vezető is közöttük van. A legfélénkebb és visszahúzódó
              lánylélekhez is könnyen hozzáférkőzhetünk játék közben, amikor a
              lány bennünk játszótársát látja és közvetlenül, gátlások nélkül
              érintkezhetik velünk.
            </p>
            <p className={styles.torzs}>
              Játékokkal a lányok testi ügyességét is növelhetjük. A falusi lány
              házi és mezei munkával testileg megerősödik, megizmosodik. A
              játékkal tehát nem testi erő fejlesztésére törekszünk, hanem arra,
              hogy frissé, hajlékonnyá és ügyessé tegyük a lányokat, kiknek
              mozgását az egyoldalú nehézmunka darabossá teszi. (A
              társasjátékoknál a gyors mozgás, mikor hirtelen kitér, gyorsan
              megáll, hajlik és nyúlik a labda után, sok testi ügyességet kíván
              és fegyelmezi az izmok mozgását.)
            </p>
            <p className={styles.torzs}>
              Játékon keresztül még sok minden jóra nevelhetjük a lányokat,
              anélkül, hogy ők ráerőszakolt nevelési eszközt látnának, ami
              terhükre van. Öntudatlanul rászoknak a fegyelemre. A
              játékszabályokat pontosan be kell tartani, mozgásukat szabályozni,
              hogy egymással durvák ne legyenek a játék hevében. Udvariasak és
              figyelmesek lesznek egymás iránt játék közben, ha a vezető is
              velük játszik és mindenre példát ad. Figyelnünk kell arra, hogy a
              játék sohase durvuljon el és a lányok önmagukhoz méltóan
              játsszanak. Azzal, hogy a játékszabályokat betartják, nagy
              lépéseket tesznek az önfegyelmezés terén. Azzal, hogy vigyázniuk
              kell, mikor kerül reájuk a sor, például egy versenyjátéknál,
              stafétafutás stb. játékoknál, az éber figyelemre szoktatjuk őket.
              Ezt a szobajátékoknál is gyakorolhatják. Ha pl. ki kell találniuk
              egy feladott szót vagy verssort, figyelniük kell arra, amit
              kérdeztek tőlük, hogy azonnal és ügyesen tudjanak válaszolni.
            </p>
            <p className={styles.torzs}>
              Igen fontos az is, hogy megszerettessük és felelevenítsük velük a
              régi énekes népi játékokat, melyek már csaknem feledésbe mentek.
              Ezek a játékok is népi kultúránk termékei, melyeknek megőrzése és
              továbbfejlesztése nemzeti életünkkel szemben komoly és kedves
              feladatunk. Arra azonban törekedni kell, hogy ezeket a népi
              játékokat ne tekintsék ők műsoros előadások anyagának, hanem
              szeressék meg annyira, hogy azt a maguk szórakozására és örömére
              szívesen játsszák, valahányszor erre alkalom adódik.
            </p>
            <p className={styles.torzs}>
              Becsüljük meg tehát a lányköri munkában a játékot, mint a
              nevelésnek és a nemzeti öntudat ébrentartásának egy kiváló
              eszközét.
            </p>
            <p className={styles.torzs}></p>
            <p className={styles.cim3}>Népi játékok.</p>
            <p className={styles.alcim2}>Libás játék.</p>
            <p className={styles.torzs}>
              A lányok közül egy a gazdaasszony, egy a szolgáló, kettő a farkas,
              a többi liba. A szolgáló és a libák az egyik oldalra, a
              gazdaasszony a másik oldalra áll, köztük a két farkas. Következő
              párbeszéddel indul a játék:
            </p>
            <p className={styles.torzs}>- Szolgáló, jer haza!</p>
            <p className={styles.torzs}>- Mosdik.</p>
            <p className={styles.torzs}>- Nem megyek, mert félek.</p>
            <p className={styles.torzs}>- Miből?</p>
            <p className={styles.torzs}>- Mitől?</p>
            <p className={styles.torzs}>- Cintányértól.</p>
            <p className={styles.torzs}>- Farkastól.</p>
            <p className={styles.torzs}>- Mivel törülközik? </p>
            <p className={styles.torzs}>- Hol van?</p>
            <p className={styles.torzs}>- Tiszta törülközővel.</p>
            <p className={styles.torzs}>- mély árokban.</p>
            <p className={styles.torzs}>- Vess lángot!</p>
            <p className={styles.torzs}>- Mit csinál?</p>
            <p className={styles.torzs}>
              Ekkor a szolgáló a libákkal a gazdaasszonyhoz szalad, a farkasok
              pedig reájuk rohannak. Akiket elfognak, azok farkasok lesznek, és
              a következő felállásnál segítenek a fogásban. - Addig játszanak,
              míg csak két liba marad, azok lesznek az új játékban a farkasok, a
              gazdaasszony és a szolgáló pedig szerepet cserélnek.
            </p>
            <p className={styles.torzs}></p>
            <p className={styles.alcim2}>Túrós játék. </p>
            <p className={styles.torzs}>
              A lányok körben leülnek a földre s mindegyik mögé egy másik áll.
              Egy közülük a vevő, aki a körön kívül megy s megkérdezi valamelyik
              lánytól:
            </p>
            <p className={styles.torzs}>- Komámasszony, hogy a túró? </p>
            <p className={styles.torzs}>- Hat futás!</p>
            <p className={styles.torzs}>- Odaadja ötért?</p>
            <p className={styles.torzs}>- Nem adom. </p>
            <p className={styles.torzs}>- Hadd nézzem, nem kukacos-e?</p>
            <p className={styles.torzs}>
              Ha a komámasszony nevet, az azt jelenti, hogy a túró kukacos és a
              vevő ezt mondja:
            </p>
            <p className={styles.torzs}>
              - Nem veszem meg, mert kukacos - és más túrójára alkuszik.
            </p>
            <p className={styles.torzs}>Ha nem nevet:</p>
            <p className={styles.torzs}>- Megveszem, mert nem kukacos.</p>
            <p className={styles.torzs}>
              Erre egymással szembefordulva annyiszor futják körül a kört,
              amennyi a túró ára volt, s aki hamarabb ér a túróhoz, azé lesz.
            </p>
            <p className={styles.torzs}></p>
            <p className={styles.alcim2}>Tüzet viszek.</p>
            <p className={styles.torzs}>
              A lányok körbe fogóznak. Egyik a körön kívül marad, s egy
              keszkenőt fon össze. Ez a tűzvivő, aki a tűz körül jár mondogatva:{" "}
            </p>
            <p className={styles.torzs}>Tüzet viszek, ne lássátok,</p>
            <p className={styles.torzs}>Ha látjátok, ne mondjátok.</p>
            <p className={styles.torzs}>Ég a rokolyátok.</p>
            <p className={styles.torzs}>
              Közben a keszkenőt észrevétlenül egyik leány sarkához ejti s
              tovább megy. Ha az illető nem veszi észre, hogy a keszkenő a
              sarkánál van, a kört megkerülő tűzvivő, hozzá visszaérkezve a
              keszkenőt felveszi s a vigyázatlan játszót ütni kezdi, a tűz körül
              kergetve őt, míg vissza nem ért helyére, - Ha pedig idejekorán
              észreveszi a kendőt, felveszi s kergeti vele a tűzvivőt, míg az,
              az üres helyre be nem áll. A következő játékban pedig ő lesz a
              tűzvivő.
            </p>
            <p className={styles.torzs}></p>
            <p className={styles.cim3}>Játékok a szabadan.</p>
            <p className={styles.torzs}></p>
            <p className={styles.alcim2}>1. Körben a labda.</p>
            <p className={styles.torzs}>
              A lányok két félkört alkotnak, mindegyik félkörrel szemben egy
              játékos áll, kezében labdával. Jelre a középen álló a labdát a
              félkör elsőjének dobja, az vissza a középsőnek, a középső a
              másodiknak, az vissza és így tovább, míg a labda a félkör
              valamennyi játékosához és tőle vissza a középsőhöz eljutott.
              Győztes az a félkör, melynek utolsója elsőnek juttatja vissza a
              középsőnek a labdát. - A játék változata: a labda fordított
              irányban újra végigszalad a félkörön és közben mindig vissza a
              középsőhöz, mikor a labda visszakerül az eredeti első játékoshoz,
              az kiszalad vele a félkör elé dobónak, az előbbi dobó pedig a
              félkör ellenkező oldalára utolsó játékosnak áll be. Az a félkör a
              győztes, amelynek első dobója előbb kerül ismét a félkör elejére
              dobónak.
            </p>
            <p className={styles.torzs}></p>
            <p className={styles.alcim2}>2. Közönséges labdajáték.</p>
            <p className={styles.torzs}>
              A játékosok két körben állnak fel. Egy-egy kör játékosai egymástól
              10 lépésnyire állnak, mely távolság a hely és a játékosok
              ügyessége szerint változhat. Minden második játékos egyes, a
              közbensők kettesek lesznek. Egyik labdát az egyik egyes, másikat a
              mellette, vagy a kör kerületén vele szemben átló kettes kapja. A
              vezető meghatározza, hogy a labdát jobb, vagy bal felé fogják
              dobni, hármat számol és megindul a dobás: jobbra balkézzel, balra
              jobb-kézzel. Az egyesek az egyeseknek, a kettesek a ketteseknek
              dobnak, akik elkapják és hasonlóképpen továbbítják. Ha a labda
              visszatér az indító játékoshoz, az hangosan számol: egy, második
              körforgás után: kettő és így tovább tízig, akkor vége a játéknak.
              Az a csoport nyer, amelyik először dobta körül tízszer a labdát. -
              Fontos, hogy mindkét kar egyformán gyakorlódjék, azért a második
              játszmában az ellenkező oldalra indítjuk a labdát. Amelyik csoport
              mindkét játszmában első volt, lesz a nyertes, a győzőknek járó
              tiszteletből a másik csoport egy lépést tesz előre és hatalmas
              "éljen"-t kiált. - Ennél a játéknál lényeg, hogy mindenki
              fáradhatatlan figyelemmel kövesse csoportjának labdáját, ha
              hozzákerül, fogja el gyorsan és adja tovább azonos számú társának.
              - Aki a labdát elejti, sietve vegye fel, ugorjék a helyére (csak
              onnan szabad a- labdát dobni!) és folytassa a játékot, amilyen
              gyorsan csak lehet.
            </p>
            <p className={styles.torzs}></p>
            <p className={styles.alcim2}>3. Labdastaféta.</p>
            <p className={styles.torzs}>
              A játszók egymás mögé állva két sort alkotnak. Egy-egy játékos a
              sorok első játszóival szemben négy-öt lépés távolságban
              helyezkedik el. Adott jelre egyszerre kezdik a játékot. A
              szembenálló a sor elsőnek dobja a labdát, aki azt azonnal
              visszadobja a dobónak, és hírtelen leguggol. Most a második kapja
              a labdát, aki ugyanúgy viselkedik és egymásután valamennyien.
              Mikor a dobó az utolsónak eldobta a labdát, hirtelen sorelsősek
              áll, az egész sor feláll a guggolásból, az utolsó pedig megkapva a
              labdát, előreszalad dobónak. A cserélődést addig ismétlik, amíg az
              első dobó az eredeti helyére kerül. Az a csoport a győztes,
              amelyik ezt rövidebb idő alatt éri el. Természetes, mind a két
              sorban egyforma számú játékosnak kell állnia.
            </p>
            <p className={styles.torzs}></p>
            <p className={styles.alcim2}>4. Nyúl a bokorban.</p>
            <p className={styles.torzs}>
              3-4 leány kézfogással kört alkot és középre bevész még egyet. Ezek
              a "bokrok" egymástól nem messze állnak fel. Szerepel még a vadász
              és a nyúl. A vadász kergeti a nyulat, ez beugrik egy "bokorba" és
              kiszorítja onnan a már benn lapulót. Most ennek dolga futni s a
              vadász őt kergeti. Ha megfogta, szerepet cserélnek. A játék végig
              érdekes marad, - ha a már megkergetett nyúl mindig helyet cserél a
              menedéket adó "bokor" egyik tagjával.
            </p>
            <p className={styles.torzs}></p>
            <p className={styles.cim3}>Szobajátékok.</p>
            <p className={styles.torzs}></p>
            <p className={styles.alcim2}>Bumm.</p>
            <p className={styles.torzs}>
              A társaság szép sorjában elhelyezkedik és számolni kezd egytől
              fölfelé gyors ütemben. A számsorban a hetest és annak többszörösét
              nem szabad kimondani, helyette Bumm-mal felel az, aki sorra kerül.
              Ha eltéveszti, zálogot ad. (A sorban következő számot mindig az
              mondja, akire a játékvezető rámutat.)
            </p>
            <p className={styles.torzs}></p>
            <p className={styles.alcim2}>Eltitkolt költemény.</p>
            <p className={styles.torzs}>
              Egyik játékos kimegy s azalatt a többiek egy ismert költeményt,
              vagy nótát választanak, melynek első soraiból mindegyik játékos
              sorban kap egy szót. Adott jelre a kitaláló bejön és tetszés
              szerinti kérdéseket ad fel az elosztott szavaknak megfelelő
              sorrendben. A kérdezettnek úgy kell felelnie, hogy feleletében
              benne legyen az a szó, amely a versből reá jutott. Akinek a
              feleletéből kitalálják a verset, annak kell a következő játékban
              kérdeznie. Pl.: Feladjuk "Zöldre van a rácsos kapu festve." A
              kitaláló tetszés szerint kérdez. Pl.: "Hogy érzed magad a
              Lánykörben?" - "Nagyon jól, ebben a jó melegben. Amilyen hideg van
              kint, bizonyosan kékre-zöldre fagynék." Második kérdés: "Hány óra
              van?" - "Azt gondolom, van már fél 5." Stb.
            </p>
            <p className={styles.torzs}></p>
            <p className={styles.alcim2}>Ez az én orrom.</p>
            <p className={styles.torzs}>
              A játszók körbe állnak és kisorsolják, ki menjem középre. Az
              illető odaáll valamelyik játékos elé, rámutat pl. a saját
              könyökére és azt monda: "Ez az én orrom." Aztán roppant sebesen
              egytől tízig számol. A játékosnak a számolás ideje alatt tréfára
              tréfával kell felelnie s rá kell mutatnia pl. a saját orrára
              mondva "Ez az én könyököm." Ha a válasszal addig késik, míg a
              középjátékos tízig számol, neki kell középre mennie. Orr és könyök
              után sor kerülhet szemre, fülre, kisujjra stb.
            </p>
            <p className={styles.torzs}></p>
            <p className={styles.alcim2}>Vattafúvás.</p>
            <p className={styles.torzs}>
              Nagy asztal körül ülnek a játékosok olyan szorosan, hogy váll-váll
              mellett legyen. Az asztal közepére egy darabka vattát tesznek.
              Megadott jelre mindenki fújni kezdi a vattát olyan erővel, hogy az
              lehetőleg a vele szemben ülő mellett leessék az asztalról. Viszont
              mindenki igyekszik, hogy jobb keze felől le ne essék a vatta, mert
              különben zálogot kell adnia. Kézzel a vattához nyúlni tilos.
            </p>
            <p className={styles.torzs}></p>
            <p className={styles.alcim2}>Hol a szamár?</p>
            <p className={styles.torzs}>
              Fehér papírhól szamarat vágunk ki fül nélkül. Külön vágunk néhány
              fület és azokat gombostűvel látjuk el. A szamarat felerősítjük a
              falra, a vállalkozó játékosnak pedig kezébe adunk egy fület, három
              lépésre állítjuk a feltűzött szamártól, bekötjük a szemét, és
              háromszor megfordítjuk a saját tengelye körül. Most elindulhat
              feltűzni a szamár fülét. A legritkább esetben találja el a
              megfelelő helyet, viszont a tájékozódó képességet nagyban növeli a
              játék. Sorban minden vállalkozó kipróbálhatja szerencséjét.
            </p>
            <p className={styles.torzs}></p>
            <p className={styles.alcim2}>Zálogkiváltás.</p>
            <p className={styles.torzs}>
              Sok vezetőnek nagy gondot okoz, mert ő is, a lányoly is unják már
              az örökös sántikálást, gyónást stb. Pedig nagyszerűen
              felhasználhatjuk ezt a játszva tanításra, ha a bűnösnek ilyenféle,
              kérdéseket adunk fel: Mondja el, mi volt a vasárnapi szentbeszéd?
              - Hogyan fog a mindennapi takarításhoz? - Hogyan csinálja a
              nagytakarítást? - Hogyan főz meg 8 tagú család számára egy
              húslevest, paradicsomlevest stb.? - Hogyan állítaná össze a napi
              étrendet? - Hogyan gondozza hároméves kishúgát? - Mit kell tennie,
              ha járvány van a faluban? - Hogyan köszönti fel édesanyját a
              születésnapján? - Mondjon egyik szomszédjának valami kedveset, ami
              igaz is. - Kívánjon neki szerencsét házasságához! - Nézzen szét a
              szobában, hunyja be a szemét és mondja meg mit látott? - Járja
              körül a szobát és mondja el, mi van javítani való ajtón, ablakon,
              falon, bútorokon, padlón. - Magyarázza meg legjobb barátnőjének,
              miért jár a Lánykörbe? Stb.
            </p>
            <p className={styles.torzs}></p>
            <p className={styles.torzs}></p>
            <a id="41"></a>
            <p className={styles.cim2}>
              A tánc szerepe az ifjúsig nevelésében.
            </p>
            <p className={styles.torzs}></p>
            <p className={styles.alcim1}>Történelme</p>
            <p className={styles.torzs}>
              A táncnak és mulatozásnak nagy szerepe van az ifjúság életében,
              különösen ma, mikor városban és falun egyaránt annyira divattá
              vált a táncolás. A tánc maga még nem erkölcstelen és 1élekromboló
              szórakozás, de sok tekintetben károsan hathat az ifjúság
              lelkületére. Még sem lehet őket eltiltani ezen kedvtelésüktől,
              mert a tánc-szeretet már ősi örökségünk. Ha egy kicsit
              visszatekintünk a tánc történetre, látjuk, hogy a primitív
              népektől kezdve mindig megtartotta az emberiség tánckedvét és csak
              céljában és kifejezéseiben változott meg a tánc koronként. A
              primitív ember nemcsak szórakozásból táncolt, hanem vallási
              szertartásainál is felhasználta azt, azután fejlődött csak ki a
              más jelentőségű táncok után a művészi és végül a társadalmi tánc.
              Tehát a tánc maga sohasem volt erkölcstelen és ma sem az, ha azzal
              olyan formában szórakozunk, amely nem lépi át a tisztesség
              határát.
            </p>
            <p className={styles.torzs}>
              Főleg ne ítéljük el magyar ifjúságunkat, ha szívesen táncot, mert
              a táncszeretet éppen olyan faji tulajdonságunk, mint az, hogy
              magyarul beszélünk. Láthatjuk ezt régi följegyzéseinkből. Réthely
              Prikkel Marian "A magyarság táncain" című könyvében említi: pl.,
              hogy az Árpádok korában már foglalkoztak a tánckedv
              megfékezésével. Mint azt az 1279.-i budai zsinat 46. végzése
              mutatja, mely szigorúan meghagyja a plébánosoknak: "Ne tűrjék,
              hogy a nép a temető kertben, vagy magában a templomban táncra,
              kerekedjék." Ennek a tánckedvnek a megfékezésére igen sok törvényt
              hoztak, de kevés eredménnyel. Később is ostorozzák a "táncos"
              magyarokat, mind a nemességet, mind a jobbágyságot. De a tánckedv
              csak megmaradt s ebből látszik, hogy "a régi magyarok a maiaknál
              hasonlíthatatlanul táncosabb nép volt, sőt annyira táncosak
              voltak, hogy kevés párjuk akadt Európában".
            </p>
            <p className={styles.torzs}>
              A tánc fékezését többen megpróbálták, így pl. Vajda Sámuel tihanyi
              apát, ki így ostorozza a jobbágyságot: "A táncot oly buzgón kezdik
              az ifjú cselédek, hogy mindaddig bele nem unnak, míg csípőjüknek
              forgó csontja ki nem marjul és minden bokájuk helyéből ki nem
              ficamodik." Más azt jegyzi meg, hogy "Úgy látszik, a pórnép
              életében a tánc a legfontosabb". Szentpéteri István. "Táncpestis"
              című munkájában elítéli azokat a szülőket, akik gyermekükkel
              együttesen mennek táncolni, azonkívül megveti azokat az idősebb
              embereket, akik már fél bábbal a sírban vannak és mégis minden
              táncalkalmat megragadnak. Tehát ha csak egy ilyen rövid
              áttekintést kapunk is a magyar tánckedvről, nem csodálkozhatunk
              azon, ha fiatal lányaink is szeretnek táncolni, hiszen faji
              örökségként kapták a tánckedvet.{" "}
            </p>
            <p className={styles.torzs}>
              Az Egyház nem kárhoztatja magát a táncot, csupán a velejáró
              kicsapongásokat ítéli el. PI. Pázmány Péter. "Lánynevelés" című
              munkájában a táncot szelíd keretek között megengedhetőnek tartja.
              Tehát nem is a táncon van itt a hangsúly, hanem azon, hogy ne
              legyen az káros lányainkra nézve.
            </p>
            <p className={styles.torzs}></p>
            <p className={styles.alcim1}>Modern tánc</p>
            <p className={styles.torzs}>
              Sajnos már alig-alig táncolják a régi magyar népi táncukat.
              Helyettük a modern táncokat járják, sőt sok helyen még az egyetlen
              csárdást sem tudják, de a tangót, a valcert és más modern táncokat
              annál jobban. Ezzel nem csak a magyar tánc, de a magyar népdal is
              háttérbe szorul, mert helyette a modern táncdalokat éneklik. Pedig
              igen szomorú és félszeg dolog a mezei munkára menő lányoktól és
              szekéren ülő legényektől a legmodernebbi érzelmes slágereket
              hallani. Különösen ezek a lehetetlen, érzelgős és erőltetett,
              beteges szövegű slágerek fertőzhetik meg a fiatallány lelkét. Azt
              nem lehet mondani, hogy a modern tánc minden esetben érzéki, de
              hogy sokkal inkább lehet azzá, mint a magyartánc és hogy sok
              esetben az is, azt leszögezhetjük. Már maga a tánchoz való
              felállás lehetőbbé teszi ezt és még sok más, ami a magyar táncban
              nincs meg.
            </p>
            <p className={styles.torzs}></p>
            <p className={styles.alcim1}>Magyar tánc.</p>
            <p className={styles.torzs}>
              Minden néptánc visszatükrözi a nép lelkét, vérmérsékletét,
              megmutatja az illető nemzet faji tulajdonságait, lelkületét. A
              magyar táncban is sok magyar jellemvonás nyilvánul meg. Elsősorban
              a méltóságteljesség, erős öntudat, büszkeség, a férfiak táncában a
              délceg, férfias magabízás, gyors táncnál a duhaj jókedv,
              erőteljesen, de sohasem ízléstelen formában. A nők táncában a
              kicsapongó jókedv mellett is a nőies tartózkodás, szemérem. - És
              ha a régi magyarok táncát korlátlan táncszeretetük miatt
              kicsapongónak, duhajnak gondoljuk is, melyet sokszor ostoroztak,
              mégsem volt az erkölcstelen és illetlen, hiszen ezt a magyar nép
              erkölcsi, érzéke nem is engedte volna meg.
            </p>
            <p className={styles.torzs}>
              Igazolják ezt a régi magyar táncolás illemszabályai. A tánc
              idejének megszabására fennmaradt közmondás: "Reggeli víg tánc
              estéli bút hozhat". Továbbá, hogy a tánchajhászó öregasszonyokat
              szent Gellért hegyre valónak mondják. - Az öltözködésnek is voltak
              szabályai, nőknél "piros csizma táncba való, sárga csizma sárba
              való". S ha azt mondják is, hogy "ki mint szokja, úgy ropja",
              vagyis szabadon táncol mindenki, ahogy neki tetszik, mégsem
              mehetett senki túlzásba, mert hozzáteszik: "becsületes
              mértékletességgel, szép módjával illik táncolni". A ritmusra
              vonatkozólag pedig az maradt fenn: "amint vonják, úgy kell
              táncolni".
            </p>
            <p className={styles.torzs}>
              A magyar egyéniségnek visszatükröződése lehetetlen a modern
              táncoknál, melyeknek egészen más a vérmérsékletük, ritmusuk és
              erkölcsük. - Mivel azonban a magyar nép igen jó ritmusérzékű,
              mindjárt felfogja és magáévá teszi az idegen táncot. Előfordult az
              is, hogy csárdás zenére foxtrottot láncoltak és mikor ezt valaki
              kifogásolta, azt válaszolták, hogy ez most divat, a neve úri
              csárdás, tánciskolában tanulták.
            </p>
            <p className={styles.torzs}></p>
            <p className={styles.alcim1}>Jó erkölcs</p>
            <p className={styles.torzs}>
              Az erkölcsi nevelés szempontjából igen fontos kérdés, hogyan
              szórakozik, hogyan táncol a fiatalság, Mert egyetlen táncmulatság
              szelleme, ha az a mi követelményeinknek nem felel meg,
              lerombolhatja mindazokat az eredményeket, amelyeket a Lánykörben
              hosszas munkával értünk el.
            </p>
            <p className={styles.torzs}></p>
            <p className={styles.alcim1}>Módszer</p>
            <p className={styles.torzs}>
              Lányainkat tehát ne igyekezzünk eltiltani a tánctól, hanem
              igyekezzünk megszerettetni velük a magyar táncot. Ha ezt elértük,
              már egy lépéssel közelebb jutottunk ahhoz, hogy a mulatozással ne
              rontsák meg a lelküket, mert a magyar tánccal sokkal nemesebben és
              egészségesebben fognak szórakozni. A magyar tánc
              megszereltetésénél igen tapintatosan kell eljárnunk. Nem
              erőszakolhatjuk az ifjúságra, mert ezzel csak elriasztanánk őket
              és a modern táncokat sem tilthatjuk e1, mert hiszen mulatságaikon
              sok helyen már csak ezeket táncolják. Falunként és esetenként
              más-más lehet a helyzet, melynek helyes megítélésére a vezető van
              hivatva.
            </p>
            <p className={styles.torzs}>
              Esősorban lágyköri rendezéseinken újítsuk fel a magyar táncot és
              ha a lányok igazán megszeretik, majd kiviszik ők a faluba is. Nem
              egy helyen kérték már a legények a Lánykör vezetőjét, tanítsa meg
              őket is a szép magyar táncokra. - Ebből a szempontból nagy szerepe
              van a népi ruha elterjedésének is, mert a lányok maguk is érzik,
              hogy népi ruhában modern táncot táncolni igen félszeg dolog.
            </p>
            <p className={styles.torzs}></p>
            <p className={styles.alcim1}>Mit tanítsunk?</p>
            <p className={styles.torzs}>
              Ismét nagy kérdés, hogy melyek azok a magyar táncok, melyeket
              tanítanunk kell. Ahol még vannak eredeti táncok, vagy azok
              maradványai, természetesen legjobb azokat felújítani. Lehet az
              csak pár lépés, mely az eredetiből megmaradt, de ha ezeket
              felhasználjuk és táncoltatjuk, talán-a lányok maguk is próbálják
              majd az egészet újból feleleveníteni és képzelőtehetségükkel,
              táncos jókedvükkel ismét létrehoznak majd valami eredeti szépet.
            </p>
            <p className={styles.torzs}>
              Ha régi, eredeti néptáncot a falunkban már nem találunk, világért
              se gondoljunk magyar tánc címen díszpalotásra és körmagyarra, mert
              ezek magvarok ugyan, de műtáncok, melyeket nem a nép, hanem
              táncmesterek állítottak össze magyar lépésekből, a múlt század
              30-as éveitől kezdve. - Régi, hiteles írások és komoly
              szakirodalom tanulmányozása alapján kiválogatott, egyszerű,
              könnyen betanítható csoportos néptáncokat minden évben közöl a
              Tarisznya, ha ezen kívül nagyobb szabású ünnepségre, esetleg
              Lánynapra szükség volna igazi magyar népi táncra, a központ
              hivatott és szakképzett munkatársai ebben is szívesen állnak
              rendelkezésre.
            </p>
            <p className={styles.torzs}></p>
            <p className={styles.alcim1}>Értékeink.</p>
            <p className={styles.torzs}>
              A magyar néptánc, éppúgy, mint a népdal, a magyar nép költészete.
              Ezt a népművészeti kincset se hagyjuk elveszni, különösen minthogy
              ezzel az erkölcsi nevelés terén is hatni tudunk. Ezen kívül az
              ifjúságnak nemzeti öntudatra való nevelésében is segítségünkre van
              a népi táncok művelése. A nemzeti öntudatnak külsőségekben is meg
              kell nyilvánulnia, sőt annak kihangsúlyozására éppen a külső
              megnyilatkozás szükséges. Az erős faji öntudattal bíró
              nemzetiségek pl. a svábok, tótok, szerbek, nem is hagyták el soha
              népviseletüket, szokásaikat, táncaikat, pedig évszázadok óta
              magyarok között élnek. Mennyivel könnyebb volna ez nekünk, akik
              itthon vagyunk és egymástól sokat láthatunk, tanulhatunk ezen a
              téren,
            </p>
            <p className={styles.torzs}>
              Ha pedig erre ráeszméltünk, érte dolgozni kötelességünk.
            </p>
            <p className={styles.torzs}></p>
            <p className={styles.cim3}>Népi táncok.</p>
            <p className={styles.alcim2}>Egyszerű karikázás.</p>
            <p className={styles.torzs}>
              A lányok körben felállnak. Ki-ki a szomszédjai mögött jobb és bal
              második szomszédjával összefogódzik. A nóta ritmusára egyszerre,
              egy irányban, jobbra, balra lépegetnek. (ingót táncolnak: jobb láb
              kilép jobbra, balt mellé húzzuk, bal láb kilép balra, jobbat mellé
              húzzuk.) Így a kör egyenletes ritmusban mozog: jobbra, balra.
              Ugyanígy táncolhatnak két léptű csárdással is.
            </p>
            <p className={styles.torzs}>
              Táncolhatják úgy is, hogy a jobbra-balra lépegetést és táncolást
              felváltják csak jobbra haladással (jobb láb oldalra kilép, bal
              mellé, jobb tovább jobbra lép stb.) és vissza, balra haladással.
            </p>
            <p className={styles.torzs}>
              Pl. Jobbra kezdve két lépető csárdást táncolnak a nóta elsőkét
              sorára. Utána 6 lógó lépéssel vissza, balra. Ilyen formájában a
              "Réten - réten"- kezdetű népdalra.{" "}
            </p>
            <p className={styles.torzs}>
              Másik formája szintén az előbbi dallamra: balra kezdvén kétléptű
              csárdás, ugyanez jobbra, utána bal lábbal kezdve 4 lépéssel
              haladnak körben, úgy, hogy a lépésnél a jobb láb a bal elé
              kerüljön. A 4 haladó lépés után ismét balra csárdás, jobbra
              csárdás, utána balra a 4 haladó lépés a nóta végéig. A nótát újra
              kezdve a csárdás lépéssel jobbra indulnak s a 4 haladó lépéssel s
              jobbra mennek.
            </p>
            <p className={styles.torzs}></p>
            <p className={styles.alcim2}>Körtánc.</p>
            <p className={styles.torzs}>
              <u>I. változat</u> "Sej, liba, liba, liba..." dallamára.
            </p>
            <p className={styles.torzs}>
              A párok egymás derekát fogva menetirányban körben állnak fel,
              külső kezek csípőn.
            </p>
            <p className={`${styles.torzs} ${styles.torzsInvertedIndentation}`}>
              2 tétovázó lépés (1-re jobb lábbal előre lépünk, 2-re a bal sarkat
              a jobbhoz húzzuk, 3-ra a jobbal előre lépünk, 4-re a bal Lábat
              előre lendítjük. Így folytatjuk bal lábbal előre lépve.)
            </p>
            <p className={styles.torzs}>1 bokázó </p>
            <p className={styles.torzs}>2 tétovázó</p>
            <p className={styles.torzs}>
              1 bokázóval szembe fordulnak (mindkét kéz derékfogása csárdáshoz
              felállnak.)
            </p>
            <p className={styles.torzs}>2 csárdáslépés (jobbra, balra)</p>
            <p className={styles.torzs}>1 páros forgó jobbra</p>
            <p className={styles.torzs}>2 csárdáslépés (balra, jobbra)</p>
            <p className={styles.torzs}>1 páros forgó balra.</p>
            <p className={styles.torzs}>
              A nótát az ismétléstől, a táncot a csárdáslépéstől ismételjük.
            </p>
            <p className={styles.torzs}>
              <u>II. változat</u> ugyanerre a nótára.
            </p>
            <p className={`${styles.torzs} ${styles.torzsInvertedIndentation}`}>
              Az utolsó forgás után úgy állnak fel a táncosok, hogy
              szembekerülnek egymással, mint a csárdásnál, de egymás kezét
              elengedik.
            </p>
            <p className={`${styles.torzs} ${styles.torzsInvertedIndentation}`}>
              2 andalgó lépés (jobbra, balra, tehát egymástól eltávolodva és
              vissza. Andalgó lépés: 1-re jobb lábbal oldalra lépünk, 2-re a
              balt jobb mellé, kissé mögé húzzuk, 3-ra jobbal ismét jobbra
              lépünk, 4-re balt jobb elé oldalt lendítjük.)
            </p>
            <p className={styles.torzs}>1 magánforgó jobbra</p>
            <p className={styles.torzs}>2 andalgó (balra, jobbra)</p>
            <p className={styles.torzs}>1 magánforgó balra </p>
            <p className={styles.torzs}>
              4 cifra jobbra kezdve (Cifra lépés: 1-re jobb lábbal kiugrunk
              jobbra - és balt mellé húzzuk,
            </p>
            <p className={styles.torzs}>
              2-re ismét jobbra kis lépés, balt mellé húzzuk.)
            </p>
            <p className={styles.torzs}>1magánforgó jobbra.</p>
            <p className={styles.torzs}>1 páros forgó jobbra</p>
            <p className={styles.torzs}>
              Ismételni a cifrától és beállni az első változathoz belső
              derékfogással menetirányban.
            </p>
            <p className={styles.torzs}></p>
            <p className={styles.torzs}></p>
            <a id="42"></a>
            <p className={styles.cim2}>Komoly rendezések</p>
            <p className={styles.torzs}></p>
            <p className={styles.alcim1}>Vallásos estek</p>
            <p className={styles.torzs}>
              Hogy lányainkkal megérttessük a liturgia szellemét és az Egyház
              szándékait s valóban átélhessék az egyházi év gyönyörű szakaszait,
              rendezünk velük annak megfelelő, vagy annak hangulatához illő
              vallásos ünnepségeket. Ilyenek pl. Adventi est, Nagyböjti
              emlékezés, Karácsonyi ünnepség stb. Ezeknél nem a produkció a
              legfontosabb, hanem a Lánykör nevelése szempontjából fő1eg az
              előkészület ideje, amely így magától értetőden nem lehet
              kapkodásban eltöltött 1-2 hét, hanem igazi, lelki átélésekkel
              megszépített hosszabb előkészületi idő, amelynek minden napja az
              ünnep hangulatában telik el s szinte már maga is ünnep. Így lehet
              az ünnepség a lányokra és az átélt, átérzett, átgondolt szavakon
              keresztül a közönségre is nevelő halású. Ez persze kizárja magán
              az ünnepségen is a színfalak mögötti kapkodást, izgalmakat, amik
              mind csak a lányoknak ünnepi hangulatát s így közvetve a
              közönségre gyakorolt áldott hatást veszélyeztetik. Inkább adjunk
              egyszerűt, de lelkeset és őszintét, mint üres szavakat ragyogó
              kiállításban. Nem ez a célunk.
            </p>
            <p className={styles.torzs}>
              A lányok ünnepi érzéseiből jut a családnak már az ünnepségre való
              készület ideje alatt is. Az adventi szent várakozásban szívesen
              meggyújtja a lány az adventi koszorút a család asztala a fölött. A
              karácsonyi készülődésben megtanulja, hogyan szerezhet minden
              hozzátartozójának örömöt szegényes körülmények között is, s hogyan
              gyújthatja meg valóban angyalmódra, szinte láthatatlanul a család
              kicsinyeinek a karácsonyfát. S a nagyböjtben megérezteti az
              otthoniakkal, mi az igazi nagyböjt. Nem a zsírtalan főzés szabadon
              meghatározott napokon, hanem az önmegtagadás, magunkba mélyedés
              egészen az Egyház elgondolása és parancsai szerint.
            </p>
            <p className={styles.torzs}>
              Azok a rendezések is, amelyek nem vallási jellegűek, de akár
              komoly, akár vidámabb programmal lépnek a közönség elé, kell, hogy
              mind nevelő értékűek legyenek. Ezekre az előkészületekre ugyanaz
              áll, mint amit a vallásos rendezéseknél mondottunk, ti. hogy ne
              kapkodva készüljenek, hanem valóban az előzetes munka tegyen
              minden szép és nemes gondolatot egészen a leányokévá s így
              biztosítva legyen ne csak a szereplőkre, de a közönségre gyakorolt
              jó hatás is. Akár a komolyabb érzések nemesednek, akár a tiszta
              kedély vidámodik, mind-mind egy szebb élet kialakulását szolgálja
            </p>
            <p className={styles.torzs}></p>
            <p className={styles.alcim1}>Egyházmegyei Lánynap</p>
            <p className={styles.torzs}>
              Minden munkaév végén, minden egyházmegye területén megrendezik az
              odatartozó Lányegyesületek az egyházmegyei Lánynapot. Szeretettel
              folyik a készülődés már hetekkel előbb erre a találkozóra, mert
              itt bemutatja minden egyesület, sőt minden lány, mennyire
              alakította ki magában a falusi lányideált? Mennyire szereti
              társait, mennyire szerény, kedves, áldozatos, türelmes?
            </p>
            <p className={styles.torzs}>
              Az egyházmegyei Lánynapon a püspöki városba vonul be a sok falu
              egyenruhás lánycsapata. Az egyenruhás vagy a községnek
              népviselete, vagy annak a vidéknek rég elfeledett, régi,
              felújított népi ruhája. A nap közös szentmisehallgatással
              kezdődik, amelyen a lányok együtt imádkozzák a liturgikus
              miseimákat, énekelnek s közösen járulnak a szentáldozáshoz. Ez
              adja meg aztán a napnak boldog, szent hangulatát. Utána van a
              közös reggeli, amit a vendéglátó város juttat a lányoknak. Ezután
              következik a szép, színes, felvonulás végig a városon, arra a
              helyre, ahol a műsoros bemutatót tartják a lányok. - A bemutatón
              lehetőleg minden egyesület, sőt minden lány szerepeljen. De mivel
              a műsor nem tarthat tovább két óránál, minden kerület egy számot
              kap, s azt együttesen tanulja meg s mutatja be. A bemutatott
              játékok, táncok, dalok, versek azonban mind gyöngyszemei legyenek
              a magyar népi játék -tánc -dalgyűjteményeknek. Megfelelő anyagot a
              központ vagy az egyházmegyei titkárok készséggel adnak.
            </p>
            <p className={styles.torzs}></p>
            <p className={styles.alcim1}>Kerületi Lánynapok</p>
            <p className={styles.torzs}>
              Egy-egy esperes-kerülethez tartozó Lánykörök, egy központi fekvésű
              község vendég szeretetét veszik igénybe, ha kerületi Lánynapra
              összejönnek. Az ilyen összejövetelnek célja, hogy egyrészt
            </p>
            <p className={styles.torzs}>
              növelje a lányokban az összetartozás érzetét és a nemes
              buzgóságot, másrészt a szülőknek és családtagoknak megszerezze az
              örömet, hogy láthatják kicsiben az egyházmegyei Lánynapot, amelyre
              ők anyagiak vagy idő híján nem tudnak elmenni. - Ha az
              egyházmegyei Lánynapon egy-egy kerület Lánykörei azonos
              műsorszámmal szerepelnek, a kerületi Lánynapon megtarthatják az
              ehhez szükséges összpróbát is. A kerületi Lánynap sikere nagyrészt
              a hely alkalmasságától, az előre kidolgozott változatos programtól
              és a különböző községek lányainak szeretetteljes találkozásától
              függ.
            </p>
            <p className={styles.torzs}></p>
            <p className={styles.alcim1}>Nehézségek elsimítása</p>
            <p className={styles.torzs}>
              Nehézség ezeknél az utazásoknál a költségek előteremtése. De egy
              kis előrelátással megszerezhetjük azt is. Tavasszal majális, télen
              színdarab rendezésévet stb. Egy vasmegyei falu év végi
              záróünnepélye után a sok érdeklődő között csak a fagylaltárulással
              megszerezte útiköltségét. Ismerve a helyi viszonyokat, minden
              vezetőnek a szíve megsúgja, mit lehet tenni.
            </p>
            <p className={styles.torzs}>
              Érdemes megtenni mindent. A Lánynapok élménye egész esztendőben
              szép emlék azoknak a lányoknak, akiknek úgy is kevés igazi szép
              jut ki életükben a lányegyesületen kívül, Ápolja az összetartást,
              az egymás iránt érzett szeretetet s erősíti az öntudatot, hogy egy
              nagy munkának ők is tevékeny részesei lehetnek.
            </p>
            <p className={styles.torzs}></p>
            <p className={styles.torzs}></p>
            <a id="43"></a>
            <p className={`${styles.cim2} ${styles.cim2BottomMargin}`}>
              Színdarabok, műsoros előadások rendezése
            </p>
            <p className={styles.torzs}></p>
            <p className={styles.torzs}>
              A Lánykör életében gyakran előforduló és szükséges rendezéseket
              tárgyaltuk könyvünk különböző fejezeteiben és mindegyikhez
              hozzáfűztük megjegyzéseinket is. - Ebben a fejezetben a rendezések
              terén a tapasztalatok alapján kialakult véleményeket foglaljuk
              össze, melyek átgondolása átsegítheti a vezetőket azokon a
              nehézségeken, melyek leginkább elveszik kedvüket a nyilvános, vagy
              családias rendezésektől. Ezek a tanácsok általánosak,
              használhatóságukat a helyi körülmények nem befolyásolják,
              legfeljebb módosításukat teszik szükségessé.
            </p>
            <p className={styles.torzs}></p>
            <p className={styles.alcim1}>Program</p>
            <p className={styles.torzs}>
              A jó rendezés első feltétele a jó darab. Sajnos a mi irodalmunkban
              nehéz ilyet találni, mert stílusuk túlságosan népieskedő, vagy
              nagyon is városias. Ha akad is stílus szempontjából megfelelő,
              hátra van még a nagy kérdés: van-e benne valami jó, amit érdemes
              megtanítani és lányaink, ifjúságunk lelkében meggyökereztetni,
              Erkölcsi érték nélkül pedig a színarab, vagy bármiféle rendezés
              csak hiuságuk legyezgetésére, fantáziájuk káros elemekkel való
              benépesítésére alkalmas. - A Katolikus Agrárifjúsági
              Legényegyletek Országos Titkársága, röviden KALOT. Budapest IV,
              Cukor u. 3. műsorközpontot állított fel, melyben elsősorban
              legények számára alkalmas színdarabokat gyűjtött össze, de újabban
              Lányköreink is haszonnal fordultak hozzá tanácsért. Ugyanígy
              erkölcsi szempontból mindig kifogástalanok a Szalézi művek
              Rákospalota kiadásában megjelenő művek is. - A mi központunk nem
              terjeszkedett ki erre a külön munkaágra.
            </p>
            <p className={styles.torzs}></p>
            <p className={styles.alcim1}>A szereplés értéke</p>
            <p className={styles.torzs}>
              A falusi ember igen sokra becsüli, ha valaki tud értelmesen
              beszélni, rendesen felelni, nyugodtan és öntudatosan mozogni, ha
              tud énekelni, mesélni, verset mondani, tehát tudja mindazt, amivel
              egyénileg érvényesülhet. Sok falusi lány azért megy a városba,
              hogy ilyen irányban kitanuljon. Sajnos, ez gyakran túlzott
              mértékben is sikerül nekik. Az ifjúság pedig jobban hallgat a
              városból vagy katonaságtól hazajöttekre, mint az értékes, derék,
              de otthon maradt elemre. - A rendezéssel, szerepeltetéssel
              elérjük, hogy fiatalságunk beszédje, modora, mozgása, fellépése
              kedvezően átalakul, csak vigyázzunk a mértékre. Mert nagyon
              ráfizetünk, ha lányaink a szereplésbe túlságosan beleélik magukat
              és a mindennapi életben is grófkisasszonyt, vagy egyéb előkelő
              égi, nem nekik való szerepet fognak játszani.
            </p>
            <p className={styles.torzs}>
              Azzal, hogy a lány a szereplés kapcsán másokra igyekszik hatni,
              akár egyéniségével, akár a megtanult szerep átélésével, lelke
              érzékenységét, hajlékonyságát fokozzuk. Egy igazán átélt szereppel
              kilép a szereplő önmagából, megérti, hogy rajta kívül másféle
              ember is van, hogy annak gondolkozása is lehet helyes a maga
              szempontjából: megérzi a kísértés, a bűnre vivő út síkosságát,
              melyen nagyon könnyű végleg elbukni, átérzi mások fájdalmát,
              szánalom és szeretet ébred szívében, megundorodik a rossztól stb.
              De ennek az életnek is két oldala van. Ha a vezető nem elég éber
              és nem használ ki minden alkalmat a maga céljára, ezen a téren is
              történhetnek olyan sajnálatos elhajtások, melyeket hosszú évek sem
              tudnak többé jóvátenni.
            </p>
            <p className={styles.torzs}>
              Ezt a két szempontot szem előtt tartva válogassuk meg tehát az
              előadásra kerülő darabot, a megfelelő időt, helyet, szereplőket.
              Legyen különösen arra gondunk, hogy rendezéseinkben az egyházi
              évvel pár huzamosan haladjunk. Pl. nagy hiba volna nagyböjt alatt
              a húsvét hétfőjén előadandó bohózatra és táncbemutatóra készülni,
              mert a próbákkal lerontjuk a keresztúti ájtatosságnak és általában
              a böjtnek hangulatát. Ugyanígy őriznünk kell az Ádvent áldott
              csöndjét is. Ádvent a Krisztus-várás, farsang a vigadozás,
              nagyböjt a megtérések ideje. Segítsünk Egyházunknak évenkénti
              lélekmegújító munkájában rendezéseinkkel is.
            </p>
            <p className={styles.torzs}>
              A rendezés a Lánykör anyagi megerősödését is szolgálja. A műsort
              tehát úgy válogassuk össze, hogy az vonzza a közönséget, és
              amennyire csak lehet, tegyük kellemessé vendégeink számára az
              előadást. Pl. nyáron ne rendezzünk zárt helyiségben színdarabot,
              hanem inkább kirándulást, majálist stb. Célszerű változatos és
              rövid programot összeállítani, melyben mindenki megtalálja azt,
              ami neki tetszik. Természetesen nem pályázunk az ízléstelen és
              közönséges emberek tetszésére, még akkor sem, ha ezzel jelentős
              anyagi előnyökről mondanánk le. A belépti díjak szedését, vagy
              önkéntes adományok gyűjtését a helyi viszonyoknak megfelelően
              határozzuk el, mindkét módszer jó. A Lánykör újat és érdekeset is
              vihet be rendezései áltat, ha azzal a népi tradíciókat és a
              jóízlést nem sérti. Így pl. az előadások pontos kezdését, a
              szünetek megrövidítésére népénekek éneklését stb. Érdekes és új
              gondolat egy-egy karácsonyi színdarab hatását mélyebbé tenni
              azáltal, hogy a benne előforduló karácsonyi énekeket a közönség
              együtt énekelje a szereplőkkel. Stb.
            </p>
            <p className={styles.torzs}></p>
            <p className={styles.alcim1}>Előkészület</p>
            <p className={styles.torzs}>
              Az előkészületek idejét, a próbákat nagyon becsüljük meg mert
              ilyenkor sokat nevelhetünk és taníthatunk olyant is, amire máskor
              nem kerül sor. A próbák alatt fegyelmezett viselkedést, teljes
              engedelmességet követelünk meg. A lányok tudják, hogy a rendezés
              nem az ő személyükért történik, hanem közös szent célunkért és
              ettől függ a Lánykör becsülete a falu előtt. Egyéni hiúságukat
              háttérbe kell szorítaniuk, mert ha egy is kevély lesz közöttük, a
              jó Isten nem fogja munkájukat megáldani. A vezető tudja, hogy
              kinek milyen szerep való és kinek-kinek azt adja, amelyikben ő a
              legnagyobb sikert érheti el. Aki ezt nem hiszi el, szerepét
              esetleg visszaadja, vagy egyébként nyilvánítja elégedetlenségét,
              annak a szereptők között nincs helye. A siker mindnyájuktól
              egyformán függ, akár szerepelnek, akár nem, mert aki rendez, vagy
              vendégeket fogad, vagy öltöztet, vagy takarít, vagy imádsággal
              kíséri a többiek munkáját, éppen olyan lényegesen hozzájárult az
              eredményhez, mint az, aki betanulta a szerepét és elmondta azt a
              nyilvánosság előtt.
            </p>
            <p className={styles.torzs}>
              A Lánykör legelső szereplésénél a szülők jóindulatának megnyerése
              célszerű egy élőképet beállítani a műsorba, melynek keretében
              valamennyi lány, aki egyéb szerepekből kimaradt, látható a
              színpadon. Egyébként a szereplőket a szerepekhez válogatjuk a
              lányok egyéniségének megfelelően és nem tekintünk olyan előnyökre,
              amelyekért a lányok egyénileg nem hoztak áldozatot. Olyat lányt,
              aki nem viselkedik kifogástalanul és a Lánykör eszméjét nem
              képviseli lelkesen, még akkor sem szerepeltetünk, ha ügyes
              műkedvelő, vagy jó énekes, vagy gazdag és tekintélyes család
              gyermeke.
            </p>
            <p className={styles.torzs}>
              Lányt fiúszerepben, vagy éppenséggel fiúruhában sohasem léptetünk
              fel, mert ez nagyon ízléstelen dolog és dísztelen látvány. Ha fiúk
              is szerepelnek, ami az ügyes vezető kezében jó nevelő eszköz,
              figyelmeztessük előre a lányokat arra, hogy a próbák alatt fog
              elválni, ki az igazán komoly és jó viselkedésű lányköri tag, és a
              fiúk is a próbák alatt fognak véleményt alkotni róluk. A vezetőnek
              kezdettől úgy kell feltépnie, hogy a fiúk is engedelmeskedjenek és
              fegyelmezetten viselkedjenek. A próba a komoly tanulás ideje;
              szünetekben a fiúk elmehetnek dohányozni, levegőzni stb. A
              lányokkal pedig esetről-esetre megbeszéljük, ha viselkedésükben
              valami hibát találunk és figyelmeztetjük őket, hogy milyem
              látszatot keltett egy-egy szavuk, vagy cselekedetük. Ha a próbákat
              csak késő este tudjuk rendezni, minden utcából vagy környékről
              meghívunk egy-egy megbízható asszonyt is, aki hazakísérje a
              lányokat. Ugyanis nem jó a falu közvéleményét a késő esti fiúkkal
              való hazatéréssel kihívni a Lánykör ellen.
            </p>
            <p className={styles.torzs}>
              A lányok részéről kötelesség munkájukkal, szereplésükkel a Lánykör
              érdekeit szolgálni, a fiúk pedig tartsák szerencséjüknek, ha a
              katolikus Lánykör rendezésein szerepelhetnek. Ha mindjárt legelső
              nyilvános rendezésünknél ilyen közhangulatot sikerül
              kia-lakítanunk, nem lesznek kellemetlenségeink a szereplőkkel. -
              Az mindenesetre nagyon kedves volna a vezetőtől, vagy a plébános
              úrtól, ha a jól sikerült rendezés után egy-egy szentképpel, vagy
              más aprósággal lepné meg a készséges és jóviseletü legény
              szereplőket.{" "}
            </p>
            <p className={styles.torzs}></p>
            <p className={styles.alcim1}>Kivitel</p>
            <p className={styles.torzs}>
              Rendezéseknél elsősorban az izgatottságot kell kiküszöbölni a
              vezetőnek mind saját magából, mind a szereplőkből. A nyugalmat
              először lelkünkben alapozzuk meg, átgondolva, hogy ezt is, mint
              mindent a Lánykör életében, a jó Isten dicsőségére és népünk
              javára tesszük. - Ha a vezető úgy ismerte meg önmagát, hogy a
              rendezéseknél nyugtalan és kapkodó, kérje meg egyik nyugodt
              természetű ismerősét, hogy segítsen neki adott esetben a rendet
              fenntartani. A nyugtalanság ugyanis a vezetőkről feltétlenül
              átragad a szereplőkre, fejvesztett társaság pedig a legjobban
              előkészített rendezést is botrányba tudja fullasztani.
            </p>
            <p className={styles.torzs}>
              Ossza meg a vezető a munkát és a felelősséget arra alkalmas
              ismerőseivel, még inkább a lányköri tagokkal. Tehát bízzon mag
              valakit pl. a kellékek megszerzésével, természetesen odaadva neki
              a megszerzendők pontos jegyzékét. Nagyobb színdarabok előadásánál
              legyen súgó, külön ügyelő, aki a szereplőket a megfelel időben
              beküldi a színpadra, és a színfalak mögött rendet tart. Lámpák és
              reflektorok kezelésével bízzon meg egy ügyesebb gépészt, szerelőt,
              vagy nagyobb diákot, hogy ilyen részletekkel ne legyen gondja és
              izgatottságában esetleg szerencsétlenséget ne okozzon.
              Díszletváltozáshoz hozzáértő ács- vagy asztalosmestert kérjen.
              Egy-egy csomag cigaretta vagy jó szó elég fizetség, a haszon pedig
              felmérhetetlen. A szereplők öltöztetéséhez is kérjen néhány ügyes
              lányt vagy asszonyt, így elkerülheti, hogy a szereplők már 3-4
              órával az előadás előtt ott tolongjanak körülötte egymást izgatva
              és lesodorva egymásról a sokszor csak a szereplés idejére hozzájuk
              erősített ruhát vagy díszt. A függönyhúzók is értsenek a
              függönyhöz, ha éppen összeakadna valahol, azonnal tudjanak
              segíteni. Gyermekek csupa jóakaratból felvonás közben is
              ráeresztik a főszereplő nyakára a függönyt.
            </p>
            <p className={styles.torzs}>
              Feltétlenül legyen több lány vagy rendező, akik a vendégeket
              fogadják és őket a megillető helyre vezetik. Ennek elmulasztásából
              is sok sértődés támadhat, pedig a vezető mindenre nem érhet rá
              ilyenkor, - Mindezekből úgy látszik, mintha a színdarab
              rendezésnél a vezetőnek semmi dolga sem maradna. Dehogy nem marad!
              A vezető simít, csendesít, vigasztal a nem sikerült frizuráért
              vagy ruháért, az utolsó percben kiderülő hiányokat
              leleményességgel pótolja, megadja a szükséges utasításokat, és ami
              a legfontosobb, figyeli és tapasztalatokat gyűjt a következő
              rendezéshez színfalak mögött, színpadon és nézőtéren egyaránt.
            </p>
            <p className={styles.torzs}>
              A pénztáros helyes megválasztása is hozzájárul a vezető
              nyugalmának biztosításához. Feltétlenül két közbecsülésben áltó és
              tekintélyes embert kérünk fel pénztárosnak, akiknek személye és
              viselkedése is tiszteletet parancsol. Két fiatal lánnyal könnyen
              elbánnak; a fiatal legények egymás kedvéért gyakran tesznek olyan
              kivételt, amely az anyagi eredményt károsan befolyásolja. Ezért
              szükséges megbízható és komoly emberek felkérése. Mihelyt a
              pénztárra nincs szükség, a vezető lehetőleg azonnal számoljon le a
              pénztárosokkal egyrészt, hogy ők is felszabaduljanak terhes
              megbízatásuk alól, másrészt, hogy a pénztár se legyen további
              veszélynek kitéve.
            </p>
            <p className={styles.torzs}>
              A szereplőknek a közpénzből való vacsoráztatása olyan csúnya rossz
              szokás, amely ellen a katolikus Lánykörnek feltétlenül és
              erélyesen küzdenie kell, még akkor is, ha emiatt esetleg egy-egy
              ügyes szereplő elmarad. Sokszor elég egy ügyesen elhelyezett
              megjegyzés, hogy vajon a szereplőknek otthon nincs miből
              vacsorázni s úgy gondolják, hogy a közönség az ő számukra
              adakozott a pénztárnál?
            </p>
            <p className={styles.torzs}>
              Ha a Lánykör nem a saját helyiségében tartotta előadását, rakjon
              rendet távozása előtt. Minden Lánykörnek akad egy-két áldozatos
              háziasszonyi tisztséggel kitüntetett tagja, aki hajlandó lesz erre
              a külön munkára. A mások érdekeinek ilyen tiszteletben? tartása
              nagyban emeli a Lánykör tekintélyét és megbecsülését önmaga és a
              falu előtt.
            </p>
            <p className={styles.torzs}>
              A legközelebbi összejövetelt használjuk fel arra, hogy
              megbeszéljük a lányokkal a rendezés tanulságait. Ilyenkor említjük
              meg egyesek szép és áldozatos viselkedését, mások estleges hibáit
              s a rendezésnél szerzett, a lányokra is tartozó tapasztálatokat.
              Ha rendezésünkkel a falunak újszerű és szokatlan dolgot mutattunk
              be, lényeges, hogy annak sikeréről is alakítsuk ki lányainkban a
              megfelelő véleményt, hiszen ez visszakerülve a családokba, jó
              irányba befolyásolja a közhangulatot.
            </p>
            <p className={styles.torzs}>
              Ezen szempotok figyelembevételével elérjük, hogy rendezésünk nem
              csak anyagi hasznot fog jelenteni, hanem lelki és szellemi
              gyarapodást is, mind a lányok, mind az egész falu számára. Ez a
              biztos tudat kárpótolja a vezetőt a sok fáradságért,
              éjszakázásért, nyugtalanságért, melyet egy-egy rendezés a
              legnagyobb körültekintés mellett is jelenteni fog számára.
            </p>
            <p className={styles.torzs}></p>
            <p className={styles.torzs}></p>
            <a id="44"></a>
            <p className={styles.cim2}>Tanfolyamok.</p>
            <p className={styles.torzs}></p>
            <p className={styles.alcim1}>Értelme</p>
            <p className={styles.torzs}>
              A lányköri foglalkoztatás csak egy vasárnapi és legfeljebb egy-két
              hétköznapi délutánra terjed ki. Ez idő alatt ugyan sokat
              nevelhetünk, sok mindenre felhívhatjuk a figyelmet, de alapos
              tudást nem adhatunk az idő rövidsége miatt.
            </p>
            <p className={styles.torzs}>
              Hogy tehát lányainknak egy-egy irányban gyakorlati tudást
              adhassunk, egyszer egy évben tanfolyamot rendezhetünk számukra. Ez
              lehet főző, varró, hímző, szövő, háncsfeldolgozó, általános
              háztartási, csecsemőápolási tanfolyam, amilyent a helyi
              körülmények kívánnak és lehetővé tesznek.
            </p>
            <p className={styles.torzs}></p>
            <p className={styles.alcim1}>Vezetője</p>
            <p className={styles.torzs}>
              A tanfolyamot rendezhetjük saját hatáskörben, ez esetben a
              tanfolyam vezetője a lányköri vezető, vagy a helybeliek közül
              általa felkért egyén; de rendezhetjük a Népművelési Bizottság
              keretében vagy a Földművelésügyi minisztérium segítségével. Ezek a
              tanfolyamok hivatalos úton, idejekorán kérvényezendők.
            </p>
            <p className={styles.torzs}></p>
            <p className={styles.alcim1}>Népművelés</p>
            <p className={styles.torzs}>
              Mozgalmunk, mivel a falu lányainak nevelésével foglalkozik,
              munkájának természete szerint mindig barátságos kapcsolatot
              tartott és tart fenn a Vármegyei Népművelési Bizottságokkal. A
              központ minden munkaév elején évnyitó körlevelében közli a
              Tarisznya következő évi anyagát, hogy ahol lehetséges vezetőink
              be? tudják azt illeszteni a népművelési munkába. Vezetőink ilyen
              irányú munkáját a Népművelés díjazni is szokta, ahol a benyújtott
              munkatervet elfogadja, s ezt a pénzt legtöbben az egyesület
              kiadásainak fedezésére fordítják.
            </p>
            <p className={styles.torzs}>
              Ugyancsak a Népművelési Bizottságok nyújtanak segítő kezet arra,
              hogy a hosszabb lélegzetű és egy-egy szaktárgyat felölelő
              tanfolyamot megtarthassák egyesületeink. Lányaink érdekében ezt a
              lehetőséget igyekezzünk minél gyakrabban kihasználni, s azért
              igyekezzünk szoros kapcsolatot fenntartani az egyes Népművelési
              Bizottságokkal.
            </p>
            <p className={styles.torzs}></p>
            <p className={styles.alcim1}>Célja</p>
            <p className={styles.torzs}>
              A tanfolyamoknak egyetlen célja, hogy gyakorlati hasznot
              biztosítsanak a résztvevőknek. Tehát nem felel meg a célnak egy
              varrótanfolyam, ha a résztvevőknek nincs varrógépjük, vagy
              arravaló pénzük. Hiába való egy főzőtanfolyam, mely kaszinótojás
              és ehhez hasonló ételek elkészítésére tanítja meg a falusi
              lányokat. Nincs értelme a korai zöldségfélék termesztését tanítani
              ott, ahol nincsen értékesítésre kilátás. A Lánykör vezetőjének
              tehát olyan tanfolyamot kell rendeznie, melynek gyakorlati haszna
              van, mert az ott tanultakat vagy egyéni életükben tudják
              gyümölcsöztetni, vagy kereseti lehetőséghez jutnak általa.
            </p>
            <p className={styles.torzs}></p>
            <p className={styles.alcim1}>Előkészítés és rendezés</p>
            <p className={styles.torzs}>
              A tanfolyamoknak elsősorban közhangulatot kell teremteni,
              különösen a szülőknél, akiknek megmagyarázzuk annak értelmét.
              Azután a lányokban ébresztünk kedvet a kereseti lehetőség és a
              tanulás iránt. Nagy költségeket nem fognak vállalni, mert mint
              minden új dologgal, ezzel szemben is bizalmatlanok tesznek. Tehát
              mindent elkövetünk, hogy a tanfolyamhoz anyagi segítséget kapjunk
              akár a helyi intelligencia, akár a megye, vagy az állam részéről.
            </p>
            <p className={styles.torzs}>
              Tanfolyam alatt a lányokat tovább kell lelkesíteni, kihangsúlyozva
              a tanultak hasznát, másképpen elveszítik kedvüket.
            </p>
            <p className={styles.torzs}>
              A Lánykör rendezésében folyó tanfolyam programját állandóan
              ellenőrizni kell, nehogy esetleg a falusi életkörülményeket nem
              ismerő tanfolyamvezető csupa jóakaratból eltérjen az eredeti
              céltól és olyanokat tanítson, aminek a lányok, nem fogják hasznát
              venni.
            </p>
            <p className={styles.torzs}></p>
            <p className={styles.alcim1}>Tanultak értékesítése</p>
            <p className={styles.torzs}>
              Ha a tanfolyamon tanultak értékesítésére sor kerül ne bízza azt a
              vezető az egyes leányokra, mert nekik nem lévén tapasztalatuk és
              tudásuk, könnyen ráfizetnek. Pedig a célunk az volt, hogy
              anyagilag megerősödjenek. Tehát szervezze meg az anyagbeszerzést
              és értékesítést, hogy a haszon biztosítva legyen. Az ügyesen
              megszervezett értékesítés nemcsak a termelőnek biztosítja a
              tisztességes hasznot, de az ezzel felmerülő adminisztrációs munka
              egy külön embernek is adhat kenyeret.
            </p>
            <p className={styles.torzs}>
              Általában tanfolyamot csak az a vezető rendezzen, aki nem sajnálja
              a fáradtságot a tanfolyamon megtanultak továbbfejlesztésétől. Ha a
              kiállítás és záróünnepély után, senki sem törődik többé a
              tanultakkal, érthető, ha a lányok kedvüket veszítik és a sok
              fáradtsággal megrendezett tanfolyam gyakorlati haszon nélkül
              marad.
            </p>
            <p className={styles.torzs}></p>
            <p className={styles.torzs}></p>
          </div>
          <div className="fejezet-szorakozas">
            <a id="45"></a>
            <p className={styles.cim1}>IV. A SZÓRAKOZÁS</p>
            <p className={styles.torzs}></p>
            <a id="46"></a>
            <p className={styles.alcim1}>Testvéregyesületek látogatása</p>
            <p className={styles.torzs}>
              Gyakran panaszkodnak a szülők, hogy egyetlenke gyermekük nem akar
              enni, hiába kedveskednek, kínálgatják, mondanak neki meséket.
              Ilyenkor a józan tanács így hangzik: Gondoskodjanak másik gyermek
              társaságáról a kis éhségsztrájkoló számára, legalább az étkezés
              idejére. És az eredmény legtöbb esetben meglepő, a két kis gyermek
              együtt nagy étvággyal eszik, mert egyik a másiktól kedvet kap.
            </p>
            <p className={styles.torzs}>
              Nagyjában ilyen eredményt érünk el akkor is, ha a szomszédos
              Lányköröknek megadjuk a lehetőséget egymás látogatására. Ha egy
              faluban Lánykör alakul, a lányok ugyan kedvvel járnak, de akadnak
              a faluban olyanok is, lányok és legények, akik kigúnyolják,
              nevetségessé teszik, vagy más módon kisebbítik a Lánykört és
              azokat, akik oda járnak, akik a vezető szavára hallgatnak stb.
              Falusi ember életében a közvélemény, a "Mit mondott a világ"
              sokkal nagyobb szerepet játszik, mint másoknál. Nem is vehetjük
              rossz néven, ha lányainkat egy-egy kedvezőtlen, vagy gúnyos
              vélemény egészen más irányba tereli, mint amilyenbe mi szeretnénk
              terelni őket.
            </p>
            <p className={styles.torzs}>
              Ha megfélemlített lányainkat átvisszük a szomszéd falu Lánykörét
              meglátogatni, egyszerre elsimulnak bennük ezek a kellemetlen
              érzések, hiszen a másik falu leányai is éppen úgy járnak a
              Lánykörbe és engedelmeskednek a vezetőjüknek, mint ők. S a lányok
              nem a falu hitványai, hanem éppen az ügyesebbek, kedvesebbek,
              milyen barátságosan, testvériesen fogadták őket, milyen kedves
              vendéglátók voltak, milyen szépen tudnak énekelni, verseket
              mondani, stb. - Látják, hogy nincsenek egyedül, még a gyengék és
              kételkedők is kedvet kapnak a többiekkel együtt a közös célért
              küzdeni. Elragadta őket az új és szokatlan barátkozási lehetőség
              varázsa. Gyakran megtörtént, hogy egyetlen ilyen látogatás a
              lanyha és tétovázó egyesületi életet pezsgő, vidám és erőteljes,
              munkává alakította át.
            </p>
            <p className={styles.torzs}>
              De nevelési szempontjaink érdekében is kihasználhatjuk az ilyen
              látogatást, ha megfelelő előkészülettel megyünk, vagy fogaduk a
              hozzánk jövőket és nem bízzuk a véletlenre a találkozások sikerét.
            </p>
            <p className={styles.torzs}>
              Néhány gyakorlati tanácsot közlünk tapasztalataink alapján,
              különösen azok számára, akik még nem rendeztek ilyen látogatást,
              vagy akik nem rendezték azt sikerrel. Hátha segíteni tudunk ezzel
              is.
            </p>
            <p className={styles.torzs}></p>
            <p className={styles.alcim1}>Előkészület</p>
            <p className={styles.torzs}>
              Elsősorban a vezetőknek kell megkeresnünk az alkalmas
              lehetőségeket. Megfelelő közlekedés, helyiség, terep, helyi
              viszonyok mind számításba jönnek ilyenkor. Alkalmas időpontot
              keresünk, lehetőleg nem búcsúval, vagy más nagy csődülettel
              összekötve a mi programunkat, mert ilyen estekben nehéz a magunk
              elgondolása szerint vezetni a nap eseményeit.
            </p>
            <p className={styles.torzs}>
              Előkészítjük a látogatást leányainknál is. Figyelmeztetjük őket az
              általános illemszabályokra, melyek a vendéglátót, illetve a
              vendéget kötelezik. Felébresztjük becsvágyukat, nehogy szégyent
              hozzanak a falura, Lánykörükre. Megmagyarázzuk, hogy sokféle
              természetű a lány, valószínűleg nem éppen olyanok lesznek
              testvéreink, amilyennek magunkat képzeljük, vagy szeretnénk.
              Szeretettel és türelemmel legyünk egymás iránt és tiszteljük a
              többiek elgondolásait, akaratát, ha az a mienkkel nem is egyezik.
              Megmagyarázzuk, hogy a társas együttlét áldozatokat kíván az
              egyéntől, mert a közösség kívánsága és kedvtelése fontos ilyenkor.
              Tehát fáradtságot, kedvetlenséget, egyéb zavaró és kényelmetlen
              érzésünket lenyeljük és nem zavarjuk vele a többiek mulatságát.
              Kedvesek és barátságosak leszünk mindenkivel, de különösen a
              legkisebbekkel és legigénytelenebbekkel, nehogy a mellőzöttség
              fájjon nekik. Szerények és hálásak leszünk a kapott kedvességért,
              figyelemért és igyekszünk mindenkiben kellemes benyomásokat
              ébreszteni.
            </p>
            <p className={styles.torzs}>
              Előkészületképpen megtanulunk egy-két éneket, verset, esetleg
              rövid és kedves páros jelenetet, amit, ha alkalom kínálkozik, a
              többiek szórakoztatására előadhatunk. Nagy és komoly
              készülődéseknek természetesen ilyen alkalmakkor nincs helye, mert
              az elvonná a leányokat az eredeti, barátkozási céltól és
              nyugtalannap izgatottá tenné őket.
            </p>
            <p className={styles.torzs}></p>
            <p className={styles.alcim1}>Rendezés</p>
            <p className={styles.torzs}>
              Az érkezők énekkel, mondjuk a Jeligével üdvözöljék a
              vendéglátókat, kik viszont menjenek vendégeik elébe, pár szál
              virággal kedveskedjenek nekik, hogy az első benyomás már kedves
              legyen. Fogadják őket egyszerűen, szeretettel, mint testvéreiket,
              hogy az első találkozás megadja a beszélgetéshez a bizalmas és
              barátságos alaphangulatot.
            </p>
            <p className={styles.torzs}>
              A nap programját a vendéglátók állítják össze előre. Esetleg közös
              ének a szentmisén, vagy közös áldozás, délelőtt kis ünnepség, vagy
              a falu látványosságainak megtekintése. Ha ilyen nincs, látogatás a
              plébános úrnál, vagy a vezetőnél, stb.
            </p>
            <p className={styles.torzs}>
              Elemózsiát a vendégek hoznak magukkal, a kedély fokozására és
              anyagi szempontból is. De a vendéglátók feltétlenül kedveskedjenek
              meleg kávéval, levessel, vagy édességgel, mert mit tagadjuk: ahol
              az ember eszik, ott érzi magát otthon. Alkalmas dolog - ha
              megoldható - az ebédet együtt elfogyasztani, mert ilyenkor
              szabadulnak fel egészen az esetleg még félénk vagy tartózkodó
              lányok is. - A délután programorját játékkal, szórakozással,
              esetleg kis műsor bemutatásával töltik, melynek keretében mindkét
              egyesület egyenlő mértékben érvényesül. Nagyon vigyázzanak a
              vendéglátók, hogy vendégeik érvényesülési lehetőségét meg ne
              nyirbálják, sőt ha azt látják, hogy a verseny az ő javukra dőlne
              el, ne használják ki a helyzetet és inkább titkolják el olyan
              ügyességüket, mellyel esetleg a többieket elkedvetlenítenék. Ha a
              látogatás csak félnapos és szentmisehallgatásra nincs mód,
              gondoskodjunk valami egészen rövid, de komoly és tartalmas
              programpontról is, pl. egy rövid kis előadás a szeretetről, vagy
              egy Mária szobor, feszütet előtt elmondott litánia stb.-ről,
              nehogy a túlságos jókedv féktelenségbe csapjon át. Hadd érezzék,
              tudják a lányok, hogy a Lánykör komoly és szép célját még
              szórakozás közben sem szabad elfelejteni.
            </p>
            <p className={styles.torzs}>
              Ha a lányoknak egyenruhájuk van, feltétlenül abban menjenek
              látogatóba és abban fogadják vendégeiket, mert ha valamikor, ilyen
              alkalmakkor kell kifejezniük az összetartozást, a testvériséget
              külsőleg is. A vezető pedig ne igyekezzék kedvességben, jóságban,
              kedélyességben, ötletességben és csinosságban felülmúlni vezető
              testvérét, mert a lányok éber szemmel lesik, hogy milyen címen
              nézhetnék le a szomszéd Lánykört s ha más lehetőség nincs, a
              vezetője miatt fogják lenézni a maguk gyermekes elgondolásai
              szerint. Ez bennük nem rosszakarat, hanem ösztönös vágy a
              kiválóságra, az érvényesülésre s ebben az irányban sokkal hamarabb
              megvan a véleményük, mint sem azt messziről nézve gondolnánk.
            </p>
            <p className={styles.torzs}>
              A nap befejezése, mint utolsó élmény szintén nagyon sokat jelent
              és döntő fontosságú. A vendéglátók kísérjék el a vendégeket az
              állomásra, vagy más indulási ponthoz, énekeljék el még egyszer a
              Jeligét, búcsúzzanak a viszontlátásra és az induló vonat, vagy
              kocsik felé lengessék kendőiket. Hányszor mentette meg a kétes
              kimenetelű látogatás sikerét az utolsó kendőlengetés, mely
              kiegyenlítette a napközben felmerült ellentéteket is!
            </p>
            <p className={styles.torzs}></p>
            <p className={styles.alcim1}>Tanulságok</p>
            <p className={styles.torzs}>
              Mint minden rendezést, a testvéregyesületek látogatását is kövesse
              egy józan és komoly megbeszélés, amelynek azonban nem szabad
              véletlenül sem pletykázásban, megszólásban kimerülnie. Ezen a
              megbeszélésen mondják el a lányok is tapasztalataikat, a vezető is
              figyelmeztesse őket minden dicséretes vagy megrovandó eseményre,
              amely esetleg az ő figyelmüket nem kötötte le. - A befejezés
              természetesen jó feltételekben és tervezgetésekben bővelkedik,
              arra az esetre, ha visszakapjuk vagy visszaadjuk a látogatást.
            </p>
            <p className={styles.torzs}></p>
            <p className={styles.torzs}></p>
            <a id="47"></a>
            <p className={styles.cim2}>Kirándulás</p>
            <p className={styles.torzs}></p>
            <p className={styles.alcim1}>Rendezésének módja</p>
            <p className={styles.torzs}>
              Sokan azt hiszik, hogy kirándulást rendezni nagyon könnyű. Csak
              annyi, hogy összecsomagolunk egy rántott csirkét, égy kis édes
              tésztát és egy szép reggelen elindulunk. Aztán lesz, ami lesz. -
              Pedig egy jó kirándulást megrendezni művészi teljesítmény a vezető
              részéről, mert sok körültekintést, gondosságot, figyelmet és
              kedélyt feltételez.
            </p>
            <p className={styles.torzs}></p>
            <p className={styles.alcim1}>Előkészítés</p>
            <p className={styles.torzs}>
              Kezdjük mindjárt azon, hogy kiket hívunk meg Nagyon fontos, mert a
              szabad természetnek valami ellenállhatatlan varázsa van a lelkileg
              műveletlen emberekre: minden igaz ok nélkül szabadosan kezdenek
              viselkedni, és ebben alig ismernek határt. Nagyon lényeges tehát,
              hogy a vezető megválogassa azokat, akiket magával visz a
              kirándulásra. Még az egyébként komoly családapákban sem bízunk meg
              teljesen, mert gyakran megesik, hogy jóakaratból egy kis alkoholt
              visznek, vagy hozatnak a tett helyére és ezzel rontják el az
              egyébként szépnek ígérkező napot. Tehát vigyázat!
            </p>
            <p className={styles.torzs}>
              Nem kevésbé fontos lányaink előkészítése. Kezdjük ezt a kirándulás
              igazi céljának megmagyarázásával. Felüdülés, felfrissülés,
              kedélyes együttlét, a természet szépségeinek élvezése stb. Nem
              feltűnési lehetőség, tehát nem kell másként viselkedni, mint bent
              a faluban. - Nem divatrevü, tehát kényelmes cipőt, kiránduló ruhát
              (egyszerű, mosó, bő) veszünk fel és feltétlenül viszünk kendőt,
              vagy kis kabátot is magunkkal estére. Nem eszem-iszom, dúskálási
              lehetőség, vagy teherhordás. Tehát csak annyi ételt viszünk
              magunkkal, amennyit éppen megeszünk egy nap alatt és lehetőleg
              könnyen ehető és könnyen csomagolható, dolgokat. (Melyek azok?)
              Valakit a lányok közül megbízunk azzal, hogy cérnát és tűt hozzon
              magával, ha esetleg valakinek elszakad a ruhája, meg lehessen
              javítani. A másik lány kis dobozban mentőszekrénykét hozzon
              magával. Majdnem bizonyos, hogy nem lesz reá szükség, mégis jó, ha
              a lányok gondossághoz szoknak. - Kijelöljük, hogy ki hozzon
              magával labdát, egyéb játékszereket, melyekre odakint szükségünk
              lesz. - Ezen kívül megacélozzuk lányaink türelmét, akaraterejét az
              esetleges fáradtsággal, esővel napsütéssel szemben és másnap
              reggel pontosan elindulunk.
            </p>
            <p className={styles.torzs}></p>
            <p className={styles.alcim1}>Hely</p>
            <p className={styles.torzs}>
              De hová? - Ha van szép kirándulóhely a közelben, ahol a
              természetben gyönyörködni lehet, feltétlen oda, mert finomítja a
              lelket a szépnek látása. De ha nincs - az sem baj, Olyan helyet
              kell választani, ahol le lehet kényelmesen ülni, árnyék is akad,
              játszáshoz szabad térség és ivóvíz. Lényeges, hogy a vezető
              pontosan tudja, hogy hova mennek és ismerje egészen jól az utat.
              Ha nem ismeri, legyen megbízható vezető, aki nem téved el, és
              tanácstalanságával nem kedvetleníti a többieket.
            </p>
            <p className={styles.torzs}></p>
            <p className={styles.alcim1}>Program</p>
            <p className={styles.torzs}>
              Ha csak a mi lányainkkal megyünk, könnyebb a helyzetünk. Igaz,
              hogy a program változatosságáról és folytonosságáról nekünk kell
              gondoskodni, de ha ezt előre elgondoltuk, nem érhetlek
              meglepetések. Ez persze nem jelent görcsös ragaszkodást a saját
              akaratunkhoz. Hiszen a kirándulás a lányokért van, ha ők ajánlanak
              játékot, játsszuk azt is szívesen velük, csak a rendre vigyázzunk,
              s ha ők megakadnak, legyünk készenlétben a mi terveinkkel.
            </p>
            <p className={styles.torzs}>
              Ha férfi ifjúság is van velünk, vagy esetleg délutánra kijöttek a
              meghívottak, nagyon vigyázzunk, hogy a lányaink állandóan szem
              előtt legyenek. Veszélyes dolog ilyenkor egy-egy legénnyel
              elandalogni a többiektől távol. A kísértés nagy és a fiatalság
              ereje meglehetősen kicsi. Szemmel kell tartani őket és szíves
              szóval, feltűnés nélkül bevonni ismételtén a közös szórakozásba
              azokat, akik távolodni igyekeznek. Ha szükséges, a komoly
              rendreutasításnak is helye van, de a nyilvános megszégyenítés
              nagyon fáj, ezzel a fegyverrel csak végszükségben éljünk.
            </p>
            <p className={styles.torzs}>
              A napi programból ne hiányozzék most sem a rövid, komoly rész,
              mely jó lesz arra is, hogy a kedves és vidám hangulatot védje a
              túlzásoktól. Nem baj, ha a legények is ott vannak, olyat találunk
              ki, hogy nekik is szóljon, vagy ők is részt vehessenek benne pl.
              közös ájtatosság stb. Nem fognak megijedni tőle, sőt becsülni
              fogják az ilyen, számukra szokatlan szórakozást. Ha tánc van, a
              vezető vegyen részt benne szívesen, egyet-egyet forduljon minden
              legénnyel, aki felféri, csak bele ne melegedjék a mulatságba, mert
              az ő kötelessége az őrködés és lányainak mulattatása. Egyszerre
              pedig mindkettőt nem lehet csinálni.
            </p>
            <p className={styles.torzs}></p>
            <p className={styles.alcim1}>Hazatérés</p>
            <p className={styles.torzs}>
              Mielőtt a társaság hazafelé készül, mindenki szedje össze az
              eldobott zsíros papírokat, ételhulladékot, ha ezt az ebédelésnél
              nem tették volna meg és égessék el garmadában. Minősíthetetlen
              cselekedet egy kiránduló részéről, ha a hulladékokat nem takarítja
              el az utána jövők szemei elől. Erre önmagunkat is, lányainkat is
              szigorúan ráneveljük.
            </p>
            <p className={styles.torzs}>
              Mikor a falu felé közeledünk, rendezzük el a sorokat s ha nincs
              még nagyon késő este, gyújtsunk rá egy jó ritmikus népdalra. Az
              éneklésre könnyebben menetel a fáradt ember, vidámságát
              visszanyeri és kellemes lesz utolsó, élménye a kirándulásról. - De
              nem árt a falu figyelmét sem felhívni az énekkel arra, hogy itthon
              vagyunk, így legalább nem érhet vád, hogy sokáig voltunk és az
              esetleg elmaradozókról is fogják tudni otthon, hogy a
              kirándulásról a többiek már rég hazajöttek.
            </p>
            <p className={styles.torzs}></p>
            <p className={styles.alcim1}>Utóhangok</p>
            <p className={styles.torzs}>
              Ha voltak, akik a Lánykörnek szívességet tettek, fuvart adtak a
              csomagoknak, vagy megvendégelték a lányokat, vagy zenéről
              gondoskodtak, vagy a rendre segítettek felügyelni, azoknak,
              mielőtt a társaság széledni kezd, a lányokkal közösen mondjunk
              köszönetet. Így a kötelezettségnek könnyű szerrel eleget tettünk,
              lányaink is megtanulják, hogy hálásnak lenni illendő és nemes
              dolog.
            </p>
            <p className={styles.torzs}>
              A tanulság megbeszélését természetesen a kirándulás végéről sem
              hagyjuk el és gondoskodjunk arról, hogy a lányokon keresztül erről
              a rendezésünkről is kialakuljon a faluban a megfelelő közvélemény.
            </p>
            <p className={styles.torzs}></p>
            <p className={styles.torzs}></p>
            <a id="48"></a>
            <p className={styles.cim2}>Ozsonna a Lánykörben</p>
            <p className={styles.torzs}></p>
            <p className={styles.alcim1}>Célja.</p>
            <p className={styles.torzs}>
              Az ilyenfajta rendezéseknek majdnem kizárólagos célja a fiatalság
              szórakoztatása. Nem kívánhatjuk ugyanis lányainktól, ha azok
              fiatalok és egészségesek, hogy egyformán éber figyelemmel és
              lelkesedéssel kössék le magukat a mozgalomhoz, ha nem adunk nekik
              módot és lehetőséget, hogy kedélybeli energiájukat levezessék és
              szórakozzanak. Legalább is annyit, amennyit a Lánykörön kívül
              szórakozhatnának. - Ezért szoktuk a munkás és komoly téti
              hónapokat itt-ott szórakoztató rendezésekkel élénkíteni.
            </p>
            <p className={styles.torzs}></p>
            <p className={styles.alcim1}>Értelme</p>
            <p className={styles.torzs}>
              Az étkezés lényeges késze a szórakozásnak. Nem mintha éhesek
              lennének, de a fiatalság nagyon kedélyesnek találja a közös
              étkezési lehetőséget és ozsonnázás közben sokkal könnyebben
              összebarátkozik egymással, vagy vezetőjével, mint egy
              kirándulá-son, bálon, vagy más alkalommal.
            </p>
            <p className={styles.torzs}>
              Egy csésze kakaó, vagy tea, ami reájuk a szokatlanság ingerével is
              hat, nem kerül sokba, hozzá egy sütemény és több nem is szükséges.
              - Az anyagiakat előteremthetjük a nagylelkű jótevőktől, vagy
              fedezhetjük a Lánykör pénzéből is. De összehozzák maguk a lányok
              is szívesen s a végén mégis úgy érzik, hogy megvendégelték őket. -
              A fiatalságnál az illúziónak nagy szerepe van.
            </p>
            <p className={styles.torzs}>
              Igen jó alkalom kínálkozik ilyenkor arra, hogy egyes
              illemszabályokra, apróbb udvariasságokra felhívjuk a figyelmüket.
              A háziasszonyok, kik az ozsonnát felszolgálják, boldogan
              szorgoskodnak s ha a kérdést megfelelő hangon tesszük fel,
              bizonyosan sokan fognak jelentkezni a rendrakásra és mosogatásra
              is.
            </p>
            <p className={styles.torzs}></p>
            <p className={styles.alcim1}>Programja</p>
            <p className={styles.torzs}>
              Ha a lányok maguk között rendezik kis délutáni mulatságukat, úgy a
              vezető előre gondolja el a programot, még az új játékokat és az
              ismerteket is, ahogy egymás után következni fognak. Közben
              élénkítse a hangulatot közös énekléssel, esetleg egy titokban
              betanított tréfás páros jelenet előadásával és feltétlenül mondjon
              el a lányoknak egy szép és tanulságos, rövid mesét, hogy ne múljon
              el együttlét néhány komoly szó, vagy lelki gyara-podás nélkül.
            </p>
            <p className={styles.torzs}>
              Ha legények is hivatalosak a "teára", vagy ozsonnára, valószínű,
              hogy a fiatalság táncolni vágyik. Ma már a rádió alkalmas műsora,
              vagy egy gramofon kielégíti a kedélyes ifjúság minden igényét, sőt
              egy szál hegedűs, harmonikás is ki tudja váltani bármilyen
              egyszerű játékával a megfelelő hangulatot. S ha nem tudja
              kiváltani, akkor valami baj van a fiatalságunk lelkében. Ne
              igyekezzünk ezeknek a családias és kedélyes összejöveteleknek
              költséges és nagyszabású keretet adni, csak kedély legyen és
              tisztalelkű fiatalság, akkor a sikerhez semmi sem hiányzik.
            </p>
            <p className={styles.torzs}>
              A legényektől azonban minden körülmények között kívánjuk meg a
              kedves és szerény viselkedést. A mai fiatalemberek, ha még oly
              egyszerűek és falusiak is, szeretnek könnyednek, szellemes
              társalgónak, tréfás és bohém udvarlónak látszani. S valljuk be, ez
              nem mindig sikerül nekik. Könnyen fajulhat a beszélgetés és
              mulattatás ízléstelen, szerénytelen, nagyhangú neveletlenkedéssé,
              amihez nem jó, ha lányaink a mi jelenlétünkben hozzászokhatnak. A
              lánykör erkölcsi tekintélye, a lányok finom viselkedése és a mi
              egyéniségünk kell, hogy biztosítson egy olyan hangot, amely nem
              kellemetlen a kényes fülűeknek sem.
            </p>
            <p className={styles.torzs}>
              Éppen ezért fiúkkal közös szórakozást csak akkor rendezzünk, ha
              lányainkat megneveltük annyira, hogy rajtuk keresztül a fiúkra is
              hatni tudunk. - Ezért ne hívjunk, sőt ne engedjünk idegen, nem a
              Lánykörhöz tartozó lányt a mulatságainkra, nehogy illetlen, vagy
              szerénytelen viselkedésével. melyet - nem lévén leányköri tag -
              korlátozni nem tudunk, elrontsa a mieink mulatságát is.
            </p>
            <p className={styles.torzs}>
              Rendezhetjük a teát, vagy ozsonnát úgy is, hogy a lányok
              összehozzák a hozzávalót, süteményeket is kérnek az úri házaktól,
              s a vendégeknek eladják. Jó jövedelmi forrásnak bizonyult az ilyen
              rendezés. De a vezetőnek ilyenkor kettőzötten kell őrködnie, mert
              az idegen vendégek között akadhat nem közéjük való is. Ilyen
              alkalmakkor tanácsosabb csak játékkal, vagy családias kis műsorral
              szórakoztatni a jelenlevőket, mert ez nem olyan veszélyes, mint a
              tánc.
            </p>
            <p className={styles.torzs}>
              Az ozsonnát tehát rendezhetjük egész szűk körben, csak
              lányainkkal, családias együttlét kedvéért, rendezhetjük fiúkkal a
              lányainkkal, családias együttlét kedvéért, rendezhetjük fiúkkal a
              tánc kedvéért és rendezhetjük vendégekkel a bevétel kedvéért. A
              különböző céloknak megfelelően, különböző eljárásokat alkalmazunk.
            </p>
            <p className={styles.torzs}></p>
            <p className={styles.torzs}></p>
            <a id="49"></a>
            <p className={styles.cim2}>Bál a Lánykörben</p>
            <p className={styles.torzs}></p>
            <p className={styles.alcim1}>Értelme</p>
            <p className={styles.torzs}>
              A Lánykörbe járó lányok fiatalok, jókedvűek, tele vannak
              életenergiával és egészséges testük-lelkük természetesen
              szórakozást is igényel. Ha ettől túlzott szigorúsággal eltiltjuk
              őket, tudtunk nélkül, a hátunk mögött, bűnös utakon keresik azt
              meg. A tisztességes szórakozás nem bűn. Az Egyház sem tiltja, csak
              azt hangsúlyozza, hogy ne nemesítsük meg és istengyermeki
              öntudatunkat a szórakozások közepette se veszítsük el. - Jó ezeket
              a gondolatokat a bálra valókészület lázas pillanataiban a
              lányokkal megbeszélni. Mondjuk el nekik, hogy a szemérmes
              tartózkodás teszi vonzóvá a fiatal lányt és nem a nekivadult,
              korlátokat nem ismerő féktelenség. Éber öntudatukat, világos és
              tiszta észjárásukat ne bolondítsa meg a zene érzéki lüktetése és a
              legények nyájas fülbesugdosása. Magyarázzuk meg nekik, hogy a tánc
              örömét az egyenletes, ütemes mozgás teszi s ez nem lehet ürügy
              arra, hogy helytelen viselkedést engedjenek meg akár maguknak,
              akár másoknak. Ha a szép tánc megmarad tisztának, a lélekben is
              tiszta örömök fognak tanyázni és a szép lélek visszatükröződik
              egész külsejükön. Az ilyen lányok mondhatók igazán szépnek.
              Visszagondolni is milyen jó lesz az olyan bálra, ahol megőrizték
              női méltóságukat és nem kell pirulva hallgatniuk lelkiismeretük
              vádoló szavát.
            </p>
            <p className={styles.torzs}></p>
            <p className={styles.alcim1}>Rendezése</p>
            <p className={styles.torzs}>
              Legyen a Lánykör bálja esemény a faluban. Emlegessék sokáig, és ne
              találjanak benne semmi kifogást. Ezt a vezető csak előrelátó,
              ügyes rendezéssel tudja elérni. A meghívottakat kelt először is
              gondosan kiválogatni. Értjük ezt főleg a legényekre. Duhajkodó,
              részeges, illetlenül táncoló legények jobb ha távol maradnak. Az
              ismerős komolyabb legényeket a lányok meghívhatják, de adjuk
              tudomásukra, hogy a legények viselkedéséért ők a felelősek. Ha a
              lányok tűrik, a legények sokat megengednek maguknak. De ha a
              lányok tartózkodók és az illem szabályait mindig szem előtt
              tartják, a legényeknek, eszükbe sem jut helytelenkedni. Mindezek
              nem zárják ki azt, hogy a lehető legjobb hangulat ne legyen a
              bálon. A jókedvnek nem kell szemtelenségekkel karöltve járnia.
              Könnyen hozzá lehet szoktatni a legényeket is, hogy a lányköri
              bálon választékos és rendes hang a divat. Ennek nincs semmi
              akadálya már csak azért sem, mert lélektani tény, hogy
              ünnepélyesebb alkalmakkor mindenki különbnek szeret látszani.
              Különösen áll ez a fiatatságra, hiszen épen abban a korban van,
              amikor legjobban óhajt tetszeni.
            </p>
            <p className={styles.torzs}>
              A bál zavartalan lefolyását és a tisztességes nyugodt alaphangot
              csak akkor tudjuk biztosítani, ha alkoholt nem engedünk behozni a
              bálterembe. Ha a legények szeszt isznak, azonnal féktelenek és
              veszekedésre hajlamosak lesznek s megtörténhetik, hogy a lányköri
              bálnak szomorú kimenetele lesz. Szesz nélkül is lehet jól mulatni,
              szomorú is volna, ha fiatalságunk jókedvét csak a bor hozná meg. -
              Kifogásul szokták felhozni, hogy csak a kocsmában van a bál
              rendezésére alkalmas terem és egyrészt a kocsmáros nem mond le
              szeszkimérési jogáról, másrészt a legények sem jönnek el, ha nem
              ihatnak. Sajnos sok helyen tényleg csak a kocsmaterem áll
              rendelkezésünkre, kultúrház vagy nincs, vagy kicsi. Ilyenkor
              kössünk egyezséget a kocsmárossal. Megoldás mindenképpen
              kínálkozik, csak tehetetlenül és közömbösen ne viselkedjünk. A
              legényeket pedig első alkalommal a kíváncsiság, később a jól
              sikerült mulatságok emléke feltétlenül odavonzza a Lánykör
              "száraz" báljára.
            </p>
            <p className={styles.torzs}>
              A lányköri bál időpontját soha ne tegyük szombat estére. A
              következő vasárnapi szentmise hallgatása forog így veszélyben. A
              Lánykör ne szolgáltasson bűnre vezető alkalmat a falu népének,
              hiszen neki kell a vallási kötetesség teljesítésben legelöl
              járnia.
            </p>
            <p className={styles.torzs}>
              A rendezők és pénztárosok idősebb komolyabb férfiak legyenek, akik
              az esetleges kellemetlenségeket nyugodtan el tudják hárítani és el
              tudják távolítani az izgága veszekedő legényeket. 6-8 rendező
              elég, kik karjukon fehér karszalaggal fogadják az érkező
              vendégeket. A fogadtatás nagyon fontos, mert ha a rendezők
              előzékenyek, mindenki elégedett. Sokszor az első benyomások
              teremtik meg a bál hangulatát. A bál este, pontosan 8 órakor
              kezdődjék és éjjeli 2 óránál tovább ne tartson. Ezzel egyrészt
              rendre és pontosságra szoktatjuk leányainkkal együtt a falu népét
              is, másrészt a sokáig húzódó ízléstelen hajnali dáridóknak is
              végét vetünk. Éjfél után, főleg 2 órán túl már úgy is erőltetett a
              vigasság s a tánc nem egyéb, mint az idegek lázas rángatódzása.
            </p>
            <p className={styles.torzs}>
              A lányköri bálon csak a tagok vehetnek részt. Idegen lányokat
              egyáltalában nem szabad meghívnunk. Először is ezek nem tartozván
              a vezető fennhatósága alá, szavát semmibe sem veszik és helytelen
              magaviseletükkel rossz példát adnak a lányköri, lányoknak is.
              Másodszor, ha olyan nagyon akarnak más, tisztességes falubeli
              lányok részt venni a mi bálunkon, lépjenek be a Lánykörbe és akkor
              jöhetnek. Furcsa lenne, ha egyes lányok csupán mulatni akarnának a
              Lánykörben, viszont a komoly munkából nem vennék ki a részüket.
            </p>
            <p className={styles.torzs}>
              A lányok a bál megkezdése előtt legalább egy fél órával
              gyülekezzenek az egyik mellékszobában. Öltözetük egyforma legyen.
              Ezt legjobban a lánykári egyenruha megcsináltatásával érhetjük el.
              Már hónapokkal előbb hangoztassuk, hogy ha úgyis kapnak új-ruhát,
              az egyenruhát kérjék. Hirdessük ki, hogy a közös körtáncban csak
              az egyenruhások vehetnek részt. Magyarázzuk meg nekik, hogy a
              lányköri ruhában sokkal csinosabbak és szebbek, mint a különféle
              elrontott szabású selyem és grenadin ruhákban. Ezen kívül a
              versengésnek és egymás lefitymálásának, túllicitálásának is elejét
              vesszük azzal, ha mindnyájukat egyforma ruhába öltöztetjük.
              Pontosan 8 órakor a lányok párba állnak s így vo-nulnak be a
              bálterembe. Közösen eljárnak egy szép körtáncot, s utána megkezdik
              a csárdást. Ebbe már a legények is bekapcsolódhatnak. Ha jól
              kézben tudjuk tartani a legényeket, őket is bevehetjük a
              körtáncba. De csak akkor, ha készséggel engedelmeskednek a
              lányköri vezetőnek, és fegyelmezésük nem kerül nagy erőfeszítésbe.
              Ettől eltekintve legszebb, ha a lányok egymással és nem a
              legényekkel együtt járják el az első táncot, mert ezzel kifejezést
              adnak a lányköri tagok testvéri összetartozásának.
            </p>
            <p className={styles.torzs}>
              A bál irányítója kezdetföl végig a vezető legyen. Szabja meg az
              egyes táncok időtartamát, irányítsa a zenészeket és már előre
              kösse ki, hogy csak neki engedelmeskedjenek. Az egyes táncok 5-10
              percnél tovább ne tartsanak. Ennyi idő elég az élvezetre, de
              csökkenti a kísértést. - Sok helyén panaszkodnak a lányok, hogy
              nem kérik fel őket táncolni. Viszont, ha biztatjuk a legényeket a
              lányok felkérésére, azt felelik, hogy nyakukon maradnak a lányok
              és ezért nem merik őket táncoltatni. Ennek elejét vehetjük azzal,
              ha a bál kezdetén kihirdetjük, hogy minden tánc végén a legények
              leköszönhetnek. Így megoldjuk a kellemetlen helyzeteket és a
              lányok is jobban mulatnak. Ha lennének olyan lányok, akiknek nem
              akad táncosuk, nyugodtan táncoljanak egymással.
            </p>
            <p className={styles.torzs}>
              A szünetekben állandóan szem előtt legyenek a lányok, minden
              lépésükről tudjon a vezető és mindenről tegyenek neki jelentést.
              Legényekkel való hangos viselkedést, hancúrozást és sarokban való
              magányos letelepüléseket ne engedjük meg. A falu népének,
              különösen az asszonyoknak éles a szemük, még hegyesebb a nyelvük
              és hamar világgá kiáltják az előforduló hibákat. A Lánykör jó
              hírneve és tekintélye érdekében pedig mindenre nagyon kell
              vigyáznunk.
            </p>
            <p className={styles.torzs}>
              Ne felejtkezzünk el még a lányok kiségőiről, az édesanyákról sem.
              Sok helyen azért nem kísérik el az édesanyák a lányokat a
              mulatságra, mert őket a tánc nem érdekli és nagyon fárasztó az
              egész napi munka után érdektelenül virrasztani. De ha tudják, hogy
              nekik is lesz ott látnivalójuk, szívesen eljönnek és nagyon
              hálásak minden figyelemért. Ezért a táncok közötti szünetekben
              adjanak elő a lányok apró műsorszámokat a közönség
              szórakoz-tatására. Elénekelhetnek egy-egy kánont, előadhatnak egy
              tréfás jelenetet; verset, bemutathatnak egy-egy magyar táncot, de
              csak röviden, hogy ne kelljen rájuk hosszasan készülődni. Ezek a
              közbeiktatott műsorszámok nemcsak a mamák szórakoztatására jók,
              hanem arra is, hogy a felizgatott kedélyeket időnként kissé
              lecsillapítsák.
            </p>
            <p className={styles.torzs}>
              Pontosan éjfélkor, vagy 2 órakor a vezető tapsol, erre a lányok
              újra körben felállnak, eltáncolják a bevezető körtáncot, és szépen
              párosával kivonulnak a teremből. Sok helyen szokás, hogy ekkor a
              lányok rögtön hazamennek, a legények pedig csak negyedóra múlva
              indulhatnak haza. - A mulatság végén a vezető semmi könyörgésre,
              vagy rábeszélésre se változtassa meg az előre megállapított
              befejezési időpontot. Különben tekintélyének árt és a lányok
              hozzászoknak ahhoz, hogy szavát nem kell komolyan venni. Arra is
              gondolni kell, hogy a lányoknak másnap korán reggel munkába kell
              állniuk és szükséges, hogy addigra némileg kipihenjék magukat.
              Egyet ne felejtsünk még: a mulatságot mindig a jókedv tetőfokán
              kell abbahagyni, ha azt akarjuk, hogy soká emlékezetes maradjon.
            </p>
            <p className={styles.torzs}></p>
            <p className={styles.alcim1}>Ideje</p>
            <p className={styles.torzs}>
              Bálokat nem rendezhetünk tiltott időben, adventben és nagyböjtben.
              Farsang utolsó napján, ha netán-tán bált rendezünk, már 11 órakor
              fejeződjék be a tánc, nehogy az a szégyen érje a lánykört, hogy
              szent hitünk törvényeit megcsúfolva könnyelműen áttáncolt a
              hamvazószerda bűnbánó csöndjébe.{" "}
            </p>
            <p className={styles.torzs}></p>
            <p className={styles.alcim1}>Engedélyezése</p>
            <p className={styles.torzs}>
              Jóváhagyott alapszabályunk ügyrendje értelmében saját vagy bérelt
              helyiségben rendezhet a Lánykör éjfélig tartó tánccal és műsorral
              egybekötött zártkörű összejövetelt. A vezető felügyelete és a
              műsor nívója természetesen lényeges. - Ha nagyobb mulatságot
              akarunk tartani, arra természetesen engedélyt kell kérnünk. Minden
              felvilágosítást megkaphatunk a jegyző uraktól. - Sajnos az
              engedély pénzbe kerül és így a bevétel megcsappan. Éppen ezért
              ajánlatos a belépődíjakon, az esetleges kísérő és táncjegyeken
              kívül büfé felállítással gondoskodni a jövedelemről. A büfében
              kapható süteményeket a lányok hordják össze, készítsünk még
              limonádét és málnaszörpöt is. Két-két vállalkozó lány, vagy mama
              állandóan tartózkodjék a büfénél, hogy mindig legyen árusító.
            </p>
            <p className={styles.torzs}>
              Sok gondot és körültekintést igényel egy jól sikerült bál
              rendezése, de ne sajnáljuk tőle a fáradságot, Hiszen lányaink
              érdekében tesszük ezt is. Ha a lányok látják, hogy
              szórakoztatásukkal épp úgy törődünk, mint tanításukkal, mindjobban
              hallgatni fognak reánk és nemcsak vezetőjüknek, hanem megértő jó
              barátjuknak is tekintenek minket.
            </p>
            <p className={styles.torzs}></p>
            <p className={styles.torzs}></p>
            <p className={`${styles.cim2} ${styles.cim2BottomMargin}`}>
              Zárszó
            </p>
            <p className={styles.torzs}></p>
            <p className={styles.torzs}>
              Mozgalmunk történetének egy jelentős fejezetét zárjuk le mikor kis
              könyvünket jókívánságaink és szeretetünk kíséretében útjára
              bocsátjuk. Hála, szeretet és segíteni akarás íratja velünk ezeket
              a sorokat.
            </p>
            <p className={styles.torzs}>
              Hála a jó Isten iránt, Aki megengedte, hogy eddig eljussunk, hogy
              Vezérkönyvünk megírásához időt, erőt és anyagi feltételeket adott.
            </p>
            <p className={styles.torzs}>
              Hála a mi kedves munkatársaink iránt, akik nemcsak tudásukat,
              értékes tapasztalataikat adták szívesen, de hajlandók voltak
              névtelenül, szinte titokban maradni az olvasók előtt, hogy
              mozgalmunk szellemét ezzel is segítsenek megismertetni és
              megszerettetni. Ma, amikor a külsőségek hajszolásának, az egyéni
              érvényesülés vágyának forgatagában oly kevesen tudnak és akarnak
              önzetlenül és szerényen, egyedül csak Isten dicsőségéért és
              embertársaik javáért dolgozni, - vajon meg tudjuk-e becsülni az ő
              személytelen segítségüket? Isten fizessen meg érte az ő
              bőkezűségével!
            </p>
            <p className={styles.torzs}>
              Szeretettel és segíteni akarással vagyunk eltelve valamennyien,
              akik Vezérkönyvünk megjelenéséhez erőnkkel és tudásunkkal
              hozzájárultunk. Tudjuk jól, hogy azoknak, akik falvakon, az
              eldugott őrhelyeken, hűséggel és kitartással állnak: akikre
              nemcsak tanítónői, családanyai hivatásuk ró komoly gondokat és sok
              munkát. De akik emellett még az ifjúság erkölcsi és szellemi
              szükségleteit is a magukénak érzik és ezen szükségletet
              kielégítéséért lelkesen hoznak áldozatokat - tudjuk, hogy azoknak
              ereje is véges. Tudjuk, hogy minden jóakarat, apostoli lelkület és
              áldozatkészség mellett is jöhet olyan idő, amikor nem bírják, mert
              nem is bírhatják tovább a reájuk rakott terheket. - Mi segíteni
              akarunk, hogy ne legyen nekik olyan nehéz, ne kelljen annyit
              gondolkozni, kísérletezni, saját tapasztalatokon okulni. Azért
              írtuk össze a mi tapasztalatainkat, hogy azokat felkínálva,
              szeretetűnkkel és jó szándékunkkal kibélelve odaadhassuk és ezzel
              kíméljük a vezetőket. Könyvünknek ez a célja, kérjük fogadja
              mindenki megértéssel!
            </p>
            <p className={styles.torzs}>
              Természetes, hogy Vezérkönyvünk egyes fejezetei egyes emberek
              nézetét tükrözik, egyes embereknek, egyes községekben szerzett
              tapasztalatait adják vissza. - Talán sokszor fog az olvasók ajkára
              kívánkozni a kedvetlen vélemény: Ezt nálunk nem lehet, ez nálunk
              másképp van. - Tudjuk azt is, hogy ez a kis könyv nem adhat
              abszolút megoldásokat, minden esetben, feltétlen biztonsággal
              beváló módszereket. Az a néhány év, amit ennek az eszmének élve
              eltölthetünk, még nem elég a vélemények kialakulásához és a
              kialakult véleményeket még nem igazolhatta minden esetben az élet.
              Csak az általános irányelvek vannak lefektetve, amelyek szerint
              most haladni alkalmasnak, jónak látszik. Aki lélekkel dolgozik, az
              csak módosítsa a részleteket úgy, amint azt az ő helyzete, az ő
              községének körülményei indokolttá teszik - aki pedig nem dolgozik
              lélekkel, nem baj, ha leteszi a könyvet és nem akarja annak
              hasznát venni. - A leányifjúsággal eredményesen foglalkozni csak
              úgy lehet, ha lélek, szív és értelem testvéri egyetértésben, soha
              el nem választhatón minden gondolatot, minden cselekvési készséget
              mérlegre tesz. Mi könyvünket csak az egész lélekkel dolgozó
              testvéreink számára írtuk.
            </p>
            <p className={styles.torzs}>
              Szent Pál mondja: Nem azé az érdem, aki ültet, sem nem azé, aki
              öntöz, hanem azé, Aki a növekedést adja onnan felülről. - Annak
              áldása, kegyelme kísérje Vezérkönyvünk útját és Annak segítsége
              tegye eredményessé az ültetők és öntözők Isten akarata szerint
              végzett munkáját. Úgy legyen!
            </p>
            <p className={styles.torzs}></p>
            <p className={styles.torzs}></p>
          </div>
          <div className="fejezet-fuggelek">
            <a id="50"></a>
            <p className={styles.cim2}>FÜGGELÉK</p>
            <p className={`${styles.cim2} ${styles.cim2NoMarginTop}`}>
              Katolikus Lánykörök Szövetségének
            </p>
            <p className={`${styles.cim2} ${styles.cim2NoMarginTop}`}>
              Alapszabályai.
            </p>
            <p className={styles.torzs}></p>
            <p className={styles.cim3}>I. Általános rendelkezések</p>
            <p className={styles.torzs}>
              <b>1.</b> A Szövetség neve: Katolikus Lánykörök Szövetsége.
              Székhelye: Budapest. Működési területe: Magyarország. Hivatalos
              nyelve: magyar. Pecsétje: A jelvény és köriratban "Katolikus
              Lánykörök Szövetsége, Budapest." Jelvénye: Arany szívből kiinduló
              búzakalászkereszt fehér mezőben, zöld kerettel. A fehér mezőben
              I.H.S.V. betűk: In Hoc Signo Vinces.
            </p>
            <p className={styles.torzs}>
              <b>2.</b> A Szövetség célja:
            </p>
            <p className={styles.torzs}>
              A) hogy a már meglevő katolikus falusi Lányköröket és különböző
              név alatt működő falusi lányifjúsági egyesületeket, társulatokat,
              testületeket, egyházközségi lánycsoportokat, - melyeknek tagjai
              főként földműves szülők elemi iskolát végzett lányai, önállóságuk
              épségben tartásával összefogja céltudatos, nemzetépítő munkára és
              érdekeiket képviselje.
            </p>
            <p className={styles.torzs}>
              B) hogy a még meg nem szervezett, főként földműves szülőknek elemi
              iskolát végzett lányait Katolikus Lánykörökbe tömörítse.
            </p>
            <p className={styles.torzs}>
              <b>3.</b> A Szövetség eszközei:
            </p>
            <p className={styles.torzs}>A) központi iroda,</p>
            <p className={styles.torzs}>B) különféle titkárságok,</p>
            <p className={styles.torzs}>C) a Szövetség kiadványai,</p>
            <p className={styles.torzs}>D) vezetőképző tanfolyamok,</p>
            <p className={styles.torzs}>E) egyházmegyei Lánynapok.</p>
            <p className={styles.torzs}>
              <b>4.</b> A Szövetségre vonatkozó vagyoni rendelkezések. A
              Szövetség bevételeit képezheti: tagegyesületek hozzájárulása,
              kiadványok, intézmények és vállalatok jövedelmei, alapítványok,
              hagyatékok, adományok, segélyek.
            </p>
            <p className={styles.torzs}>
              A szövetségi vagyon gyümölcsöző befektetéséről és a bevétel
              hovafordításáról a közgyűlés határoz.
            </p>
            <p className={styles.torzs}></p>
            <p className={styles.cim3}>II. A tagokról</p>
            <p className={styles.torzs}>
              <b>5.</b> A Katolikus Lánykörök Szövetségének csak rendes
              tagegyesületei lehetnek.
            </p>
            <p className={styles.torzs}>
              A) a már szabályszerűen megalakult vagy a jövőben megalakuló
              katolikus Lánykörök, melyek az alapszabályban lefektetett
              ügyrendet veszik működésük alapjául.
            </p>
            <p className={styles.torzs}>
              B) a csatlakozó, különböző név alatt működő katolikus falusi
              lányegyesületek, társulatok, testületek, egyházközségi
              lánycsoportok, melyek az egységes irányítást magukévá teszik.
            </p>
            <p className={styles.torzs}>
              <b>6.</b> A Szövetséghez csatlakozó lányköröket, egyesületeket,
              társulatokat, testületeket, egyházközségi lánycsoportokat a
              központi vezetőség veszi fel és erről a legközelebbi közgyűlésnek
              beszámol. A tagegyesületek a Szövetségbe való felvételüket saját
              közgyűlésük jegyzőkönyvileg igazolt határozatával kérik.
            </p>
            <p className={styles.torzs}>
              <b>7.</b> A tagok részt vesznek a Szövetség munkájában, amennyiben
              az intézőbizottságban, a választmányban és a közgyűlésen
              képviseltetik magukat. A Szövetség rendezéseivel és akcióival
              kapcsolatos kedvezményeket minden tagegylet igénybe veheti.
            </p>
            <p className={styles.torzs}>
              A tagok kötelesek a havi munkaanyag gyűjteményben és a
              körlevelekben lefektetett egységes irányítás alapján
              együttdolgozni a többi tagegyesületekkel, önállóságuk megőrzése
              mellett. A megalakulástól, vagy csatlakozástól számított egy év
              eltelte után minden tagegyesület kőteles a központi iroda
              költségeihez évi 12 pengővel hozzájárulni. Ezen kötelezettség
              teljesítésétől a központi vezetőség indokolt esetekben
              eltekinthet.
            </p>
            <p className={styles.torzs}>
              A Szövetség semmiféle szerve nem róhat ki a tagegyesületekre bármi
              néven nevezendő pénzbírságot sem.
            </p>
            <p className={styles.torzs}>
              <b>8.</b> A tagság megszűnésének módjai: a tagság megszűnhet 1.
              kilépés, 2. kizárás és 3. törlés által.
            </p>
            <p className={styles.torzs}>
              A Szövetséghez tartozó tagegyesületek kilépésüket közgyűlésüknek
              jegyzőkönyvileg igazolt határozatával írásban kötelesek
              bejelenteni. Kilépésüket a közgyűlés köteles tudomásul venni.
            </p>
            <p className={styles.torzs}>
              Kizárható az a tanegyesület, mely kétszeri felszólítás után a
              Szövetség alapszabályaival ellenkező magatartást tanúsít, vagy a
              szövetségi szellem ellen súlyosan vét. A kizárásról az
              intézőbizottság határoz. A kizárási határozathoz a határozatképes
              közgyűlés háromnegyed részének szavazat-többsége szükséges.
            </p>
            <p className={styles.torzs}>
              Törlésnek csak tagdíj nemfizetés és pedig egy évi hátraléknak a
              felszólítás ellenére való meg nem fizetése esetén van helye. A
              kizárás és törlés tárgyában hozott intézőbizottsági határozatot az
              érdekeltek a közlést követő naptól számított 15 napon belül a
              közgyűléshez megfellebbezhetik.
            </p>
            <p className={styles.torzs}></p>
            <p className={styles.cim3}>
              III. A Szövetség intézőszerveire vonatkozó rendelkezések
            </p>
            <p className={styles.torzs}>
              <b>9.</b> Intézőszervek a közgyűlés, a választmány, az
              intézőbizottság, a számvizsgáló bizottság és a központi vezetőség.
            </p>
            <p className={styles.torzs}>
              <b>10.</b> A közgyűlés áltatában. A közgyűlés a Szövetség
              egyetemes legfőbb szerve. Kétféle lehet: rendes és rendkívüli.
            </p>
            <p className={styles.torzs}>
              A) a Szövetség évenként egyszer, lehetőleg január hónapban a
              székesfővárosban, vagy valamelyik vidéki városban rendes
              közgyűlést tart, melyet a központi vezetőség két héttel előbb a
              tárgy megjelölésével az "Új Nemzedék"-ben, vagy más katolikus
              lapban történő meghirdetés után hív össze.
            </p>
            <p className={styles.torzs}>
              B) rendkívüli közgyűlés összehívásának szükségességét az
              intézőbizottság állapítja meg és hívhatja össze. A közgyűlési
              tagok egyharmadának írásbeli kérésére a központi vezetőség
              rendkívüli közgyűlést összehívni köteles.
            </p>
            <p className={styles.torzs}>
              A közgyűlés tagjai: a választmány (lásd 13. pont) és a
              csatlakozott egyesületek hivatalos vezetői. A közgyűlés tagjainak
              tanácskozási és szavazati joguk van, valamint a tisztségekre
              választhatók. A szavazás elvi kérdésekben nyílt, személyi
              kérdésekben két tag kívánságára már titkos.
            </p>
            <p className={styles.torzs}>
              Húsz tagig minden egyesületnek egy, ötven tagig kettő, száz tagig
              három, azon felül négy szavazati joga van. Az egyes tagegyesületek
              írásbeli meghatalmazást adhatnak a választmányi tagoknak arra,
              hogy őket a közgyűlésen képviseljék, és helyettük szavazzanak. Ez
              esetben azonban minden tagegyesületnek csak egy szavazati joga
              van.
            </p>
            <p className={styles.torzs}>
              <b>11.</b> A közgyűlés határozatképes, ha azon a szavazati joggal
              felruházott tagok, illetve képviselőik egyharmada jelen van. Az
              alapszabály módosítás, más egyesületbe való olvadás, valamint az
              egyesület feloszlása és ez esetben a vagyon hovafordítása
              tárgyában összehívott közgyűlés határozatképességéhez azonban a
              tagok legalább kétharmadának jelenléte és az e tárgyban hozott
              határozatok érvényességéhez pedig a jelenlevők legalább
              kétharmadának hozzájárulása szükséges.
            </p>
            <p className={styles.torzs}>
              Ha a szabályszerűen összehívott közgyűlésen a tagok határozatképes
              számban meg nem jelennének, a 8-30 napon belül ugyanazon
              tárgysorozat mellett összehívott újabb közgyűlés a megjelentek
              számára tekintet nélkül határozatképes.
            </p>
            <p className={styles.torzs}>
              <b>12.</b> A közgyűlés tárgyai:
            </p>
            <p className={styles.torzs}>
              A) tisztikar (központi vezető, titkárok, pénztáros; két ellenőr),
              választmány, háromtagú számvizsgáló bizottság megválasztása. A
              választás egyszerű szótöbbséggel történik, és három évre szól.
            </p>
            <p className={styles.torzs}>
              B) a költségvetés és zárszámadás letárgyalása, a felelős számadó
              részére a felmentvény megadása és általában a vagyoni kérdések
              végső fokon való intézése.
            </p>
            <p className={styles.torzs}>
              C) a választmány hatáskörét meghaladó fontosabb szerződések és
              különösen az egyesületi vagyon állagát érintő egyéb jogügyletek
              elhatározása és jóváhagyása.
            </p>
            <p className={styles.torzs}>
              D) a választmány és intézőbizottság megfellebbezett határozatainak
              felülbírálása..
            </p>
            <p className={styles.torzs}>
              E) a tagok a közgyűlés előtt egy héttel írásban beadott
              indítványainak tárgyalása.
            </p>
            <p className={styles.torzs}>F) alapszabályok módosítása.</p>
            <p className={styles.torzs}>
              G) feloszlás és ez esetben a vagyon hovafordítása tárgyában való
              határozathozatal.
            </p>
            <p className={styles.torzs}>
              H) más egyesülettel való egyesülés elhatározása.
            </p>
            <p className={styles.torzs}>
              A közgyűlésről jegyzőkönyv veendő fel, mely tartalmazza a
              közgyűlésen részt vett tagok felsorolását és a gyűlés lényeges
              mozzanatait. A közgyűlés jegyzőkönyvét a központi vezető, a jegyző
              és négy tag írja alá. A közgyűlés fontosabb határozatairól minden
              tagegyesületet értesíteni kell.
            </p>
            <p className={styles.torzs}>
              <b>13.</b> A választmány rendes tagjai: hivatalból az
              intézőbizottság tagjai (lásd 14. pont), valamint az
              espereskerületi vezetők egyházmegyei gyűlésén kijelölt,
              egyházmegyénként három espereskerületi vezető. akiket a közgyűlés
              három évre választ. Ugyanilyem módon választandók a választmány
              póttagjai.
            </p>
            <p className={styles.torzs}>
              A Szövetség köteles a választmányi gyűlést évenként legalább
              egyszer a közgyűlés előtt összehívni. A választmányi gyűlés a
              tagok egyharmadának jelenlétben határozatképes.
            </p>
            <p className={styles.torzs}>
              Rendkívüli választmányi gyűlés a tagok egyharmadának kívánságára
              14 napon belül hívandó össze.
            </p>
            <p className={styles.torzs}>
              A választmány határozatai 15 napon belül a közgyűléshez
              megfellebbezhetők. A választmány utalványozási jogának legfelső
              határa 2000 pengő.
            </p>
            <p className={styles.torzs}>
              A választmányi ülésekről jegyzőkönyv veendő fel, amelynek
              hitelesítésére a választmányi ülés elnöke alkalmanként jelöl ki
              kék választmányi tagot.
            </p>
            <p className={styles.torzs}>A választmány hatáskörébe tartozik:</p>
            <p className={styles.torzs}>
              A) a közgyűlés előkészítése, az ott teendő indítványok, valamint a
              közgyűlésre fenntartott ügyek letárgyalása.
            </p>
            <p className={styles.torzs}>
              B) a központi vezetőség és intézőbizottság jelölése. A választás
              megejtésének lebonyolítására a központi vezető jelölőbizottság
              választására kéri fel a választmányt. A jelölőbizottság egy
              elnökből és hat tagból áll,
            </p>
            <p className={styles.torzs}>
              C) a közgyűlés által megállapított költségvetés keretén belül a
              Szövetség anyagi ügyeinek intézése, a Szövetség szabályszerű
              működésének ellenőrzése.
            </p>
            <p className={styles.torzs}>
              D) az intézőbizottság határozatai ellen beadott fellebbezési
              indítványok tárgyalása. A fellebbezési indítvány felett a
              választmány egyszerű szótöbbséggel határoz. Szavazategyenlőség
              esetén a központi vezető dönt.
            </p>
            <p className={styles.torzs}>
              E) a választmány tárgysorozatában fel nem vett ügyek tárgyalásához
              és a felettük való döntéshez a jelenlevő választmányi tagok
              egyharmadának hozzájárulása szükséges.
            </p>
            <p className={styles.torzs}>
              <b>14.</b> Az intézőbizottság tagjai: a központi vezetőség (lásd
              16. pont), a különböző titkárságok (lásd 17. pont) vezetői,
              illetve helyettesük, a Tulipántos Láda c. folyóirat mindenkori
              szerkesztője.
            </p>
            <p className={styles.torzs}>
              Az intézőbizottság negyedévenként ülést tartani köteles. Ülése
              határozatképes, ha tagjainak kétharmada jelen van.
            </p>
            <p className={styles.torzs}>
              Az intézőbizottság határozatai a közlést követő naptól számított
              15 napon belül megfellebbezhetők a választmányhoz.
            </p>
            <p className={styles.torzs}>
              Az intézőbizottság a Szövetség munkának kezdeményező, cselekvő és
              egyúttal végrehajtó szerve. Megállapítja a Szövetség egész
              ügyvitelét, évi programját, amelyről a választmánynak és a
              közgyűlésnek beszámol. Kezeli a Szövetség vagyonát, előkészíti a
              választmányi gyűlést és a közgyűlést. Első fokon határoz a tagok
              kizárása felől. Üléseiről jegyzőkönyvet kell felvenni és két
              tanúval hitelesíteni.
            </p>
            <p className={styles.torzs}>
              <b>15.</b> A számvizsgáló bizottság a Szövetség vagyona
              kezelésének felülvizsgálatára három rendes- és két póttagból álló
              számvizsgáló bizottságot létesít, kiket a közgyűlés egy évre
              választ, és akik megbízásuk időtartama alatt sem a választmány
              tagjai nem lehetnek, sem pedig más tisztséget be nem tölthetnek.
              Megbízásuk időtartama alatt a pénzkezelést bármikor
              megvizsgálhatják, a számadási év lezártával pedig az évi
              zárszámadást és a pénzkezelésre vonatkozó okmányokat, naplókat, és
              egyéb iratokat részletesen megvizsgálni és vizsgálataik
              eredményéről a választmánynak írásban jelentést tenni tartoznak,
              Amennyiben évközben észlelnek valamely szabálytalanságot, azt a
              választmánynak, fontosabb esetben a külön összehívandó rendkívüli
              közgyűlésnek bejelenteni kötelesek.
            </p>
            <p className={styles.torzs}>
              <b>16.</b> A központi vezetőség tagjai: a központi vezető, annak
              helyettese, a központi titkár, egyházi tanácsadó, pénztáros,
              jegyző és két ellenőr. A központi vezetőség önállóan rendelkezik
              az intézőbizottságnak tartozó felelősség és utólagos beszámolás
              terhe mellett az esetben, midőn intézőbizottsági intézkedés
              lehetetlen. Közvetlenül irányítja és ellenőrzi az intézményeket és
              vállalatokat. Rendkívüli esetben utalványozhatja az
              intézőbizottság megállapítása szerinti összeget.
            </p>
            <p className={styles.torzs}>
              A) A központi vezető képviseli a Szövetséget hatóságok és harmadik
              személyekkel szemben, irányítja a Szövetség munkáját és tevékenyen
              részt vesz abban, összehívja és elnököl az intézőbizottság és
              választmány ülésein, valamint a közgyűlésen. Elrendeli a szavazást
              és a szavazatok egyenlő megoszlása esetén dönt. Hatáskörébe
              tartoznak mindazon intézkedések, melyek az alapszabály által
              kitűzött célok elérésére szükségesek és az intézőbizottságnak,
              választmánynak, vagy közgyűlésnek fenntartva nincsenek. Az
              előirányzott költségvetés keretén belül a szükségessé vált
              kiadásokra 1000 pengőig utalványozni joga van. Joga van a pénztár
              időnkénti ellenőrzésére. Hatóságokhoz intézendő hivatalos iratok
              csak a központi vezetőnek vagy helyettesének és a központi
              titkárnak, illetve megbízottjuknak aláírásával és a hivatalos
              pecséttel ellátva bocsáthatók ki.
            </p>
            <p className={styles.torzs}>
              B) A központi vezető helyettese a központi vezetőt akadályoztatása
              esetén helyettesíti. Személyét a megválasztott központi vezető
              jelöli ki és ezt a közgyűlés tudomására hozza.
            </p>
            <p className={styles.torzs}>
              C) A központi titkár a központi vezetőség, az intézőbizottság, a
              választmány és közgyűlés határozatainak végrehajtásáról
              gondoskodik. Működéséről a központi vezetőségnek, az
              intézőbizottságnak és a választmánynak, valamint a közgyűlésnek
              tartozik beszámolni.
            </p>
            <p className={styles.torzs}>
              D) Az egyházi tanácsadó a Szövetség egész ügyvitelére vonatkozóan
              az egyházi hatóság felügyeletét gyakorolja. Kapcsolatot tart fenn
              az egyházmegyei lelki igazgatókkal. A központi vezetőség
              előterjesztésére és a Katolikus Akció országos elnökségének
              ajánlására a Hercegprímás Úr Őeminenciája nevezi ki három évre.
            </p>
            <p className={styles.torzs}>
              E) A pénztáros végzi a könyvelés munkáját, a pénztár állásáról
              minden intézőbizottsági ülésen és a közgyűlésen is jelentést tesz.
              A Szövetség vagyonának kezeléséért anyagi felelősséggel tartozik
              és tartozik a vagyonkezelésről rendes okmányolt számadó sokat
              vezetni. Az egyesület kézipénztárában legfeljebb 500 pengő összegű
              pénzt tarthat és a felesleget a Nemzeti Hitelintézet R.T.
              budapesti pénzintézetéhez tartozik befizetni.
            </p>
            <p className={styles.torzs}>
              F) A jegyző vezeti és szerkeszti az intézőbizottsági, választmányi
              jegyzőkönyveket, melyek hitelesítésére a központi vezető az
              intézőbizottság, illetve a választmány jelenlevő tagjai közül
              kettőt kér fel. A közgyűlési, választmányi és intézőbizottsági
              gyűlés jegyzőkönyvét mindenkor a legközelebbi intézőbizottsági
              gyűlésen kell hitelesíteni.
            </p>
            <p className={styles.torzs}>
              G) Az ellenőrök a pénztáros működését ellenőrzik és vele együtt
              anyagilag felelősek a Szövetség vagyonáért.
            </p>
            <p className={styles.torzs}>
              A központi vezetőség tagjai kötelesek minden intézőbizottsági
              gyűlésen beszámolni és meghatározott időben hivatalos órát
              tartani.
            </p>
            <p className={styles.torzs}>
              <b>17.</b> A központi iroda az irányító és ellenőrző munka
              megoszlására munkakőrök és vidékek szerinti titkárságokat állíthat
              fel. Ezek számát és titkár személyét illetőleg az intézőbizottság
              határoz. A munkaügyi titkárok lehetőleg munkakörüknek megfelelő
              szakképzettséggel rendelkezzenek. Az egyházmegyei titkárokat az
              intézőbizottság csak jelöli, hivatalukban a megyéspüspök erősíti
              meg őket. A titkárok megbízatása három évre szól. Akadályoztatásuk
              esetére helyettesüket saját maguk jelölik, s ezt az
              intézőbizottságnak bejelentik.
            </p>
            <p className={styles.torzs}>
              A titkárok hatáskörét felállításuk alkalmával a központi vezető
              határozza meg. Esetleges módosítások ugyancsak annak hatáskörébe
              tartoznak. A titkárok kötelesek minden évben a számukra rendezett
              tanfolyamon részt venni. Az egyházmegyei tikárok ezenkívül munkába
              állásuk előtt legalább két hónapig a központi iroda munkájában
              vesznek részt. Indokolt esetben mindkét kötelezettség alól a
              központi vezetőség felmentést adhat. A titkárok munkájukról az
              intézőbizottságnak tesznek jelentést, az egyházmegyei titkárok
              egyházmegyei hatóságuknak is kötelesek jelentést tenni évente
              legalább egyszer. A titkárok munkájuk megkönnyítésére önkéntes
              munkatársakat vehetnek maguk mellé. Fizetett munkaerők
              felvételéhez az intézőbizottság beleegyezését előzetesen kikérik.
            </p>
            <p className={styles.torzs}>
              Az egyházmegyei titkárságok munkáját az egyházmegyei hatóságok
              szempontjából a lelkiigazgatók ellenőrzik, akiket az egyházmegyei
              titkár és a központi vezetőség előterjesztésére a megyés püspök
              nevez ki. A lelki igazgató az egyházmegyei titkárral, a munkaügyi
              megbízottakkal és espereskerületi vezetőkkel évente egyszer
              megbeszélést tart, melynek tárgyát az időszerű kérdések
              megvitatása és a beszámoló képezik. A helyi egyesületek
              igazgatóival a lelki igazgató kapcsolatot tart fenn.
            </p>
            <p className={styles.torzs}>
              Az egyházmegyei titkárok irányító és ellenőrző munkájuk
              megosztására munkakörök szerint megbízottakat jelölnek ki, kiket
              megbízatásukban az intézőbizottság erősít meg. A munkaügyi
              megbízottak indokolt esetben a helyi egyesületeket
              meglátogathatják és azok munkáját ellenőrizhetik és szaktudásukkal
              megkönnyíthetik. Tapasztalataikról az egyházmegyei megbeszéléseken
              jelentést tesznek.
            </p>
            <p className={styles.torzs}>
              Az évenként vezetőképző kurzusokra összegyűlt vezetők
              esperes-kerületenként a lelki igazgatóval és egyházmegyei
              titkárral egyetértve, ezek kívánsága szerint egyszerű, vagy
              kétharmad szótöbbséggel maguk közül kerületi vezetőt választanak;
              a kerületi vezető megbízása egy évre szól. Kerületi vezető csak az
              lehet, aki a zárt lelkigyakorlattal egybekötött vezetőképző
              kurzuson, mint bentlakó már részt vett. A kerületi vezetőt
              megbízatásában a megyéspüspök erősíti meg. A kerületi vezető
              feladata a helyi egyesületek munkájának megkönnyítése és
              ellenőrzése. E célból a kerületben működő egyesületeket évente
              legalább egyszer meglátogatja, a vezetőkkel pedig évente legalább
              kétszer megbeszélést tart. Ezen megbeszélésekre a vezetőkön kívül
              a kerületi esperes és a helyi egyesületek igazgatói hivatalosak.
            </p>
            <p className={styles.torzs}>
              A titkárságok pénzkezelését a központi pénztáros és ellenőrök
              bármikor ellenőrizhetik.
            </p>
            <p className={styles.torzs}></p>
            <p className={styles.cim3}>IV. Vegyes rendelkezések.</p>
            <p className={styles.torzs}>
              <b>18.</b> A Katolikus Lánykörök, mint fiókegyesületek
              megalakulását az illetékes törvényhatóság első tisztviselőihez
              tudomásulvétel végett be kell jelenteni. Feloszlatásukat az
              anyaegyesület nem rendelheti el, ez irányban csak a 77.OOo/1922.
              B.M. V1I. sz. rendelet III. részében foglaltak szerint indokolt
              előterjesztést tehet a M. kir. Belügyminiszterhez. A megalakulás
              bejelentéséhez csatolni kell:
            </p>
            <p className={styles.torzs}>
              A) az alakuló gyűlésről felvett és a jelenlevők névsorát, is
              magában foglaló jegyzőkönyv eredeti és képviseletre hivatott
              egyének által hitelesített három másolati példányát.
            </p>
            <p className={styles.torzs}>
              A) az alapító tagok lakhelyét is feltüntető névsornak három
              példányát.
            </p>
            <p className={styles.torzs}>
              C) a Szövetségnek a helyi egyesület megalakításához történő
              hozzájárulását és az alapszabályoknak három példányát. Az újonnan
              alakúlt Lánykörök csakis a tudomásulvétel után alakulhatnak meg
              véglegesen és működésüket is csak akkor kezdhetik meg. A Szövetség
              határozatait és utasításait a láttamozott alapszabályok keretén
              belül követni tartoznak.
            </p>
            <p className={styles.torzs}>
              <b>19.</b> A szövetség feloszlik, ha céljának nem felel meg és
              feloszlatását a tagok kétharmada kívánja.
            </p>
            <p className={styles.torzs}>
              Az intézmények és vállalatok, ha önálló jogi személyiségük erre
              lehetőséget nyújt, tovább is fennállhatnak és a beléjük fektetett
              tőkét használhatják, esetleg mint hosszúlejáratú, kamatmentes
              kölcsönt teleinthetik.
            </p>
            <p className={styles.torzs}>
              Ha a Szövetség megszűnik, a fennmaradt tőke a katolikus falusi
              lányok javát szolgáló célra a Katolikus Akció elnöki tanácsának
              adandó át.
            </p>
            <p className={styles.torzs}>
              <b>20.</b> Az alapszabályok módosítása, valamint más egyesülettel
              való fúzió, az esetleges feloszlás és ez esetben a vagyon
              hovafordítása tárgyában hozott közgyűlési határozat foganatosítás
              előtt jóváhagyás vétett a Hercegprímás Úrhoz és a M. kir.
              Belügyminiszter Úrhoz felterjesztendő.
            </p>
            <p className={styles.torzs}>
              <b>21.</b> Azon esetekben, ha a Szövetség az alapszabályban előírt
              célját és eljárást be nem tartja, hatáskörét tállépi, államellenes
              működést fejt ki, a közbiztonság és közrend ellen súlyos vétséget
              követ el, vagy a tagok vagyoni érdekeit veszélyezteti, a M. kir.
              Belügyminiszter ellene vizsgálatot rendelhet el, működését
              megszüntetheti és véglegesen fel is oszlathatja.
            </p>
            <p className={styles.torzs}></p>
            <p className={`${styles.torzs} ${styles.torzsNoIndentation}`}>
              Budapest, 1939. február hó 12-én.
            </p>
            <div className={styles.duplaAlairas}>
              <div>
                MEDVECZKY ILOIVA,s, k.
                <br />
                központi titkár.
              </div>
              <div>
                LUCZENBACHER RITA s. k.
                <br />
                központi vezető.
              </div>
            </div>
            <p className={styles.torzs}></p>
            <p className={styles.torzs}>
              <center>P. H.</center>
            </p>
            <p className={styles.torzs}></p>
            <p className={styles.torzs}>5664/1990. szám.</p>
            <p className={styles.torzs}>
              Jóváhagyom azzal, hogy a 13. pont ötödik bekezdésében a
              "választmány tagjai közül" szavak helyébe "két választmányi tagot"
              vétessék be és hogy a 20. pont utolsó szava elé "és Hercegprímás
              Úrhoz" szavak vétessenek fel.{" "}
            </p>
            <p className={styles.torzs}>Esztergom, 1940. augusztus hó 19.</p>
            <p className={styles.torzs}></p>
            <div className={styles.duplaAlairas}>
              <div>P. H.</div>
              <div>
                SERÉDI JUSZT1NIÁN s. k.
                <br />
                bíboros hercegprímás,
                <br />
                esztergomi érsek.
              </div>
            </div>
            <p className={styles.torzs}></p>
            <p className={`${styles.torzs} ${styles.torzsNoIndentation}`}>
              <u>Szám: 146.639.</u>
            </p>
            <p className={styles.torzs}> 1940/VII-a.</p>
            <p className={styles.torzs}>
              <center>Magyar Királyi Belügyminiszter,</center>
            </p>
            <p className={styles.torzs}></p>
            <p className={styles.torzs}>
              Látta a m. kir. Belügyminiszter az alábbi módosító, illetve
              kiegészítő megjegyzésekkel:
            </p>
            <p className={styles.torzs}>
              1. Az intézőbizottság határozatai a közlést követő naptól
              számított 15 napon belül megfellebbezhetők a választmányhoz és
              hogy{" "}
            </p>
            <p className={styles.torzs}>
              az alapszabályok 8., 13., 14., 16., 17., 19. és 20 § -ban levő
              javítás, törlés és beírás hivatalos tollal történt, míg a 12., 18.
              és 19. §-ban levő beírást láttamozás elölt a vezetőség eszközölte.{" "}
            </p>
            <p className={styles.torzs}></p>
            <p className={`${styles.torzs} ${styles.torzsMarginTop}`}>
              Budapest, 1940. évi október hó 19-én.
            </p>
            <div className={styles.duplaAlairas}>
              <div>P. H.</div>
              <div>
                A miniszter rendeletéből:
                <br />
                Dr. PASKÁNDY s. k.
                <br />
                miniszteri oszt. tanácsos.
              </div>
            </div>
            <p className={styles.torzs}></p>
            <p className={styles.torzs}>
              A hecegprímási jóváhagyásban és a miniszteri rendelet utolsó
              pontjában említett javítások és törlések a nyomtatott szövegben
              már javítva szerepelnek.
            </p>
            <p className={styles.torzs}></p>
            <p className={styles.torzs}>
              Az 1939. február 12-én tartott alakuló közgyűlés az
              alapszabályokkal együtt, az alapszabály 5. pontjában hivatkozott
              alábbi ügyrendet fogadta el.
            </p>
            <p className={styles.torzs}></p>
            <p className={`${styles.cim2} ${styles.cim2BottomMargin}`}>
              Katolikus Lánykörök ügyrendje
            </p>
            <p className={styles.torzs}></p>
            <p className={styles.torzs}>
              Az egyesület
              neve:......_...._...__.________.._.__.___._..__._...._-i Katolikus
              Lánykör.
            </p>
            <p className={styles.torzs2}>
              Célja: hitükben erős, erkölcsükben tiszta, nemzeti érzésükben
              öntudatos és gazdaságilag képzett családanyákat nevelni a falu
              fiatal lányaiból.
            </p>
            <p className={styles.torzs2}>
              Eszközei: tanítónők, vagy más megfelelő képzettségű hölgyek
              vezetésével foglalkoztatni a lányokat
            </p>
            <p className={styles.torzs2}>
              1. lelkileg: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;közös imádság,
            </p>
            <p className={`${styles.torzs} ${styles.torzsLeft70px}`}>
              szentségekhez való közös járulás;
            </p>
            <p className={`${styles.torzs} ${styles.torzsLeft70px}`}>
              közös szentségimádás és{" "}
            </p>
            <p className={`${styles.torzs} ${styles.torzsLeft70px}`}>
              lelkigyakorlatok tartásával..
            </p>
            <p className={styles.torzs2}>
              2. szellemileg: &nbsp; &nbsp;vallásos,
            </p>
            <p className={`${styles.torzs} ${styles.torzsLeft70px}`}>
              jellemképző;{" "}
            </p>
            <p className={`${styles.torzs} ${styles.torzsLeft70px}`}>
              kulturális,{" "}
            </p>
            <p className={`${styles.torzs} ${styles.torzsLeft70px}`}>
              gyakorlati tárgyú előadásokkal.
            </p>
            <p className={styles.torzs2}>
              3. gyakorlatilag: főző, háztartási, varró és{" "}
            </p>
            <p className={`${styles.torzs} ${styles.torzsLeft70px}`}>
              háziipari tanfolyamokkal.
            </p>
            <p className={styles.torzs2}>
              4. kedélyileg: &nbsp; &nbsp; dalok, játékok, táncok tanításával,
            </p>
            <p className={`${styles.torzs} ${styles.torzsLeft70px}`}>
              kirándulások, versenyek, színielőadások rendezésével,{" "}
            </p>
            <p className={`${styles.torzs} ${styles.torzsLeft70px}`}>
              tisztességes szórakoztatással.
            </p>
            <p className={styles.torzs2}>
              Igazgatója: a helybeli plébános, vagy az általa megbízott lelkész.
            </p>
            <p className={styles.torzs2}>
              Vezetője: a falu intelligenciájának katolikus hölgytagja, akit a
              plébános úr erre a Szövetséggel egyetértve felkér. A vezető
              kívánságára más munkatársak is segíthetnek.
            </p>
            <p className={styles.torzs2}>
              Tagjai: a Lánykörnek az elemi iskola elvégzésétől vagy 12 éves
              kortól 14 éves korig jelöltje, azontúl felvett tagja lehet minden
              tisztességes, katolikus lány, aki az összejöveteleket pontosan
              látogatja viselkedése elfen kifogás nincs és felvételét a
              vezetőségtől kéri. Jelöltek felvétele az összejöveteleken, a tagok
              jelenlétében értelmesen elmondott kérésre történik, egy
              csoportvezető és két tag ajánlására.
            </p>
            <p className={`${styles.torzs} ${styles.torzsLeft35px}`}>
              Rendes tagok felvételüket a vezetőtőt kérik, ki ez ügyben
              meghallgatja a csoportvezetők véleményét. A tagfelvételt
              háromnapos lehetőleg féligzárt lelkigyakorlat előzi meg, melyet
              közös szentáldozással fejeznek be. Tagfelvétel egyszer egy évben,
              valamely Mária-ünnepen, ünnepélyes keretek között a templomban
              történjék. A tagok legalább karácsonykor, húsvétkor, a tagfelvétel
              napján és az egyházmegyei lánynapon közösen járulnak a
              szentségekhez.
            </p>
            <p className={`${styles.torzs} ${styles.torzsLeft35px}`}>
              A meg nem felelő jelöltet a csoportvezetők meghallgatásával, de
              saját felelősségére, a meg nem felelő tagot a Lánykör
              igazgatójával egyetértve kizárhatja. A kizárt tag köteles
              jelvényét a vezetőségnek visszaadni, ha előírásos mozgalmi
              egyenruhája volt, azt a Lánykör vezetőségének beszerzési áron
              eladni.
            </p>
            <p className={styles.torzs2}>
              Csoportvezetők: a tagok maguk közül csoportvezetőket választanak,
              utcák vagy számszerinti csoportosulás alapján. Egyik a vezető
              ellenőrzése mellett nyilvántartja a Lánykör bevételét és kiadását,
              évzárókor az anyagi ügyekről nyilvánosan beszámol.
            </p>
            <p className={`${styles.torzs} ${styles.torzsLeft35px}`}>
              A Lánykör anyagi ügyeit illetőleg a központi vezetőségnek tartozik
              felelősséggel, de annak megbízásából az egyházmegyei titkár a
              Lánykör pénzkezelését bármikor ellenőrizheti.
            </p>
            <p className={`${styles.torzs} ${styles.torzsLeft35px}`}>
              Másik csoportvezető a Lánykör könyveit tartja nyilván és felelős
              az olvasásra adott könyveknek épségben való megőrzéséért.
            </p>
            <p className={`${styles.torzs} ${styles.torzsLeft35px}`}>
              Harmadik csoportvezető a háziasszony szerepét tölti be,
              gondoskodik arról, hogy a Lánykör helyisége mindig rendes, télen
              fűtött legyen, hogy a tagok oda szívesen jöjjenek, és rendben
              hagyják el azt.
            </p>
            <p className={styles.torzs2}>
              Anyagi forrásai: tarthat fenn a Lánykar saját anyagi felelősségére
              ipartelepet, bármilyen termelő vagy értékesíti vállalatot, mely a
              mozgalom katolikus, nőies és szociális szellemével nincsen
              ellentétben, ha jövedelmét a Lánykör tagjainak általános és közös
              lelki szellemi és anyagi érdekeinek előmozdítására és a helyes,
              megfontolt jótékonykodásra fordítja.
            </p>
            <p className={styles.torzs}>
              Az igazgatónak és vezetőnek belátása szerint kívánatos az
              áldozatos szellem nevelésére bevezetni akármilyen csekély tagdíj
              fizetését.
            </p>
            <p className={styles.torzs2}>
              Rendezhet a Lánykör igazgatójának és vezetőjének felügyelete
              mellett, saját vagy bérelt helyiségben tánccal és műsorral
              egybekötött, éjfélig tartó, zártkörű összejövetelt, melynek
              programja és szelleme a mozgalom lelket építő, katolikus és magyar
              célkitűzéseivel nincs ellentétben.
            </p>
            <p className={`${styles.torzs} ${styles.torzsLeft35px}`}>
              Budapest, 1939. január hó.
            </p>
            <div className={styles.duplaAlairas}>
              <div>
                MEDVICZKY ILONA
                <br />
                központi titkár
              </div>
              <div>
                LUCZENBACHER RITA
                <br />
                központi vezető
              </div>
            </div>
            <p className={styles.torzs}>
              <center>P. H.</center>
            </p>
            <br />
            <br />
            <br />
          </div>
        </div>
      </div>
    </PageLayout>
  )
}

export default Vezerkonyv
