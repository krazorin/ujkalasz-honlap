import { FunctionComponent } from "react"
import PageLayout from "src/components/PageLayout/PageLayout"
import photoAlbums from "src/data/galeria"
import { PhotoAlbumEntry } from "src/types/types"

import styles from "./Galeria.module.scss"

const Galeria: FunctionComponent = () => {
  const renderPhotoAlbumCover = (photoAlbum: PhotoAlbumEntry) => {
    return (
      <div className={styles.albumCover} key={photoAlbum.id}>
        <a href={`/galeria/${photoAlbum.id}`}>
          <figure>
            <img src={photoAlbum.coverPhoto} alt={photoAlbum.coverPhoto} />
            <figcaption>{photoAlbum.title}</figcaption>
          </figure>
        </a>
      </div>
    )
  }

  return (
    <PageLayout>
      <div className={styles.container}>
        {photoAlbums.map((photoAlbum) => renderPhotoAlbumCover(photoAlbum))}
      </div>
    </PageLayout>
  )
}

export default Galeria
