import { FunctionComponent } from "react"
import PageLayout from "src/components/PageLayout/PageLayout"
import { Csoport as CsoportType } from "src/pages/Csoportjaink/csoportok"

import styles from "./Csoport.module.scss"

interface Props {
  csoport: CsoportType
}

const renderCsoportKepek = (csoport: CsoportType) => {
  if (!csoport.csoportKepek || csoport.csoportKepek.length < 1) {
    return <div />
  }

  return (
    <div className={styles.csoportKepKontener}>
      {csoport.csoportKepek.map((csoportKep) => (
        <div key={csoportKep}>
          <img
            src={`/assets/images/csoportok/${csoportKep}`}
            alt={csoportKep}
          />
          <br />
        </div>
      ))}
    </div>
  )
}

const Csoport: FunctionComponent<Props> = ({ csoport }) => {
  return (
    <PageLayout>
      <div className={styles.container}>
        <h1>{csoport.nev}</h1>
        {csoport.tartalom.map((fejezet, index) => {
          if (index === 0 && csoport.vezetoKep) {
            return (
              <div className={styles.szovegekKeppel} key={`fejezet-${index}`}>
                <img
                  src={`/assets/images/csoportok/${csoport.vezetoKep}`}
                  alt={csoport.vezetoKep}
                />
                <div>
                  <p className={styles.cim}>{fejezet.cim}</p>
                  <div className={styles.szovegek}>
                    {fejezet.szoveg.map((szoveg, index) => (
                      <p
                        key={`${fejezet.cim}-${index}`}
                        dangerouslySetInnerHTML={{ __html: szoveg }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            )
          } else {
            return (
              <div key={`fejezet-${index}`}>
                <p className={styles.cim}>{fejezet.cim}</p>
                <div className={styles.szovegek}>
                  {fejezet.szoveg.map((szoveg, index) => (
                    <p
                      key={`${fejezet.cim}-${index}`}
                      dangerouslySetInnerHTML={{ __html: szoveg }}
                    />
                  ))}
                </div>
              </div>
            )
          }
        })}
        {renderCsoportKepek(csoport)}
        <a href="/csoportjaink" className="button smallButton">
          Vissza
        </a>
      </div>
    </PageLayout>
  )
}

export default Csoport
