import { FunctionComponent } from "react"
import PageLayout from "src/components/PageLayout/PageLayout"
import PhotoAlbum from "src/components/PhotoAlbum/PhotoAlbum"
import { PhotoAlbumEntry } from "src/types/types"

import styles from "./GaleriaPhotoAlbum.module.scss"

interface Props {
  photoAlbum: PhotoAlbumEntry
}

const GaleriaPhotoAlbum: FunctionComponent<Props> = ({ photoAlbum }) => {
  return (
    <PageLayout>
      <div className={styles.container}>
        <div className={styles.backButtonContainer}>
          <a className={styles.backButton} href="/galeria">
            &lsaquo; &nbsp; Vissza a galériába
          </a>
        </div>
        <PhotoAlbum photos={photoAlbum.photos} />
      </div>
    </PageLayout>
  )
}

export default GaleriaPhotoAlbum
