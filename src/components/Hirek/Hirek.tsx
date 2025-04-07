import { FunctionComponent } from "react"
import { newsItems } from "src/data/hirek"
import { NewsItem } from "src/types/types"
import { v4 as uuidv4 } from "uuid"

import styles from "./Hirek.module.scss"

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
